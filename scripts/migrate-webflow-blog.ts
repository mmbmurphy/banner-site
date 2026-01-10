/**
 * Webflow Blog Migration Script
 *
 * This script scrapes blog posts from withbanner.com/info and imports them to Sanity CMS.
 * Posts are classified as either "blog" (rich content) or "info" (SEO/directory content)
 * based on URL patterns and content analysis.
 *
 * Usage:
 *   npx ts-node scripts/migrate-webflow-blog.ts
 *
 * Prerequisites:
 *   - SANITY_API_TOKEN environment variable (Editor or higher)
 *   - npm install cheerio node-fetch
 */

import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "uwixp3s9";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error("Missing SANITY_API_TOKEN environment variable");
  process.exit(1);
}

const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

const BASE_URL = "https://withbanner.com";
const INFO_PATH = "/info";

// URL patterns that indicate "info" posts (SEO/directory content)
const INFO_PATTERNS = [
  /contractors-in-/,
  /plumbers-in-/,
  /electricians-in-/,
  /hvac-in-/,
  /roofers-in-/,
  /-in-\w+-\w+$/, // General "X in City, State" pattern
  /top-\d+-/,      // "Top 10..." lists
  /best-\d+-/,     // "Best 15..." lists
];

// Title patterns for info posts
const INFO_TITLE_PATTERNS = [
  /^top \d+/i,
  /^best \d+/i,
  /contractors in/i,
  /plumbers in/i,
  /electricians in/i,
];

interface ScrapedPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  readTime: number;
  metaDescription?: string;
  mainImageUrl?: string;
  isInfoPost: boolean;
}

function isInfoPost(slug: string, title: string): boolean {
  // Check URL patterns
  for (const pattern of INFO_PATTERNS) {
    if (pattern.test(slug)) return true;
  }

  // Check title patterns
  for (const pattern of INFO_TITLE_PATTERNS) {
    if (pattern.test(title)) return true;
  }

  return false;
}

async function fetchWithRetry(url: string, retries = 3): Promise<string> {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.text();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(r => setTimeout(r, 1000 * (i + 1)));
    }
  }
  throw new Error("Failed to fetch after retries");
}

async function getAllPostSlugs(): Promise<string[]> {
  const slugs: string[] = [];
  let page = 1;
  let hasMore = true;

  console.log("Fetching all post slugs from listing pages...");

  while (hasMore) {
    try {
      const url = page === 1 ? `${BASE_URL}${INFO_PATH}` : `${BASE_URL}${INFO_PATH}?page=${page}`;
      const html = await fetchWithRetry(url);

      // Extract slugs from href="/info/slug-here"
      const matches = html.matchAll(/href="\/info\/([^"]+)"/g);
      const pageSlugs: string[] = [];

      for (const match of matches) {
        const slug = match[1];
        if (slug && !slugs.includes(slug) && !slug.includes("?")) {
          pageSlugs.push(slug);
          slugs.push(slug);
        }
      }

      console.log(`  Page ${page}: Found ${pageSlugs.length} posts`);

      // Check for next page
      hasMore = html.includes('rel="next"') || html.includes(">Next<");
      if (pageSlugs.length === 0) hasMore = false;

      page++;

      // Rate limiting
      await new Promise(r => setTimeout(r, 500));
    } catch (error) {
      console.error(`Error fetching page ${page}:`, error);
      hasMore = false;
    }
  }

  console.log(`Total slugs found: ${slugs.length}`);
  return slugs;
}

async function scrapePost(slug: string): Promise<ScrapedPost | null> {
  try {
    const url = `${BASE_URL}${INFO_PATH}/${slug}`;
    const html = await fetchWithRetry(url);

    // Basic extraction using regex (would use cheerio in production)
    const titleMatch = html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
    const title = titleMatch?.[1]?.trim() || slug.replace(/-/g, " ");

    // Extract meta description
    const metaMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"/i);
    const metaDescription = metaMatch?.[1];

    // Extract publish date
    const dateMatch = html.match(/(\d{4}-\d{2}-\d{2})/);
    const publishedAt = dateMatch?.[1] || new Date().toISOString().split("T")[0];

    // Extract main image
    const imgMatch = html.match(/<img[^>]*class="[^"]*blog[^"]*"[^>]*src="([^"]+)"/i);
    const mainImageUrl = imgMatch?.[1];

    // Extract content (simplified - would need proper HTML parsing)
    const contentMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i) ||
                        html.match(/<div[^>]*class="[^"]*rich-text[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
    const content = contentMatch?.[1] || "";

    // Estimate read time (roughly 200 words per minute)
    const wordCount = content.replace(/<[^>]+>/g, " ").split(/\s+/).length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));

    // Generate excerpt
    const excerpt = metaDescription ||
      content.replace(/<[^>]+>/g, " ").trim().substring(0, 150) + "...";

    return {
      slug,
      title,
      excerpt,
      content,
      publishedAt: new Date(publishedAt).toISOString(),
      readTime,
      metaDescription,
      mainImageUrl,
      isInfoPost: isInfoPost(slug, title),
    };
  } catch (error) {
    console.error(`Error scraping ${slug}:`, error);
    return null;
  }
}

async function createOrUpdateAuthor(): Promise<string> {
  const authorId = "banner-team";

  const existing = await sanityClient.fetch(`*[_type == "author" && _id == $id][0]`, { id: authorId });

  if (!existing) {
    await sanityClient.createOrReplace({
      _id: authorId,
      _type: "author",
      name: "Banner Team",
      slug: { current: "banner-team" },
      role: "Content Team",
    });
    console.log("Created author: Banner Team");
  }

  return authorId;
}

async function createInfoCategories(): Promise<Map<string, string>> {
  const categories = [
    { id: "contractor-directories", title: "Contractor Directories", color: "#6B7280", isInfoCategory: true },
    { id: "best-practices", title: "Best Practices", color: "#10B981", isInfoCategory: false },
    { id: "how-to-guides", title: "How-To Guides", color: "#3B82F6", isInfoCategory: false },
    { id: "industry-insights", title: "Industry Insights", color: "#8B5CF6", isInfoCategory: false },
    { id: "software-comparisons", title: "Software Comparisons", color: "#F59E0B", isInfoCategory: true },
  ];

  const categoryMap = new Map<string, string>();

  for (const cat of categories) {
    const existing = await sanityClient.fetch(`*[_type == "category" && _id == $id][0]`, { id: cat.id });

    if (!existing) {
      await sanityClient.createOrReplace({
        _id: cat.id,
        _type: "category",
        title: cat.title,
        slug: { current: cat.id },
        color: cat.color,
        isInfoCategory: cat.isInfoCategory,
      });
      console.log(`Created category: ${cat.title}`);
    }

    categoryMap.set(cat.id, cat.id);
  }

  return categoryMap;
}

function categorizePost(slug: string, title: string): string {
  if (/contractors-in-|plumbers-in-|electricians-in-/i.test(slug)) {
    return "contractor-directories";
  }
  if (/software|vs-|comparison|alternative/i.test(slug)) {
    return "software-comparisons";
  }
  if (/how-to|guide|create|conduct|calculate/i.test(slug)) {
    return "how-to-guides";
  }
  if (/best-practices|best-\d+|tips/i.test(slug)) {
    return "best-practices";
  }
  return "industry-insights";
}

async function createPost(post: ScrapedPost, authorId: string): Promise<void> {
  const categoryId = categorizePost(post.slug, post.title);

  // Check if post already exists
  const existing = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]._id`,
    { slug: post.slug }
  );

  if (existing) {
    console.log(`  Skipping ${post.slug} (already exists)`);
    return;
  }

  // Convert HTML content to Sanity block content (simplified)
  // In production, you'd want proper HTML-to-block conversion
  const body = [
    {
      _type: "block",
      _key: "intro",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "intro-span",
          text: post.excerpt,
        },
      ],
    },
  ];

  const doc = {
    _type: "post",
    title: post.title,
    slug: { current: post.slug },
    excerpt: post.excerpt.substring(0, 200),
    author: { _type: "reference", _ref: authorId },
    category: { _type: "reference", _ref: categoryId },
    publishedAt: post.publishedAt,
    readTime: post.readTime,
    featured: false,
    isInfoPost: post.isInfoPost,
    body,
    seoTitle: post.title,
    seoDescription: post.metaDescription || post.excerpt.substring(0, 160),
  };

  await sanityClient.create(doc);
  console.log(`  Created: ${post.title} (${post.isInfoPost ? "info" : "blog"})`);
}

async function main() {
  console.log("===========================================");
  console.log("Webflow Blog Migration to Sanity");
  console.log("===========================================\n");

  // Step 1: Create author
  console.log("Step 1: Setting up author...");
  const authorId = await createOrUpdateAuthor();

  // Step 2: Create categories
  console.log("\nStep 2: Setting up categories...");
  await createInfoCategories();

  // Step 3: Get all post slugs
  console.log("\nStep 3: Discovering posts...");
  const slugs = await getAllPostSlugs();

  // Step 4: Scrape and import posts
  console.log("\nStep 4: Scraping and importing posts...");
  let imported = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    console.log(`\n[${i + 1}/${slugs.length}] Processing: ${slug}`);

    const post = await scrapePost(slug);
    if (post) {
      try {
        await createPost(post, authorId);
        imported++;
      } catch (error) {
        console.error(`  Error creating post:`, error);
        failed++;
      }
    } else {
      skipped++;
    }

    // Rate limiting
    await new Promise(r => setTimeout(r, 300));
  }

  console.log("\n===========================================");
  console.log("Migration Complete!");
  console.log(`  Imported: ${imported}`);
  console.log(`  Skipped: ${skipped}`);
  console.log(`  Failed: ${failed}`);
  console.log("===========================================");
}

main().catch(console.error);

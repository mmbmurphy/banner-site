/**
 * Fix Blog Content Script
 *
 * Scrapes full article content from Webflow and updates Sanity posts
 * Converts HTML to Portable Text blocks preserving document order
 */

import { createClient } from "@sanity/client";

const projectId = "uwixp3s9";
const dataset = "production";
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error("Missing SANITY_API_TOKEN");
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

interface PortableTextBlock {
  _type: string;
  _key: string;
  style?: string;
  children?: Array<{
    _type: string;
    _key: string;
    text: string;
    marks?: string[];
  }>;
  markDefs?: Array<{
    _type: string;
    _key: string;
    href?: string;
  }>;
  listItem?: string;
  level?: number;
}

function generateKey(): string {
  return Math.random().toString(36).substring(2, 10);
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
  throw new Error("Failed after retries");
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function parseInlineContent(html: string): {
  children: Array<{ _type: string; _key: string; text: string; marks?: string[] }>;
  markDefs: Array<{ _type: string; _key: string; href?: string }>
} {
  const children: Array<{ _type: string; _key: string; text: string; marks?: string[] }> = [];
  const markDefs: Array<{ _type: string; _key: string; href?: string }> = [];

  // Handle links
  const linkRegex = /<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
  let linkMatch;
  let lastIndex = 0;
  const tempText = html;

  while ((linkMatch = linkRegex.exec(tempText)) !== null) {
    // Add text before link
    const beforeText = stripHtml(tempText.substring(lastIndex, linkMatch.index));
    if (beforeText) {
      children.push({
        _type: "span",
        _key: generateKey(),
        text: beforeText,
      });
    }

    // Add link
    const linkKey = generateKey();
    const linkText = stripHtml(linkMatch[2]);
    if (linkText) {
      markDefs.push({
        _type: "link",
        _key: linkKey,
        href: linkMatch[1],
      });
      children.push({
        _type: "span",
        _key: generateKey(),
        text: linkText,
        marks: [linkKey],
      });
    }

    lastIndex = linkMatch.index + linkMatch[0].length;
  }

  // Add remaining text
  const remainingText = stripHtml(tempText.substring(lastIndex));
  if (remainingText) {
    children.push({
      _type: "span",
      _key: generateKey(),
      text: remainingText,
    });
  }

  // If no links were found, just return the plain text
  if (children.length === 0) {
    const plainText = stripHtml(html);
    if (plainText) {
      children.push({
        _type: "span",
        _key: generateKey(),
        text: plainText,
      });
    }
  }

  return { children, markDefs };
}

interface HtmlElement {
  tag: string;
  content: string;
  index: number;
}

function htmlToPortableText(html: string): PortableTextBlock[] {
  const blocks: PortableTextBlock[] = [];

  // Remove script tags and other non-content elements
  let cleanHtml = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<noscript[^>]*>[\s\S]*?<\/noscript>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');

  // Find all block elements with their positions to maintain order
  const elements: HtmlElement[] = [];

  // Find headings
  const headingRegex = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
  let match;
  while ((match = headingRegex.exec(cleanHtml)) !== null) {
    elements.push({
      tag: match[1].toLowerCase(),
      content: match[2],
      index: match.index,
    });
  }

  // Find paragraphs
  const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  while ((match = pRegex.exec(cleanHtml)) !== null) {
    // Skip if it only contains an image
    if (/<img[^>]*>/i.test(match[1]) && stripHtml(match[1]).trim() === '') continue;
    elements.push({
      tag: 'p',
      content: match[1],
      index: match.index,
    });
  }

  // Find list items within unordered lists
  const ulRegex = /<ul[^>]*>([\s\S]*?)<\/ul>/gi;
  while ((match = ulRegex.exec(cleanHtml)) !== null) {
    const ulIndex = match.index;
    const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
    let liMatch;
    let liOffset = 0;
    while ((liMatch = liRegex.exec(match[1])) !== null) {
      elements.push({
        tag: 'ul-li',
        content: liMatch[1],
        index: ulIndex + liMatch.index + liOffset,
      });
      liOffset += 0.001; // Small offset to maintain order within list
    }
  }

  // Find list items within ordered lists
  const olRegex = /<ol[^>]*>([\s\S]*?)<\/ol>/gi;
  while ((match = olRegex.exec(cleanHtml)) !== null) {
    const olIndex = match.index;
    const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
    let liMatch;
    let liOffset = 0;
    while ((liMatch = liRegex.exec(match[1])) !== null) {
      elements.push({
        tag: 'ol-li',
        content: liMatch[1],
        index: olIndex + liMatch.index + liOffset,
      });
      liOffset += 0.001;
    }
  }

  // Find blockquotes
  const bqRegex = /<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi;
  while ((match = bqRegex.exec(cleanHtml)) !== null) {
    elements.push({
      tag: 'blockquote',
      content: match[1],
      index: match.index,
    });
  }

  // Sort elements by their position in the document
  elements.sort((a, b) => a.index - b.index);

  // Convert to Portable Text blocks
  for (const element of elements) {
    const text = stripHtml(element.content);
    if (!text.trim()) continue;

    switch (element.tag) {
      case 'h1':
        blocks.push({
          _type: "block",
          _key: generateKey(),
          style: "h1",
          children: [{ _type: "span", _key: generateKey(), text: text.trim() }],
        });
        break;
      case 'h2':
        blocks.push({
          _type: "block",
          _key: generateKey(),
          style: "h2",
          children: [{ _type: "span", _key: generateKey(), text: text.trim() }],
        });
        break;
      case 'h3':
        blocks.push({
          _type: "block",
          _key: generateKey(),
          style: "h3",
          children: [{ _type: "span", _key: generateKey(), text: text.trim() }],
        });
        break;
      case 'h4':
      case 'h5':
      case 'h6':
        blocks.push({
          _type: "block",
          _key: generateKey(),
          style: "h4",
          children: [{ _type: "span", _key: generateKey(), text: text.trim() }],
        });
        break;
      case 'p':
        const { children, markDefs } = parseInlineContent(element.content);
        if (children.length > 0 && children.some(c => c.text.trim())) {
          blocks.push({
            _type: "block",
            _key: generateKey(),
            style: "normal",
            children,
            markDefs,
          });
        }
        break;
      case 'ul-li':
        const ulContent = parseInlineContent(element.content);
        if (ulContent.children.length > 0) {
          blocks.push({
            _type: "block",
            _key: generateKey(),
            style: "normal",
            listItem: "bullet",
            level: 1,
            children: ulContent.children,
            markDefs: ulContent.markDefs,
          });
        }
        break;
      case 'ol-li':
        const olContent = parseInlineContent(element.content);
        if (olContent.children.length > 0) {
          blocks.push({
            _type: "block",
            _key: generateKey(),
            style: "normal",
            listItem: "number",
            level: 1,
            children: olContent.children,
            markDefs: olContent.markDefs,
          });
        }
        break;
      case 'blockquote':
        blocks.push({
          _type: "block",
          _key: generateKey(),
          style: "blockquote",
          children: [{ _type: "span", _key: generateKey(), text: text.trim() }],
        });
        break;
    }
  }

  return blocks.length > 0 ? blocks : [{
    _type: "block",
    _key: generateKey(),
    style: "normal",
    children: [{ _type: "span", _key: generateKey(), text: stripHtml(html).trim() || "Content not available" }],
  }];
}

async function getContentFromWebflow(slug: string): Promise<PortableTextBlock[] | null> {
  try {
    const url = `${BASE_URL}/info/${slug}`;
    const html = await fetchWithRetry(url);

    // Extract the rich-text content - try multiple patterns
    let richTextContent = null;

    // Pattern 1: div with rich-text class followed by closing divs
    const pattern1 = html.match(/<div[^>]*class="[^"]*rich-text[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/i);
    if (pattern1) {
      richTextContent = pattern1[1];
    }

    // Pattern 2: simpler rich-text div
    if (!richTextContent) {
      const pattern2 = html.match(/class="rich-text[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
      if (pattern2) {
        richTextContent = pattern2[1];
      }
    }

    // Pattern 3: w-richtext class (Webflow specific)
    if (!richTextContent) {
      const pattern3 = html.match(/<div[^>]*class="[^"]*w-richtext[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
      if (pattern3) {
        richTextContent = pattern3[1];
      }
    }

    if (!richTextContent) {
      return null;
    }

    return htmlToPortableText(richTextContent);
  } catch (error) {
    console.error(`Error fetching content for ${slug}:`, error);
    return null;
  }
}

async function main() {
  console.log("===========================================");
  console.log("Fixing Blog Content (Order-Preserving)");
  console.log("===========================================\n");

  // Get all posts - force update all to fix ordering
  const posts = await sanityClient.fetch(`*[_type == "post"]{_id, title, "slug": slug.current, body}`);

  console.log(`Found ${posts.length} posts to process\n`);

  let fixed = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    console.log(`[${i + 1}/${posts.length}] ${post.title}`);

    // Get full content from Webflow
    const content = await getContentFromWebflow(post.slug);

    if (!content || content.length === 0) {
      console.log(`  No content found`);
      failed++;
      continue;
    }

    // Update post with full content
    try {
      await sanityClient.patch(post._id).set({ body: content }).commit();
      console.log(`  ✓ Updated with ${content.length} blocks`);
      fixed++;
    } catch (error) {
      console.log(`  Error updating:`, error);
      failed++;
    }

    // Rate limit
    await new Promise(r => setTimeout(r, 300));
  }

  console.log("\n===========================================");
  console.log("Complete!");
  console.log(`  Fixed: ${fixed}`);
  console.log(`  Skipped: ${skipped}`);
  console.log(`  Failed: ${failed}`);
  console.log("===========================================");
}

main().catch(console.error);

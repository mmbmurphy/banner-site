/**
 * Fix Blog Excerpts Script
 *
 * Extracts proper excerpts from post body content
 * Fixes malformed excerpts with HTML entities and truncation
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

function cleanText(text: string): string {
  return text
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractExcerpt(body: any[], title: string): string {
  if (!body || body.length === 0) return "";

  // Find the first paragraph (normal style) that isn't too short
  for (const block of body) {
    if (block._type === "block" && block.style === "normal" && block.children) {
      const text = block.children
        .map((child: any) => child.text || "")
        .join("")
        .trim();

      // Skip if it's too short or looks like a label
      if (text.length < 50) continue;

      // Skip if it starts with common label patterns
      if (/^(Note:|Warning:|Tip:|Example:)/i.test(text)) continue;

      // Clean and truncate to ~160 characters for SEO
      const cleaned = cleanText(text);
      if (cleaned.length <= 160) {
        return cleaned;
      }

      // Truncate at word boundary
      const truncated = cleaned.substring(0, 157);
      const lastSpace = truncated.lastIndexOf(" ");
      return truncated.substring(0, lastSpace) + "...";
    }
  }

  return "";
}

async function main() {
  console.log("===========================================");
  console.log("Fixing Blog Excerpts");
  console.log("===========================================\n");

  // Get all posts with their body content
  const posts = await sanityClient.fetch(`*[_type == "post"]{
    _id,
    title,
    excerpt,
    body
  }`);

  console.log(`Found ${posts.length} posts to check\n`);

  let fixed = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    console.log(`[${i + 1}/${posts.length}] ${post.title}`);

    // Check if excerpt needs fixing
    const currentExcerpt = post.excerpt || "";
    const needsFix =
      currentExcerpt.includes("&#") ||
      currentExcerpt.includes("\\n") ||
      currentExcerpt.includes("\n") ||
      currentExcerpt.startsWith(post.title) ||
      currentExcerpt.endsWith("...") && currentExcerpt.length < 100;

    if (!needsFix) {
      console.log("  Skipping (excerpt looks OK)");
      skipped++;
      continue;
    }

    // Extract new excerpt from body
    const newExcerpt = extractExcerpt(post.body, post.title);

    if (!newExcerpt) {
      console.log("  No suitable excerpt found in body");
      failed++;
      continue;
    }

    // Update the post
    try {
      await sanityClient.patch(post._id).set({ excerpt: newExcerpt }).commit();
      console.log(`  ✓ Updated: "${newExcerpt.substring(0, 60)}..."`);
      fixed++;
    } catch (error) {
      console.log(`  Error updating:`, error);
      failed++;
    }

    // Rate limit
    await new Promise(r => setTimeout(r, 100));
  }

  console.log("\n===========================================");
  console.log("Complete!");
  console.log(`  Fixed: ${fixed}`);
  console.log(`  Skipped: ${skipped}`);
  console.log(`  Failed: ${failed}`);
  console.log("===========================================");
}

main().catch(console.error);

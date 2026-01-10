/**
 * Fix Blog Images Script
 *
 * Scrapes images from Webflow blog posts and uploads them to Sanity
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

async function getImageFromWebflow(slug: string): Promise<string | null> {
  try {
    const html = await fetchWithRetry(`${BASE_URL}/info/${slug}`);

    // Look for Open Graph image first (usually the main image)
    const ogMatch = html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]+)"/i);
    if (ogMatch?.[1]) {
      return ogMatch[1];
    }

    // Try to find main blog image
    const imgPatterns = [
      /<img[^>]*class="[^"]*blog-image[^"]*"[^>]*src="([^"]+)"/i,
      /<img[^>]*class="[^"]*featured[^"]*"[^>]*src="([^"]+)"/i,
      /<img[^>]*class="[^"]*hero[^"]*"[^>]*src="([^"]+)"/i,
      /<div[^>]*class="[^"]*blog[^"]*"[^>]*>[\s\S]*?<img[^>]*src="([^"]+)"/i,
    ];

    for (const pattern of imgPatterns) {
      const match = html.match(pattern);
      if (match?.[1] && !match[1].includes('logo') && !match[1].includes('icon')) {
        return match[1];
      }
    }

    return null;
  } catch (error) {
    console.error(`Error fetching ${slug}:`, error);
    return null;
  }
}

async function uploadImageToSanity(imageUrl: string, filename: string): Promise<string | null> {
  try {
    // Fetch the image
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`Failed to fetch image: ${response.status}`);

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Sanity
    const asset = await sanityClient.assets.upload('image', buffer, {
      filename: filename,
      contentType: 'image/jpeg',
    });

    return asset._id;
  } catch (error) {
    console.error(`Error uploading image:`, error);
    return null;
  }
}

async function main() {
  console.log("===========================================");
  console.log("Fixing Blog Images");
  console.log("===========================================\n");

  // Get all posts without images
  const posts = await sanityClient.fetch(`*[_type == "post" && !defined(mainImage)]{_id, title, "slug": slug.current}`);

  console.log(`Found ${posts.length} posts without images\n`);

  let fixed = 0;
  let failed = 0;

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    console.log(`[${i + 1}/${posts.length}] ${post.title}`);

    // Get image URL from Webflow
    const imageUrl = await getImageFromWebflow(post.slug);

    if (!imageUrl) {
      console.log(`  No image found, using placeholder`);
      failed++;
      continue;
    }

    console.log(`  Found image: ${imageUrl.substring(0, 60)}...`);

    // Upload to Sanity
    const assetId = await uploadImageToSanity(imageUrl, `${post.slug}.jpg`);

    if (!assetId) {
      console.log(`  Failed to upload`);
      failed++;
      continue;
    }

    // Update post with image reference
    await sanityClient.patch(post._id).set({
      mainImage: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: assetId,
        },
        alt: post.title,
      }
    }).commit();

    console.log(`  ✓ Updated`);
    fixed++;

    // Rate limit
    await new Promise(r => setTimeout(r, 500));
  }

  console.log("\n===========================================");
  console.log("Complete!");
  console.log(`  Fixed: ${fixed}`);
  console.log(`  Failed: ${failed}`);
  console.log("===========================================");
}

main().catch(console.error);

import { createClient } from "@sanity/client";

const BASE_URL = "https://withbanner.com";

function generateKey(): string {
  return Math.random().toString(36).substring(2, 10);
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

interface HtmlElement {
  tag: string;
  content: string;
  index: number;
}

function htmlToPortableText(html: string) {
  const blocks: any[] = [];

  let cleanHtml = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<noscript[^>]*>[\s\S]*?<\/noscript>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');

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
      liOffset += 0.001;
    }
  }

  // Sort elements by their position in the document
  elements.sort((a, b) => a.index - b.index);

  // Convert to blocks
  for (const element of elements) {
    const text = stripHtml(element.content);
    if (!text.trim()) continue;

    blocks.push({
      style: element.tag === 'p' ? 'normal' : element.tag === 'ul-li' ? 'bullet' : element.tag,
      text: text.trim().substring(0, 80) + (text.length > 80 ? '...' : ''),
    });
  }

  return blocks;
}

async function test() {
  const slug = "capex-software-vs-spreadsheets";
  const url = `${BASE_URL}/info/${slug}`;
  
  console.log(`Fetching: ${url}\n`);
  
  const response = await fetch(url);
  const html = await response.text();

  // Try to find rich-text content
  let richTextContent = null;
  
  const pattern1 = html.match(/<div[^>]*class="[^"]*rich-text[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/i);
  if (pattern1) {
    richTextContent = pattern1[1];
    console.log("Found content using pattern 1\n");
  }

  if (!richTextContent) {
    const pattern2 = html.match(/class="rich-text[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
    if (pattern2) {
      richTextContent = pattern2[1];
      console.log("Found content using pattern 2\n");
    }
  }

  if (!richTextContent) {
    const pattern3 = html.match(/<div[^>]*class="[^"]*w-richtext[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
    if (pattern3) {
      richTextContent = pattern3[1];
      console.log("Found content using pattern 3\n");
    }
  }

  if (!richTextContent) {
    console.log("No rich-text content found!");
    return;
  }

  const blocks = htmlToPortableText(richTextContent);
  
  console.log(`Found ${blocks.length} blocks:\n`);
  console.log("First 20 blocks in document order:");
  console.log("=".repeat(60));
  
  blocks.slice(0, 20).forEach((block, i) => {
    console.log(`${i + 1}. [${block.style}] ${block.text}`);
  });
}

test().catch(console.error);

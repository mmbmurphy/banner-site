import { createClient } from "@sanity/client";

const projectId = "uwixp3s9";
const dataset = "production";
const token = process.env.SANITY_API_TOKEN;

const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

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

function parseInlineContent(html: string) {
  const children: any[] = [];
  const markDefs: any[] = [];

  const linkRegex = /<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
  let linkMatch;
  let lastIndex = 0;

  while ((linkMatch = linkRegex.exec(html)) !== null) {
    const beforeText = stripHtml(html.substring(lastIndex, linkMatch.index));
    if (beforeText) {
      children.push({ _type: "span", _key: generateKey(), text: beforeText });
    }

    const linkKey = generateKey();
    const linkText = stripHtml(linkMatch[2]);
    if (linkText) {
      markDefs.push({ _type: "link", _key: linkKey, href: linkMatch[1] });
      children.push({ _type: "span", _key: generateKey(), text: linkText, marks: [linkKey] });
    }

    lastIndex = linkMatch.index + linkMatch[0].length;
  }

  const remainingText = stripHtml(html.substring(lastIndex));
  if (remainingText) {
    children.push({ _type: "span", _key: generateKey(), text: remainingText });
  }

  if (children.length === 0) {
    const plainText = stripHtml(html);
    if (plainText) {
      children.push({ _type: "span", _key: generateKey(), text: plainText });
    }
  }

  return { children, markDefs };
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

  const headingRegex = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
  let match;
  while ((match = headingRegex.exec(cleanHtml)) !== null) {
    elements.push({ tag: match[1].toLowerCase(), content: match[2], index: match.index });
  }

  const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  while ((match = pRegex.exec(cleanHtml)) !== null) {
    if (/<img[^>]*>/i.test(match[1]) && stripHtml(match[1]).trim() === '') continue;
    elements.push({ tag: 'p', content: match[1], index: match.index });
  }

  const ulRegex = /<ul[^>]*>([\s\S]*?)<\/ul>/gi;
  while ((match = ulRegex.exec(cleanHtml)) !== null) {
    const ulIndex = match.index;
    const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
    let liMatch;
    let liOffset = 0;
    while ((liMatch = liRegex.exec(match[1])) !== null) {
      elements.push({ tag: 'ul-li', content: liMatch[1], index: ulIndex + liMatch.index + liOffset });
      liOffset += 0.001;
    }
  }

  const olRegex = /<ol[^>]*>([\s\S]*?)<\/ol>/gi;
  while ((match = olRegex.exec(cleanHtml)) !== null) {
    const olIndex = match.index;
    const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
    let liMatch;
    let liOffset = 0;
    while ((liMatch = liRegex.exec(match[1])) !== null) {
      elements.push({ tag: 'ol-li', content: liMatch[1], index: olIndex + liMatch.index + liOffset });
      liOffset += 0.001;
    }
  }

  const bqRegex = /<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi;
  while ((match = bqRegex.exec(cleanHtml)) !== null) {
    elements.push({ tag: 'blockquote', content: match[1], index: match.index });
  }

  elements.sort((a, b) => a.index - b.index);

  for (const element of elements) {
    const text = stripHtml(element.content);
    if (!text.trim()) continue;

    switch (element.tag) {
      case 'h1':
      case 'h2':
      case 'h3':
        blocks.push({
          _type: "block",
          _key: generateKey(),
          style: element.tag,
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
        if (children.length > 0 && children.some((c: any) => c.text.trim())) {
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

async function getContentFromWebflow(slug: string) {
  try {
    const url = `${BASE_URL}/info/${slug}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const html = await response.text();

    let richTextContent = null;

    const pattern1 = html.match(/<div[^>]*class="[^"]*rich-text[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/i);
    if (pattern1) richTextContent = pattern1[1];

    if (!richTextContent) {
      const pattern2 = html.match(/class="rich-text[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
      if (pattern2) richTextContent = pattern2[1];
    }

    if (!richTextContent) {
      const pattern3 = html.match(/<div[^>]*class="[^"]*w-richtext[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
      if (pattern3) richTextContent = pattern3[1];
    }

    if (!richTextContent) return null;

    return htmlToPortableText(richTextContent);
  } catch (error) {
    console.error(`Error fetching content for ${slug}:`, error);
    return null;
  }
}

async function main() {
  const testSlugs = ["renovation-success-metrics", "prioritize-capital-projects"];

  for (const slug of testSlugs) {
    console.log(`\nProcessing: ${slug}`);
    
    const post = await sanityClient.fetch(`*[_type == "post" && slug.current == "${slug}"][0]{_id, title}`);
    if (!post) {
      console.log("  Post not found");
      continue;
    }
    
    console.log(`  Title: ${post.title}`);

    const content = await getContentFromWebflow(slug);

    if (!content || content.length === 0) {
      console.log("  No content found");
      continue;
    }

    console.log(`  Found ${content.length} blocks`);
    content.slice(0, 5).forEach((block: any, i: number) => {
      const text = block.children?.[0]?.text || '';
      console.log(`    ${i + 1}. [${block.style}${block.listItem ? '/' + block.listItem : ''}] ${text.substring(0, 50)}...`);
    });

    try {
      await sanityClient.patch(post._id).set({ body: content }).commit();
      console.log("  ✓ Updated");
    } catch (error) {
      console.log("  ✗ Error:", error);
    }
  }

  console.log("\nTest complete!");
}

main().catch(console.error);

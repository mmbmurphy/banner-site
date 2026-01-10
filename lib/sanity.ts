import { createClient, type SanityClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { PortableTextBlock } from "@portabletext/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

// Only create client if projectId is configured
const isSanityConfigured = !!projectId;

export const client: SanityClient | null = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === "production",
    })
  : null;

const builder = client ? imageUrlBuilder(client) : null;

// Placeholder builder for when Sanity is not configured
const placeholderBuilder = {
  width: () => placeholderBuilder,
  height: () => placeholderBuilder,
  url: () => "/images/blog-placeholder.jpg",
  format: () => placeholderBuilder,
  fit: () => placeholderBuilder,
  crop: () => placeholderBuilder,
  auto: () => placeholderBuilder,
};

export function urlFor(source: SanityImageSource) {
  if (!builder || !source) {
    return placeholderBuilder;
  }
  return builder.image(source);
}

// Blog post types
export interface Author {
  _id: string;
  name: string;
  slug: { current: string };
  role?: string;
  image?: SanityImageSource;
  bio?: string;
  linkedin?: string;
  twitter?: string;
}

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  color?: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  author?: Author;
  mainImage?: SanityImageSource & { alt?: string };
  category?: Category;
  publishedAt: string;
  readTime?: number;
  featured?: boolean;
  body?: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
}

// GROQ Queries
export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  readTime,
  featured,
  "author": author->{
    _id,
    name,
    slug,
    role,
    image
  },
  "category": category->{
    _id,
    title,
    slug,
    color
  }
}`;

export const featuredPostsQuery = `*[_type == "post" && featured == true] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  readTime,
  "author": author->{
    _id,
    name,
    slug,
    role,
    image
  },
  "category": category->{
    _id,
    title,
    slug,
    color
  }
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  readTime,
  featured,
  body,
  seoTitle,
  seoDescription,
  "author": author->{
    _id,
    name,
    slug,
    role,
    image,
    bio,
    linkedin,
    twitter
  },
  "category": category->{
    _id,
    title,
    slug,
    color
  }
}`;

export const postSlugsQuery = `*[_type == "post" && defined(slug.current)][].slug.current`;

export const categoriesQuery = `*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug,
  description,
  color
}`;

export const postsByCategoryQuery = `*[_type == "post" && category->slug.current == $category] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  readTime,
  "author": author->{
    _id,
    name,
    slug,
    role,
    image
  },
  "category": category->{
    _id,
    title,
    slug,
    color
  }
}`;

export const relatedPostsQuery = `*[_type == "post" && slug.current != $slug && category->slug.current == $category] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  readTime,
  "category": category->{
    _id,
    title,
    slug,
    color
  }
}`;

// Fetch functions - return empty arrays when Sanity is not configured
export async function getPosts(): Promise<Post[]> {
  if (!client) return [];
  return client.fetch(postsQuery);
}

export async function getFeaturedPosts(): Promise<Post[]> {
  if (!client) return [];
  return client.fetch(featuredPostsQuery);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!client) return null;
  return client.fetch(postBySlugQuery, { slug });
}

export async function getPostSlugs(): Promise<string[]> {
  if (!client) return [];
  return client.fetch(postSlugsQuery);
}

export async function getCategories(): Promise<Category[]> {
  if (!client) return [];
  return client.fetch(categoriesQuery);
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  if (!client) return [];
  return client.fetch(postsByCategoryQuery, { category });
}

export async function getRelatedPosts(slug: string, category: string): Promise<Post[]> {
  if (!client) return [];
  return client.fetch(relatedPostsQuery, { slug, category });
}

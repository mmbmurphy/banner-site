import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { PortableTextBlock } from "@portabletext/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "uwixp3s9";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
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
export const postsQuery = `*[_type == "post" && isInfoPost != true] | order(publishedAt desc) {
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

export const featuredPostsQuery = `*[_type == "post" && featured == true && isInfoPost != true] | order(publishedAt desc)[0...3] {
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

export const postBySlugQuery = `*[_type == "post" && isInfoPost != true && slug.current == $slug][0] {
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

export const postSlugsQuery = `*[_type == "post" && isInfoPost != true && defined(slug.current)][].slug.current`;

export const categoriesQuery = `*[_type == "category" && isInfoCategory != true] | order(title asc) {
  _id,
  title,
  slug,
  description,
  color
}`;

export const postsByCategoryQuery = `*[_type == "post" && isInfoPost != true && category->slug.current == $category] | order(publishedAt desc) {
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

export const relatedPostsQuery = `*[_type == "post" && isInfoPost != true && slug.current != $slug && category->slug.current == $category] | order(publishedAt desc)[0...3] {
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

// Fetch functions
export async function getPosts(): Promise<Post[]> {
  return client.fetch(postsQuery);
}

export async function getFeaturedPosts(): Promise<Post[]> {
  return client.fetch(featuredPostsQuery);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return client.fetch(postBySlugQuery, { slug });
}

export async function getPostSlugs(): Promise<string[]> {
  return client.fetch(postSlugsQuery);
}

export async function getCategories(): Promise<Category[]> {
  return client.fetch(categoriesQuery);
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  return client.fetch(postsByCategoryQuery, { category });
}

export async function getRelatedPosts(slug: string, category: string): Promise<Post[]> {
  return client.fetch(relatedPostsQuery, { slug, category });
}

// Info Posts (SEO/directory content - separate from main blog)
// Uses isInfoPost field to differentiate

export const infoPostsQuery = `*[_type == "post" && isInfoPost == true] | order(publishedAt desc) {
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

export const infoPostBySlugQuery = `*[_type == "post" && isInfoPost == true && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  readTime,
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

export const infoPostSlugsQuery = `*[_type == "post" && isInfoPost == true && defined(slug.current)][].slug.current`;

export const infoCategoriesQuery = `*[_type == "category" && isInfoCategory == true] | order(title asc) {
  _id,
  title,
  slug,
  description,
  color
}`;

export const relatedInfoPostsQuery = `*[_type == "post" && isInfoPost == true && slug.current != $slug && category->slug.current == $category] | order(publishedAt desc)[0...3] {
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

export async function getInfoPosts(): Promise<Post[]> {
  return client.fetch(infoPostsQuery);
}

export async function getInfoPostBySlug(slug: string): Promise<Post | null> {
  return client.fetch(infoPostBySlugQuery, { slug });
}

export async function getInfoPostSlugs(): Promise<string[]> {
  return client.fetch(infoPostSlugsQuery);
}

export async function getInfoCategories(): Promise<Category[]> {
  return client.fetch(infoCategoriesQuery);
}

export async function getRelatedInfoPosts(slug: string, category: string): Promise<Post[]> {
  return client.fetch(relatedInfoPostsQuery, { slug, category });
}

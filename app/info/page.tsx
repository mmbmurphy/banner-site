import { Metadata } from "next";
import Link from "next/link";
import { getInfoPosts, getInfoCategories, urlFor, Post, Category } from "@/lib/sanity";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Resources & Guides | Banner",
  description:
    "Contractor directories, comparison guides, and resources for real estate capital expenditure management.",
};

export const revalidate = 3600;

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PostCard({ post }: { post: Post }) {
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(600).height(400).url()
    : "/images/blog-placeholder.jpg";

  return (
    <Link href={`/info/${post.slug.current}`} className="blog-card">
      <div className="blog-card-image-wrapper">
        <img
          src={imageUrl}
          alt={post.mainImage?.alt || post.title}
          className="blog-card-image"
          loading="lazy"
        />
        {post.category && (
          <span
            className="blog-card-category"
            style={{ backgroundColor: post.category.color || "#6B7280" }}
          >
            {post.category.title}
          </span>
        )}
      </div>
      <div className="blog-card-content">
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <div className="blog-card-meta">
          <div className="blog-card-details">
            <span className="blog-card-date">{formatDate(post.publishedAt)}</span>
            {post.readTime && <span className="blog-card-read-time">{post.readTime} min read</span>}
          </div>
        </div>
      </div>
    </Link>
  );
}

function CategoryFilter({ categories, activeCategory }: { categories: Category[]; activeCategory?: string }) {
  return (
    <div className="blog-categories">
      <Link
        href="/info"
        className={`blog-category-pill ${!activeCategory ? "active" : ""}`}
      >
        All Resources
      </Link>
      {categories.map((category) => (
        <Link
          key={category._id}
          href={`/info?category=${category.slug.current}`}
          className={`blog-category-pill ${activeCategory === category.slug.current ? "active" : ""}`}
          style={
            activeCategory === category.slug.current
              ? { backgroundColor: category.color || "#6B7280" }
              : undefined
          }
        >
          {category.title}
        </Link>
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="blog-empty-state">
      <div className="blog-empty-icon">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h3 className="blog-empty-title">No resources yet</h3>
      <p className="blog-empty-text">
        Check back soon for contractor directories, comparison guides, and more resources.
      </p>
    </div>
  );
}

export default async function InfoPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  let posts: Post[] = [];
  let categories: Category[] = [];

  try {
    [posts, categories] = await Promise.all([getInfoPosts(), getInfoCategories()]);
  } catch (error) {
    console.error("Error fetching info data:", error);
  }

  const filteredPosts = params.category
    ? posts.filter((post) => post.category?.slug.current === params.category)
    : posts;

  return (
    <main className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="blog-hero-content">
                <span className="blog-hero-eyebrow">Resources</span>
                <h1 className="blog-hero-title">Guides & Directories</h1>
                <p className="blog-hero-description">
                  Contractor directories, comparison guides, and practical resources for real estate professionals.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      {categories.length > 0 && (
        <section className="blog-filter-section">
          <div className="padding-global">
            <div className="container-large">
              <CategoryFilter categories={categories} activeCategory={params.category} />
            </div>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="blog-posts-section">
        <div className="padding-global">
          <div className="container-large">
            {filteredPosts.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="blog-grid">
                {filteredPosts.map((post, index) => (
                  <ScrollReveal key={post._id} delay={index * 0.1}>
                    <PostCard post={post} />
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

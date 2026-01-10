import { Metadata } from "next";
import Link from "next/link";
import { getPosts, getCategories, urlFor, Post, Category } from "@/lib/sanity";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog | Banner",
  description:
    "Expert insights on capital expenditure management, real estate technology, and construction project optimization.",
};

// Revalidate every hour
export const revalidate = 3600;

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(featured ? 1200 : 600).height(featured ? 675 : 400).url()
    : "/images/blog-placeholder.jpg";

  return (
    <Link href={`/blog/${post.slug.current}`} className={`blog-card ${featured ? "blog-card-featured" : ""}`}>
      <div className="blog-card-image-wrapper">
        <img
          src={imageUrl}
          alt={post.mainImage?.alt || post.title}
          className="blog-card-image"
          loading={featured ? "eager" : "lazy"}
        />
        {post.category && (
          <span
            className="blog-card-category"
            style={{ backgroundColor: post.category.color || "#FF6B35" }}
          >
            {post.category.title}
          </span>
        )}
      </div>
      <div className="blog-card-content">
        <h3 className={featured ? "blog-card-title-large" : "blog-card-title"}>{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <div className="blog-card-meta">
          {post.author && (
            <div className="blog-card-author">
              {post.author.image && (
                <img
                  src={urlFor(post.author.image).width(40).height(40).url()}
                  alt={post.author.name}
                  className="blog-card-author-image"
                />
              )}
              <span className="blog-card-author-name">{post.author.name}</span>
            </div>
          )}
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
        href="/blog"
        className={`blog-category-pill ${!activeCategory ? "active" : ""}`}
      >
        All Posts
      </Link>
      {categories.map((category) => (
        <Link
          key={category._id}
          href={`/blog?category=${category.slug.current}`}
          className={`blog-category-pill ${activeCategory === category.slug.current ? "active" : ""}`}
          style={
            activeCategory === category.slug.current
              ? { backgroundColor: category.color || "#FF6B35" }
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
      <h3 className="blog-empty-title">No posts yet</h3>
      <p className="blog-empty-text">
        We&apos;re working on some great content. Check back soon or subscribe to get notified when we publish.
      </p>
      <Link href="/contact" className="button-light w-button">
        Get Notified
      </Link>
    </div>
  );
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  let posts: Post[] = [];
  let categories: Category[] = [];

  try {
    [posts, categories] = await Promise.all([getPosts(), getCategories()]);
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }

  // Filter by category if specified
  const filteredPosts = params.category
    ? posts.filter((post) => post.category?.slug.current === params.category)
    : posts;

  // Separate featured posts
  const featuredPosts = filteredPosts.filter((post) => post.featured).slice(0, 1);
  const regularPosts = filteredPosts.filter((post) => !featuredPosts.includes(post));

  return (
      <main className="blog-page">
        {/* Hero Section */}
        <section className="blog-hero">
          <div className="padding-global">
            <div className="container-large">
              <ScrollReveal>
                <div className="blog-hero-content">
                  <span className="blog-hero-eyebrow">Blog</span>
                  <h1 className="blog-hero-title">Insights & Resources</h1>
                  <p className="blog-hero-description">
                    Expert perspectives on CapEx management, real estate technology, and the future of construction project optimization.
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
                <>
                  {/* Featured Post */}
                  {featuredPosts.length > 0 && (
                    <ScrollReveal>
                      <div className="blog-featured-section">
                        <PostCard post={featuredPosts[0]} featured />
                      </div>
                    </ScrollReveal>
                  )}

                  {/* Regular Posts Grid */}
                  {regularPosts.length > 0 && (
                    <div className="blog-grid">
                      {regularPosts.map((post, index) => (
                        <ScrollReveal key={post._id} delay={index * 0.1}>
                          <PostCard post={post} />
                        </ScrollReveal>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="blog-newsletter">
          <div className="padding-global">
            <div className="container-large">
              <ScrollReveal>
                <div className="blog-newsletter-card">
                  <div className="blog-newsletter-content">
                    <h2 className="blog-newsletter-title">Stay in the loop</h2>
                    <p className="blog-newsletter-text">
                      Get the latest insights on CapEx management delivered to your inbox.
                    </p>
                  </div>
                  <Link href="/contact" className="button-light w-button">
                    Subscribe
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
  );
}

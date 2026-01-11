import { Metadata } from "next";
import Link from "next/link";
import { getPaginatedPosts, getCategories, urlFor, Post, Category, POSTS_PER_PAGE } from "@/lib/sanity";
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

function Pagination({
  currentPage,
  totalPages,
  category,
}: {
  currentPage: number;
  totalPages: number;
  category?: string;
}) {
  if (totalPages <= 1) return null;

  const getPageUrl = (page: number) => {
    const params = new URLSearchParams();
    if (page > 1) params.set("page", page.toString());
    if (category) params.set("category", category);
    const queryString = params.toString();
    return `/blog${queryString ? `?${queryString}` : ""}`;
  };

  // Generate page numbers to show
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const showPages = 5; // Max pages to show

    if (totalPages <= showPages + 2) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      // Show pages around current
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <nav className="blog-pagination" aria-label="Blog pagination">
      {/* Previous button */}
      {currentPage > 1 ? (
        <Link href={getPageUrl(currentPage - 1)} className="blog-pagination-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>
      ) : (
        <span className="blog-pagination-arrow disabled">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </span>
      )}

      {/* Page numbers */}
      <div className="blog-pagination-pages">
        {getPageNumbers().map((page, index) =>
          typeof page === "string" ? (
            <span key={`ellipsis-${index}`} className="blog-pagination-ellipsis">
              {page}
            </span>
          ) : (
            <Link
              key={page}
              href={getPageUrl(page)}
              className={`blog-pagination-page ${currentPage === page ? "active" : ""}`}
            >
              {page}
            </Link>
          )
        )}
      </div>

      {/* Next button */}
      {currentPage < totalPages ? (
        <Link href={getPageUrl(currentPage + 1)} className="blog-pagination-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Link>
      ) : (
        <span className="blog-pagination-arrow disabled">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </span>
      )}
    </nav>
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
      <h3 className="blog-empty-title">No Posts Yet</h3>
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
  searchParams: Promise<{ category?: string; page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params.page || "1", 10));

  let posts: Post[] = [];
  let totalPosts = 0;
  let categories: Category[] = [];

  try {
    const [paginatedResult, fetchedCategories] = await Promise.all([
      getPaginatedPosts(currentPage, params.category),
      getCategories(),
    ]);
    posts = paginatedResult.posts;
    totalPosts = paginatedResult.total;
    categories = fetchedCategories;
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  // Separate featured post (only on first page without category filter)
  const showFeatured = currentPage === 1 && !params.category;
  const featuredPosts = showFeatured ? posts.filter((post) => post.featured).slice(0, 1) : [];
  const regularPosts = showFeatured ? posts.filter((post) => !featuredPosts.includes(post)) : posts;

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
              {posts.length === 0 ? (
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
                        <ScrollReveal key={post._id} delay={Math.min(index * 0.05, 0.3)}>
                          <PostCard post={post} />
                        </ScrollReveal>
                      ))}
                    </div>
                  )}

                  {/* Pagination */}
                  <ScrollReveal>
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      category={params.category}
                    />
                  </ScrollReveal>

                  {/* Post count */}
                  <div className="blog-post-count">
                    Showing {(currentPage - 1) * POSTS_PER_PAGE + 1}-{Math.min(currentPage * POSTS_PER_PAGE, totalPosts)} of {totalPosts} posts
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

      </main>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { getPaginatedPosts, getCategories, urlFor, Post, Category, POSTS_PER_PAGE } from "@/lib/sanity";
import ScrollReveal from "@/components/ScrollReveal";
import LibrarySearch from "@/components/LibrarySearch";

export const metadata: Metadata = {
  title: "Resource Library | Banner",
  description:
    "Expert insights on capital expenditure management, real estate technology, and construction project optimization.",
};

// Revalidate every hour
export const revalidate = 3600;

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function getReadTime(post: Post) {
  return post.readTime ? `${post.readTime} min read` : "5 min read";
}

function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(featured ? 1200 : 600).height(featured ? 675 : 400).url()
    : "/images/blog-placeholder.jpg";

  if (featured) {
    return (
      <Link href={`/blog/${post.slug.current}`} className="library-featured-card">
        <div className="library-featured-image">
          <img
            src={imageUrl}
            alt={post.mainImage?.alt || post.title}
            loading="eager"
          />
          <div className="library-featured-overlay" />
        </div>
        <div className="library-featured-content">
          <div className="library-featured-meta">
            {post.category && (
              <span className="library-tag" style={{ backgroundColor: post.category.color || "#FF6B35" }}>
                {post.category.title}
              </span>
            )}
            <span className="library-featured-label">Featured</span>
          </div>
          <h2 className="library-featured-title">{post.title}</h2>
          <p className="library-featured-excerpt">{post.excerpt}</p>
          <div className="library-featured-footer">
            {post.author && (
              <div className="library-author">
                {post.author.image && (
                  <img
                    src={urlFor(post.author.image).width(36).height(36).url()}
                    alt={post.author.name}
                    className="library-author-avatar"
                  />
                )}
                <span className="library-author-name">{post.author.name}</span>
              </div>
            )}
            <div className="library-meta-divider" />
            <span className="library-date">{formatDate(post.publishedAt)}</span>
            <span className="library-read-time">{getReadTime(post)}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug.current}`} className="library-card">
      <div className="library-card-image">
        <img
          src={imageUrl}
          alt={post.mainImage?.alt || post.title}
          loading="lazy"
        />
        {post.category && (
          <span className="library-card-tag" style={{ backgroundColor: post.category.color || "#FF6B35" }}>
            {post.category.title}
          </span>
        )}
      </div>
      <div className="library-card-content">
        <h3 className="library-card-title">{post.title}</h3>
        <p className="library-card-excerpt">{post.excerpt}</p>
        <div className="library-card-footer">
          <span className="library-card-date">{formatDate(post.publishedAt)}</span>
          <span className="library-card-read">{getReadTime(post)}</span>
        </div>
      </div>
    </Link>
  );
}


function CategoryTabs({ categories, activeCategory }: { categories: Category[]; activeCategory?: string }) {
  return (
    <div className="library-tabs">
      <div className="library-tabs-scroll">
        <Link
          href="/blog"
          className={`library-tab ${!activeCategory ? "active" : ""}`}
        >
          All Resources
        </Link>
        {categories.map((category) => (
          <Link
            key={category._id}
            href={`/blog?category=${category.slug.current}`}
            className={`library-tab ${activeCategory === category.slug.current ? "active" : ""}`}
          >
            {category.title}
          </Link>
        ))}
      </div>
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

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const showPages = 5;

    if (totalPages <= showPages + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) {
        pages.push("...");
      }
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) {
        pages.push("...");
      }
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <nav className="library-pagination" aria-label="Pagination">
      {currentPage > 1 ? (
        <Link href={getPageUrl(currentPage - 1)} className="library-pagination-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Previous
        </Link>
      ) : (
        <span className="library-pagination-btn disabled">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Previous
        </span>
      )}

      <div className="library-pagination-pages">
        {getPageNumbers().map((page, index) =>
          typeof page === "string" ? (
            <span key={`ellipsis-${index}`} className="library-pagination-ellipsis">
              {page}
            </span>
          ) : (
            <Link
              key={page}
              href={getPageUrl(page)}
              className={`library-pagination-page ${currentPage === page ? "active" : ""}`}
            >
              {page}
            </Link>
          )
        )}
      </div>

      {currentPage < totalPages ? (
        <Link href={getPageUrl(currentPage + 1)} className="library-pagination-btn">
          Next
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Link>
      ) : (
        <span className="library-pagination-btn disabled">
          Next
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </span>
      )}
    </nav>
  );
}

function EmptyState() {
  return (
    <div className="library-empty">
      <div className="library-empty-icon">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
          <path d="M8 7h6" />
          <path d="M8 11h8" />
        </svg>
      </div>
      <h3 className="library-empty-title">No resources found</h3>
      <p className="library-empty-text">
        We&apos;re working on new content. Check back soon or explore other categories.
      </p>
      <Link href="/blog" className="library-empty-link">
        View all resources
      </Link>
    </div>
  );
}

function StatsBar() {
  return (
    <div className="library-stats">
      <div className="library-stat">
        <span className="library-stat-number">50+</span>
        <span className="library-stat-label">Articles</span>
      </div>
      <div className="library-stat-divider" />
      <div className="library-stat">
        <span className="library-stat-number">15+</span>
        <span className="library-stat-label">Guides</span>
      </div>
      <div className="library-stat-divider" />
      <div className="library-stat">
        <span className="library-stat-number">10+</span>
        <span className="library-stat-label">Case Studies</span>
      </div>
    </div>
  );
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; page?: string; q?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params.page || "1", 10));
  const searchQuery = params.q?.trim() || "";

  let posts: Post[] = [];
  let totalPosts = 0;
  let categories: Category[] = [];

  try {
    const [paginatedResult, fetchedCategories] = await Promise.all([
      getPaginatedPosts(currentPage, params.category, searchQuery || undefined),
      getCategories(),
    ]);
    posts = paginatedResult.posts;
    totalPosts = paginatedResult.total;
    categories = fetchedCategories;
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  // Separate featured post (only on first page without category filter or search)
  const showFeatured = currentPage === 1 && !params.category && !searchQuery;
  const featuredPosts = showFeatured ? posts.filter((post) => post.featured).slice(0, 1) : [];
  const regularPosts = showFeatured ? posts.filter((post) => !featuredPosts.includes(post)) : posts;

  return (
    <main className="library-page">
      {/* Hero Section */}
      <section className="library-hero">
        <div className="library-hero-bg" />
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="library-hero-content">
                <div className="library-hero-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  </svg>
                  Resource Library
                </div>
                <h1 className="library-hero-title">
                  Insights & Resources for<br />
                  <span className="library-hero-gradient">CapEx Excellence</span>
                </h1>
                <p className="library-hero-subtitle">
                  Expert perspectives on capital expenditure management, real estate technology, and strategies for optimizing your construction projects.
                </p>
                <LibrarySearch />
                <StatsBar />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="library-filter-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="library-filter-bar">
              <CategoryTabs categories={categories} activeCategory={params.category} />
              <div className="library-filter-meta">
                <span className="library-results-count">
                  {searchQuery
                    ? `${totalPosts} result${totalPosts !== 1 ? 's' : ''} for "${searchQuery}"`
                    : `${totalPosts} resources`
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="library-content">
        <div className="padding-global">
          <div className="container-large">
            {posts.length === 0 ? (
              <EmptyState />
            ) : (
              <>
                {/* Featured Post */}
                {featuredPosts.length > 0 && (
                  <ScrollReveal>
                    <div className="library-featured">
                      <PostCard post={featuredPosts[0]} featured />
                    </div>
                  </ScrollReveal>
                )}

                {/* Section Header */}
                {regularPosts.length > 0 && (
                  <div className="library-section-header">
                    <h2 className="library-section-title">
                      {searchQuery
                        ? `Search Results`
                        : params.category
                          ? `${categories.find(c => c.slug.current === params.category)?.title || 'Category'} Resources`
                          : 'Latest Resources'
                      }
                    </h2>
                    <div className="library-section-line" />
                  </div>
                )}

                {/* Posts Grid */}
                {regularPosts.length > 0 && (
                  <div className="library-grid">
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
              </>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="library-cta">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="library-cta-card">
                <div className="library-cta-content">
                  <h2 className="library-cta-title">Stay informed on CapEx best practices</h2>
                  <p className="library-cta-text">
                    Get the latest insights on real estate capital management delivered to your inbox.
                  </p>
                </div>
                <div className="library-cta-action">
                  <Link href="/contact" className="library-cta-button">
                    Subscribe to Updates
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}

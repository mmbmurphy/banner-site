import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import {
  getInfoPostBySlug,
  getInfoPostSlugs,
  getRelatedInfoPosts,
  urlFor,
  Post,
} from "@/lib/sanity";
import ScrollReveal from "@/components/ScrollReveal";

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const slugs = await getInfoPostSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getInfoPostBySlug(slug);
    if (!post) return { title: "Resource Not Found" };

    return {
      title: post.seoTitle || `${post.title} | Banner Resources`,
      description: post.seoDescription || post.excerpt,
      openGraph: {
        title: post.seoTitle || post.title,
        description: post.seoDescription || post.excerpt,
        type: "article",
        publishedTime: post.publishedAt,
        images: post.mainImage
          ? [{ url: urlFor(post.mainImage).width(1200).height(630).url() }]
          : undefined,
      },
    };
  } catch {
    return { title: "Resource Not Found" };
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="blog-post-figure">
          <img
            src={urlFor(value).width(1200).url()}
            alt={value.alt || ""}
            className="blog-post-content-image"
          />
          {value.caption && (
            <figcaption className="blog-post-caption">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
    callout: ({ value }) => {
      const typeClass = value.type || "info";
      return (
        <div className={`blog-callout blog-callout-${typeClass}`}>
          <p>{value.content}</p>
        </div>
      );
    },
    codeBlock: ({ value }) => {
      return (
        <pre className="blog-code-block" data-language={value.language}>
          <code>{value.code}</code>
        </pre>
      );
    },
  },
  block: {
    h2: ({ children }) => <h2 className="blog-post-h2">{children}</h2>,
    h3: ({ children }) => <h3 className="blog-post-h3">{children}</h3>,
    h4: ({ children }) => <h4 className="blog-post-h4">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="blog-blockquote">{children}</blockquote>
    ),
    normal: ({ children }) => <p className="blog-post-paragraph">{children}</p>,
  },
  marks: {
    link: ({ children, value }) => {
      const target = value?.blank ? "_blank" : undefined;
      const rel = value?.blank ? "noopener noreferrer" : undefined;
      return (
        <a href={value?.href} target={target} rel={rel} className="blog-link">
          {children}
        </a>
      );
    },
    code: ({ children }) => <code className="blog-inline-code">{children}</code>,
  },
  list: {
    bullet: ({ children }) => <ul className="blog-list blog-list-bullet">{children}</ul>,
    number: ({ children }) => <ol className="blog-list blog-list-number">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="blog-list-item">{children}</li>,
    number: ({ children }) => <li className="blog-list-item">{children}</li>,
  },
};

function RelatedPostCard({ post }: { post: Post }) {
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(400).height(250).url()
    : "/images/blog-placeholder.jpg";

  return (
    <Link href={`/info/${post.slug.current}`} className="blog-related-card">
      <div className="blog-related-image-wrapper">
        <img
          src={imageUrl}
          alt={post.mainImage?.alt || post.title}
          className="blog-related-image"
        />
      </div>
      <div className="blog-related-content">
        {post.category && (
          <span
            className="blog-related-category"
            style={{ backgroundColor: post.category.color || "#6B7280" }}
          >
            {post.category.title}
          </span>
        )}
        <h4 className="blog-related-title">{post.title}</h4>
        <span className="blog-related-date">{formatDate(post.publishedAt)}</span>
      </div>
    </Link>
  );
}

export default async function InfoPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post: Post | null = null;
  let relatedPosts: Post[] = [];

  try {
    post = await getInfoPostBySlug(slug);
    if (post?.category?.slug.current) {
      relatedPosts = await getRelatedInfoPosts(slug, post.category.slug.current);
    }
  } catch (error) {
    console.error("Error fetching post:", error);
  }

  if (!post) {
    notFound();
  }

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1400).height(700).url()
    : null;

  return (
    <main className="blog-post-page">
      <article className="blog-post-article">
        <header className="blog-post-header">
          <div className="padding-global">
            <div className="container-medium">
              <ScrollReveal>
                <div className="blog-post-header-content">
                  <div className="blog-post-meta-top">
                    {post.category && (
                      <Link
                        href={`/info?category=${post.category.slug.current}`}
                        className="blog-post-category"
                        style={{ backgroundColor: post.category.color || "#6B7280" }}
                      >
                        {post.category.title}
                      </Link>
                    )}
                    <span className="blog-post-date">{formatDate(post.publishedAt)}</span>
                    {post.readTime && (
                      <span className="blog-post-read-time">{post.readTime} min read</span>
                    )}
                  </div>
                  <h1 className="blog-post-title">{post.title}</h1>
                  <p className="blog-post-excerpt">{post.excerpt}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {imageUrl && (
          <div className="blog-post-featured-image-wrapper">
            <div className="padding-global">
              <div className="container-large">
                <ScrollReveal>
                  <img
                    src={imageUrl}
                    alt={post.mainImage?.alt || post.title}
                    className="blog-post-featured-image"
                  />
                </ScrollReveal>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="blog-post-content-wrapper">
          <div className="padding-global">
            <div className="container-medium">
              <div className="blog-post-content-grid">
                <aside className="blog-post-sidebar"></aside>
                <div className="blog-post-content">
                  <ScrollReveal>
                    {post.body && (
                      <PortableText value={post.body} components={portableTextComponents} />
                    )}
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="blog-related-section">
          <div className="padding-global">
            <div className="container-large">
              <ScrollReveal>
                <h2 className="blog-related-heading">Related Resources</h2>
                <div className="blog-related-grid">
                  {relatedPosts.map((relatedPost) => (
                    <RelatedPostCard key={relatedPost._id} post={relatedPost} />
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* Back to Info */}
      <section className="blog-back-section">
        <div className="padding-global">
          <div className="container-large">
            <Link href="/info" className="blog-back-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to all resources
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

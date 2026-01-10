import { notFound } from "next/navigation";
import Link from "next/link";
import { getCaseStudy, getAllCaseStudies } from "@/lib/content";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

// Generate static paths for all case studies
export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

// Generate metadata for each case study page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: `${caseStudy.companyName} Case Study | Banner`,
    description: caseStudy.subtitle,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  // Parse stat values for AnimatedCounter
  const parseStatValue = (value: string) => {
    const num = parseInt(value.replace(/[^0-9]/g, ""));
    const suffix = value.replace(/[0-9]/g, "");
    return { num, suffix };
  };

  return (
    <div className="case-study-page">
      {/* Hero Section - Full width dramatic header */}
      <header className="cs-hero">
        <div className="cs-hero-background">
          <img
            src="/images/fcp-case-study.jpg"
            alt=""
            className="cs-hero-bg-image"
          />
          <div className="cs-hero-overlay"></div>
        </div>
        <div className="cs-hero-content">
          <div className="padding-global">
            <div className="container-large">
              <ScrollReveal>
                <div className="cs-hero-inner">
                  <div className="cs-hero-badge">
                    <span className="cs-badge-text">Case Study</span>
                  </div>
                  <div className="cs-hero-logo-row">
                    <img
                      src={caseStudy.companyLogo}
                      alt={caseStudy.companyName}
                      className="cs-hero-company-logo"
                    />
                    <span className="cs-hero-divider">×</span>
                    <img
                      src="/images/Frame.png"
                      alt="Banner"
                      className="cs-hero-banner-logo"
                    />
                  </div>
                  <h1 className="cs-hero-title">{caseStudy.title}</h1>
                  <p className="cs-hero-subtitle">{caseStudy.subtitle}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bar - Floating card effect */}
      <section className="cs-stats-section">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="cs-stats-card">
                {caseStudy.stats.map((stat, index) => {
                  const { num, suffix } = parseStatValue(stat.value);
                  return (
                    <div key={index} className="cs-stat-item">
                      <div className="cs-stat-value">
                        <AnimatedCounter end={num} suffix={suffix} duration={2000} />
                      </div>
                      <div className="cs-stat-label">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="cs-summary-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="cs-summary-grid">
              <ScrollReveal>
                <div className="cs-summary-card">
                  <div className="cs-summary-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                  <h3 className="cs-summary-title">Industry</h3>
                  <p className="cs-summary-value">{caseStudy.industry}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div className="cs-summary-card">
                  <div className="cs-summary-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                  </div>
                  <h3 className="cs-summary-title">Portfolio</h3>
                  <p className="cs-summary-value">1,000+ Projects</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="cs-summary-card">
                  <div className="cs-summary-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h3 className="cs-summary-title">Solution</h3>
                  <p className="cs-summary-value">Banner Platform</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="cs-content-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="cs-content-wrapper">
              <ScrollReveal>
                <div className="cs-section-header">
                  <span className="cs-section-number">01</span>
                  <h2 className="cs-section-title">{caseStudy.challenge.title}</h2>
                </div>
                <div className="cs-content-body">
                  <p className="cs-content-text">{caseStudy.challenge.content}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial - Full width highlight */}
      <section className="cs-testimonial-section">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="cs-testimonial-wrapper">
                <div className="cs-quote-mark">"</div>
                <blockquote className="cs-testimonial-quote">
                  {caseStudy.testimonial.quote}
                </blockquote>
                <div className="cs-testimonial-author">
                  <img
                    src={caseStudy.testimonial.image}
                    alt={caseStudy.testimonial.author}
                    className="cs-author-image"
                  />
                  <div className="cs-author-info">
                    <div className="cs-author-name">{caseStudy.testimonial.author}</div>
                    <div className="cs-author-role">{caseStudy.testimonial.role}</div>
                  </div>
                  <img
                    src={caseStudy.companyLogo}
                    alt={caseStudy.companyName}
                    className="cs-author-company-logo"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="cs-content-section cs-alt-bg">
        <div className="padding-global">
          <div className="container-large">
            <div className="cs-content-wrapper">
              <ScrollReveal>
                <div className="cs-section-header">
                  <span className="cs-section-number">02</span>
                  <h2 className="cs-section-title">{caseStudy.solution.title}</h2>
                </div>
                <div className="cs-content-body">
                  <p className="cs-content-text">{caseStudy.solution.content}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="cs-content-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="cs-content-wrapper">
              <ScrollReveal>
                <div className="cs-section-header">
                  <span className="cs-section-number">03</span>
                  <h2 className="cs-section-title">{caseStudy.results.title}</h2>
                </div>
                <div className="cs-content-body">
                  <p className="cs-content-text">{caseStudy.results.content}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits - Visual cards */}
      <section className="cs-benefits-section">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="cs-benefits-header">
                <h2 className="cs-benefits-title">Key Benefits Achieved</h2>
              </div>
            </ScrollReveal>
            <div className="cs-benefits-grid">
              {caseStudy.keyBenefits.map((benefit, index) => (
                <ScrollReveal key={index} delay={index * 50}>
                  <div className="cs-benefit-card">
                    <div className="cs-benefit-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span className="cs-benefit-text">{benefit}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cs-cta-section">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="cs-cta-wrapper">
                <div className="cs-cta-content">
                  <h2 className="cs-cta-title">
                    Ready to achieve results like {caseStudy.companyName}?
                  </h2>
                  <p className="cs-cta-description">
                    Join the leading real estate companies transforming their CapEx management with Banner.
                  </p>
                  <div className="cs-cta-buttons">
                    <Link href="/contact" className="button w-button">
                      Book a Demo
                    </Link>
                    <Link href="/case-studies" className="cs-cta-link">
                      View more case studies →
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

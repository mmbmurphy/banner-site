import Link from "next/link";
import { getAllCaseStudies } from "@/lib/content";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Case Studies | Banner",
  description: "See how real estate companies are transforming their CapEx management with Banner.",
};

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();
  const featuredCaseStudy = caseStudies[0];
  const otherCaseStudies = caseStudies.slice(1);

  return (
    <div className="case-studies-landing">
      {/* Hero Section */}
      <header className="csl-hero">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="csl-hero-content">
                <div className="csl-hero-badge">
                  <span>Customer Stories</span>
                </div>
                <h1 className="csl-hero-title">
                  Real results from real estate leaders
                </h1>
                <p className="csl-hero-description">
                  See how owners and operators are transforming their CapEx management with Banner.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </header>

      {/* Aggregate Stats */}
      <section className="csl-stats">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="csl-stats-grid">
                <div className="csl-stat-item">
                  <div className="csl-stat-value">5-30%</div>
                  <div className="csl-stat-label">Reduction in CapEx costs</div>
                </div>
                <div className="csl-stat-item">
                  <div className="csl-stat-value">50-70%</div>
                  <div className="csl-stat-label">Less administrative work</div>
                </div>
                <div className="csl-stat-item">
                  <div className="csl-stat-value">2-3X</div>
                  <div className="csl-stat-label">More projects per manager</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="csl-featured">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <Link href={`/case-studies/${featuredCaseStudy.slug}`} className="csl-featured-card">
                <div className="csl-featured-image">
                  <img
                    src={featuredCaseStudy.heroImage}
                    alt={featuredCaseStudy.companyName}
                  />
                  <div className="csl-featured-overlay"></div>
                </div>
                <div className="csl-featured-content">
                  <div className="csl-featured-meta">
                    <img
                      src={featuredCaseStudy.companyLogo}
                      alt={featuredCaseStudy.companyName}
                      className="csl-featured-logo"
                    />
                    <span className="csl-featured-industry">{featuredCaseStudy.industry}</span>
                  </div>
                  <h2 className="csl-featured-title">{featuredCaseStudy.title}</h2>
                  <p className="csl-featured-subtitle">{featuredCaseStudy.subtitle}</p>
                  <div className="csl-featured-stats">
                    {featuredCaseStudy.stats.map((stat, index) => (
                      <div key={index} className="csl-featured-stat">
                        <span className="csl-featured-stat-value">{stat.value}</span>
                        <span className="csl-featured-stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="csl-featured-link">
                    Read full case study
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Other Case Studies */}
      {otherCaseStudies.length > 0 && (
        <section className="csl-grid-section">
          <div className="padding-global">
            <div className="container-large">
              <ScrollReveal>
                <h2 className="csl-section-title">More success stories</h2>
              </ScrollReveal>
              <div className="csl-cards-grid">
                {otherCaseStudies.map((caseStudy, index) => (
                  <ScrollReveal key={caseStudy.slug} delay={index * 100}>
                    <Link href={`/case-studies/${caseStudy.slug}`} className="csl-card">
                      <div className="csl-card-header">
                        <img
                          src={caseStudy.companyLogo}
                          alt={caseStudy.companyName}
                          className="csl-card-logo"
                        />
                        <span className="csl-card-industry">{caseStudy.industry}</span>
                      </div>
                      <h3 className="csl-card-title">{caseStudy.title}</h3>
                      <p className="csl-card-subtitle">{caseStudy.subtitle}</p>
                      <div className="csl-card-stats">
                        {caseStudy.stats.slice(0, 2).map((stat, idx) => (
                          <div key={idx} className="csl-card-stat">
                            <span className="csl-card-stat-value">{stat.value}</span>
                            <span className="csl-card-stat-label">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                      <div className="csl-card-link">
                        Read case study
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="csl-cta">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="csl-cta-content">
                <h2 className="csl-cta-title">Ready to write your own success story?</h2>
                <p className="csl-cta-description">
                  Join the leading real estate companies transforming their CapEx management with Banner.
                </p>
                <div className="csl-cta-buttons">
                  <Link href="/contact" className="button w-button">
                    Book a Demo
                  </Link>
                  <Link href="/guides/capex-management-fundamentals" className="csl-cta-link">
                    Read our CapEx guide
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

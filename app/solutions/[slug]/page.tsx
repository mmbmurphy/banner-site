import { notFound } from "next/navigation";
import Link from "next/link";
import { getSolution, getAllSolutions } from "@/lib/content";
import LogoMarquee from "@/components/LogoMarquee";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import DashboardMockup, { type MockupVariant } from "@/components/DashboardMockup";

// Mockup variants for each solution page
const solutionMockups: Record<string, { hero: MockupVariant; features: MockupVariant[] }> = {
  multifamily: {
    hero: "multifamily-portfolio",
    features: ["project-timeline", "financial-budget", "vendor-management"],
  },
  commercial: {
    hero: "commercial-overview",
    features: ["approvals", "bidding", "project-status"],
  },
  developers: {
    hero: "developers-draw",
    features: ["dev-draw-management", "dev-budget-control", "dev-portfolio-view"],
  },
};

// Client logos for marquee
const clientLogos = [
  { src: "/images/client-logos/summit.svg", alt: "Summit Real Estate Group" },
  { src: "/images/client-logos/morgan-properties.png", alt: "Morgan Properties" },
  { src: "/images/client-logos/greystar.svg", alt: "Greystar" },
  { src: "/images/client-logos/starwood.svg", alt: "Starwood Capital Group" },
  { src: "/images/client-logos/fcp.svg", alt: "FCP" },
  { src: "/images/client-logos/kennedy-wilson.svg", alt: "Kennedy Wilson" },
  { src: "/images/client-logos/cardinal.svg", alt: "Cardinal Group" },
  { src: "/images/client-logos/harbor-group.svg", alt: "Harbor Group" },
  { src: "/images/client-logos/industrious.svg", alt: "Industrious" },
  { src: "/images/client-logos/lantower.svg", alt: "Lantower" },
  { src: "/images/client-logos/livcor.svg", alt: "Livcor" },
  { src: "/images/client-logos/griffin.svg", alt: "Griffin Partners" },
];

// Icon component for capabilities
function CapabilityIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    database: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    users: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    zap: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    shield: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    building: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
        <path d="M9 22v-4h6v4"/>
        <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>
      </svg>
    ),
    settings: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
    calendar: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    "file-text": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    "file-check": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <path d="M9 15l2 2 4-4"/>
      </svg>
    ),
    "trending-up": (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    briefcase: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    clock: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  };

  return icons[name] || icons.database;
}

// Generate static paths for all solutions
export async function generateStaticParams() {
  const solutions = getAllSolutions();
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

// Generate metadata for each solution page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    return { title: "Solution Not Found" };
  }

  return {
    title: `${solution.title} | Banner`,
    description: solution.description,
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    notFound();
  }

  // Parse stat values for AnimatedCounter
  const parseStatValue = (value: string) => {
    const num = parseInt(value.replace(/[^0-9]/g, ""));
    const suffix = value.replace(/[0-9]/g, "");
    return { num, suffix };
  };

  return (
    <div className="solution-page">
      {/* Hero Section */}
      <header className="sol-hero">
        <div className="padding-global">
          <div className="container-large">
            <div className="sol-hero-content">
              <ScrollReveal>
                <div className="sol-hero-text">
                  <div className="sol-hero-badge">
                    <span className="sol-badge-text">{solution.tagline}</span>
                  </div>
                  <h1 className="sol-hero-title">{solution.heroTitle}</h1>
                  <p className="sol-hero-description">{solution.heroDescription}</p>
                  <div className="sol-hero-cta">
                    <Link href="/contact" className="button w-button">
                      Book a Demo
                    </Link>
                    <a href="#how-it-works" className="sol-hero-link">
                      See how it works <span>→</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="sol-hero-image-wrapper">
                  {solutionMockups[slug] ? (
                    <DashboardMockup variant={solutionMockups[slug].hero} />
                  ) : (
                    <img
                      src={solution.heroImage}
                      alt={solution.title}
                      className="sol-hero-image"
                    />
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Indicators */}
      <section className="sol-trust-section">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="sol-trust-grid">
                {solution.trustIndicators.map((indicator, index) => (
                  <div key={index} className="sol-trust-item">
                    <div className="sol-trust-value">{indicator.value}</div>
                    <div className="sol-trust-label">{indicator.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Logo Marquee */}
      <section className="sol-logos-section">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="sol-logos-wrapper">
                <LogoMarquee logos={clientLogos} speed={40} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="sol-platform-section" id="how-it-works" style={{ scrollMarginTop: '100px' }}>
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="sol-platform-header">
                <h2 className="sol-platform-title">{solution.platformIntro.title}</h2>
                <p className="sol-platform-subtitle">{solution.platformIntro.subtitle}</p>
              </div>
            </ScrollReveal>
            <div className="sol-capabilities-grid">
              {solution.capabilities.map((capability, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="sol-capability-card">
                    <div className="sol-capability-icon">
                      <CapabilityIcon name={capability.icon} />
                    </div>
                    <h3 className="sol-capability-title">{capability.title}</h3>
                    <p className="sol-capability-description">{capability.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcases - Alternating */}
      <section className="sol-features-section">
        <div className="padding-global">
          <div className="container-large">
            {solution.featureShowcases.map((feature, index) => (
              <ScrollReveal key={index}>
                <div className={`sol-feature-block ${index % 2 === 1 ? "sol-feature-reverse" : ""}`}>
                  <div className="sol-feature-content">
                    <div className="sol-feature-eyebrow">{feature.subtitle}</div>
                    <h3 className="sol-feature-title">{feature.title}</h3>
                    <p className="sol-feature-description">{feature.description}</p>
                    <ul className="sol-feature-bullets">
                      {feature.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="sol-feature-bullet">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="sol-feature-image-wrapper">
                    {solutionMockups[slug]?.features[index] ? (
                      <DashboardMockup variant={solutionMockups[slug].features[index]} />
                    ) : (
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="sol-feature-image"
                      />
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="sol-stats-section">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="sol-stats-header">
                <h2 className="sol-stats-title">{solution.statsSection.title}</h2>
                <p className="sol-stats-subtitle">{solution.statsSection.subtitle}</p>
              </div>
            </ScrollReveal>
            <div className="sol-stats-grid">
              {solution.stats.map((stat, index) => {
                const { num, suffix } = parseStatValue(stat.value);
                return (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div className="sol-stat-card">
                      <div className="sol-stat-value">
                        <AnimatedCounter end={num} suffix={suffix} duration={2000} />
                      </div>
                      <div className="sol-stat-label">{stat.label}</div>
                      {stat.context && (
                        <div className="sol-stat-context">{stat.context}</div>
                      )}
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="sol-roles-section">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="sol-roles-header">
                <h2 className="sol-roles-title">{solution.roleSection.title}</h2>
                <p className="sol-roles-subtitle">{solution.roleSection.subtitle}</p>
              </div>
            </ScrollReveal>
            <div className="sol-roles-grid">
              {solution.roles.map((role, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="sol-role-card">
                    <h3 className="sol-role-title">{role.title}</h3>
                    <p className="sol-role-description">{role.description}</p>
                    <ul className="sol-role-benefits">
                      {role.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="sol-role-benefit">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="sol-testimonials-section">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="sol-testimonials-header">
                <h2 className="sol-testimonials-title">What Teams Are Saying</h2>
              </div>
            </ScrollReveal>
            <div className="sol-testimonials-grid">
              {solution.testimonials.map((testimonial, index) => (
                <ScrollReveal key={index} delay={index * 150}>
                  <div className="sol-testimonial-card">
                    {testimonial.metric && (
                      <div className="sol-testimonial-metric">
                        <span className="sol-metric-value">{testimonial.metric}</span>
                        <span className="sol-metric-label">{testimonial.metricLabel}</span>
                      </div>
                    )}
                    <blockquote className="sol-testimonial-quote">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="sol-testimonial-author">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="sol-author-image"
                      />
                      <div className="sol-author-info">
                        <div className="sol-author-name">{testimonial.author}</div>
                        <div className="sol-author-role">{testimonial.role}, {testimonial.company}</div>
                      </div>
                      <img
                        src={testimonial.logo}
                        alt={testimonial.company}
                        className="sol-author-logo"
                      />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="sol-faq-section">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="sol-faq-header">
                <h2 className="sol-faq-title">Frequently Asked Questions</h2>
              </div>
            </ScrollReveal>
            <div className="sol-faq-list">
              {solution.faqs.map((faq, index) => (
                <ScrollReveal key={index} delay={index * 50}>
                  <details className="sol-faq-item">
                    <summary className="sol-faq-question">
                      <span>{faq.question}</span>
                      <div className="sol-faq-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19"/>
                          <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                      </div>
                    </summary>
                    <div className="sol-faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sol-cta-section">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="sol-cta-wrapper">
                <div className="sol-cta-content">
                  <h2 className="sol-cta-title">{solution.ctaTitle}</h2>
                  <p className="sol-cta-description">{solution.ctaDescription}</p>
                  <div className="sol-cta-buttons">
                    <Link href="/contact" className="button w-button">
                      Book a Demo
                    </Link>
                    <Link href="/case-studies" className="sol-cta-link">
                      Read customer stories →
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

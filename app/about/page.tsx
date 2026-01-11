import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata = {
  title: "About Us | Banner",
  description: "Banner Technologies is building the operating system for commercial real estate capital expenditure management.",
};

const stats = [
  { value: "$2B+", label: "CapEx Managed" },
  { value: "500+", label: "Properties" },
  { value: "50K+", label: "Projects Completed" },
  { value: "99.9%", label: "Platform Uptime" },
];

const values = [
  {
    title: "Customer Obsession",
    description: "We build for our customers. Every feature, every decision, every line of code is driven by the needs of the real estate professionals who use Banner every day.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description: "We believe in radical transparency—with our customers, our team, and in the products we build. Clear visibility into capital projects shouldn't be a luxury.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description: "We sweat the details. From the reliability of our platform to the responsiveness of our support, we hold ourselves to the highest standards in everything we do.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Speed",
    description: "Real estate moves fast. We ship fast, iterate fast, and respond fast. Our customers don't wait weeks for features or days for support—we move at the speed of their business.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

const milestones = [
  {
    year: "2019",
    title: "Founded",
    description: "Banner was founded with a simple mission: bring modern software to commercial real estate capital management.",
  },
  {
    year: "2021",
    title: "First Enterprise Customers",
    description: "Major multifamily operators adopt Banner to manage portfolios of 10,000+ units.",
  },
  {
    year: "2023",
    title: "$2B+ Under Management",
    description: "Banner crosses $2 billion in capital expenditure under management across the platform.",
  },
  {
    year: "2024",
    title: "Platform Expansion",
    description: "Launch of comprehensive project management and vendor coordination tools.",
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <header className="about-hero">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="about-hero-content">
                <div className="about-hero-badge">
                  <span>About Banner</span>
                </div>
                <h1 className="about-hero-title">
                  We're building the operating system for commercial real estate CapEx
                </h1>
                <p className="about-hero-description">
                  Banner Technologies is on a mission to transform how real estate teams plan, execute, and track capital expenditure projects. We're replacing spreadsheets and disconnected tools with a unified platform purpose-built for the industry.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="about-stats-grid">
                {stats.map((stat, index) => {
                  const numMatch = stat.value.match(/[\d.]+/);
                  const num = numMatch ? parseFloat(numMatch[0]) : 0;
                  const prefix = stat.value.match(/^\D+/)?.[0] || "";
                  const suffix = stat.value.match(/\D+$/)?.[0] || "";
                  return (
                    <div key={index} className="about-stat-item">
                      <div className="about-stat-value">
                        {prefix}<AnimatedCounter end={num} suffix={suffix} duration={2000} />
                      </div>
                      <div className="about-stat-label">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="padding-global">
          <div className="container-large">
            <div className="about-story-content">
              <ScrollReveal>
                <div className="about-story-text">
                  <h2 className="about-section-title">Our Story</h2>
                  <p className="about-story-lead">
                    We started Banner because we saw an industry stuck in the past.
                  </p>
                  <p>
                    Commercial real estate teams were managing billions of dollars in capital projects using spreadsheets, email chains, and disconnected point solutions. Critical information was scattered across dozens of files. Approvals took weeks. Nobody had a clear picture of where projects stood.
                  </p>
                  <p>
                    We knew there had to be a better way. So we built Banner—a unified platform that brings together budgeting, project management, vendor coordination, and financial tracking in one place. Today, leading real estate owners and operators use Banner to manage their entire capital program with confidence.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="about-story-image">
                  <img
                    src="/images/Imagery.png"
                    alt="Banner Platform"
                    className="about-image"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-timeline">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="about-timeline-header">
                <h2 className="about-section-title">Our Journey</h2>
                <p className="about-section-subtitle">
                  From startup to the platform of choice for enterprise real estate teams.
                </p>
              </div>
            </ScrollReveal>
            <div className="about-timeline-grid">
              {milestones.map((milestone, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="about-timeline-item">
                    <div className="about-timeline-year">{milestone.year}</div>
                    <div className="about-timeline-content">
                      <h3 className="about-timeline-title">{milestone.title}</h3>
                      <p className="about-timeline-description">{milestone.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="about-values-header">
                <h2 className="about-section-title">Our Values</h2>
                <p className="about-section-subtitle">
                  The principles that guide everything we do.
                </p>
              </div>
            </ScrollReveal>
            <div className="about-values-grid">
              {values.map((value, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="about-value-card">
                    <div className="about-value-icon">{value.icon}</div>
                    <h3 className="about-value-title">{value.title}</h3>
                    <p className="about-value-description">{value.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="about-platform">
        <div className="padding-global">
          <div className="container-large">
            <div className="about-platform-content">
              <ScrollReveal delay={200}>
                <div className="about-platform-image">
                  <img
                    src="/images/Imagery.png"
                    alt="Banner Dashboard"
                    className="about-image"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <div className="about-platform-text">
                  <h2 className="about-section-title">What We Build</h2>
                  <p className="about-story-lead">
                    A complete platform for capital expenditure management.
                  </p>
                  <div className="about-platform-features">
                    <div className="about-platform-feature">
                      <div className="about-feature-check">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                      <div>
                        <strong>Financial Management</strong> — Budgeting, approvals, invoicing, and lender draws in one system.
                      </div>
                    </div>
                    <div className="about-platform-feature">
                      <div className="about-feature-check">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                      <div>
                        <strong>Project Management</strong> — Scheduling, document management, and punch lists for every project.
                      </div>
                    </div>
                    <div className="about-platform-feature">
                      <div className="about-feature-check">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                      <div>
                        <strong>Vendor Coordination</strong> — Bidding, contracting, and communication with your vendor network.
                      </div>
                    </div>
                    <div className="about-platform-feature">
                      <div className="about-feature-check">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                      <div>
                        <strong>Portfolio Analytics</strong> — Real-time visibility across your entire capital program.
                      </div>
                    </div>
                  </div>
                  <div className="about-platform-cta">
                    <Link href="/features/financial-management" className="about-platform-link">
                      Explore Financial Management →
                    </Link>
                    <Link href="/features/project-management" className="about-platform-link">
                      Explore Project Management →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Backed By Section */}
      <section className="about-backed">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="about-backed-content">
                <h2 className="about-section-title">Trusted by Industry Leaders</h2>
                <p className="about-section-subtitle">
                  Banner is used by top real estate owners, operators, and developers across the country.
                </p>
                <div className="about-logos-grid">
                  <div className="about-logo-item">
                    <img src="/images/client-logos/fcp.svg" alt="FCP" />
                  </div>
                  <div className="about-logo-item">
                    <img src="/images/client-logos/summit.svg" alt="Summit" />
                  </div>
                  <div className="about-logo-item">
                    <img src="/images/client-logos/avenue5.svg" alt="Avenue5" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="about-cta-content">
                <h2 className="about-cta-title">Ready to transform your CapEx management?</h2>
                <p className="about-cta-description">
                  Join the leading real estate teams who trust Banner to manage their capital programs.
                </p>
                <div className="about-cta-buttons">
                  <Link href="/contact" className="button w-button">
                    Book a Demo
                  </Link>
                  <Link href="/case-studies" className="about-cta-link">
                    Read Customer Stories →
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

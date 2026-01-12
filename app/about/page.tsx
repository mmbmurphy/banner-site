import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import DeviceMockup from "@/components/DeviceMockup";

export const metadata = {
  title: "About Us | Banner",
  description: "Banner Technologies is building the operating system for commercial real estate capital expenditure management.",
};

const stats = [
  { value: "2M+", label: "Units on Platform" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "$15B+", label: "CapEx Managed" },
  { value: "99.9%", label: "Platform Uptime" },
];

const values = [
  {
    title: "Clients First",
    description: "Everything we build starts with our clients. Their challenges guide our roadmap, their feedback shapes our product, and their success is how we measure ours.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description: "We sweat the details. From platform reliability to support responsiveness, we hold ourselves to the highest standards in everything we do.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Trust",
    description: "We earn trust through transparency and reliability. Our clients depend on Banner for critical financial data, and we take that responsibility seriously.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Speed",
    description: "Real estate moves fast, and so do we. We ship quickly, iterate constantly, and respond promptly. Our clients don't wait—we move at the speed of their business.",
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
    title: "First Enterprise Clients",
    description: "Major multifamily operators adopt Banner to manage portfolios of 100,000+ units.",
  },
  {
    year: "2024",
    title: "$10B+ Under Management",
    description: "Banner crosses $10 billion in capital expenditure under management across the platform.",
  },
  {
    year: "2025 - Today",
    title: "Platform Expansion",
    description: "Launch of comprehensive project management, vendor coordination, and OpEx expense management tools.",
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <header className="about-hero">
        <div className="padding-global">
          <div className="container-large">
            <div className="about-hero-grid">
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
              <ScrollReveal delay={200}>
                <div className="about-hero-mockup">
                  <DeviceMockup
                    desktopImage="/images/dashboard.png"
                    mobileImage="/images/dashboard.png"
                    alt="Banner Dashboard"
                  />
                </div>
              </ScrollReveal>
            </div>
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
                  const numStr = numMatch ? numMatch[0] : "0";
                  const num = parseFloat(numStr);
                  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
                  const prefix = stat.value.match(/^\D+/)?.[0] || "";
                  const suffix = stat.value.match(/\D+$/)?.[0] || "";
                  return (
                    <div key={index} className="about-stat-item">
                      <div className="about-stat-value">
                        {prefix}<AnimatedCounter end={num} suffix={suffix} duration={2000} decimals={decimals} />
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
                    Banner was founded by Mark Murphy and Kunal Chaudhary in 2019.
                  </p>
                  <p>
                    Mark had a background in commercial real estate and had seen how asset managers were stuck managing billions in capital projects with spreadsheets, email threads, and a patchwork of disconnected tools. Kunal had spent years in software engineering, building products for complex workflows. The CRE industry was overdue for better tooling, and they set out to build it.
                  </p>
                  <p>
                    The two originally met at UC Berkeley back in 2015 and hit it off. They stayed in touch over the years, and the idea for what would become Banner kept coming up. Mark understood the problem from the operations side. Kunal could build the solution.
                  </p>
                  <p>
                    Today, Banner is used by leading owners and operators to manage their CapEx programs. The goal is the same as when they started: give real estate teams software that actually works for how they operate.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="about-story-image">
                  <img
                    src="/images/founders.jpg"
                    alt="Mark and Kunal - Banner Founders"
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
                  <DeviceMockup
                    desktopImage="/images/dashboard.png"
                    mobileImage="/images/dashboard.png"
                    alt="Banner Dashboard"
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
                  Banner is used by top real estate owners, operators, and developers across the globe.
                </p>
                <div className="about-logos-grid">
                  <div className="about-logo-item">
                    <img src="/images/client-logos/livcor.svg" alt="Livcor" />
                  </div>
                  <div className="about-logo-item">
                    <img src="/images/client-logos/starwood.svg" alt="Starwood" />
                  </div>
                  <div className="about-logo-item">
                    <img src="/images/client-logos/morgan-properties.png" alt="Morgan Properties" />
                  </div>
                  <div className="about-logo-item">
                    <img src="/images/client-logos/industrious.svg" alt="Industrious" />
                  </div>
                  <div className="about-logo-item">
                    <img src="/images/client-logos/ridc.svg" alt="RIDC" />
                  </div>
                  <div className="about-logo-item">
                    <img src="/images/client-logos/summit.svg" alt="Summit" />
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
                <h2 className="about-cta-title">Ready to Transform Your CapEx Management?</h2>
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

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata = {
  title: "Project Management | Banner",
  description: "Execute work and coordinate people, timelines, and assets with Banner's comprehensive project management tools.",
};

const features = [
  {
    name: "Asset Tracking",
    description: "Track physical assets across your portfolio. Monitor condition, location, and maintenance history for equipment and building systems.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    name: "Bidding",
    description: "Collect and compare competitive bids from vendors. Standardize bid packages, track submissions, and make data-driven award decisions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
  },
  {
    name: "Contracting",
    description: "Create, execute, and manage contracts digitally. Track terms, amendments, and compliance with full version history.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    name: "Document Management",
    description: "Centralize all project documents in one searchable repository. Control access, track versions, and ensure everyone has the latest files.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    name: "Project Scheduling",
    description: "Plan and track project timelines with Gantt charts and milestone tracking. Identify dependencies and keep projects on schedule.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    name: "Punch Lists",
    description: "Create, assign, and track punch list items with photo documentation. Ensure nothing falls through the cracks before project closeout.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
  },
  {
    name: "TIs",
    description: "Manage tenant improvement projects from lease to keys. Track TI allowances, approvals, and delivery deadlines in one place.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: "Unit Renovations",
    description: "Streamline unit turns and renovations with standardized scopes, automated scheduling, and real-time progress tracking.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    name: "Vendor Communications",
    description: "Centralize all vendor communications in one thread. Keep context visible, reduce email chaos, and maintain clear audit trails.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: "Centralized Project Hub",
    description: "Every document, communication, and task in one place—accessible to everyone who needs it.",
  },
  {
    title: "Faster Project Delivery",
    description: "Complete projects 2X faster with streamlined workflows and automated coordination.",
  },
  {
    title: "Complete Visibility",
    description: "See the status of every project across your portfolio at a glance.",
  },
  {
    title: "Better Vendor Performance",
    description: "Track vendor performance, collect competitive bids, and build a reliable contractor network.",
  },
];

const stats = [
  { value: "2X", label: "faster project completion" },
  { value: "40%", label: "reduction in turn times" },
  { value: "90%", label: "fewer missed deadlines" },
  { value: "3X", label: "portfolio growth capacity" },
];

export default function ProjectManagementPage() {
  return (
    <div className="feature-page">
      {/* Hero Section */}
      <header className="fp-hero fp-hero-dark">
        <div className="padding-global">
          <div className="container-large">
            <div className="fp-hero-content">
              <ScrollReveal>
                <div className="fp-hero-text">
                  <div className="fp-hero-badge fp-badge-dark">
                    <span className="fp-badge-text">Project Management</span>
                  </div>
                  <h1 className="fp-hero-title">
                    Execute work and coordinate people, timelines, and assets
                  </h1>
                  <p className="fp-hero-description">
                    Banner's project management tools help you deliver capital projects on time and on budget—from initial scope to final punch list.
                  </p>
                  <div className="fp-hero-cta">
                    <Link href="/contact" className="button w-button">
                      Book a Demo
                    </Link>
                    <Link href="/features/financial-management" className="fp-hero-link">
                      See Financial Management <span>→</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="fp-hero-image-wrapper">
                  <img
                    src="/images/Imagery.png"
                    alt="Project Management Dashboard"
                    className="fp-hero-image"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <section className="fp-stats-section fp-stats-dark">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="fp-stats-grid">
                {stats.map((stat, index) => {
                  const num = parseInt(stat.value.replace(/[^0-9]/g, ""));
                  const suffix = stat.value.replace(/[0-9]/g, "");
                  return (
                    <div key={index} className="fp-stat-item">
                      <div className="fp-stat-value fp-stat-value-dark">
                        <AnimatedCounter end={num} suffix={suffix} duration={2000} />
                      </div>
                      <div className="fp-stat-label">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="fp-features-section">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="fp-features-header">
                <h2 className="fp-features-title">Everything you need to deliver projects</h2>
                <p className="fp-features-subtitle">
                  Nine powerful tools working together to streamline project execution across your portfolio.
                </p>
              </div>
            </ScrollReveal>
            <div className="fp-features-grid">
              {features.map((feature, index) => (
                <ScrollReveal key={index} delay={index * 50}>
                  <div className="fp-feature-card fp-feature-card-dark">
                    <div className="fp-feature-icon fp-feature-icon-dark">{feature.icon}</div>
                    <h3 className="fp-feature-name">{feature.name}</h3>
                    <p className="fp-feature-description">{feature.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="fp-benefits-section fp-benefits-alt">
        <div className="padding-global">
          <div className="container-large">
            <div className="fp-benefits-content fp-benefits-reverse">
              <ScrollReveal>
                <div className="fp-benefits-text">
                  <h2 className="fp-benefits-title">Why teams choose Banner for project management</h2>
                  <div className="fp-benefits-list">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="fp-benefit-item">
                        <div className="fp-benefit-check fp-benefit-check-dark">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        </div>
                        <div className="fp-benefit-content">
                          <h4 className="fp-benefit-title">{benefit.title}</h4>
                          <p className="fp-benefit-description">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="fp-benefits-image-wrapper">
                  <img
                    src="/images/Imagery.png"
                    alt="Project Management Benefits"
                    className="fp-benefits-image"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="fp-testimonial-section fp-testimonial-dark">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="fp-testimonial-wrapper">
                <div className="fp-quote-mark">"</div>
                <blockquote className="fp-testimonial-quote">
                  Before Banner, coordinating vendors and tracking projects was chaos. Now everything is in one place—schedules, documents, communications. We've cut our project delivery time in half.
                </blockquote>
                <div className="fp-testimonial-author">
                  <img
                    src="/images/Drew_Gravina_-_3_u9yqfa.webp"
                    alt="Sarah Chen"
                    className="fp-author-image"
                  />
                  <div className="fp-author-info">
                    <div className="fp-author-name">Sarah Chen</div>
                    <div className="fp-author-role">VP of Asset Management, Summit Real Estate Group</div>
                  </div>
                  <img
                    src="/images/client-logos/summit.svg"
                    alt="Summit"
                    className="fp-author-logo"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="fp-cta-section fp-cta-dark">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="fp-cta-wrapper fp-cta-wrapper-dark">
                <div className="fp-cta-content">
                  <h2 className="fp-cta-title">Ready to streamline your project delivery?</h2>
                  <p className="fp-cta-description">
                    See how Banner's project management tools can help you deliver capital projects faster.
                  </p>
                  <div className="fp-cta-buttons">
                    <Link href="/contact" className="button w-button">
                      Book a Demo
                    </Link>
                    <Link href="/case-studies/fcp" className="fp-cta-link">
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

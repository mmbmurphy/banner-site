import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import DashboardMockup from "@/components/DashboardMockup";

export const metadata = {
  title: "OpEx Contracting | Banner",
  description: "Manage, standardize, and audit recurring service contracts across your portfolio—without spreadsheets, inboxes, or guesswork.",
};

const features = [
  {
    name: "Centralized Contract System",
    description: "One place for every recurring contract. Store, search, and manage all service agreements across your portfolio with complete visibility into terms, pricing, and renewals.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    name: "Standardized Scopes & Pricing",
    description: "Define what good looks like—across every property. Create standard service scopes and pricing benchmarks to ensure consistency and fair market rates across your portfolio.",
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
    name: "Contract-to-Invoice Validation",
    description: "Catch discrepancies before you pay. Automatically match invoices against contract terms, flagging overcharges, incorrect rates, and out-of-scope work before approval.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    name: "Renewal & Term Management",
    description: "No more auto-renewals. No more missed deadlines. Track every contract expiration, set renewal alerts, and proactively renegotiate terms before they lock in.",
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
    name: "Vendor Performance & Spend Insights",
    description: "See who's delivering—and who's not. Track vendor performance scores, compare spend across properties, and identify opportunities to consolidate or renegotiate.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    name: "Built for Multifamily Operations",
    description: "Designed for the contracts that matter most. Purpose-built for landscaping, janitorial, security, pest control, HVAC maintenance, and the recurring services that drive OpEx.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: "Reduce Recurring OpEx Spend",
    description: "Identify overcharges, eliminate duplicate services, and negotiate better rates with complete visibility into contract terms.",
  },
  {
    title: "Fewer Invoice Disputes",
    description: "Automatically validate invoices against contracted rates and scopes—catch errors before they become problems.",
  },
  {
    title: "Stronger Vendor Accountability",
    description: "Track performance metrics, document issues, and leverage data in renewal negotiations.",
  },
  {
    title: "Portfolio-Wide Consistency",
    description: "Standardize service scopes and pricing across all properties for fair, transparent vendor relationships.",
  },
];

const stats = [
  { value: "12%", label: "average reduction in OpEx spend" },
  { value: "90%", label: "fewer invoice discrepancies" },
  { value: "100%", label: "contract visibility" },
  { value: "0", label: "missed renewal deadlines" },
];

export default function OpExContractingPage() {
  return (
    <div className="feature-page">
      {/* Hero Section */}
      <header className="fp-hero">
        <div className="padding-global">
          <div className="container-large">
            <div className="fp-hero-content">
              <ScrollReveal>
                <div className="fp-hero-text">
                  <div className="fp-hero-badge">
                    <span className="fp-badge-text">OpEx Contracting</span>
                  </div>
                  <h1 className="fp-hero-title">
                    Finally, OpEx Contracts Under Control
                  </h1>
                  <p className="fp-hero-description">
                    Manage, standardize, and audit recurring service contracts across your portfolio—without spreadsheets, inboxes, or guesswork.
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
                  <DashboardMockup variant="opex-contracts" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <section className="fp-stats-section">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="fp-stats-grid">
                {stats.map((stat, index) => {
                  const num = parseInt(stat.value.replace(/[^0-9]/g, ""));
                  const suffix = stat.value.replace(/[0-9]/g, "");
                  return (
                    <div key={index} className="fp-stat-item">
                      <div className="fp-stat-value">
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
                <h2 className="fp-features-title">Everything You Need to Manage Recurring Contracts</h2>
                <p className="fp-features-subtitle">
                  Six powerful capabilities working together to give you complete control over OpEx service contracts.
                </p>
              </div>
            </ScrollReveal>
            <div className="fp-features-grid">
              {features.map((feature, index) => (
                <ScrollReveal key={index} delay={index * 50}>
                  <div className="fp-feature-card">
                    <div className="fp-feature-icon">{feature.icon}</div>
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
      <section className="fp-benefits-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="fp-benefits-content">
              <ScrollReveal>
                <div className="fp-benefits-text">
                  <h2 className="fp-benefits-title">Why Teams Choose Banner for OpEx Contracting</h2>
                  <div className="fp-benefits-list">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="fp-benefit-item">
                        <div className="fp-benefit-check">
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
                  <DashboardMockup variant="opex-insights" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="fp-use-cases-section">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="fp-use-cases-header">
                <h2 className="fp-use-cases-title">Built for Real Estate Operations</h2>
                <p className="fp-use-cases-subtitle">
                  Manage the contracts that drive your operating expenses
                </p>
              </div>
            </ScrollReveal>
            <div className="fp-use-cases-grid">
              {[
                { service: "Landscaping & Grounds", description: "Track seasonal schedules, scope variations, and property-specific requirements" },
                { service: "Janitorial Services", description: "Manage cleaning frequencies, staffing levels, and supply agreements" },
                { service: "Security & Patrol", description: "Monitor guard hours, patrol routes, and incident reporting requirements" },
                { service: "HVAC Maintenance", description: "Schedule preventive maintenance, track equipment coverage, and manage parts" },
                { service: "Pest Control", description: "Coordinate treatment schedules, track service visits, and document compliance" },
                { service: "Elevator & Fire Safety", description: "Ensure regulatory compliance and manage inspection schedules" },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 50}>
                  <div className="fp-use-case-card">
                    <h4 className="fp-use-case-title">{item.service}</h4>
                    <p className="fp-use-case-description">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="fp-testimonial-section">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="fp-testimonial-wrapper">
                <div className="fp-quote-mark">"</div>
                <blockquote className="fp-testimonial-quote">
                  We used to spend hours reconciling vendor invoices against contract terms. Banner catches the discrepancies automatically—we've already recovered thousands in overcharges we would have missed.
                </blockquote>
                <div className="fp-testimonial-author">
                  <img
                    src="/images/Drew_Gravina_-_3_u9yqfa.webp"
                    alt="Drew Gravina"
                    className="fp-author-image"
                  />
                  <div className="fp-author-info">
                    <div className="fp-author-name">Drew Gravina</div>
                    <div className="fp-author-role">VP of Operations, FCP</div>
                  </div>
                  <img
                    src="/images/client-logos/fcp.svg"
                    alt="FCP"
                    className="fp-author-logo"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="fp-cta-section">
        <div className="padding-global">
          <div className="container-large">
            <ScrollReveal>
              <div className="fp-cta-wrapper">
                <div className="fp-cta-content">
                  <h2 className="fp-cta-title">Ready to Take Control of Your Service Contracts?</h2>
                  <p className="fp-cta-description">
                    See how Banner's OpEx contracting tools can reduce spend and eliminate invoice disputes.
                  </p>
                  <div className="fp-cta-buttons">
                    <Link href="/contact" className="button w-button">
                      Book a Demo
                    </Link>
                    <Link href="/case-studies" className="fp-cta-link">
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

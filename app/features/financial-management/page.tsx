import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import DashboardMockup from "@/components/DashboardMockup";

export const metadata = {
  title: "Financial Management | Banner",
  description: "Plan, control, and reconcile money across CapEx and OpEx with Banner's comprehensive financial management tools.",
};

const features = [
  {
    name: "Approvals",
    description: "Streamline approval workflows with configurable rules, delegation, and mobile access. Never miss a deadline with automated reminders.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    name: "Budgeting",
    description: "Build and manage budgets at every level—from individual projects to entire portfolios. Compare actuals to budget in real-time.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    name: "Capital Planning",
    description: "Build multi-year capital plans with scenario modeling. Align CapEx strategy with asset performance and investment goals.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    name: "Cash Flow Analysis",
    description: "Forecast cash requirements across your portfolio. Model timing of expenditures and align with available capital.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    name: "Cost Tracking",
    description: "Track every dollar from commitment to payment. Categorize costs, monitor variances, and maintain complete audit trails.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    name: "Invoicing",
    description: "Process invoices efficiently with automatic matching, approval routing, and direct integration to your accounting system.",
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
    name: "Lender Draws",
    description: "Prepare draw packages faster with automated cost tracking, retainage management, and lender-ready reporting.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    name: "OpEx Contracting",
    description: "Manage operating expense contracts alongside CapEx. Track renewals, compare vendors, and optimize recurring costs.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
  {
    name: "Reporting",
    description: "Generate investor-ready reports with one click. Customize dashboards, schedule automated reports, and export to any format.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: "Complete Budget Visibility",
    description: "See every dollar committed, spent, and remaining across your entire portfolio in real-time.",
  },
  {
    title: "Faster Approvals",
    description: "Reduce approval cycle time by 70% with automated workflows and mobile access.",
  },
  {
    title: "Accurate Forecasting",
    description: "Model cash flow scenarios and plan capital deployment with confidence.",
  },
  {
    title: "Audit-Ready Documentation",
    description: "Maintain complete audit trails for every transaction, approval, and change.",
  },
];

const stats = [
  { value: "5%", label: "average reduction in CapEx costs" },
  { value: "70%", label: "faster approval cycles" },
  { value: "50%", label: "less time on draw prep" },
  { value: "100%", label: "audit compliance" },
];

export default function FinancialManagementPage() {
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
                    <span className="fp-badge-text">Financial Management</span>
                  </div>
                  <h1 className="fp-hero-title">
                    Plan, control, and reconcile money across CapEx and OpEx
                  </h1>
                  <p className="fp-hero-description">
                    Banner's financial management tools give you complete visibility and control over every dollar in your capital program—from initial budget to final payment.
                  </p>
                  <div className="fp-hero-cta">
                    <Link href="/contact" className="button w-button">
                      Book a Demo
                    </Link>
                    <Link href="/features/project-management" className="fp-hero-link">
                      See Project Management <span>→</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="fp-hero-image-wrapper">
                  <DashboardMockup variant="financial-budget" />
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
                <h2 className="fp-features-title">Everything You Need for Financial Control</h2>
                <p className="fp-features-subtitle">
                  Nine powerful tools working together to give you complete command over CapEx finances.
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
                  <h2 className="fp-benefits-title">Why Teams Choose Banner for Financial Management</h2>
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
                  <DashboardMockup variant="financial-forecasting" />
                </div>
              </ScrollReveal>
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
                  Banner has completely transformed how we manage CapEx finances. We went from spending days on draw packages to having them ready in hours. The visibility into our budget is incredible.
                </blockquote>
                <div className="fp-testimonial-author">
                  <img
                    src="/images/Drew_Gravina_-_3_u9yqfa.webp"
                    alt="Dara Vaziri"
                    className="fp-author-image"
                  />
                  <div className="fp-author-info">
                    <div className="fp-author-name">Dara Vaziri</div>
                    <div className="fp-author-role">Senior Analyst, FCP</div>
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
                  <h2 className="fp-cta-title">Ready to Take Control of Your CapEx Finances?</h2>
                  <p className="fp-cta-description">
                    See how Banner's financial management tools can transform your capital program.
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

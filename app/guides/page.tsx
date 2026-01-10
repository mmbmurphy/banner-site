import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides | Banner",
  description: "Expert guides on CapEx management, real estate operations, and best practices for owners and operators.",
};

const guides = [
  {
    slug: "capex-management-fundamentals",
    title: "The Complete Guide to CapEx Management",
    description: "Master the fundamentals of capital expenditure management for real estate portfolios, from planning through execution.",
    category: "Fundamentals",
    readTime: "12 min read",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    slug: "budgeting-best-practices",
    title: "CapEx Budgeting Best Practices",
    description: "Learn proven strategies for accurate CapEx budgeting, forecasting, and variance management across your portfolio.",
    category: "Budgeting",
    readTime: "10 min read",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    slug: "vendor-management",
    title: "Vendor Management for Real Estate",
    description: "Strategies for building and maintaining productive vendor relationships while controlling costs and ensuring quality.",
    category: "Operations",
    readTime: "8 min read",
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
    slug: "project-tracking-reporting",
    title: "Project Tracking & Reporting",
    description: "How to set up effective tracking systems and create reports that drive accountability and informed decision-making.",
    category: "Reporting",
    readTime: "9 min read",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    slug: "multifamily-capex-planning",
    title: "Multifamily CapEx Planning",
    description: "Specialized guidance for multifamily operators on unit turn programs, amenity upgrades, and long-term capital planning.",
    category: "Multifamily",
    readTime: "11 min read",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    slug: "due-diligence-capex-assessment",
    title: "Due Diligence CapEx Assessment",
    description: "A comprehensive framework for evaluating CapEx requirements during acquisition due diligence.",
    category: "Acquisitions",
    readTime: "14 min read",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
];

export default function GuidesPage() {
  return (
    <div className="guides-page">
      {/* Hero Section */}
      <section className="guides-hero">
        <div className="padding-global">
          <div className="container-large">
            <div className="guides-hero-content">
              <h1 className="guides-hero-title">CapEx Guides & Resources</h1>
              <p className="guides-hero-subtitle">
                Expert insights and practical frameworks to help you master capital expenditure management for your real estate portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="guides-grid-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="guides-grid">
              {guides.map((guide) => (
                <Link key={guide.slug} href={`/guides/${guide.slug}`} className="guide-card">
                  <div className="guide-card-image">
                    <div className="guide-card-icon">
                      {guide.icon}
                    </div>
                  </div>
                  <div className="guide-card-content">
                    <div className="guide-card-category">{guide.category}</div>
                    <h3 className="guide-card-title">{guide.title}</h3>
                    <p className="guide-card-description">{guide.description}</p>
                    <div className="guide-card-footer">
                      <span className="guide-card-read-time">{guide.readTime}</span>
                      <span className="guide-card-link">
                        Read guide
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const resources = [
  {
    type: "Guide",
    title: "The Complete Guide to CapEx Management",
    description: "A best-practice guide for asset and construction managers in commercial real estate.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    color: "#f25e53",
    href: "/guides/capex-management-fundamentals",
  },
  {
    type: "Calculator",
    title: "ROI Calculator",
    description: "See how much time and money Banner could save your organization.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="8" y1="10" x2="10" y2="10" />
        <line x1="14" y1="10" x2="16" y2="10" />
        <line x1="8" y1="14" x2="10" y2="14" />
        <line x1="14" y1="14" x2="16" y2="14" />
        <line x1="8" y1="18" x2="10" y2="18" />
        <line x1="14" y1="18" x2="16" y2="18" />
      </svg>
    ),
    color: "#4A90D9",
    href: "/resources/roi-calculator",
  },
  {
    type: "Case Study",
    title: "How FCP Reduced CapEx Costs by 5%",
    description: "Discover how FCP transformed their capital project management with Banner.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    color: "#2ECC71",
    href: "/case-studies/fcp",
  },
];

export default function ResourcesSection() {
  return (
    <section className="resources-section">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <ScrollReveal>
              <div className="resources-header">
                <h2 className="heading-style-h2">Resources</h2>
                <p className="text-size-medium resources-subtitle">
                  Insights and tools to help you master CapEx management
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="resources-grid">
                {resources.map((resource, index) => (
                  <Link key={index} href={resource.href} className="resource-card">
                    <div className="resource-type" style={{ color: resource.color }}>
                      {resource.type}
                    </div>
                    <div className="resource-icon" style={{ backgroundColor: resource.color }}>
                      {resource.icon}
                    </div>
                    <h3 className="resource-title">{resource.title}</h3>
                    <p className="resource-description">{resource.description}</p>
                    <div className="resource-link" style={{ color: resource.color }}>
                      Learn more
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
      <style jsx>{`
        .resources-section {
          background: #ffffff;
        }
        .resources-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .resources-subtitle {
          color: #666;
          margin-top: 0.75rem;
        }
        .resources-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .resources-section :global(.resource-card) {
          display: block;
          background: #f8f9fa;
          border-radius: 16px;
          padding: 2rem;
          text-decoration: none;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }
        .resources-section :global(.resource-card):hover {
          background: #ffffff;
          border-color: #e0e0e0;
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
        }
        .resource-type {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }
        .resource-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 1rem;
        }
        .resource-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 0.5rem;
          line-height: 1.4;
        }
        .resource-description {
          font-size: 0.9375rem;
          color: #666;
          line-height: 1.6;
          margin: 0 0 1rem;
        }
        .resource-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
        }
        .resources-section :global(.resource-card):hover .resource-link {
          gap: 0.75rem;
        }
        @media (max-width: 991px) {
          .resources-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}

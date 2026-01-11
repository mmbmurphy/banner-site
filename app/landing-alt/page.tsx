"use client";

import Link from "next/link";
import DashboardMockup from "@/components/DashboardMockup";
import "./styles.css";

export default function LandingAltPage() {
  return (
    <div className="landing-alt">
      {/* Hero Section */}
      <section className="hero-split">
        <div className="hero-split-container">
          {/* Left Side - Text */}
          <div className="hero-split-text">
            <div className="hero-badge-alt">
              <span className="badge-dot" />
              <span>Trusted by 500+ real estate teams</span>
            </div>

            <h1 className="hero-title-alt">
              Where Real Estate Owners and Operators{" "}
              <span className="title-highlight">Manage CapEx</span>
            </h1>

            <p className="hero-subtitle-alt">
              Banner replaces spreadsheets and email with one platform that links
              long-term plans, annual budgets, and day-to-day execution across the
              entire CapEx lifecycle.
            </p>

            <div className="hero-cta-group">
              <Link href="/contact" className="btn-primary-alt">
                Book a Demo
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a href="#how-it-works" className="btn-secondary-alt">
                See how it works
              </a>
            </div>

            <div className="hero-trust-row">
              <div className="trust-logos-alt">
                <img src="/images/client-logos/morgan-properties.png" alt="Morgan Properties" />
                <img src="/images/client-logos/greystar.svg" alt="Greystar" />
                <img src="/images/client-logos/fcp.svg" alt="FCP" />
                <img src="/images/client-logos/starwood.svg" alt="Starwood" />
              </div>
            </div>
          </div>

          {/* Right Side - Dashboard Preview */}
          <div className="hero-dashboard">
            <div className="dashboard-wrapper">
              <div className="browser-frame">
                <div className="browser-header">
                  <div className="browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="browser-url">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    <span>app.withbanner.com</span>
                  </div>
                </div>
                <div className="browser-content">
                  <DashboardMockup variant="financial-budget" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar-alt">
        <div className="stats-bar-container">
          <div className="stat-item-alt">
            <span className="stat-value-alt">5%</span>
            <span className="stat-label-alt">reduction in CapEx costs</span>
            <span className="stat-context-alt">through better visibility and budget control</span>
          </div>
          <div className="stat-item-alt">
            <span className="stat-value-alt">70%</span>
            <span className="stat-label-alt">less administrative work</span>
            <span className="stat-context-alt">with automated reporting and workflows</span>
          </div>
          <div className="stat-item-alt">
            <span className="stat-value-alt">2X</span>
            <span className="stat-label-alt">faster project completion</span>
            <span className="stat-context-alt">from streamlined coordination</span>
          </div>
          <div className="stat-item-alt">
            <span className="stat-value-alt">3X</span>
            <span className="stat-label-alt">portfolio growth capacity</span>
            <span className="stat-context-alt">without adding CapEx headcount</span>
          </div>
        </div>
      </section>

      {/* Social Proof Logos */}
      <section className="logos-section-alt">
        <div className="logos-container-alt">
          <p className="logos-title-alt">Trusted by industry-leading real estate teams</p>
          <div className="logos-grid-alt">
            <img src="/images/client-logos/morgan-properties.png" alt="Morgan Properties" />
            <img src="/images/client-logos/greystar.svg" alt="Greystar" />
            <img src="/images/client-logos/fcp.svg" alt="FCP" />
            <img src="/images/client-logos/starwood.svg" alt="Starwood" />
            <img src="/images/client-logos/kennedy-wilson.svg" alt="Kennedy Wilson" />
            <img src="/images/client-logos/cardinal.svg" alt="Cardinal" />
            <img src="/images/client-logos/harbor-group.svg" alt="Harbor Group" />
            <img src="/images/client-logos/livcor.svg" alt="Livcor" />
          </div>
        </div>
      </section>
    </div>
  );
}

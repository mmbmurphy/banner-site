"use client";

import Link from "next/link";
import "./styles.css";

const benefits = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "View Active Projects",
    description: "Access project details, scopes, and timelines",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Submit Bids",
    description: "Respond to bid requests and track status",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: "Manage Invoices",
    description: "Submit invoices and track payments",
  },
];

const clientLogos = [
  { src: "/images/client-logos/morgan-properties.png", alt: "Morgan Properties" },
  { src: "/images/client-logos/fcp.svg", alt: "FCP" },
  { src: "/images/client-logos/starwood.svg", alt: "Starwood" },
  { src: "/images/client-logos/livcor.svg", alt: "Livcor" },
];

export default function VendorLoginPage() {
  return (
    <div className="vendor-login">
      {/* Left Panel */}
      <div className="vl-left">
        <div className="vl-left-content">
          {/* Logo */}
          <Link href="/" className="vl-logo">
            <img src="/images/Frame.png" alt="Banner" />
          </Link>

          {/* Hero */}
          <div className="vl-hero">
            <div className="vl-badge">
              <span className="vl-badge-dot" />
              <span>Vendor Portal</span>
            </div>
            <h1 className="vl-title">
              Partner with the largest{" "}
              <span className="vl-title-highlight">property owners</span>{" "}
              in the country
            </h1>
            <p className="vl-subtitle">
              Banner connects vendors with leading property managers and owners.
              View projects, submit bids, and manage invoices—all in one platform.
            </p>
          </div>

          {/* Benefits */}
          <div className="vl-benefits">
            {benefits.map((benefit, index) => (
              <div key={index} className="vl-benefit">
                <div className="vl-benefit-icon">{benefit.icon}</div>
                <div className="vl-benefit-content">
                  <div className="vl-benefit-title">{benefit.title}</div>
                  <div className="vl-benefit-desc">{benefit.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Logos */}
          <div className="vl-trust">
            <p className="vl-trust-label">Trusted by industry leaders</p>
            <div className="vl-trust-logos">
              {clientLogos.map((logo, index) => (
                <img key={index} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="vl-right">
        <div className="vl-right-content">
          {/* Mobile Logo */}
          <Link href="/" className="vl-mobile-logo">
            <img src="/images/Frame.png" alt="Banner" />
          </Link>

          {/* Auth Card */}
          <div className="vl-auth-card">
            <div className="vl-auth-header">
              <h2>Vendor Portal</h2>
              <p>Sign in or create an account to get started</p>
            </div>

            {/* Auth0 Container */}
            <div id="auth0-login-container" className="vl-auth0-container">
              {/*
                Auth0 Universal Login will be embedded here.

                Example:
                const lock = new Auth0Lock(clientId, domain, {
                  container: 'auth0-login-container',
                  auth: {
                    redirectUrl: window.location.origin + '/callback',
                    responseType: 'token id_token',
                  }
                });
                lock.show();
              */}
              <div className="vl-auth0-placeholder">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span className="vl-placeholder-title">Auth0 Login</span>
                <span className="vl-placeholder-desc">Initialize Auth0 Lock here</span>
              </div>
            </div>

            <div className="vl-auth-footer">
              <p>
                By continuing, you agree to our{" "}
                <Link href="/terms">Terms</Link> and{" "}
                <Link href="/privacy">Privacy Policy</Link>
              </p>
            </div>
          </div>

          {/* Help Link */}
          <div className="vl-help">
            <span>Need help?</span>
            <a href="mailto:help@withbanner.com">Contact Support</a>
          </div>
        </div>
      </div>
    </div>
  );
}

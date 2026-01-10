"use client";

import ScrollReveal from "./ScrollReveal";

export default function TrustBadges() {
  return (
    <div className="trust-badges-section">
      <ScrollReveal>
        <div className="trust-badges-inner">
          <div className="trust-badge">
            <div className="trust-badge-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div className="trust-badge-text">
              <div className="trust-badge-title">SOC 2 Type II</div>
              <div className="trust-badge-subtitle">Certified</div>
            </div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-badge">
            <div className="trust-badge-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <div className="trust-badge-text">
              <div className="trust-badge-title">256-bit SSL</div>
              <div className="trust-badge-subtitle">Encryption</div>
            </div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-badge">
            <div className="trust-badge-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <div className="trust-badge-text">
              <div className="trust-badge-title">99.9% Uptime</div>
              <div className="trust-badge-subtitle">SLA Guaranteed</div>
            </div>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-badge">
            <div className="trust-badge-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className="trust-badge-text">
              <div className="trust-badge-title">GDPR</div>
              <div className="trust-badge-subtitle">Compliant</div>
            </div>
          </div>
        </div>
      </ScrollReveal>
      <style jsx>{`
        .trust-badges-section {
          background: #ffffff;
          padding: 2rem 0;
          border-top: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
        }
        .trust-badges-inner {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .trust-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .trust-badge-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f9fa;
          border-radius: 10px;
          color: #1a1a1a;
        }
        .trust-badge-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #1a1a1a;
        }
        .trust-badge-subtitle {
          font-size: 0.75rem;
          color: #666;
        }
        .trust-divider {
          width: 1px;
          height: 32px;
          background: #e0e0e0;
        }
        @media (max-width: 768px) {
          .trust-badges-inner {
            gap: 1.5rem;
          }
          .trust-divider {
            display: none;
          }
          .trust-badge {
            flex: 0 0 calc(50% - 0.75rem);
            justify-content: center;
          }
        }
        @media (max-width: 480px) {
          .trust-badge {
            flex: 0 0 100%;
          }
        }
      `}</style>
    </div>
  );
}

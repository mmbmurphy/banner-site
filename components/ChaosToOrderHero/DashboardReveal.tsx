"use client";

import { forwardRef } from "react";

interface DashboardRevealProps {
  className?: string;
}

const DashboardReveal = forwardRef<HTMLDivElement, DashboardRevealProps>(
  ({ className = "" }, ref) => {
    return (
      <div ref={ref} className={`dashboard-reveal ${className}`}>
        <div className="browser-frame">
          <div className="browser-header">
            <div className="browser-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="browser-url">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>app.withbanner.com</span>
            </div>
          </div>
          <div className="browser-content">
            <img
              src="/images/dashboard.png"
              srcSet="/images/dashboard-p-500.png 500w, /images/dashboard-p-800.png 800w, /images/dashboard-p-1080.png 1080w, /images/dashboard-p-1600.png 1600w, /images/dashboard-p-2000.png 2000w, /images/dashboard-p-2600.png 2600w, /images/dashboard-p-3200.png 3200w, /images/dashboard.png 4400w"
              sizes="(max-width: 768px) 95vw, (max-width: 1200px) 80vw, 920px"
              alt="Banner Dashboard - Your single source of truth for CapEx management"
              className="dashboard-image"
            />
          </div>
        </div>

        <style jsx>{`
          .dashboard-reveal {
            width: 100%;
            will-change: transform, opacity;
            transform-origin: center center;
          }

          .browser-frame {
            background: #1a1a1a;
            border-radius: 12px;
            overflow: hidden;
            box-shadow:
              0 25px 80px -12px rgba(0, 0, 0, 0.35),
              0 0 0 1px rgba(255, 255, 255, 0.1);
          }

          .browser-header {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 16px;
            background: linear-gradient(180deg, #2d2d2d 0%, #252525 100%);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }

          .browser-dots {
            display: flex;
            gap: 6px;
          }

          .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
          }

          .dot.red {
            background: #ff5f57;
          }

          .dot.yellow {
            background: #ffbd2e;
          }

          .dot.green {
            background: #28ca42;
          }

          .browser-url {
            display: flex;
            align-items: center;
            gap: 8px;
            background: #1a1a1a;
            padding: 6px 12px;
            border-radius: 6px;
            color: #888;
            font-size: 12px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          }

          .browser-url svg {
            color: #28ca42;
            flex-shrink: 0;
          }

          .browser-content {
            background: #fff;
          }

          .dashboard-image {
            width: 100%;
            height: auto;
            display: block;
          }

          @media (max-width: 768px) {
            .browser-header {
              padding: 8px 12px;
            }

            .dot {
              width: 8px;
              height: 8px;
            }

            .browser-url {
              font-size: 10px;
              padding: 4px 8px;
            }
          }
        `}</style>
      </div>
    );
  }
);

DashboardReveal.displayName = "DashboardReveal";
export default DashboardReveal;

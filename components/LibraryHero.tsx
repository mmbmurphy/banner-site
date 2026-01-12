"use client";

import { useState } from "react";
import SubscribePopup from "./SubscribePopup";
import LibrarySearch from "./LibrarySearch";

export default function LibraryHero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section className="library-hero">
        <div className="library-hero-bg" />
        <div className="padding-global">
          <div className="container-large">
            <div className="library-hero-content">
              <button
                className="library-hero-badge library-hero-badge-clickable"
                onClick={() => setIsPopupOpen(true)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Subscribe to Updates
              </button>
              <h1 className="library-hero-title">
                Insights & Resources for<br />
                <span className="library-hero-gradient">CapEx Excellence</span>
              </h1>
              <p className="library-hero-subtitle">
                Expert perspectives on capital expenditure management, real estate technology, and strategies for optimizing your construction projects.
              </p>
              <LibrarySearch />
              <div className="library-stats">
                <div className="library-stat">
                  <span className="library-stat-number">50+</span>
                  <span className="library-stat-label">Articles</span>
                </div>
                <div className="library-stat-divider" />
                <div className="library-stat">
                  <span className="library-stat-number">15+</span>
                  <span className="library-stat-label">Guides</span>
                </div>
                <div className="library-stat-divider" />
                <div className="library-stat">
                  <span className="library-stat-number">10+</span>
                  <span className="library-stat-label">Case Studies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SubscribePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}

"use client";

import { useState } from "react";
import SubscribePopup from "./SubscribePopup";

export default function SubscribeCTA() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section className="library-cta">
        <div className="padding-global">
          <div className="container-large">
            <div className="library-cta-card">
              <div className="library-cta-content">
                <h2 className="library-cta-title">Stay informed on CapEx best practices</h2>
                <p className="library-cta-text">
                  Get the latest insights on real estate capital management delivered to your inbox.
                </p>
              </div>
              <div className="library-cta-action">
                <button
                  className="library-cta-button"
                  onClick={() => setIsPopupOpen(true)}
                >
                  Subscribe to Updates
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SubscribePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}

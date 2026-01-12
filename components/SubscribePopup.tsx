"use client";

import { useState } from "react";
import { isPersonalEmail, isValidEmail } from "@/lib/supabase";

interface SubscribePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SubscribePopup({ isOpen, onClose }: SubscribePopupProps) {
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClose = () => {
    onClose();
    // Reset form after closing
    setTimeout(() => {
      setEmail("");
      setCompanyName("");
      setError("");
      setIsSuccess(false);
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate email format
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Check for personal email
    if (isPersonalEmail(email)) {
      setError("Please use your company email address.");
      return;
    }

    // Validate company name
    if (companyName.trim().length < 2) {
      setError("Please enter your company name.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, companyName: companyName.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setIsSuccess(true);
      localStorage.setItem("subscribed", "true");

      // Close popup after 3 seconds
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="subscribe-popup-overlay" onClick={handleClose}>
      <div className="subscribe-popup" onClick={(e) => e.stopPropagation()}>
        <button className="subscribe-popup-close" onClick={handleClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {isSuccess ? (
          <div className="subscribe-popup-success">
            <div className="subscribe-popup-success-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="subscribe-popup-success-title">You're subscribed!</h3>
            <p className="subscribe-popup-success-text">
              Thanks for subscribing. We'll keep you updated on CapEx best practices and industry insights.
            </p>
          </div>
        ) : (
          <>
            <div className="subscribe-popup-header">
              <div className="subscribe-popup-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="subscribe-popup-title">Stay ahead in CapEx management</h3>
              <p className="subscribe-popup-subtitle">
                Get expert insights, industry trends, and best practices delivered to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="subscribe-popup-form">
              <div className="subscribe-popup-field">
                <label htmlFor="subscribe-email" className="subscribe-popup-label">
                  Work Email
                </label>
                <input
                  id="subscribe-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="subscribe-popup-input"
                  required
                />
              </div>

              <div className="subscribe-popup-field">
                <label htmlFor="subscribe-company" className="subscribe-popup-label">
                  Company Name
                </label>
                <input
                  id="subscribe-company"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Your company"
                  className="subscribe-popup-input"
                  required
                />
              </div>

              {error && (
                <div className="subscribe-popup-error">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="subscribe-popup-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>

              <p className="subscribe-popup-disclaimer">
                No spam, unsubscribe anytime. By subscribing you agree to our Privacy Policy.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

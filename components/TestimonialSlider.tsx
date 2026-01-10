"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const testimonials = [
  {
    image: "/images/Drew_Gravina_-_3_u9yqfa.webp",
    quote:
      "Banner completely changed how we manage bidding and contracting. Automating our RFP workflow now saves us over $900,000 every year, and the accuracy and transparency we get across vendors is unlike anything we've had before.",
    name: "Drew Gravina",
    position: "SVP Facilities Operations",
    company: "Morgan Properties",
    logo: "/images/client-logos/morgan-properties.png",
    metric: "$900K+",
    metricLabel: "saved annually",
  },
  {
    image: "/images/Jon-Jacobs---Tourmaline.jpeg",
    quote:
      "If our prior software made 4 things easier, it made 4 things harder - Banner is our ideal system.",
    name: "Jon Jacobs",
    position: "Managing Principal, COO",
    company: "Tourmaline",
    logo: "/images/client-logos/tourmaline.png",
  },
  {
    image: "/images/portrait-casestudy-banner.webp",
    quote:
      "We implemented Banner because we can manage our entire portfolio on it and have access to every stakeholder involved, along with live information. It provides a really meaningful check and balance in our CapEx projects.",
    name: "Jeff Robertson",
    position: "SVP Asset Management",
    company: "FCP",
    logo: "/images/client-logos/fcp.svg",
    metric: "100%",
    metricLabel: "portfolio visibility",
  },
  {
    image: "/images/dave-ruth.png",
    quote:
      "Banner gives us the visibility we need to make confident capital decisions across our entire portfolio. The real-time forecasting has transformed how we approach budgeting.",
    name: "Dave Ruth",
    position: "VP - Construction",
    company: "Livcor",
    logo: "/images/client-logos/livcor.svg",
    metric: "Real-time",
    metricLabel: "forecasting",
  },
];

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = useCallback((index: number, direction: "next" | "prev" = "next") => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection(direction);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    const next = (currentSlide + 1) % testimonials.length;
    goToSlide(next, "next");
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    const prev = (currentSlide - 1 + testimonials.length) % testimonials.length;
    goToSlide(prev, "prev");
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextSlide, 6000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, nextSlide]);

  const current = testimonials[currentSlide];

  return (
    <section className="testimonial-section-new">
      <div className="testimonial-container">
        {/* Header */}
        <div className="testimonial-header">
          <span className="testimonial-eyebrow">Customer Stories</span>
          <h2 className="testimonial-title">Hear it from your peers</h2>
          <p className="testimonial-subtitle">
            Leading real estate teams trust Banner to manage billions in capital expenditures
          </p>
        </div>

        {/* Main testimonial card */}
        <div
          className="testimonial-card-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`testimonial-card ${isAnimating ? `animating-${slideDirection}` : ""}`}>
            {/* Quote mark decoration */}
            <div className="testimonial-quote-mark">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4 36C10.8 36 8 34.8 6 32.4C4 30 3 26.8 3 22.8C3 18.4 4.4 14.4 7.2 10.8C10 7.2 14.2 4.4 19.8 2.4L21.6 5.4C17.6 7 14.6 9 12.6 11.4C10.6 13.8 9.6 16.4 9.6 19.2C9.6 20 9.8 20.6 10.2 21C10.6 21.4 11 21.6 11.4 21.6C12.2 21.2 13.2 21 14.4 21C16.8 21 18.8 21.8 20.4 23.4C22 25 22.8 27 22.8 29.4C22.8 31.8 22 33.8 20.4 35.4C18.8 35.8 16.8 36 14.4 36ZM38.4 36C34.8 36 32 34.8 30 32.4C28 30 27 26.8 27 22.8C27 18.4 28.4 14.4 31.2 10.8C34 7.2 38.2 4.4 43.8 2.4L45.6 5.4C41.6 7 38.6 9 36.6 11.4C34.6 13.8 33.6 16.4 33.6 19.2C33.6 20 33.8 20.6 34.2 21C34.6 21.4 35 21.6 35.4 21.6C36.2 21.2 37.2 21 38.4 21C40.8 21 42.8 21.8 44.4 23.4C46 25 46.8 27 46.8 29.4C46.8 31.8 46 33.8 44.4 35.4C42.8 35.8 40.8 36 38.4 36Z" fill="currentColor"/>
              </svg>
            </div>

            {/* Content grid */}
            <div className="testimonial-content-grid">
              {/* Left: Image */}
              <div className="testimonial-image-section">
                <div className="testimonial-image-wrapper">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="testimonial-image"
                  />
                  <div className="testimonial-image-ring" />
                </div>

                {/* Company logo */}
                <div className="testimonial-logo-wrapper">
                  <img
                    src={current.logo}
                    alt={current.company}
                    className="testimonial-logo"
                  />
                </div>
              </div>

              {/* Right: Quote and info */}
              <div className="testimonial-quote-section">
                {/* Metric badge */}
                {current.metric && (
                  <div className="testimonial-metric-badge">
                    <span className="metric-value">{current.metric}</span>
                    <span className="metric-label">{current.metricLabel}</span>
                  </div>
                )}

                {/* Quote */}
                <blockquote className="testimonial-quote">
                  {current.quote}
                </blockquote>

                {/* Author info */}
                <div className="testimonial-author">
                  <div className="testimonial-author-name">{current.name}</div>
                  <div className="testimonial-author-role">
                    {current.position}, {current.company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              className="testimonial-nav-btn testimonial-nav-prev"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className="testimonial-nav-btn testimonial-nav-next"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index, index > currentSlide ? "next" : "prev")}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="testimonial-progress">
            <div
              className="testimonial-progress-fill"
              style={{
                width: `${((currentSlide + 1) / testimonials.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Trust indicators */}
        <div className="testimonial-trust">
          <span className="trust-text">Trusted by industry leaders managing</span>
          <div className="trust-stats">
            <div className="trust-stat">
              <span className="trust-stat-value">$15B+</span>
              <span className="trust-stat-label">in CapEx</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-stat">
              <span className="trust-stat-value">1M+</span>
              <span className="trust-stat-label">units</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-stat">
              <span className="trust-stat-value">500+</span>
              <span className="trust-stat-label">companies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

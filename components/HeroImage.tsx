"use client";

import { useState } from "react";
import ParallaxImage from "./ParallaxImage";

interface HeroImageProps {
  src: string;
  srcSet: string;
  alt: string;
}

export default function HeroImage({ src, srcSet, alt }: HeroImageProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="hero-image-container">
      {!isPlaying ? (
        <>
          <img
            src="/images/hero-bg-pill-large.png"
            loading="lazy"
            sizes="(max-width: 2584px) 100vw, 2584px"
            srcSet="/images/hero-bg-pill-large-p-500.png 500w, /images/hero-bg-pill-large-p-800.png 800w, /images/hero-bg-pill-large-p-1080.png 1080w, /images/hero-bg-pill-large-p-1600.png 1600w, /images/hero-bg-pill-large.png 2584w"
            alt=""
            className="hero-bg-pill"
          />
          <ParallaxImage
            src={src}
            srcSet={srcSet}
            alt={alt}
            className="hero-dashboard-image"
            speed={0.2}
          />
          {/* Watch Demo button temporarily hidden
          <button
            className="hero-play-button"
            onClick={() => setIsPlaying(true)}
            aria-label="Watch product demo"
          >
            <div className="hero-play-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="hero-play-text">Watch Demo</span>
          </button>
          */}
          {/* Video badge temporarily hidden
          <div className="hero-image-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>2 min overview</span>
          </div>
          */}
        </>
      ) : (
        <div className="hero-video-container">
          <div className="hero-video-placeholder">
            <div className="hero-video-message">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                <line x1="7" y1="2" x2="7" y2="22" />
                <line x1="17" y1="2" x2="17" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="2" y1="7" x2="7" y2="7" />
                <line x1="2" y1="17" x2="7" y2="17" />
                <line x1="17" y1="17" x2="22" y2="17" />
                <line x1="17" y1="7" x2="22" y2="7" />
              </svg>
              <p>Product demo video</p>
              <button className="hero-close-video" onClick={() => setIsPlaying(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .hero-image-container {
          position: relative;
        }
        .hero-play-button {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border: none;
          border-radius: 100px;
          padding: 0.75rem 1.5rem 0.75rem 0.75rem;
          cursor: pointer;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          z-index: 10;
        }
        .hero-play-button:hover {
          transform: translateX(-50%) translateY(-2px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }
        .hero-play-icon {
          width: 40px;
          height: 40px;
          background: #f25e53;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        .hero-play-text {
          font-size: 0.9375rem;
          font-weight: 600;
          color: #1a1a1a;
        }
        .hero-image-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          border-radius: 100px;
          padding: 0.5rem 1rem;
          font-size: 0.8125rem;
          font-weight: 500;
          color: #1a1a1a;
          z-index: 10;
        }
        .hero-video-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16/10;
          border-radius: 16px;
          overflow: hidden;
          background: #1a1a1a;
        }
        .hero-video-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-video-message {
          text-align: center;
          color: #ffffff;
        }
        .hero-video-message p {
          margin: 1rem 0;
          opacity: 0.8;
        }
        .hero-close-video {
          background: #f25e53;
          color: white;
          border: none;
          padding: 0.5rem 1.5rem;
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .hero-close-video:hover {
          background: #e04a3f;
        }
        @media (max-width: 768px) {
          .hero-play-button {
            bottom: 1rem;
            padding: 0.5rem 1rem 0.5rem 0.5rem;
          }
          .hero-play-icon {
            width: 32px;
            height: 32px;
          }
          .hero-play-text {
            font-size: 0.8125rem;
          }
          .hero-image-badge {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

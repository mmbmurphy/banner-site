"use client";

import { useState, useEffect, useRef } from "react";

interface VideoModalProps {
  videoUrl: string;
  thumbnailSrc: string;
  thumbnailSrcSet?: string;
  alt?: string;
}

export default function VideoModal({
  videoUrl,
  thumbnailSrc,
  thumbnailSrcSet,
  alt = "Play video",
}: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Pause video when modal closes
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Thumbnail with play button */}
      <div className="video-thumbnail-wrapper" onClick={openModal}>
        <img
          className="video-thumbnail-image"
          src={thumbnailSrc}
          srcSet={thumbnailSrcSet}
          alt={alt}
          loading="lazy"
        />
        <div className="video-play-overlay">
          <div className="video-play-button">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="video-modal-backdrop" onClick={closeModal}>
          <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button className="video-modal-close" onClick={closeModal} aria-label="Close video">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Video player */}
            <div className="video-modal-content">
              <video
                ref={videoRef}
                controls
                autoPlay
                playsInline
                className="video-modal-player"
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

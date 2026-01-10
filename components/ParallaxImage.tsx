"use client";

import { useEffect, useRef, useState } from "react";

interface ParallaxImageProps {
  src: string;
  srcSet?: string;
  alt: string;
  className?: string;
  speed?: number;
}

export default function ParallaxImage({
  src,
  srcSet,
  alt,
  className = "",
  speed = 0.3,
}: ParallaxImageProps) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only apply parallax when element is in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const parallaxOffset = (scrollProgress - 0.5) * 100 * speed;
        setOffset(parallaxOffset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        overflow: "hidden",
      }}
    >
      <img
        src={src}
        srcSet={srcSet}
        alt={alt}
        loading="lazy"
        style={{
          transform: `translate3d(0, ${offset}px, 0) scale(1.1)`,
          transition: "transform 0.1s ease-out",
          willChange: "transform",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

"use client";

import { useRef, useState, ReactNode } from "react";
import Link from "next/link";

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

export default function GlowButton({
  children,
  href,
  className = "",
  onClick,
  external = false,
}: GlowButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setGlowPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const content = (
    <div
      ref={buttonRef}
      className={`glow-button-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ position: "relative", display: "inline-block" }}
    >
      <div
        className="glow-effect"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "inherit",
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(circle 80px at ${glowPosition.x}px ${glowPosition.y}px, rgba(255, 255, 255, 0.3), transparent)`,
          pointerEvents: "none",
          transition: "opacity 0.3s ease",
        }}
      />
      {children}
      <style jsx>{`
        .glow-button-wrapper {
          overflow: hidden;
          border-radius: inherit;
        }

        .glow-button-wrapper:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(242, 94, 83, 0.3);
        }

        .glow-button-wrapper {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
      `}</style>
    </div>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    return <Link href={href}>{content}</Link>;
  }

  return <div onClick={onClick}>{content}</div>;
}

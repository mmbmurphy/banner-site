"use client";

import { forwardRef } from "react";
import type { IconConfig } from "./iconConfigs";

interface ChaoticIconProps {
  config: IconConfig;
}

const ChaoticIcon = forwardRef<HTMLDivElement, ChaoticIconProps>(
  ({ config }, ref) => {
    const { id, src, initialX, initialY, rotation, scale } = config;

    return (
      <div
        ref={ref}
        className="chaotic-icon"
        data-icon-id={id}
        style={{
          position: "absolute",
          left: `${initialX}vw`,
          top: `${initialY}vh`,
          transform: `rotate(${rotation}deg) scale(${scale})`,
          willChange: "transform, opacity",
          pointerEvents: "none",
        }}
      >
        <img
          src={src}
          alt=""
          aria-hidden="true"
          draggable={false}
          style={{
            width: "88px",
            height: "88px",
            display: "block",
            filter: "drop-shadow(0 8px 20px rgba(0, 0, 0, 0.2))",
          }}
        />
      </div>
    );
  }
);

ChaoticIcon.displayName = "ChaoticIcon";
export default ChaoticIcon;

export type DocumentType = "spreadsheet" | "email" | "folder" | "chart" | "invoice" | "calendar";
export type ElementSize = "sm" | "md" | "lg";

export interface FloatingElementConfig {
  id: string;
  type: DocumentType;
  size: ElementSize;
  // Position in viewport percentage
  x: number;
  y: number;
  // Initial rotation
  rotation: number;
  // Depth layer (0 = back, 1 = middle, 2 = front) - affects parallax speed
  depth: number;
  // Idle animation offset (so they don't all bob in sync)
  idleOffset: number;
  // Animation delay for stagger
  delay: number;
}

// 24 floating elements distributed across viewport with varying depths
export const floatingElements: FloatingElementConfig[] = [
  // === BACK LAYER (depth 0) - larger, slower, more opacity ===

  // Top area
  { id: "spreadsheet-back-1", type: "spreadsheet", size: "lg", x: 8, y: -12, rotation: -15, depth: 0, idleOffset: 0, delay: 0 },
  { id: "chart-back-1", type: "chart", size: "lg", x: 85, y: -8, rotation: 12, depth: 0, idleOffset: 0.3, delay: 0.05 },

  // Left side
  { id: "folder-back-1", type: "folder", size: "lg", x: -15, y: 25, rotation: 20, depth: 0, idleOffset: 0.6, delay: 0.1 },
  { id: "email-back-1", type: "email", size: "lg", x: -12, y: 65, rotation: -25, depth: 0, idleOffset: 0.2, delay: 0.15 },

  // Right side
  { id: "invoice-back-1", type: "invoice", size: "lg", x: 108, y: 35, rotation: 18, depth: 0, idleOffset: 0.4, delay: 0.2 },
  { id: "calendar-back-1", type: "calendar", size: "lg", x: 105, y: 75, rotation: -20, depth: 0, idleOffset: 0.8, delay: 0.25 },

  // Bottom area
  { id: "spreadsheet-back-2", type: "spreadsheet", size: "lg", x: 25, y: 108, rotation: 25, depth: 0, idleOffset: 0.5, delay: 0.3 },
  { id: "chart-back-2", type: "chart", size: "lg", x: 70, y: 105, rotation: -30, depth: 0, idleOffset: 0.1, delay: 0.35 },

  // === MIDDLE LAYER (depth 1) - medium size ===

  // Top area
  { id: "email-mid-1", type: "email", size: "md", x: 30, y: -10, rotation: 22, depth: 1, idleOffset: 0.15, delay: 0.02 },
  { id: "folder-mid-1", type: "folder", size: "md", x: 55, y: -15, rotation: -18, depth: 1, idleOffset: 0.45, delay: 0.08 },
  { id: "invoice-mid-1", type: "invoice", size: "md", x: 75, y: -5, rotation: 8, depth: 1, idleOffset: 0.7, delay: 0.12 },

  // Sides
  { id: "calendar-mid-1", type: "calendar", size: "md", x: -8, y: 45, rotation: 35, depth: 1, idleOffset: 0.25, delay: 0.18 },
  { id: "spreadsheet-mid-1", type: "spreadsheet", size: "md", x: 106, y: 55, rotation: -28, depth: 1, idleOffset: 0.55, delay: 0.22 },

  // Bottom
  { id: "chart-mid-1", type: "chart", size: "md", x: 10, y: 102, rotation: -35, depth: 1, idleOffset: 0.35, delay: 0.28 },
  { id: "email-mid-2", type: "email", size: "md", x: 45, y: 110, rotation: 15, depth: 1, idleOffset: 0.65, delay: 0.32 },
  { id: "folder-mid-2", type: "folder", size: "md", x: 88, y: 106, rotation: -22, depth: 1, idleOffset: 0.85, delay: 0.38 },

  // === FRONT LAYER (depth 2) - smaller, faster, closer ===

  // Scattered around edges
  { id: "invoice-front-1", type: "invoice", size: "sm", x: 18, y: -5, rotation: -12, depth: 2, idleOffset: 0.1, delay: 0.04 },
  { id: "calendar-front-1", type: "calendar", size: "sm", x: 65, y: -8, rotation: 28, depth: 2, idleOffset: 0.4, delay: 0.1 },
  { id: "spreadsheet-front-1", type: "spreadsheet", size: "sm", x: 95, y: 15, rotation: -32, depth: 2, idleOffset: 0.6, delay: 0.16 },
  { id: "chart-front-1", type: "chart", size: "sm", x: -5, y: 85, rotation: 40, depth: 2, idleOffset: 0.2, delay: 0.24 },
  { id: "email-front-1", type: "email", size: "sm", x: 102, y: 90, rotation: -15, depth: 2, idleOffset: 0.5, delay: 0.3 },
  { id: "folder-front-1", type: "folder", size: "sm", x: 55, y: 105, rotation: 20, depth: 2, idleOffset: 0.75, delay: 0.36 },
  { id: "invoice-front-2", type: "invoice", size: "sm", x: -10, y: 15, rotation: 25, depth: 2, idleOffset: 0.3, delay: 0.42 },
  { id: "calendar-front-2", type: "calendar", size: "sm", x: 98, y: 50, rotation: -38, depth: 2, idleOffset: 0.9, delay: 0.48 },
];

// Depth-based properties
export const depthConfig = {
  // Back layer - large, subtle, slow
  0: {
    scale: 1.0,
    opacity: 0.7,
    parallaxSpeed: 0.3,
    idleAmplitude: 8,
    idleDuration: 4,
  },
  // Middle layer - medium
  1: {
    scale: 1.0,
    opacity: 0.85,
    parallaxSpeed: 0.6,
    idleAmplitude: 12,
    idleDuration: 3.5,
  },
  // Front layer - small, vivid, fast
  2: {
    scale: 1.0,
    opacity: 1.0,
    parallaxSpeed: 1.0,
    idleAmplitude: 16,
    idleDuration: 3,
  },
} as const;

// Get elements filtered by viewport for responsive
export const getResponsiveElements = (width: number): FloatingElementConfig[] => {
  if (width < 768) {
    // Mobile: fewer elements, skip back layer
    return floatingElements.filter(el => el.depth >= 1).slice(0, 12);
  }
  if (width < 1024) {
    // Tablet: moderate elements
    return floatingElements.slice(0, 18);
  }
  // Desktop: all elements
  return floatingElements;
};

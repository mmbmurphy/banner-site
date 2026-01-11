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

// 24 floating elements on LEFT and RIGHT sides only (avoiding center text)
// Left side: x 0-15%, Right side: x 85-100%
export const floatingElements: FloatingElementConfig[] = [
  // === BACK LAYER (depth 0) - larger, on edges ===
  // Left side
  { id: "spreadsheet-back-1", type: "spreadsheet", size: "lg", x: -2, y: 8, rotation: -15, depth: 0, idleOffset: 0, delay: 0 },
  { id: "folder-back-1", type: "folder", size: "lg", x: 2, y: 25, rotation: 20, depth: 0, idleOffset: 0.6, delay: 0.1 },
  { id: "invoice-back-1", type: "invoice", size: "lg", x: -3, y: 42, rotation: 15, depth: 0, idleOffset: 0.4, delay: 0.2 },
  { id: "spreadsheet-back-2", type: "spreadsheet", size: "lg", x: 5, y: 58, rotation: 22, depth: 0, idleOffset: 0.5, delay: 0.3 },
  // Right side
  { id: "chart-back-1", type: "chart", size: "lg", x: 88, y: 6, rotation: 12, depth: 0, idleOffset: 0.3, delay: 0.05 },
  { id: "email-back-1", type: "email", size: "lg", x: 92, y: 22, rotation: -18, depth: 0, idleOffset: 0.2, delay: 0.15 },
  { id: "calendar-back-1", type: "calendar", size: "lg", x: 86, y: 40, rotation: -12, depth: 0, idleOffset: 0.8, delay: 0.25 },
  { id: "chart-back-2", type: "chart", size: "lg", x: 90, y: 55, rotation: -20, depth: 0, idleOffset: 0.1, delay: 0.35 },

  // === MIDDLE LAYER (depth 1) - medium size, on edges ===
  // Left side
  { id: "email-mid-1", type: "email", size: "md", x: 3, y: 5, rotation: 22, depth: 1, idleOffset: 0.15, delay: 0.02 },
  { id: "invoice-mid-1", type: "invoice", size: "md", x: -1, y: 18, rotation: 10, depth: 1, idleOffset: 0.7, delay: 0.12 },
  { id: "spreadsheet-mid-1", type: "spreadsheet", size: "md", x: 6, y: 35, rotation: -15, depth: 1, idleOffset: 0.55, delay: 0.22 },
  { id: "email-mid-2", type: "email", size: "md", x: 1, y: 52, rotation: 12, depth: 1, idleOffset: 0.65, delay: 0.32 },
  // Right side
  { id: "folder-mid-1", type: "folder", size: "md", x: 90, y: 3, rotation: -18, depth: 1, idleOffset: 0.45, delay: 0.08 },
  { id: "calendar-mid-1", type: "calendar", size: "md", x: 94, y: 18, rotation: -25, depth: 1, idleOffset: 0.25, delay: 0.18 },
  { id: "chart-mid-1", type: "chart", size: "md", x: 88, y: 32, rotation: 18, depth: 1, idleOffset: 0.35, delay: 0.28 },
  { id: "folder-mid-2", type: "folder", size: "md", x: 92, y: 48, rotation: -22, depth: 1, idleOffset: 0.85, delay: 0.38 },

  // === FRONT LAYER (depth 2) - smaller, on edges ===
  // Left side
  { id: "invoice-front-1", type: "invoice", size: "sm", x: 8, y: 12, rotation: -12, depth: 2, idleOffset: 0.1, delay: 0.04 },
  { id: "spreadsheet-front-1", type: "spreadsheet", size: "sm", x: 4, y: 28, rotation: -20, depth: 2, idleOffset: 0.6, delay: 0.16 },
  { id: "email-front-1", type: "email", size: "sm", x: 10, y: 45, rotation: -10, depth: 2, idleOffset: 0.5, delay: 0.3 },
  { id: "invoice-front-2", type: "invoice", size: "sm", x: 2, y: 62, rotation: 25, depth: 2, idleOffset: 0.3, delay: 0.42 },
  // Right side
  { id: "calendar-front-1", type: "calendar", size: "sm", x: 91, y: 10, rotation: 28, depth: 2, idleOffset: 0.4, delay: 0.1 },
  { id: "chart-front-1", type: "chart", size: "sm", x: 86, y: 25, rotation: 15, depth: 2, idleOffset: 0.2, delay: 0.24 },
  { id: "folder-front-1", type: "folder", size: "sm", x: 93, y: 42, rotation: 20, depth: 2, idleOffset: 0.75, delay: 0.36 },
  { id: "calendar-front-2", type: "calendar", size: "sm", x: 88, y: 58, rotation: -30, depth: 2, idleOffset: 0.9, delay: 0.48 },
];

// Depth-based properties
export const depthConfig = {
  // Back layer - large, more visible
  0: {
    scale: 1.0,
    opacity: 0.9,
    parallaxSpeed: 0.3,
    idleAmplitude: 10,
    idleDuration: 4,
  },
  // Middle layer - medium
  1: {
    scale: 1.0,
    opacity: 0.95,
    parallaxSpeed: 0.6,
    idleAmplitude: 14,
    idleDuration: 3.5,
  },
  // Front layer - small, vivid, fast
  2: {
    scale: 1.0,
    opacity: 1.0,
    parallaxSpeed: 1.0,
    idleAmplitude: 18,
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

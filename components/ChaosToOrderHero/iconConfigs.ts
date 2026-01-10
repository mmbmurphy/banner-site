export interface IconConfig {
  id: string;
  src: string;
  initialX: number;  // vw units
  initialY: number;  // vh units
  rotation: number;  // degrees
  scale: number;
  delay: number;     // stagger delay (0-1)
}

// 18 icons distributed chaotically around viewport edges
export const iconConfigs: IconConfig[] = [
  // Top edge (above viewport)
  {
    id: "calc-1",
    src: "/images/calc.svg",
    initialX: 15,
    initialY: -8,
    rotation: -25,
    scale: 1.2,
    delay: 0,
  },
  {
    id: "file-1",
    src: "/images/FileDashed.svg",
    initialX: 35,
    initialY: -5,
    rotation: 15,
    scale: 0.9,
    delay: 0.05,
  },
  {
    id: "tree-1",
    src: "/images/TreeStructure.svg",
    initialX: 55,
    initialY: -10,
    rotation: 30,
    scale: 1.1,
    delay: 0.02,
  },
  {
    id: "pad-1",
    src: "/images/pad.svg",
    initialX: 78,
    initialY: -6,
    rotation: -10,
    scale: 1.0,
    delay: 0.08,
  },

  // Right edge (beyond viewport)
  {
    id: "list-1",
    src: "/images/list.svg",
    initialX: 105,
    initialY: 15,
    rotation: 45,
    scale: 0.85,
    delay: 0.12,
  },
  {
    id: "copy-1",
    src: "/images/copy.svg",
    initialX: 108,
    initialY: 40,
    rotation: -20,
    scale: 1.15,
    delay: 0.15,
  },
  {
    id: "calc-2",
    src: "/images/calc.svg",
    initialX: 106,
    initialY: 65,
    rotation: 35,
    scale: 0.95,
    delay: 0.18,
  },

  // Bottom edge (below viewport)
  {
    id: "file-2",
    src: "/images/FileDashed.svg",
    initialX: 85,
    initialY: 108,
    rotation: -35,
    scale: 1.05,
    delay: 0.22,
  },
  {
    id: "tree-2",
    src: "/images/TreeStructure.svg",
    initialX: 60,
    initialY: 105,
    rotation: 20,
    scale: 0.9,
    delay: 0.25,
  },
  {
    id: "pad-2",
    src: "/images/pad.svg",
    initialX: 40,
    initialY: 110,
    rotation: -45,
    scale: 1.1,
    delay: 0.28,
  },
  {
    id: "list-2",
    src: "/images/list.svg",
    initialX: 20,
    initialY: 106,
    rotation: 60,
    scale: 0.8,
    delay: 0.3,
  },

  // Left edge (beyond viewport)
  {
    id: "copy-2",
    src: "/images/copy.svg",
    initialX: -8,
    initialY: 80,
    rotation: -15,
    scale: 1.0,
    delay: 0.32,
  },
  {
    id: "calc-3",
    src: "/images/calc.svg",
    initialX: -10,
    initialY: 55,
    rotation: 25,
    scale: 0.75,
    delay: 0.35,
  },
  {
    id: "file-3",
    src: "/images/FileDashed.svg",
    initialX: -6,
    initialY: 30,
    rotation: -50,
    scale: 1.2,
    delay: 0.38,
  },

  // Corners and mid-positions for depth
  {
    id: "tree-3",
    src: "/images/TreeStructure.svg",
    initialX: -5,
    initialY: 8,
    rotation: 40,
    scale: 0.85,
    delay: 0.1,
  },
  {
    id: "pad-3",
    src: "/images/pad.svg",
    initialX: 95,
    initialY: 90,
    rotation: -30,
    scale: 1.15,
    delay: 0.2,
  },
  {
    id: "list-3",
    src: "/images/list.svg",
    initialX: 5,
    initialY: 95,
    rotation: 55,
    scale: 0.9,
    delay: 0.27,
  },
  {
    id: "copy-3",
    src: "/images/copy.svg",
    initialX: 92,
    initialY: -3,
    rotation: -40,
    scale: 1.0,
    delay: 0.04,
  },
];

// Get subset for mobile (fewer icons)
export const getMobileIcons = (): IconConfig[] => {
  return iconConfigs.filter((_, index) => index % 2 === 0).slice(0, 10);
};

// Get subset for tablet
export const getTabletIcons = (): IconConfig[] => {
  return iconConfigs.slice(0, 14);
};

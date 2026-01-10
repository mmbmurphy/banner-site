// CMS Content Types and Data
// This file simulates a CMS - replace with actual CMS integration (Sanity, Contentful, etc.)

export interface Solution {
  slug: string;
  title: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  features: {
    title: string;
    description: string;
    icon?: string;
  }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image?: string;
}

// Static content - replace with CMS fetch
export const solutions: Solution[] = [
  {
    slug: "multifamily",
    title: "Multifamily",
    description: "CapEx management for apartment portfolios",
    heroTitle: "CapEx Management for Multifamily Properties",
    heroDescription:
      "Streamline capital expenditure planning and execution across your apartment portfolio with Banner.",
    features: [
      {
        title: "Portfolio-Wide Visibility",
        description:
          "See all your properties' CapEx projects in one unified dashboard.",
      },
      {
        title: "Unit Turn Tracking",
        description:
          "Track renovations and unit turns with real-time budget updates.",
      },
      {
        title: "Vendor Management",
        description:
          "Manage contractors and vendors across all your properties.",
      },
    ],
  },
  {
    slug: "commercial",
    title: "Commercial",
    description: "Streamline capital projects for office & retail",
    heroTitle: "CapEx Management for Commercial Real Estate",
    heroDescription:
      "Manage tenant improvements, building upgrades, and capital projects for office and retail properties.",
    features: [
      {
        title: "Tenant Improvement Tracking",
        description:
          "Manage TI allowances and buildouts from lease to completion.",
      },
      {
        title: "Building Systems Management",
        description:
          "Track HVAC, elevator, and infrastructure capital projects.",
      },
      {
        title: "Budget Forecasting",
        description:
          "Plan multi-year capital budgets with confidence.",
      },
    ],
  },
  {
    slug: "developers",
    title: "Developers",
    description: "Track development budgets from ground-up",
    heroTitle: "Development Budget Management",
    heroDescription:
      "Track ground-up development projects from land acquisition through stabilization.",
    features: [
      {
        title: "Draw Management",
        description:
          "Track construction draws and lender requirements in real-time.",
      },
      {
        title: "Cost Tracking",
        description:
          "Monitor hard and soft costs against your pro forma.",
      },
      {
        title: "Timeline Integration",
        description:
          "Connect budgets to construction schedules and milestones.",
      },
    ],
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

export function getAllSolutions(): Solution[] {
  return solutions;
}

// Blog posts - replace with CMS fetch
export const blogPosts: BlogPost[] = [
  {
    slug: "capex-best-practices",
    title: "5 CapEx Management Best Practices for 2024",
    excerpt:
      "Learn the key strategies for effective capital expenditure management in real estate.",
    content: "Full blog post content here...",
    author: "Banner Team",
    date: "2024-01-15",
    image: "/images/Placeholder-Image.png",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

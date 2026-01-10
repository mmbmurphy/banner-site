// CMS Content Types and Data
// This file simulates a CMS - replace with actual CMS integration (Sanity, Contentful, etc.)

export interface Solution {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  icon: string;
  logosSectionTitle: string;
  features: {
    title: string;
    description: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
    image: string;
    logo: string;
  };
  ctaTitle: string;
  ctaDescription: string;
  faqs: {
    question: string;
    answer: string;
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
    tagline: "For Apartment Portfolios",
    description: "CapEx management for apartment portfolios",
    heroTitle: "Real-time portfolio visibility and cost control to protect NOI",
    heroDescription:
      "Banner helps multifamily owners and operators manage capital expenditures across their entire portfolio—from unit turns to major renovations—with complete visibility and budget control.",
    heroImage: "/images/Imagery.png",
    icon: "/images/Frame-34375601.png",
    logosSectionTitle: "Trusted by leading multifamily operators",
    features: [
      {
        title: "Portfolio-Wide Visibility",
        description:
          "See every CapEx project across all properties in one unified dashboard. Track budgets, timelines, and vendor performance at both property and portfolio levels.",
      },
      {
        title: "Unit Turn Management",
        description:
          "Streamline unit renovations with standardized scopes, automated approvals, and real-time cost tracking. Reduce turn times and protect your renovation budgets.",
      },
      {
        title: "Vendor Coordination",
        description:
          "Manage contractors and vendors across your portfolio. Track bids, contracts, invoices, and performance metrics in one centralized system.",
      },
    ],
    stats: [
      { value: "5%", label: "average reduction in CapEx costs" },
      { value: "70%", label: "reduction in administrative work" },
      { value: "2X", label: "faster project completion" },
    ],
    testimonial: {
      quote:
        "Banner has transformed how we manage CapEx across our multifamily portfolio. We now have complete visibility into every project and can make data-driven decisions in real-time.",
      author: "Sarah Chen",
      role: "VP of Asset Management",
      company: "Summit Real Estate Group",
      image: "/images/Drew_Gravina_-_3_u9yqfa.webp",
      logo: "/images/client-logos/summit.svg",
    },
    ctaTitle: "Ready to streamline your multifamily CapEx?",
    ctaDescription:
      "See how Banner can help your team manage capital projects more efficiently across your entire portfolio.",
    faqs: [
      {
        question: "How does Banner integrate with our property management system?",
        answer:
          "Banner integrates with major property management systems including Yardi, RealPage, and Entrata. We sync property data, chart of accounts, and can push approved invoices directly to your accounting system.",
      },
      {
        question: "Can Banner handle unit turn workflows?",
        answer:
          "Yes! Banner includes specialized unit turn management with standardized scopes, photo documentation, vendor assignment, and automated approval workflows tailored for high-volume unit renovations.",
      },
      {
        question: "How long does implementation take?",
        answer:
          "Most multifamily clients are fully onboarded within 4-6 weeks. This includes data migration, integrations setup, team training, and workflow configuration.",
      },
    ],
  },
  {
    slug: "commercial",
    title: "Commercial",
    tagline: "For Office & Retail",
    description: "Streamline capital projects for office & retail",
    heroTitle: "CapEx clarity and governance across complex commercial portfolios",
    heroDescription:
      "Banner gives commercial real estate teams the tools to manage tenant improvements, building upgrades, and long-term capital planning with complete transparency.",
    heroImage: "/images/Imagery3.png",
    icon: "/images/Frame-34375601_1.png",
    logosSectionTitle: "Trusted by commercial real estate leaders",
    features: [
      {
        title: "Tenant Improvement Tracking",
        description:
          "Manage TI allowances from lease execution to project completion. Track budgets, approve change orders, and ensure timely delivery of tenant spaces.",
      },
      {
        title: "Building Systems Management",
        description:
          "Plan and track capital projects for HVAC, elevators, roofing, and other building systems. Maintain compliance and extend asset life.",
      },
      {
        title: "Long-Term Capital Planning",
        description:
          "Build multi-year capital budgets with confidence. Forecast major expenditures and align capital planning with asset strategy.",
      },
    ],
    stats: [
      { value: "40%", label: "faster TI project delivery" },
      { value: "25%", label: "reduction in budget overruns" },
      { value: "3X", label: "improvement in reporting speed" },
    ],
    testimonial: {
      quote:
        "Managing TIs across our office portfolio used to be chaos. Banner brought order to the process and gave us visibility we never had before.",
      author: "Michael Torres",
      role: "Director of Construction",
      company: "Griffin Partners",
      image: "/images/Drew_Gravina_-_3_u9yqfa.webp",
      logo: "/images/client-logos/griffin.svg",
    },
    ctaTitle: "Ready to streamline your commercial CapEx?",
    ctaDescription:
      "See how Banner can help you manage tenant improvements and building capital projects more effectively.",
    faqs: [
      {
        question: "Can Banner handle complex TI approval workflows?",
        answer:
          "Yes, Banner supports multi-level approval workflows for tenant improvements, including landlord contributions, tenant allowances, and change order management with full audit trails.",
      },
      {
        question: "How does Banner help with capital planning?",
        answer:
          "Banner enables you to build rolling 5-10 year capital plans, track reserve funding, and integrate planned projects with annual budgets. You can model different scenarios and adjust plans as conditions change.",
      },
      {
        question: "Does Banner integrate with commercial accounting systems?",
        answer:
          "Yes, Banner integrates with MRI, Yardi, and other commercial real estate accounting platforms to sync property data and push approved invoices for payment.",
      },
    ],
  },
  {
    slug: "developers",
    title: "Developers",
    tagline: "For Ground-Up Development",
    description: "Track development budgets from ground-up",
    heroTitle: "CapEx control built for development workflows and draw-ready reporting",
    heroDescription:
      "Banner helps development teams track budgets, manage draws, and maintain lender compliance from land acquisition through stabilization.",
    heroImage: "/images/Imagery4.png",
    icon: "/images/Frame-34375601_2.png",
    logosSectionTitle: "Trusted by development teams",
    features: [
      {
        title: "Draw Management",
        description:
          "Prepare and track construction draws with ease. Maintain lender compliance, track retainage, and ensure timely funding throughout your project.",
      },
      {
        title: "Budget vs. Actual Tracking",
        description:
          "Monitor hard and soft costs against your pro forma in real-time. Identify variances early and make proactive adjustments.",
      },
      {
        title: "Timeline & Milestone Tracking",
        description:
          "Connect budgets to construction schedules. Track milestones, manage dependencies, and keep all stakeholders aligned on project progress.",
      },
    ],
    stats: [
      { value: "50%", label: "faster draw preparation" },
      { value: "15%", label: "reduction in cost overruns" },
      { value: "100%", label: "lender compliance rate" },
    ],
    testimonial: {
      quote:
        "Banner has streamlined our draw process and gives our lenders confidence in our reporting. We've cut draw preparation time in half.",
      author: "David Park",
      role: "Development Manager",
      company: "Starwood Capital Group",
      image: "/images/Drew_Gravina_-_3_u9yqfa.webp",
      logo: "/images/client-logos/starwood.svg",
    },
    ctaTitle: "Ready to streamline your development projects?",
    ctaDescription:
      "See how Banner can help you manage development budgets and lender draws more effectively.",
    faqs: [
      {
        question: "How does Banner handle construction draw management?",
        answer:
          "Banner automates draw package preparation with cost-to-date tracking, retainage management, and customizable draw templates that match your lender requirements.",
      },
      {
        question: "Can Banner track both hard and soft costs?",
        answer:
          "Yes, Banner tracks all development costs including land, hard costs, soft costs, financing, and reserves. You can compare actuals to your original pro forma and approved budget at any time.",
      },
      {
        question: "Does Banner support multiple projects?",
        answer:
          "Absolutely. Banner is built for developers managing multiple projects simultaneously. You get portfolio-level visibility while maintaining detailed project-level tracking.",
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

// Case Studies
export interface CaseStudy {
  slug: string;
  companyName: string;
  companyLogo: string;
  industry: string;
  title: string;
  subtitle: string;
  heroImage: string;
  stats: {
    value: string;
    label: string;
  }[];
  challenge: {
    title: string;
    content: string;
  };
  solution: {
    title: string;
    content: string;
  };
  results: {
    title: string;
    content: string;
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
    image: string;
  };
  keyBenefits: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "fcp",
    companyName: "FCP",
    companyLogo: "/images/client-logos/fcp.svg",
    industry: "Multifamily",
    title: "FCP gains one source of truth for CapEx",
    subtitle:
      "How FCP aligned asset managers, vendors, and property managers in one system with real-time visibility",
    heroImage: "/images/portrait-casestudy-banner.webp",
    stats: [
      { value: "5%", label: "reduction in CapEx cost" },
      { value: "70%", label: "reduction in admin work" },
      { value: "3X", label: "portfolio growth with Banner" },
    ],
    challenge: {
      title: "The Challenge",
      content:
        "Before Banner, FCP managed over 1,000 capital projects across their multifamily portfolio using a patchwork of spreadsheets, emails, and disconnected tools. Asset managers spent hours each week manually compiling reports, and there was no single source of truth for project status, budgets, or vendor performance. As the portfolio grew, so did the complexity—and the risk of costly mistakes slipping through the cracks.",
    },
    solution: {
      title: "The Solution",
      content:
        "FCP implemented Banner to centralize all CapEx management in one platform. By moving 1,000+ projects onto Banner, they created a unified system where asset managers, vendors, and property managers could collaborate in real-time. The platform provided instant visibility into every project's status, budget, and timeline—eliminating the need for manual report compilation and reducing the risk of miscommunication.",
    },
    results: {
      title: "The Results",
      content:
        "Within the first year, FCP saw dramatic improvements across their CapEx operations. The 5% reduction in CapEx costs came from better budget visibility and proactive variance management. The 70% reduction in administrative work freed up asset managers to focus on strategic decisions rather than data entry. Most importantly, the operational efficiency gains enabled FCP to triple their portfolio size without adding headcount to their CapEx management team.",
    },
    testimonial: {
      quote:
        "We implemented Banner because we can manage our entire portfolio on it and have access to every stakeholder involved, along with live information. It provides a really meaningful check and balance in our CapEx projects.",
      author: "Dara Vaziri",
      role: "Senior Analyst",
      image: "/images/Drew_Gravina_-_3_u9yqfa.webp",
    },
    keyBenefits: [
      "Real-time visibility across 1,000+ capital projects",
      "Centralized collaboration for all stakeholders",
      "Automated reporting and budget tracking",
      "Proactive variance alerts and budget controls",
      "Scalable platform that grows with the portfolio",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

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
  // Trust indicators - quantified social proof
  trustIndicators: {
    value: string;
    label: string;
  }[];
  // Platform capabilities - the unified approach
  platformIntro: {
    title: string;
    subtitle: string;
  };
  capabilities: {
    title: string;
    description: string;
    icon: string; // icon name for rendering
  }[];
  // Feature showcases - alternating image/text blocks
  featureShowcases: {
    title: string;
    subtitle: string;
    description: string;
    bullets: string[];
    image: string;
  }[];
  // Role-based benefits
  roleSection: {
    title: string;
    subtitle: string;
  };
  roles: {
    title: string;
    description: string;
    benefits: string[];
  }[];
  // Stats with context
  statsSection: {
    title: string;
    subtitle: string;
  };
  stats: {
    value: string;
    label: string;
    context?: string;
  }[];
  // Testimonials - multiple for credibility
  testimonials: {
    quote: string;
    author: string;
    role: string;
    company: string;
    image: string;
    logo: string;
    metric?: string;
    metricLabel?: string;
  }[];
  // Integration partners
  integrations: {
    name: string;
    logo: string;
  }[];
  // FAQ
  faqs: {
    question: string;
    answer: string;
  }[];
  // CTA
  ctaTitle: string;
  ctaDescription: string;
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
    heroTitle: "One Platform for All Your Multifamily CapEx",
    heroDescription:
      "From unit renovations to site CapEx, Banner gives multifamily owners and operators real-time visibility and budget control across their entire portfolio.",
    heroImage: "/images/Imagery.png",
    icon: "/images/Frame-34375601.png",
    trustIndicators: [
      { value: "2M+", label: "units managed on Banner" },
      { value: "$10B+", label: "in CapEx spend processed" },
      { value: "20+", label: "of top 50 NMHC trust Banner" },
    ],
    platformIntro: {
      title: "One Home for Multifamily CapEx",
      subtitle: "Stop juggling spreadsheets, emails, and disconnected tools. Banner brings everything together.",
    },
    capabilities: [
      {
        title: "Centralize Data",
        description: "All projects, budgets, and vendors in one unified platform with real-time updates",
        icon: "database",
      },
      {
        title: "Connect Teams",
        description: "Asset Managers, PMs, and vendors collaborate seamlessly with role-based access",
        icon: "users",
      },
      {
        title: "Automate Workflows",
        description: "Approvals, invoicing, and reporting happen automatically—no more manual work",
        icon: "zap",
      },
      {
        title: "Control Budgets",
        description: "Proactive alerts and variance tracking keep every project on budget",
        icon: "shield",
      },
    ],
    featureShowcases: [
      {
        title: "Portfolio-Wide Visibility",
        subtitle: "See everything, everywhere",
        description: "Get a bird's-eye view of every CapEx project across all properties. Drill down from portfolio summary to individual line items in seconds.",
        bullets: [
          "Real-time dashboards showing all active projects",
          "Budget vs. actual tracking at property and portfolio levels",
          "Custom views by region, property type, or project phase",
          "Export-ready reports for investors and stakeholders",
        ],
        image: "/images/Imagery.png",
      },
      {
        title: "Unit Reno Management",
        subtitle: "Renovate faster, spend smarter",
        description: "Streamline unit renovations with standardized scopes, automated approvals, and real-time cost tracking. Reduce turn times while protecting your budgets.",
        bullets: [
          "Standardized scope templates for consistency",
          "Photo documentation and progress tracking",
          "Automated vendor assignment and scheduling",
          "Real-time budget alerts before overruns happen",
        ],
        image: "/images/Imagery.png",
      },
      {
        title: "Vendor Coordination",
        subtitle: "Manage every contractor, every project",
        description: "Build a reliable vendor network and track performance across your portfolio. From bid management to invoice processing, everything in one place.",
        bullets: [
          "Centralized vendor database with performance ratings",
          "Competitive bid collection and comparison",
          "Digital contracts and compliance tracking",
          "Automated invoice processing and payment tracking",
        ],
        image: "/images/Imagery.png",
      },
    ],
    roleSection: {
      title: "Built for Your Entire Team",
      subtitle: "Banner adapts to how each role works—so everyone gets exactly what they need.",
    },
    roles: [
      {
        title: "Asset Managers",
        description: "Portfolio-level visibility and strategic oversight",
        benefits: [
          "Track all CapEx across your portfolio in one view",
          "Approve projects and budgets with full context",
          "Generate investor reports in minutes, not hours",
          "Identify trends and optimize spend across properties",
        ],
      },
      {
        title: "Property Managers",
        description: "Day-to-day project execution and vendor management",
        benefits: [
          "Manage unit turns and renovations efficiently",
          "Coordinate vendors and track project progress",
          "Submit requests with proper documentation",
          "Stay on budget with real-time alerts",
        ],
      },
      {
        title: "Construction Managers",
        description: "Detailed project tracking and quality control",
        benefits: [
          "Oversee all active construction across properties",
          "Track timelines, milestones, and dependencies",
          "Manage punch lists and quality assurance",
          "Document everything with photos and notes",
        ],
      },
    ],
    statsSection: {
      title: "The Banner Impact",
      subtitle: "Measurable results from multifamily teams using Banner",
    },
    stats: [
      { value: "5%", label: "reduction in CapEx costs", context: "through better visibility and budget control" },
      { value: "70%", label: "less administrative work", context: "with automated reporting and workflows" },
      { value: "2X", label: "faster project completion", context: "from streamlined coordination" },
      { value: "3X", label: "portfolio growth capacity", context: "without adding headcount to support CapEx management" },
    ],
    testimonials: [
      {
        quote: "We implemented Banner because we can manage our entire portfolio on it and have access to every stakeholder involved, along with live information. It provides a really meaningful check and balance in our CapEx projects.",
        author: "Jeff Robertson",
        role: "SVP Asset Management",
        company: "FCP",
        image: "/images/portrait-casestudy-banner.webp",
        logo: "/images/client-logos/fcp.svg",
        metric: "70%",
        metricLabel: "less admin work",
      },
      {
        quote: "Banner gives us the visibility we need to make confident capital decisions across our entire portfolio. The real-time forecasting has transformed how we approach budgeting.",
        author: "Dave Ruth",
        role: "VP - Construction",
        company: "Livcor",
        image: "/images/dave-ruth.png",
        logo: "/images/client-logos/livcor.svg",
        metric: "5%",
        metricLabel: "cost reduction",
      },
    ],
    integrations: [
      { name: "Yardi", logo: "/images/client-logos/yardi.svg" },
      { name: "RealPage", logo: "/images/client-logos/realpage.svg" },
      { name: "Entrata", logo: "/images/client-logos/entrata.svg" },
    ],
    faqs: [
      {
        question: "How does Banner integrate with our property management system?",
        answer: "Banner integrates with every major property management system, including Yardi, RealPage, Entrata, MRI, and many more. We sync property data, charts of accounts, vendor compliance info, and can push approved invoices directly to your accounting system -- plus a lot of additional, more complex functionality -- ask us about it!",
      },
      {
        question: "Can Banner handle high-volume unit renovation workflows?",
        answer: "Yes! Banner is built for scale. Our unit renovation management includes standardized scopes, photo documentation, vendor assignment, and automated approval workflows—all designed for portfolios processing thousands of renos per year.",
      },
      {
        question: "How long does implementation take?",
        answer: "Most multifamily clients are fully onboarded within 4-6 weeks. This includes data migration, integrations setup, team training, and workflow configuration. We assign a dedicated implementation manager to ensure success.",
      },
      {
        question: "What kind of support do you provide?",
        answer: "Every Banner customer gets dedicated support including onboarding, training, and ongoing assistance. Enterprise customers also receive a dedicated Customer Success Manager and quarterly business reviews.",
      },
    ],
    ctaTitle: "See Banner in Action",
    ctaDescription: "Get a personalized demo and see how Banner can transform CapEx management for your multifamily portfolio.",
  },
  {
    slug: "commercial",
    title: "Commercial",
    tagline: "For Commercial Portfolios",
    description: "Streamline capital projects for office & retail",
    heroTitle: "CapEx Clarity for Complex Commercial Portfolios",
    heroDescription:
      "From tenant improvements to building systems, Banner gives commercial real estate teams the tools to manage capital projects with complete transparency and control.",
    heroImage: "/images/Imagery3.png",
    icon: "/images/Frame-34375601_1.png",
    trustIndicators: [
      { value: "50M+", label: "SF under management" },
      { value: "$300M+", label: "in TI projects tracked" },
      { value: "5%", label: "average CapEx cost savings" },
    ],
    platformIntro: {
      title: "Your Command Center for Commercial CapEx",
      subtitle: "Tenant improvements, building upgrades, and capital planning—all connected in one platform.",
    },
    capabilities: [
      {
        title: "TI Lifecycle Management",
        description: "Track tenant improvements from lease execution through project completion and closeout",
        icon: "building",
      },
      {
        title: "Building Systems Tracking",
        description: "Plan and execute capital projects for HVAC, elevators, roofing, and more",
        icon: "settings",
      },
      {
        title: "Capital Planning",
        description: "Build multi-year capital budgets and align spending with asset strategy",
        icon: "calendar",
      },
      {
        title: "Stakeholder Reporting",
        description: "Generate investor-ready reports and maintain complete audit trails",
        icon: "file-text",
      },
    ],
    featureShowcases: [
      {
        title: "Tenant Improvement Tracking",
        subtitle: "From lease to keys",
        description: "Manage TI allowances and projects with complete visibility. Track budgets, approve change orders, and ensure timely delivery—keeping tenants happy and deals on track.",
        bullets: [
          "TI allowance tracking from lease execution",
          "Multi-level approval workflows for change orders",
          "Real-time budget vs. actual reporting",
          "Deadline tracking with automated alerts",
        ],
        image: "/images/Imagery3.png",
      },
      {
        title: "Building Systems Management",
        subtitle: "Protect and enhance your assets",
        description: "Plan and track capital projects for major building systems. Maintain compliance, extend asset life, and make informed decisions about capital allocation.",
        bullets: [
          "Equipment lifecycle tracking and replacement planning",
          "Preventive maintenance scheduling",
          "Compliance documentation and tracking",
          "Cost history and benchmarking across properties",
        ],
        image: "/images/Imagery3.png",
      },
      {
        title: "Long-Term Capital Planning",
        subtitle: "Plan with confidence",
        description: "Build rolling 5-10 year capital plans that align with your asset strategy. Model scenarios, track reserves, and ensure you're prepared for major expenditures.",
        bullets: [
          "Multi-year capital budget forecasting",
          "Reserve fund tracking and projections",
          "Scenario modeling for different strategies",
          "Integration with annual budgeting processes",
        ],
        image: "/images/Imagery3.png",
      },
    ],
    roleSection: {
      title: "Purpose-Built for Commercial Teams",
      subtitle: "Every stakeholder gets the tools and visibility they need to do their job effectively.",
    },
    roles: [
      {
        title: "Asset Managers",
        description: "Strategic oversight and capital allocation",
        benefits: [
          "Portfolio-wide visibility into all capital projects",
          "Long-term capital planning and forecasting",
          "Investment committee reporting and analysis",
          "NOI impact tracking and optimization",
        ],
      },
      {
        title: "Leasing Teams",
        description: "TI budgeting and deal support",
        benefits: [
          "Quick access to TI cost history and benchmarks",
          "Standardized TI budgeting templates",
          "Deal-by-deal TI tracking and reporting",
          "Collaboration with construction teams",
        ],
      },
      {
        title: "Property Managers",
        description: "Day-to-day execution and vendor coordination",
        benefits: [
          "Manage building capital projects efficiently",
          "Coordinate with tenants on TI delivery",
          "Track vendor performance and compliance",
          "Streamlined invoice processing",
        ],
      },
    ],
    statsSection: {
      title: "Results That Matter",
      subtitle: "How Banner helps commercial teams deliver",
    },
    stats: [
      { value: "40%", label: "faster TI delivery", context: "from streamlined approvals and coordination" },
      { value: "25%", label: "reduction in budget overruns", context: "with proactive variance management" },
      { value: "3X", label: "faster reporting", context: "through automated data consolidation" },
      { value: "100%", label: "audit compliance", context: "with complete documentation trails" },
    ],
    testimonials: [
      {
        quote: "Managing TIs across our office portfolio used to be chaos. Banner brought order to the process and gave us visibility we never had before. Our tenants notice the difference.",
        author: "Jon Jacobs",
        role: "VP of Asset Management",
        company: "Tourmaline",
        image: "/images/Jon-Jacobs---Tourmaline.jpeg",
        logo: "/images/client-logos/tourmaline.png",
        metric: "20%",
        metricLabel: "faster TI delivery",
      },
      {
        quote: "The capital planning features in Banner have transformed how we think about our portfolio. We can now model different scenarios and make data-driven decisions about where to invest.",
        author: "Joe Sergi",
        role: "Chief Strategy Officer & Co-Founder",
        company: "Clear Height Properties",
        image: "/images/joe-sergi.jpg",
        logo: "/images/client-logos/clear-height.svg",
        metric: "25%",
        metricLabel: "fewer overruns",
      },
    ],
    integrations: [
      { name: "MRI", logo: "/images/client-logos/mri.svg" },
      { name: "Yardi", logo: "/images/client-logos/yardi.svg" },
      { name: "VTS", logo: "/images/client-logos/vts.svg" },
    ],
    faqs: [
      {
        question: "Can Banner handle complex TI approval workflows?",
        answer: "Yes, Banner supports multi-level approval workflows for tenant improvements, including landlord contributions, tenant allowances, and change order management. Every action is logged for complete audit trails.",
      },
      {
        question: "How does Banner help with long-term capital planning?",
        answer: "Banner enables you to build rolling 5-10 year capital plans, track reserve funding, and integrate planned projects with annual budgets. You can model different scenarios and adjust plans as conditions change.",
      },
      {
        question: "Does Banner integrate with commercial accounting systems?",
        answer: "Yes, Banner integrates with MRI, Yardi, and other commercial real estate accounting platforms to sync property data and push approved invoices for payment.",
      },
      {
        question: "How do you handle tenant-specific reporting requirements?",
        answer: "Banner supports customizable reporting templates that can be tailored to specific tenant requirements, lease terms, and TI allowance structures. You can generate reports in multiple formats.",
      },
    ],
    ctaTitle: "See How Banner Works for Commercial",
    ctaDescription: "Get a personalized demo tailored to your commercial portfolio and see the difference Banner can make.",
  },
  {
    slug: "developers",
    title: "Developers",
    tagline: "For Development Teams",
    description: "Deliver every project on time and on budget",
    heroTitle: "Deliver Every Project On Time and On Budget",
    heroDescription:
      "From pre-development through stabilization, Banner gives you real-time control over every dollar—with automated draw packages, proactive variance alerts, and lender-ready reporting that eliminates the back-and-forth.",
    heroImage: "/images/Imagery4.png",
    icon: "/images/Frame-34375601_2.png",
    trustIndicators: [
      { value: "$2B+", label: "in development projects tracked" },
      { value: "80%", label: "faster draw preparation" },
      { value: "3X", label: "portfolio growth without adding headcount" },
    ],
    platformIntro: {
      title: "Your Development Command Center",
      subtitle: "Whether you're managing 1 project or 50, Banner scales with your pipeline—giving you the visibility, control, and automation to grow confidently.",
    },
    capabilities: [
      {
        title: "Draws in Hours, Not Days",
        description: "Automated draw packages with cost-to-date tracking and lender-ready documentation",
        icon: "file-check",
      },
      {
        title: "Catch Variances Early",
        description: "Proactive alerts flag budget issues before they become costly overruns",
        icon: "trending-up",
      },
      {
        title: "Zero Back-and-Forth",
        description: "Lender-ready reports that meet requirements the first time, every time",
        icon: "briefcase",
      },
      {
        title: "Budget Meets Schedule",
        description: "See exactly how timeline changes impact your budget in real-time",
        icon: "clock",
      },
    ],
    featureShowcases: [
      {
        title: "Automated Draw Management",
        subtitle: "From 2 weeks to 2 hours",
        description: "Stop spending days assembling draw packages. Banner automatically compiles costs, calculates retainage, and generates lender-ready documentation—so you can submit draws faster and get funded sooner.",
        bullets: [
          "One-click draw package generation",
          "Automatic retainage and cost-to-date calculations",
          "Lender-specific templates built in",
          "Real-time funding status and cash forecasting",
        ],
        image: "/images/Imagery4.png",
      },
      {
        title: "Proactive Budget Control",
        subtitle: "Catch problems before they cost you",
        description: "Don't wait for month-end to discover you're over budget. Banner monitors every cost in real-time and alerts you to variances the moment they happen—giving you time to course-correct before small issues become big problems.",
        bullets: [
          "Real-time budget vs. actual tracking",
          "Proactive variance alerts by threshold",
          "Contingency burn-down monitoring",
          "Forecast-to-complete projections",
        ],
        image: "/images/Imagery4.png",
      },
      {
        title: "Portfolio-Wide Visibility",
        subtitle: "Every project, one dashboard",
        description: "Whether you have 3 projects or 30, see exactly where every dollar stands across your entire portfolio. Identify at-risk projects early, compare performance across deals, and give investors the transparency they expect.",
        bullets: [
          "Portfolio dashboard with drill-down to line items",
          "Cross-project benchmarking and insights",
          "Investor-ready reporting in minutes",
          "Risk indicators across all active projects",
        ],
        image: "/images/Imagery4.png",
      },
    ],
    roleSection: {
      title: "Built for the Development Team",
      subtitle: "From principals to project managers, everyone gets the tools they need.",
    },
    roles: [
      {
        title: "Principals & Partners",
        description: "Portfolio oversight and investor relations",
        benefits: [
          "Real-time visibility into all development projects",
          "Investor-ready reporting and documentation",
          "Risk monitoring across the portfolio",
          "Capital deployment tracking and forecasting",
        ],
      },
      {
        title: "Development Managers",
        description: "Project execution and budget control",
        benefits: [
          "Detailed budget tracking for every project",
          "Draw management and lender coordination",
          "Vendor and contractor oversight",
          "Timeline and milestone management",
        ],
      },
      {
        title: "Project Accountants",
        description: "Financial tracking and compliance",
        benefits: [
          "Streamlined draw package preparation",
          "Cost coding and allocation management",
          "Audit-ready documentation",
          "Integration with accounting systems",
        ],
      },
    ],
    statsSection: {
      title: "The Banner Impact",
      subtitle: "Real results from development teams using Banner",
    },
    stats: [
      { value: "80%", label: "faster draw preparation", context: "with automated package generation" },
      { value: "25%", label: "reduction in cost overruns", context: "through proactive variance alerts" },
      { value: "80%", label: "less time on admin work", context: "with automated reporting and workflows" },
      { value: "3X", label: "portfolio growth capacity", context: "without adding headcount" },
    ],
    testimonials: [
      {
        quote: "Banner has streamlined our draw process and gives our lenders confidence in our reporting. What used to take two weeks now takes two hours—and we've eliminated the back-and-forth completely.",
        author: "Chris Collins",
        role: "SVP, Construction & Development",
        company: "Summit Real Estate Group",
        image: "/images/chris-collins-summit.jpg",
        logo: "/images/client-logos/summit.svg",
        metric: "80%",
        metricLabel: "faster draws",
      },
      {
        quote: "Before Banner, we were constantly surprised by budget overruns. Now we catch variances in real-time and adjust before they become problems. Our cost predictability has improved dramatically across the portfolio.",
        author: "Doug Miller",
        role: "SVP, Head of Real Estate Services",
        company: "Cardinal Group",
        image: "/images/doug-miller-cardinal.jpg",
        logo: "/images/client-logos/cardinal.svg",
        metric: "25%",
        metricLabel: "fewer overruns",
      },
    ],
    integrations: [
      { name: "Procore", logo: "/images/client-logos/procore.svg" },
      { name: "Sage", logo: "/images/client-logos/sage.svg" },
      { name: "QuickBooks", logo: "/images/client-logos/quickbooks.svg" },
    ],
    faqs: [
      {
        question: "How fast can we get up and running?",
        answer: "Most development teams are fully onboarded within 2-4 weeks. We migrate your existing project data, configure your lender templates, and train your team. You'll typically see ROI on your first draw cycle.",
      },
      {
        question: "How does Banner handle construction draw management?",
        answer: "Banner automates the entire draw process—from compiling costs and calculating retainage to generating lender-ready packages. Most teams cut draw prep time by 80% or more, going from weeks to hours.",
      },
      {
        question: "Can Banner track both hard and soft costs?",
        answer: "Yes, Banner tracks all development costs including land, hard costs, soft costs, financing, and reserves. You can compare actuals to your original pro forma and approved budget at any time, with proactive variance alerts when costs trend off-track.",
      },
      {
        question: "How do you handle multiple projects with different lenders?",
        answer: "Banner supports unlimited projects with different capital structures, lenders, and reporting requirements. Each project can have its own draw templates, approval workflows, and stakeholder access—all managed from a single portfolio dashboard.",
      },
    ],
    ctaTitle: "See Banner for Development",
    ctaDescription: "Get a personalized demo and see how Banner can help you deliver projects faster, reduce overruns, and scale your portfolio with confidence.",
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
  heroImage: string; // Used on landing page (portrait/thumbnail)
  detailImage: string; // Used on case study detail page (building/scene)
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
    heroImage: "/images/fcp-case-study.jpg",
    detailImage: "/images/fcp-case-study.jpg",
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
  {
    slug: "tourmaline",
    companyName: "Tourmaline",
    companyLogo: "/images/client-logos/tourmaline.png",
    industry: "Multifamily",
    title: "Tourmaline scales CapEx operations across a growing portfolio",
    subtitle:
      "How Tourmaline streamlined capital project management and gained real-time visibility across their multifamily investments",
    heroImage: "/images/tourmaline-property.jpg",
    detailImage: "/images/tourmaline-property.jpg",
    stats: [
      { value: "40%", label: "faster project approvals" },
      { value: "60%", label: "reduction in reporting time" },
      { value: "2X", label: "projects managed per PM" },
    ],
    challenge: {
      title: "The Challenge",
      content:
        "As Tourmaline's multifamily portfolio expanded rapidly, their existing CapEx management processes couldn't keep pace. Project managers were juggling multiple spreadsheets and email chains to track renovations and capital improvements across properties. The lack of standardized workflows meant inconsistent execution, delayed approvals, and limited visibility for leadership into project status and spend across the portfolio.",
    },
    solution: {
      title: "The Solution",
      content:
        "Tourmaline partnered with Banner to implement a unified CapEx management platform across their entire portfolio. The team established standardized workflows for project requests, approvals, and vendor management. With Banner's real-time dashboards, leadership gained instant visibility into every capital project, while property managers could efficiently manage day-to-day execution with automated alerts and streamlined communication.",
    },
    results: {
      title: "The Results",
      content:
        "After implementing Banner, Tourmaline achieved significant operational improvements. Project approvals that previously took days now happen in hours, with a 40% reduction in approval cycle time. The automated reporting capabilities cut reporting time by 60%, freeing up asset managers to focus on strategic initiatives. Most impressively, project managers now handle twice as many projects without sacrificing quality or oversight.",
    },
    testimonial: {
      quote:
        "Banner gave us the operational infrastructure we needed to scale. We went from chasing spreadsheets to having complete confidence in our CapEx data across every property.",
      author: "Operations Team",
      role: "Tourmaline",
      image: "/images/Drew_Gravina_-_3_u9yqfa.webp",
    },
    keyBenefits: [
      "Standardized workflows across all properties",
      "Real-time portfolio-wide visibility",
      "Faster approval cycles and decision-making",
      "Automated reporting for stakeholders",
      "Scalable processes that grow with the portfolio",
    ],
  },
  {
    slug: "industrious",
    companyName: "Industrious",
    companyLogo: "/images/client-logos/industrious.svg",
    industry: "Commercial",
    title: "Industrious transforms capital project delivery across locations",
    subtitle:
      "How Industrious achieved consistent project execution and cost control across their nationwide flexible workspace portfolio",
    heroImage: "/images/industrious-property.webp",
    detailImage: "/images/industrious-property.webp",
    stats: [
      { value: "30%", label: "reduction in project costs" },
      { value: "50%", label: "faster project delivery" },
      { value: "100%", label: "budget visibility" },
    ],
    challenge: {
      title: "The Challenge",
      content:
        "Industrious operates flexible workspace locations across the country, each requiring ongoing capital improvements to maintain their premium experience. Managing build-outs, renovations, and maintenance projects across dozens of locations created significant coordination challenges. Without centralized visibility, the team struggled to control costs, track vendor performance, and ensure consistent quality standards across all locations.",
    },
    solution: {
      title: "The Solution",
      content:
        "Industrious implemented Banner to create a centralized command center for all capital projects. The platform enabled standardized scoping and budgeting templates that ensured consistency across locations. Real-time budget tracking and automated variance alerts helped the team catch potential overruns early, while the vendor management features allowed them to build and leverage a high-performing contractor network nationwide.",
    },
    results: {
      title: "The Results",
      content:
        "Banner transformed how Industrious manages capital projects. The standardized processes and proactive budget controls led to a 30% reduction in overall project costs. Streamlined workflows and better coordination cut project delivery times in half, allowing new locations to open faster. Leadership now has complete visibility into every dollar spent across the portfolio, enabling data-driven decisions about capital allocation.",
    },
    testimonial: {
      quote:
        "With Banner, we finally have the visibility and control we need to deliver projects on time and on budget. It's become an essential part of how we operate.",
      author: "Construction Team",
      role: "Industrious",
      image: "/images/Drew_Gravina_-_3_u9yqfa.webp",
    },
    keyBenefits: [
      "Centralized management across all locations",
      "Standardized scoping and budgeting templates",
      "Proactive cost control and variance management",
      "Nationwide vendor network optimization",
      "Complete transparency for leadership",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

/**
 * Case-study content. Single source of truth for the homepage section,
 * the /case-studies index, the /case-studies/[slug] pages and the sitemap.
 *
 * DRAFT copy: `role`, `timeline` and every number in `outcome`/`metrics`
 * are placeholders carried over from the WorkGrid drafts. Verify each one
 * against the real project before publishing.
 */

export type CaseStudy = {
  slug: string;
  title: string;
  category: "Internal Tools" | "Client Work" | "Personal";
  /** One-liner used on cards and as the page meta description. */
  summary: string;
  cover: string;
  coverAlt: string;
  liveUrl: string | null;
  role: string;
  timeline: string;
  stack: string[];
  problem: string;
  steps: { title: string; body: string }[];
  outcome: string;
  metrics: { value: string; label: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "accounts-management-system",
    title: "Accounts Management System",
    category: "Internal Tools",
    summary:
      "One live view of customer accounts that replaced spreadsheet reconciliation for finance and support teams.",
    cover: "/thumb1.png",
    coverAlt: "Accounts Management System dashboard",
    liveUrl: "https://books.seebiz.com",
    role: "Full-stack developer",
    timeline: "6 weeks",
    stack: ["React", "Node.js", "PostgreSQL"],
    problem:
      "Finance and support staff reconciled customer accounts across spreadsheets, so month-end close stalled on manual lookups.",
    steps: [
      {
        title: "One source of truth",
        body: "Mapped how finance and support staff actually looked up account history, then modelled accounts, transactions and support notes into a single PostgreSQL schema so every screen reads from the same place.",
      },
      {
        title: "A live account view",
        body: "Built a React dashboard on indexed queries with server-side pagination, so a full customer history opens in one screen with no exports and no manual joins.",
      },
      {
        title: "Close-ready reconciliation",
        body: "Grouped activity by period so month-end checks run against live data instead of copied spreadsheets.",
      },
    ],
    outcome:
      "Consolidated account history in one live view cut month-end reconciliation from three days to a single afternoon.",
    metrics: [
      { value: "1 afternoon", label: "Month-end close, was 3 days" },
      { value: "1 view", label: "Full customer history" },
    ],
  },
  {
    slug: "reilitics",
    title: "Reilitics",
    category: "Client Work",
    summary:
      "A data-dense comparables dashboard that puts 100+ property records on one screen in under two seconds.",
    cover: "/reilitics2.png",
    coverAlt: "Reilitics property comparables dashboard",
    liveUrl: "https://www.reilitics.com/",
    role: "Full-stack developer",
    timeline: "8 weeks",
    stack: ["Next.js", "React", "Tailwind CSS"],
    problem:
      "Real-estate investors had comparable-property data scattered across public sources with no single place to compare it.",
    steps: [
      {
        title: "Comparable-first data model",
        body: "Normalised property records from public sources into one comparable set, so investors compare like for like instead of juggling tabs and spreadsheets.",
      },
      {
        title: "A performance budget for density",
        body: "Server-side data fetching in Next.js with cached queries and virtualised tables keeps 100+ comparables fast to load and fast to scroll, even on mid-range devices.",
      },
      {
        title: "Built for decisions",
        body: "Sorting, filtering and shortlists sit on top of the raw data, so researchers can scan, shortlist and share without rebuilding the analysis somewhere else.",
      },
    ],
    outcome:
      "A data-dense dashboard that renders 100+ property comparables in under two seconds, replacing manual researcher work.",
    metrics: [
      { value: "100+", label: "Comparables per view" },
      { value: "Under 2s", label: "Full dashboard render" },
    ],
  },
  {
    slug: "krub-ai",
    title: "Krub.ai",
    category: "Client Work",
    summary:
      "A rebuilt marketing site that explains the offering clearly and turns visitors into demo requests.",
    cover: "/krubai.png",
    coverAlt: "Krub.ai marketing site",
    liveUrl: "https://krub.ai",
    role: "Full-stack developer",
    timeline: "4 weeks",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    problem:
      "An AI consultancy's site could not explain the offering clearly or capture qualified demo requests.",
    steps: [
      {
        title: "Message before markup",
        body: "Restructured the page flow around the questions evaluators actually ask: what it does, who it is for, and how to try it.",
      },
      {
        title: "One call to action, everywhere",
        body: "Every section ends with the same next step, so a visitor never has to hunt for how to book a demo.",
      },
      {
        title: "Fast where it counts",
        body: "Static-first Next.js delivery with Tailwind keeps the site quick on mobile, wherever the traffic lands.",
      },
    ],
    outcome:
      "Rebuilt marketing site lifted demo-request conversions by 35% within the first quarter after launch.",
    metrics: [{ value: "+35%", label: "Demo requests, first quarter" }],
  },
];

export const getCaseStudy = (slug: string): CaseStudy | undefined =>
  caseStudies.find((study) => study.slug === slug);

// Case Study: Core Banking Operations Platform

import type { CaseStudyContent } from "./caseStudyTypes";

export const seoData = {
  title: "Core Banking Operations Platform",
  description:
    "Engineering a unified core banking platform for deposits, lending, accounting, member operations, and scalable financial services.",
  url: "https://www.tizora.ai/insights/case-studies/fintech/core-banking",
  image:
    "https://res.cloudinary.com/cjzo6qye/image/upload/v1792405191/1_Unified_Banking_Technology_Dashboard.png",
};

export const coreBankingCaseStudyData = {
  hero: {
    logo: "CoreBank",
    title:
      "Engineering a stronger operating core for modern financial institutions",
    keyResults: [
      "Unified deposits, lending, accounting, and member operations",
      "Designed workflows for transparency and operational control",
      "Built a scalable foundation for connected banking experiences",
    ],
    image:
      "https://res.cloudinary.com/cjzo6qye/image/upload/v1792405191/1_Unified_Banking_Technology_Dashboard.png",
  },

  summary: {
    title:
      "Core banking is the operating system behind every customer promise.",
    paragraph:
      "Financial institutions need more than isolated modules. They need a dependable operational foundation that connects customer records, deposits, lending, accounting, branch activity, and reporting. We designed a core banking platform around that connected model, giving teams a clearer path from daily transaction processing to future digital services.",
    metadata: {
      location: "India & Global Financial Services",
      period: "2024 - Ongoing",
      industry: "Financial Services",
      services: [
        "Product Engineering",
        "Cloud Architecture",
        "Data Engineering",
        "API Development",
      ],
    },
  },

  challenge: {
    label: "The Business Challenge",
    title: "Disconnected banking operations create friction everywhere.",
    paragraphs: [
      "Deposits, loans, member records, accounting, and branch operations often evolve as separate systems. That separation makes it harder to maintain a reliable view of customers, balances, approvals, and operational activity.",
      "Manual handoffs introduce delays and make reporting dependent on reconciliation work. At the same time, financial institutions need to support more products and channels without compromising control, traceability, or service quality.",
      "The platform needed to bring critical banking operations into one coherent workflow while keeping the architecture flexible enough for integrations, digital channels, and institution-specific rules.",
    ],
    image:
      "https://res.cloudinary.com/cjzo6qye/image/upload/v1792405192/2_Indian_Finance_Team_Reviewing_Reports.png",
    dark: false,
    reverse: false,
  },

  capabilities: {
    label: "Core banking capabilities",
    title: "One operational foundation for the full banking lifecycle",
    description:
      "The platform brings the highest-friction banking workflows into a connected operating model, so teams can work from consistent data and repeatable processes.",
    items: [
      {
        number: "01",
        title: "Customer and Member Management",
        description: [
          "Centralized customer profiles, member records, relationships, documents, and service history.",
        ],
      },
      {
        number: "02",
        title: "Deposits and Account Products",
        description: [
          "Savings, current, recurring, and fixed-deposit workflows with configurable interest and maturity handling.",
        ],
      },
      {
        number: "03",
        title: "Loan Origination and Servicing",
        description: [
          "Structured application, approval, disbursement, repayment, renewal, recovery, and monitoring workflows.",
        ],
      },
      {
        number: "04",
        title: "Accounting and Finance",
        description: [
          "General ledger, sub-ledger, cash management, reconciliation, day-end processing, and financial reporting.",
        ],
      },
      {
        number: "05",
        title: "Branch and Teller Operations",
        description: [
          "Operational controls for branch activity, cash windows, approvals, transfers, and daily close processes.",
        ],
      },
      {
        number: "06",
        title: "Share Capital and Dividends",
        description: [
          "Institution-specific member, share, dividend, and reconciliation workflows for cooperative banking models.",
        ],
      },
      {
        number: "07",
        title: "Rules and Workflow Configuration",
        description: [
          "Configurable product rules, approval paths, charges, limits, schedules, and institution-level policies.",
        ],
      },
      {
        number: "08",
        title: "Reporting and Operational Intelligence",
        description: [
          "Role-aware dashboards and reporting foundations for management visibility, audit support, and decision-making.",
        ],
      },
      {
        number: "09",
        title: "Integration-Ready APIs",
        description: [
          "Service boundaries and APIs that connect mobile, digital banking, payment, identity, and external reporting systems.",
        ],
      },
    ],
  },

  architecture: {
    label: "Platform architecture",
    title: "Deterministic financial logic, designed for change.",
    paragraphs: [
      "Financial systems have to be dependable before they are clever. We separated deterministic transaction and accounting logic from the surrounding experience layer, creating clear boundaries for validation, authorization, auditability, and integration.",
      "That architecture gives product teams room to add digital channels such as [mobile banking](/insights/case-studies/fintech/mobile-banking) and automation such as [digital KYC](/insights/case-studies/fintech/digital-kyc) without placing core balances or financial rules at risk. It also makes institution-specific configuration explicit instead of burying it inside disconnected workflows.",
      "The result is a core platform that can evolve with the institution while keeping critical operations explainable and controlled.",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    dark: false,
    reverse: true,
  },

  benefits: {
    label: "Business benefits",
    title: "A clearer operating model for financial services teams",
    items: [
      {
        number: "01",
        title: "Centralized Operations",
        description: [
          "Bring customer, account, loan, accounting, and branch activity into a connected operational view.",
        ],
      },
      {
        number: "02",
        title: "Operational Transparency",
        description: [
          "Make approvals, balances, exceptions, and daily processing easier to trace across teams.",
        ],
      },
      {
        number: "03",
        title: "Lower Manual Effort",
        description: [
          "Replace repetitive handoffs and reconciliation work with structured workflows and reusable rules.",
        ],
      },
      {
        number: "04",
        title: "Scalable Architecture",
        description: [
          "Create a foundation that supports additional products, branches, channels, and integrations over time.",
        ],
      },
      {
        number: "05",
        title: "Institution-Specific Flexibility",
        description: [
          "Support cooperative, regional, and product-specific operating models through configurable capabilities.",
        ],
      },
      {
        number: "06",
        title: "Digital-Ready Foundations",
        description: [
          "Expose reliable services for mobile banking, digital banking, payments, analytics, and future automation.",
        ],
      },
    ],
  },

  faqs: {
    tagTitle: "Core banking questions",
    heading: "What makes a core banking platform useful in practice?",
    questions: [
      {
        q: "What does a core banking platform manage?",
        a: "A core banking platform manages the operational records and workflows behind accounts, deposits, lending, customer or member relationships, accounting, branches, and reporting.",
      },
      {
        q: "Can core banking support cooperative or institution-specific workflows?",
        a: "Yes. A configurable platform can support institution-specific products, share capital, dividends, approval rules, branch operations, and reporting without forcing every organization into the same process.",
      },
      {
        q: "How does a core banking platform integrate with digital channels?",
        a: "A service-oriented API layer can connect core banking capabilities with mobile banking, digital banking, payments, identity, notifications, analytics, and external reporting systems.",
      },
      {
        q: "How should financial transaction logic be designed?",
        a: "Critical financial logic should be deterministic, auditable, and separated from presentation concerns. Clear validation, authorization, reconciliation, and audit boundaries help teams operate with confidence.",
      },
      {
        q: "Can an existing banking system be modernized incrementally?",
        a: "In many environments, modernization can happen in stages: map the current workflows, establish shared data and service boundaries, introduce targeted capabilities, and expand integrations as the foundation matures.",
      },
    ],
  },

  related: {
    title: "More engineering stories",
    description:
      "Explore how Tizora builds dependable digital systems for complex, regulated, and data-intensive industries.",
  },
};

/* ---- Standard case-study model (rendered by <CaseStudyTemplate>) ----
 * Copy follows the approved case-study document, word for word, for every section this template
 * has. Left out: sections with no component (at a glance, project snapshot) and the items the
 * document marks as "needs confirming before publishing" (member and branch counts, the client
 * quote and its attribution). The nine feature descriptions, the fit section, the FAQs and the
 * related-reading links are not in the document and are unchanged.
 * The before/after figures are indicative estimates, as the document itself notes. */
const cb = coreBankingCaseStudyData;
const cap = cb.capabilities.items;
const ben = cb.benefits.items;
const faq = cb.faqs.questions;

export const coreBankingCaseStudy: CaseStudyContent = {
  id: "cs-core-banking",
  breadcrumbLabel: "Core Banking",
  url: seoData.url,
  published: "2026-09-22",
  modified: "2026-10-09",
  inLanguage: "en-IN",
  seo: {
    title: "Core Banking Platform for Deposits and Lending",
    description:
      "Core banking platform case study: Tizora unified deposits, lending, accounting, branch and member operations on one auditable, API-ready foundation for banks.",
    // 1200x630 JPEG used for social previews.
    ogImage: "https://res.cloudinary.com/cjzo6qye/image/upload/f_jpg,q_82/v1791540946/case-studies/core-banking-share.png",
    ogImageAlt:
      "Core banking operations dashboard for a cooperative bank",
    primaryKeyword: "core banking platform",
    secondaryKeywords: [
      "core banking software",
      "banking modernization",
      "financial services platform",
      "fintech engineering",
      "loan origination and servicing",
      "general ledger and reconciliation",
      "cooperative banking",
      "integration-ready banking APIs",
    ],
  },
  // 16:9 listing card.
  card: {
    image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1792405191/1_Unified_Banking_Technology_Dashboard.png",
    imageAlt:
      "Unified banking technology dashboard for the Core Banking Operations Platform",
  },
  schema: {
    about: [
      { "@type": "Thing", name: "Core banking", sameAs: "https://en.wikipedia.org/wiki/Core_banking" },
      { "@type": "Thing", name: "General ledger", sameAs: "https://en.wikipedia.org/wiki/General_ledger" },
      { "@type": "Thing", name: "Cooperative banking", sameAs: "https://en.wikipedia.org/wiki/Cooperative_banking" },
      { "@type": "Thing", name: "Banking modernization" },
    ],
  },

  hero: {
    label: "Cooperative banking · Core banking platform · India",
    title: "One core, every branch: how a cooperative bank halved its daily close and cut reconciliation by 60%",
    description:
      "A multi-branch cooperative bank replaced five disconnected systems with one core banking platform and one general ledger. Day-end now takes half the time, reconciliation work fell by 60%, and loans are approved two days sooner. The same core now carries mobile banking and digital KYC.",
    image: cb.hero.image,
    imageAlt: "Unified banking technology dashboard for a cooperative bank",
    cta: { label: "Talk to our financial services team", href: "/contact" },
    compactTitle: true,
  },

  outcomes: {
    tagTitle: "Key outcomes",
    stats: [
      { value: "−50%", label: "Day-end processing time", description: "3 hours → 1.5 hours" },
      { value: "−60%", label: "Manual reconciliation", description: "5 hours → 2 hours a day" },
      { value: "−40%", label: "Loan approval turnaround", description: "5 days → 3 days" },
      { value: "−67%", label: "Monthly management reporting", description: "3 days → 1 day" },
    ],
  },

  // The document's "Client overview" and "The challenge" share this section.
  challenge: {
    label: "Client overview",
    title: "The challenge: five systems, no single version of the truth",
    paragraphs: [
      // The document's member and branch counts are marked "needs confirming", so they are left out here.
      "The client is a multi-branch cooperative bank in India. Growth had outpaced its systems: deposits, loans, member records, accounting and branch operations each ran on separate software, held together by spreadsheets and overtime.",
      "It offers savings, current, recurring and fixed deposits, a full lending book, and cooperative-specific products such as share capital and member dividends, each with its own rules.",
      "Every day ended the same way. Branch staff closed their counters, then the back office spent three hours running day-end and five more hours reconciling balances that disagreed between systems. Nobody could see a member's full relationship in one place.",
      "The bank didn't need more modules. It needed one dependable operating core that every branch, product and future channel could trust.",
    ],
    bullets: [
      "Speed: A loan took five days to approve, mostly waiting on hand-offs between teams. Members went to faster lenders.",
      "Control: Every manual reconciliation was a chance for error, and a monthly management pack took three days to produce.",
      "Growth: Leadership wanted mobile banking and digital KYC. Bolting new channels onto fragmented systems would have multiplied the risk to the bank's balances.",
    ],
    image: cb.challenge.image,
    imageAlt: "Indian finance team reviewing banking reports together",
    dark: false,
    reverse: false,
  },

  build: {
    heading: "Our approach: dependable before clever",
    description:
      "We designed the platform around how money actually moves through the bank. Financial logic became deterministic and separate from the screens, institution rules became visible configuration, and operations moved across in stages, each one reconciled before the next.",
    steps: [
      {
        label: "Map",
        title: "Follow the money",
        description: "Traced every workflow and hand-off end to end, from deposit to general ledger",
      },
      {
        label: "Separate",
        title: "Deterministic core",
        description: "Transaction and accounting logic isolated behind validation, authorization and audit",
      },
      {
        label: "Unify",
        title: "Move in stages",
        description: "Members, deposits, lending, accounting, branch and share capital, one at a time",
      },
      {
        label: "Open",
        title: "APIs for what's next",
        description: "Versioned APIs for mobile, digital KYC, payments and reporting",
      },
    ],
  },

  architecture: {
    tagTitle: "Platform architecture",
    heading: "Core banking platform architecture",
    paragraphs: [
      // Wording as in the document; the two channel names link to their own case studies.
      "Branch and teller, [mobile banking](/insights/case-studies/fintech/mobile-banking) and [digital KYC](/insights/case-studies/fintech/digital-kyc) channels connect through one core API layer for validation and authorization. Deterministic core services for deposits, lending, accounting, member operations and share capital post to a single general ledger, which feeds payments, analytics and reporting. An append-only audit log records every transaction.",
    ],
    // Architecture diagram redrawn from the document's Figure 1, hosted on Cloudinary.
    image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791544074/case-studies/core-banking-architecture.png",
    imageWidth: 3312,
    imageHeight: 1000,
    imageAlt:
      "Core banking platform architecture diagram. Branch and teller (counters, cash), mobile banking (member app) and digital KYC (onboarding) connect through one core API layer for validation and authorization. Deterministic core services in Java and Spring Boot for deposits, lending, accounting, member operations, and share capital and dividends post to a general ledger that is the single source of truth, which feeds payments, analytics and reporting. An append-only audit log records every posting, from any branch or channel.",
    caption:
      "Figure 1. Every channel goes through one validated API layer into deterministic core services and a single general ledger.",
    pointsTitle: "Three decisions that made the difference",
    points: [
      {
        title: "Deterministic financial logic.",
        text: "The same input always produces the same ledger entry, whichever branch, teller or channel sends it.",
      },
      {
        title: "Rules as configuration.",
        text: "Share capital, dividends, approval limits and charges can be read, audited and changed without a software release.",
      },
      {
        title: "No big-bang cut-over.",
        text: "Each operation moved separately and was reconciled against the old system before the next one started.",
      },
    ],
  },

  // Section heading and the nine names follow the document; the descriptions are the page's own.
  features: {
    tagTitle: "Now on one platform",
    heading: "9 operations, one ledger",
    features: [
      { title: "Member management", description: cap[0].description[0], bullets: [ben[0].description[0]] },
      { title: "Deposits", description: cap[1].description[0] },
      { title: "Loan origination & servicing", description: cap[2].description[0] },
      { title: "General ledger & reconciliation", description: cap[3].description[0], bullets: [ben[2].description[0]] },
      { title: "Branch & teller", description: cap[4].description[0] },
      { title: "Share capital & dividends", description: cap[5].description[0] },
      { title: "Rules & workflows", description: cap[6].description[0] },
      { title: "Reporting", description: cap[7].description[0], bullets: [ben[1].description[0]] },
      { title: "Integration APIs", description: cap[8].description[0], bullets: [ben[3].description[0]] },
    ],
  },

  techStack: {
    title: "Built with",
    categories: [
      {
        name: "Core services and APIs",
        items: [
          { name: "Java", icon: "https://cdn.simpleicons.org/openjdk" },
          { name: "Spring Boot", icon: "https://cdn.simpleicons.org/springboot" },
          { name: "REST + OpenAPI", icon: "https://cdn.simpleicons.org/openapiinitiative" },
          { name: "Append-only audit log" },
        ],
      },
    ],
  },

  midCta: {
    text: "Still closing the day with spreadsheets and reconciliation? Let's look at your core.",
    buttonText: "Talk to our financial services team",
    buttonHref: "/contact",
  },

  results: {
    tagTitle: "Results",
    heading: "Key results: a faster close, a cleaner ledger, quicker decisions",
    description:
      "Day-end processing fell from 3 hours to 1.5. Daily reconciliation fell from 5 hours to 2. Loans are approved in 3 days instead of 5, and the monthly management pack is ready in 1 day instead of 3.",
    columns: ["What changed", "Before", "After", "Impact"],
    rows: [
      ["Day-end processing", "3 hours", "1.5 hours", "−50%"],
      ["Manual reconciliation, per day", "5 hours", "2 hours", "−60%"],
      ["Loan approval turnaround", "5 days", "3 days", "−40%"],
      ["Monthly management reporting", "3 days", "1 day", "−67%"],
      ["Systems behind core operations", "5 separate", "1 platform, 1 ledger", "One truth"],
    ],
    // Not in the document's page copy; kept because the document's own note calls these figures indicative estimates.
    method: {
      title: "How we measured",
      items: ["Indicative figures based on project estimates; to be replaced with measured client data."],
    },
  },

  impact: {
    label: "Impact",
    title: "What those numbers mean for the bank",
    items: [
      {
        number: "01",
        title: "~90 hours a month back",
        description: ["3 hours of reconciliation saved every working day, now spent on members and real exceptions."],
      },
      {
        number: "02",
        title: "Loans 2 days sooner",
        description: ["Members get decisions faster, a direct edge over faster lenders in the region."],
      },
      {
        number: "03",
        title: "The month in 1 day",
        description: ["Leadership decides on current numbers, not last month's."],
      },
      {
        number: "04",
        title: "Every transaction traceable",
        description: ["An append-only audit log means audits start from evidence, not reconstruction."],
      },
      {
        number: "05",
        title: "New channels, same core",
        description: ["Mobile banking and digital KYC launched on the same API layer, without risk to balances."],
      },
      {
        number: "06",
        title: "One view of each member",
        description: ["Deposits, loans and shares in one record, at every branch."],
      },
    ],
  },

  // The document's client quote is marked "needs confirming", so the existing first-party
  // statement stays until a client quote is approved.
  quote: {
    quote:
      "We separated deterministic transaction and accounting logic from the experience layer, so the institution can add digital channels and new products without placing core balances or financial rules at risk.",
    author: "Tizora engineering team",
    role: "Project team, Tizora",
  },

  learned: {
    label: "Lessons",
    title: "Why this matters",
    items: [
      {
        number: "01",
        title: "Reliability before innovation",
        description: ["Digital channels are only as trustworthy as the core beneath them. Fix the foundation and every launch gets faster and safer."],
      },
      {
        number: "02",
        title: "Visible rules are controllable rules",
        description: ["When limits and product terms are configuration, compliance and operations can see, audit and change them."],
      },
      {
        number: "03",
        title: "No big bang required",
        description: ["Moving in stages, reconciled at every step, delivers gains early and keeps daily banking safe."],
      },
    ],
  },

  fit: {
    headline: "Will this work for your institution?",
    subline: "Who it is built for, what it connects to and what a typical engagement covers.",
    intro:
      "This approach fits banks, cooperative banks and other financial institutions in India and global markets that need deposits, lending, accounting and branch operations on one dependable core.",
    body: [
      "Built for: Cooperative, regional, and product-specific operating models",
      "Integrates with: Mobile banking, digital banking, payments, identity, notifications, analytics, and external reporting systems",
      "Typical scope: Product engineering, cloud architecture, data engineering and API development",
    ],
    imageSrc:
      "https://res.cloudinary.com/cjzo6qye/image/upload/v1792405192/3_Fintech_Operations_Center_Analyst.png",
    imageAlt: "Fintech operations analyst reviewing banking reports",
  },

  faqs: {
    tagTitle: "Core banking FAQs",
    heading: "Frequently asked questions",
    questions: faq,
  },

  disclosure: {
    text: [
      "Client name withheld under a confidentiality agreement. Results reflect this client's data, systems and measurement period and will vary for other institutions.",
      "Some figures are indicative estimates pending measured client data.",
    ],
    links: [
      {
        label: "Related reading",
        items: [
          { label: "Software for financial services", href: "/industries/fintech" },
          { label: "Digital KYC case study", href: "/insights/case-studies/fintech/digital-kyc" },
          { label: "Mobile banking case study", href: "/insights/case-studies/fintech/mobile-banking" },
          { label: "Enterprise solutions", href: "/services/enterprise-solutions" },
        ],
      },
    ],
  },

  related: {
    title: "Related banking case studies",
    description: cb.related.description,
  },

  cta: {
    heading: "Build a core that can grow with your institution",
    description:
      "If your bank still closes the day with spreadsheets and reconciliation, the same approach applies. In 30 minutes we'll map your operating model and outline a staged modernization path.",
    buttonText: "Talk to our financial services team",
    buttonLink: "/contact",
    secondaryButtonText: "Request a reference call (under NDA)",
    secondaryButtonLink: "/contact",
  },
};

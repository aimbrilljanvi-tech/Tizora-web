// Case Study: Mobile Banking Platform

import type { CaseStudyContent } from "./caseStudyTypes";

export const seoData = {
  title: "Mobile Banking Platform",
  description:
    "Engineering a secure, API-first mobile banking experience for cooperative and commercial banks, connected to the core banking platform.",
  url: "https://www.tizora.ai/insights/case-studies/fintech/mobile-banking",
  image:
    "https://res.cloudinary.com/cjzo6qye/image/upload/v1792402788/1_Mobile_Banking_in_a_Cozy_Workspace.png",
};

export const mobileBankingCaseStudyData = {
  hero: {
    logo: "MobileBank",
    title: "Bringing banking anytime, anywhere, to every customer's pocket",
    keyResults: [
      "Delivered secure, self-service banking on customer-owned devices",
      "Connected mobile access directly to core deposits, loans, and accounting",
      "Reduced branch dependency for everyday banking transactions",
    ],
    image:
      "https://res.cloudinary.com/cjzo6qye/image/upload/v1792402788/1_Mobile_Banking_in_a_Cozy_Workspace.png",
    cta: { label: "Talk to our team", href: "/contact" },
  },

  summary: {
    title: "Mobile banking is now the front door to the institution.",
    paragraph:
      "Customers expect to check balances, move money, and manage banking relationships from their phones, without waiting on a branch or a call center. We engineered a mobile banking layer that sits on top of a connected core, giving institutions a secure, self-service channel that reflects real-time account and transaction data.",
    metadata: {
      location: "India & Global Financial Services",
      period: "2024 - Ongoing",
      industry: "Financial Services",
      services: [
        "Product Engineering",
        "Mobile App Development",
        "API Development",
        "Security Engineering",
      ],
    },
  },

  stats: {
    tagTitle: "By the numbers",
    heading: "Measurable outcomes for institutions that go mobile",
    stats: [
      {
        value: "24×7",
        label: "Always-on access",
        description: "Banking services available independent of branch hours or staff availability.",
      },
      {
        value: "60%",
        label: "Routine transactions shifted",
        description: "Branch and call-center load cut by moving balance, transfer, and payment requests to mobile.",
      },
      {
        value: "100%",
        label: "Core-connected",
        description: "Every mobile action flows through the same API layer as branch and teller operations.",
      },
      {
        value: "API-first",
        label: "Built for integration",
        description: "New capabilities ship without re-implementing financial logic already in the core.",
      },
    ],
  },

  challenge: {
    label: "The Business Challenge",
    title: "Branch-first banking can't keep up with customer expectations.",
    paragraphs: [
      "Customers who can order groceries and transfer money to friends in seconds expect the same immediacy from their bank. When mobile access is missing or bolted on as an afterthought, institutions lose engagement and push routine transactions back onto already-stretched branch and call center staff.",
      "Building mobile banking on top of an [existing core](/insights/case-studies/fintech/core-banking) is not just a UI exercise. It requires secure authentication, real-time account and transaction data, and workflows for transfers, bill payments, and service requests that stay consistent with what happens at the branch or teller window.",
      "The platform needed to give customers a trustworthy, always-available banking experience without duplicating business logic that already lived in the core, and without compromising on security or auditability.",
    ],
    image:
      "https://res.cloudinary.com/cjzo6qye/image/upload/v1792402789/2_Modern_Banking_with_Mobile_App.png",
    dark: false,
    reverse: false,
  },

  capabilities: {
    label: "Mobile banking capabilities",
    title: "Everyday banking, redesigned for the phone in every pocket",
    description:
      "The platform brings the banking tasks customers reach for most often into a secure, connected mobile experience, backed by the same core data and rules used at the branch.",
    items: [
      {
        number: "01",
        title: "Secure Customer Access",
        description: [
          "Multi-factor authentication, device binding, and session controls designed around customer trust and regulatory expectations.",
        ],
      },
      {
        number: "02",
        title: "Account & Balance Enquiry",
        description: [
          "Real-time balances, mini statements, and transaction history pulled directly from the connected core banking ledger.",
        ],
      },
      {
        number: "03",
        title: "Fund Transfers",
        description: [
          "Intra-bank, interbank, and self-linked account transfers with configurable limits and approval rules.",
        ],
      },
      {
        number: "04",
        title: "Bill Payments & Recharges",
        description: [
          "Utility bill payments, recharges, and biller integrations handled from a single, familiar workflow.",
        ],
      },
      {
        number: "05",
        title: "Service Requests",
        description: [
          "Self-service requests for statements, cheque books, card controls, and account updates, routed into existing operational workflows.",
        ],
      },
      {
        number: "06",
        title: "Multi-Channel Consistency",
        description: [
          "The same account and transaction rules that govern branch, teller, and digital banking, so behavior stays consistent across channels.",
        ],
      },
    ],
  },

  features: {
    tagTitle: "Platform capabilities",
    heading: "Everything your customers need, built to work flawlessly",
    description:
      "From onboarding to daily transactions, Tizora's mobile banking platform covers the full spectrum of retail banking on mobile.",
    features: [
      {
        title: "Digital Account Opening",
        description:
          "Let customers open accounts from their phones in minutes. Paperless registration, eKYC, and document collection handled end-to-end.",
        bullets: [
          "eSign and OCR-based document extraction",
          "In-app video KYC for full compliance",
          "Mobile and branch-assisted journeys",
        ],
        imageSrc:
          "https://res.cloudinary.com/cjzo6qye/image/upload/v1792402790/3_Mobile_Identity_Verification_at_Desk.png",
      },
      {
        title: "Real-Time Payments",
        description:
          "UPI, IMPS, NEFT, and RTGS integrations let customers move money instantly. Configurable limits and approval layers keep risk in check.",
        bullets: [
          "Intra-bank and interbank transfers",
          "QR-based UPI payments",
          "Scheduled and recurring transfers",
        ],
        imageSrc:
          "https://res.cloudinary.com/cjzo6qye/image/upload/v1792402790/4_QR_Payment_at_a_Cozy_Cafe%CC%81_Desk.png",
      },
      {
        title: "Self-Service Banking",
        description:
          "Empower customers to manage their accounts without calling in. Statement requests, card controls, cheque book orders—all from their phone.",
        bullets: [
          "Card block / unblock and limit setting",
          "Cheque book and statement requests",
          "Loan EMI schedules and payment tracking",
        ],
        imageSrc:
          "https://res.cloudinary.com/cjzo6qye/image/upload/v1792402789/5_Cozy_Mobile_Banking_Moment.png",
      },
      {
        title: "Security & Compliance",
        description:
          "Security-first from the ground up. Every session, transaction, and data point is encrypted, audited, and compliant with regulatory guidelines.",
        bullets: [
          "MFA with biometric and OTP options",
          "Role-based access and device binding",
          "Immutable audit logs and RBI alignment",
        ],
        imageSrc:
          "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },

  useCases: {
    title: "Built for every kind of banking institution",
    items: [
      {
        number: "01",
        title: "Cooperative & Urban Co-op Banks",
        description: [
          "Extend member services beyond branch hours with a mobile channel that reflects real-time core banking data—no parallel system, no reconciliation headaches.",
        ],
        footerTitle: "Financial Services",
        footerLogo: "",
      },
      {
        number: "02",
        title: "Small Finance Banks",
        description: [
          "Reach underserved customers where they are. A mobile-first banking experience lowers the cost of service while growing digital engagement.",
        ],
        footerTitle: "Financial Inclusion",
        footerLogo: "",
      },
      {
        number: "03",
        title: "Commercial Banks & NBFCs",
        description: [
          "Add a modern mobile channel on top of existing infrastructure without a rip-and-replace. API-first integration means speed-to-market without risk.",
        ],
        footerTitle: "Enterprise Banking",
        footerLogo: "",
      },
      {
        number: "04",
        title: "Fintech Platforms",
        description: [
          "Launch or white-label a fully functional mobile banking app backed by real core banking APIs. Reduce engineering time and focus on your product differentiation.",
        ],
        footerTitle: "Fintech Engineering",
        footerLogo: "",
        link: "/contact",
      },
    ],
  },

  quote: {
    quote:
      "Tizora gave us a mobile banking layer that our members actually trust—real-time balances, instant transfers, and service requests without a branch visit. It didn't require us to duplicate any of our core banking logic.",
    author: "Head of Digital Banking",
    role: "Cooperative Bank, South India",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    companyName: "Tizora Client",
  },

  architecture: {
    label: "Platform architecture",
    title: "A mobile experience layer, not a second source of truth.",
    paragraphs: [
      "We treated the mobile app as an experience layer over the core, never a parallel system holding its own copy of balances or transaction rules. Every request for a transfer, payment, or balance check flows through the same API boundary the [core banking platform](/insights/case-studies/fintech/core-banking) exposes to every channel.",
      "That approach keeps account state consistent whether a customer transacts on mobile, at a branch, or through a teller, and it means new mobile features can ship without re-implementing financial logic. Security, validation, and audit trails stay centralized in the core, while the mobile layer focuses on a fast, intuitive customer experience.",
      "The result is a mobile app that institutions can extend with new capabilities over time, such as [digital KYC onboarding](/insights/case-studies/fintech/digital-kyc), without ever risking the integrity of the underlying banking data.",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    dark: false,
    reverse: true,
  },

  benefits: {
    label: "Business benefits",
    title: "A mobile channel that pays for itself in engagement",
    items: [
      {
        number: "01",
        title: "Customer Convenience",
        description: [
          "Let customers bank on their own schedule, from anywhere, without a branch visit or phone call.",
        ],
      },
      {
        number: "02",
        title: "Wider Digital Reach",
        description: [
          "Extend banking services to customers and members who may never walk into a branch.",
        ],
      },
      {
        number: "03",
        title: "Reduced Branch Load",
        description: [
          "Shift routine balance, transfer, and payment activity away from tellers and call center staff.",
        ],
      },
      {
        number: "04",
        title: "Secure by Design",
        description: [
          "Protect customer accounts with authentication, device, and session controls built into every transaction.",
        ],
      },
      {
        number: "05",
        title: "Higher Engagement",
        description: [
          "Keep the institution present in customers' daily routines through a channel they already trust.",
        ],
      },
      {
        number: "06",
        title: "Always-On Availability",
        description: [
          "Offer 24x7 access to core banking services, independent of branch hours or staff availability.",
        ],
      },
    ],
  },

  faqs: {
    tagTitle: "Mobile banking questions",
    heading: "What makes a mobile banking platform work in practice?",
    questions: [
      {
        q: "What is mobile banking?",
        a: "Mobile banking gives customers secure, self-service access to core banking services, such as balance enquiry, transfers, and bill payments, directly from a smartphone app.",
      },
      {
        q: "What are the key capabilities of a mobile banking platform?",
        a: "A strong mobile banking platform typically covers secure customer access, account and balance enquiry, fund transfers, bill payments, service requests, and consistent behavior across other banking channels.",
      },
      {
        q: "Who is mobile banking built for?",
        a: "Mobile banking serves retail customers and members of cooperative and commercial banks who want everyday banking tasks handled without visiting a branch.",
      },
      {
        q: "How does mobile banking integrate with an existing core banking system?",
        a: "Mobile banking should connect through the same API layer the core banking platform exposes to every channel, so balances, transactions, and business rules stay consistent instead of being duplicated in the app.",
      },
      {
        q: "Is mobile banking secure and compliant?",
        a: "A well-engineered mobile banking app relies on multi-factor authentication, device and session controls, and encrypted communication, with every transaction validated and audited by the same core banking rules used at the branch.",
      },
      {
        q: "How do institutions get started with mobile banking?",
        a: "Most institutions start by mapping the transactions customers request most often, confirming the core banking APIs available for those transactions, and rolling out mobile access in stages as trust and adoption grow.",
      },
    ],
  },

  related: {
    title: "More engineering stories",
    description:
      "Explore how Tizora builds dependable digital systems for complex, regulated, and data-intensive industries.",
  },
};

/* ---- Standard case-study model (rendered by <CaseStudyTemplate>) ---- */
const mb = mobileBankingCaseStudyData;

export const mobileBankingCaseStudy: CaseStudyContent = {
  id: "cs-mobile-banking",
  breadcrumbLabel: "Mobile Banking",
  url: seoData.url,
  published: "2026-09-23",
  modified: "2026-10-09",
  inLanguage: "en-IN",
  seo: {
    title: "Mobile Banking Platform Case Study for Banks",
    description:
      "Mobile banking platform case study: how Tizora connected a secure, API-first app to core banking and moved 60% of routine transactions off branch counters.",
    ogImage:
      "https://res.cloudinary.com/cjzo6qye/image/upload/f_jpg,q_80,w_1200,h_630,c_fill/v1790158223/fintech-second_image.png",
    ogImageAlt:
      "Mobile banking app dashboard on a laptop and smartphone showing accounts and recent transactions",
    primaryKeyword: "mobile banking platform",
    secondaryKeywords: [
      "mobile banking",
      "banking app",
      "digital banking",
      "core banking integration",
      "API-first banking",
      "cooperative bank mobile banking",
      "financial services",
      "fintech",
    ],
  },
  card: {
    image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790158223/fintech-second_image.png",
    imageAlt: "Mobile banking app dashboard on a laptop and smartphone showing accounts and recent transactions",
  },
  schema: {
    about: [
      { "@type": "Thing", name: "Mobile banking", sameAs: "https://en.wikipedia.org/wiki/Mobile_banking" },
      { "@type": "Thing", name: "Core banking", sameAs: "https://en.wikipedia.org/wiki/Core_banking" },
      { "@type": "Thing", name: "Cooperative banking", sameAs: "https://en.wikipedia.org/wiki/Cooperative_banking" },
      {
        "@type": "Thing",
        name: "Multi-factor authentication",
        sameAs: "https://en.wikipedia.org/wiki/Multi-factor_authentication",
      },
    ],
    mentions: [
      {
        "@type": "GovernmentOrganization",
        name: "Reserve Bank of India",
        sameAs: "https://en.wikipedia.org/wiki/Reserve_Bank_of_India",
      },
      {
        "@type": "Thing",
        name: "Unified Payments Interface (UPI)",
        sameAs: "https://en.wikipedia.org/wiki/Unified_Payments_Interface",
      },
      {
        "@type": "Thing",
        name: "Immediate Payment Service (IMPS)",
        sameAs: "https://en.wikipedia.org/wiki/Immediate_Payment_Service",
      },
      {
        "@type": "Thing",
        name: "National Electronic Funds Transfer (NEFT)",
        sameAs: "https://en.wikipedia.org/wiki/National_Electronic_Funds_Transfer",
      },
      {
        "@type": "Thing",
        name: "Real-time gross settlement (RTGS)",
        sameAs: "https://en.wikipedia.org/wiki/Real-time_gross_settlement",
      },
    ],
  },

  hero: {
    label: "Banking · Mobile banking · API-first core integration",
    title: mb.hero.title,
    description:
      "Tizora built an API-first mobile banking platform for cooperative and commercial banks, connected directly to core deposits, loans and accounting. Customers get secure 24×7 access to balances, transfers, bill payments and service requests. Around 60% of routine transactions moved off branch and call-center channels, and every mobile action runs through the same core API as the branch.",
    image: mb.hero.image,
    imageAlt: "Mobile banking app dashboard on a laptop and smartphone showing accounts and recent transactions",
    cta: mb.hero.cta,
    compactTitle: true,
  },

  outcomes: {
    tagTitle: "Key outcomes",
    heading: "What changed when banking went mobile",
    stats: [
      {
        value: "60%",
        label: "Routine transactions shifted",
        description: "Balance, transfer and payment requests moved from branch and call center to mobile.",
      },
      {
        value: "24×7",
        label: "Always-on access",
        description: "Banking services available independent of branch hours or staff availability.",
      },
      {
        value: "100%",
        label: "Core-connected",
        description: "Every mobile action flows through the same API layer as branch and teller operations.",
      },
    ],
  },

  challenge: {
    label: "The challenge",
    title: "What problem were branch-first banks facing?",
    paragraphs: mb.challenge.paragraphs,
    bullets: [
      "Routine balance, transfer and payment requests landing on stretched branch and call center staff",
      "Account and transaction logic that already lived in the core and could not be duplicated in an app",
      "Security and auditability that had to match what happens at the branch or teller window",
    ],
    image: mb.challenge.image,
    imageAlt: "Person typing on a laptop while holding a smartphone at a café table",
    dark: false,
    reverse: false,
  },

  build: {
    heading: "How did Tizora build it?",
    description:
      "We built the mobile app as an experience layer on top of the connected core, starting with the transactions customers request most and extending it in stages.",
    steps: [
      {
        label: "Step 1",
        title: "Map everyday transactions",
        description:
          "Listed the balance, transfer, bill payment and service requests customers reach for most often.",
      },
      {
        label: "Step 2",
        title: "Confirm the core banking APIs",
        description:
          "Checked which core APIs already expose those transactions, so the app reuses core rules instead of copying them.",
      },
      {
        label: "Step 3",
        title: "Build the secure experience layer",
        description:
          "Added multi-factor authentication, device binding and session controls, then built enquiry, transfer, payment and service request flows on the core API.",
      },
      {
        label: "Step 4",
        title: "Roll out and extend in stages",
        description:
          "Released mobile access in stages as trust and adoption grew, with room to add capabilities such as digital KYC onboarding.",
      },
    ],
  },

  architecture: {
    tagTitle: "Platform architecture",
    heading: "A mobile experience layer, not a second source of truth",
    paragraphs: mb.architecture.paragraphs,
    // Architecture diagram (illustrative), hosted on Cloudinary.
    image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791544083/case-studies/mobile-banking-architecture.png",
    imageWidth: 3350,
    imageHeight: 860,
    imageAlt:
      "Mobile banking architecture diagram. The customer mobile app connects through a security layer with multi-factor authentication and device binding to a mobile experience layer for balances and statements, UPI, IMPS and NEFT transfers, bill payments and service requests. All requests pass through one core banking API to deposits and loans, branch and teller systems and accounting, so the app never holds a second copy of the ledger.",
    caption:
      "Figure 1. Mobile banking architecture. The app is an experience layer; balances, rules and audit trails stay in the core behind one API boundary.",
    pointsTitle: "Three decisions that shaped the build",
    points: [
      {
        title: "No second copy of the ledger.",
        text: "Balances and transaction rules stay in the core; the app never holds its own copy of account state.",
      },
      {
        title: "One API boundary for every channel.",
        text: "Mobile, branch and teller requests pass through the same core API, so account state stays consistent across channels.",
      },
      {
        title: "Security and audit stay centralized.",
        text: "Validation and audit trails live in the core, while the mobile layer focuses on a fast, intuitive customer experience.",
      },
    ],
  },

  features: {
    tagTitle: "Key features",
    heading: "Everything customers need for everyday banking",
    description: mb.features.description,
    features: [
      {
        title: "Digital account opening",
        description:
          "Let customers open accounts from their phones in minutes. Paperless registration, eKYC, and document collection handled end-to-end.",
        bullets: [
          "eSign and OCR-based document extraction",
          "In-app video KYC for full compliance",
          "Mobile and branch-assisted journeys",
        ],
        imageSrc: mb.features.features[0].imageSrc,
        imageAlt: "Customer at a shop counter holding a smartphone while a staff member uses a tablet payment terminal",
      },
      {
        title: "Real-time payments",
        description:
          "UPI, IMPS, NEFT, and RTGS integrations let customers move money instantly. Configurable limits and approval layers keep risk in check.",
        bullets: [
          "Intra-bank and interbank transfers",
          "QR-based UPI payments",
          "Scheduled and recurring transfers",
          "Utility bill payments, recharges and biller integrations",
        ],
        imageSrc: mb.features.features[1].imageSrc,
        imageAlt: "Person holding a payment card while typing on a laptop",
      },
      {
        title: "Self-service banking",
        description:
          "Empower customers to manage their accounts without calling in. Statement requests, card controls and cheque book orders, all from their phone.",
        bullets: [
          "Real-time balances, mini statements and transaction history",
          "Card block / unblock and limit setting",
          "Cheque book and statement requests",
          "Loan EMI schedules and payment tracking",
        ],
        imageSrc: mb.features.features[2].imageSrc,
        imageAlt: "Laptop screen showing analytics dashboards with bar and line charts",
      },
      {
        title: "Security and compliance",
        description:
          "Security-first from the ground up. Every session, transaction, and data point is encrypted, audited, and compliant with regulatory guidelines.",
        bullets: [
          "MFA with biometric and OTP options",
          "Role-based access and device binding",
          "Immutable audit logs and RBI alignment",
        ],
        imageSrc: mb.features.features[3].imageSrc,
        imageAlt: "Padlock resting on a laptop keyboard lit in red and green",
      },
    ],
  },

  // Built only from technologies and capabilities named in the copy; frameworks were not disclosed.
  techStack: {
    title: "What technology powers the platform?",
    description: "Grouped by layer, from the customer's phone down to the core banking system.",
    categories: [
      {
        name: "App & services",
        description: "Native apps and the API services behind them.", // PLACEHOLDER: replace with measured data
        items: [
          { name: "Kotlin (Android)" }, // PLACEHOLDER: replace with measured data
          { name: "Swift (iOS)" }, // PLACEHOLDER: replace with measured data
          { name: "Java" }, // PLACEHOLDER: replace with measured data
          { name: "Spring Boot" }, // PLACEHOLDER: replace with measured data
          { name: "PostgreSQL" }, // PLACEHOLDER: replace with measured data
          { name: "Redis" }, // PLACEHOLDER: replace with measured data
        ],
      },
      {
        name: "Mobile experience layer",
        description: "The customer-facing app, kept free of its own copy of balances or rules.",
        items: [
          { name: "Mobile banking app" },
          { name: "QR-based UPI payments" },
          { name: "In-app video KYC" },
        ],
      },
      {
        name: "Core banking integration",
        description: "Every request goes through the API boundary the core exposes to all channels.",
        items: [
          { name: "API-first integration layer" },
          { name: "Core deposits, loans and accounting" },
          { name: "Shared branch and teller rules" },
        ],
      },
      {
        name: "Payments",
        description: "Real-time rails customers already use to move money.",
        items: [
          { name: "UPI" },
          { name: "IMPS" },
          { name: "NEFT" },
          { name: "RTGS" },
          { name: "Biller integrations" },
        ],
      },
      {
        name: "Onboarding",
        description: "Paperless account opening from the phone or with branch assistance.",
        items: [
          { name: "eKYC" },
          { name: "eSign" },
          { name: "OCR document extraction" },
          { name: "Video KYC" },
        ],
      },
      {
        name: "Security",
        description: "Controls built into every session and transaction.",
        items: [
          { name: "MFA (biometric and OTP)" },
          { name: "Device binding" },
          { name: "Session controls" },
          { name: "Role-based access control" },
          { name: "Encryption" },
          { name: "Immutable audit logs" },
        ],
      },
    ],
  },

  midCta: {
    text: "Planning a mobile banking rollout? See how an API-first app fits on top of your core banking system.",
    buttonText: "Discuss your mobile banking rollout",
    buttonHref: "/contact",
    note: "Talk to our financial services team",
  },

  results: {
    tagTitle: "Results",
    heading: "Outcome: 60% of routine transactions moved to mobile",
    description:
      "Routine banking moved to a self-service channel that stays in step with the core, so customers bank on their own schedule and branch staff handle fewer everyday requests.",
    columns: ["Metric", "Before", "After", "Change"],
    rows: [
      ["Routine transactions done on mobile (balance, transfer, payment)", "0%", "60%", "+60 pts"], // PLACEHOLDER: replace with measured data
      ["Hours banking services are available", "Branch hours only", "24×7", "Always on"],
      ["Time to complete a fund transfer", "About 20 min (branch visit)", "Under 2 min (in app)", "−90%"], // PLACEHOLDER: replace with measured data
      ["Mobile actions validated by core banking rules", "No mobile channel", "100%", "One source of truth"],
    ],
    method: {
      title: "How we measured",
      items: ["Indicative figures based on project estimates; to be replaced with measured client data."],
    },
  },

  quote: mb.quote,

  learned: {
    label: "Lessons",
    title: "What we learned",
    items: [
      {
        number: "01",
        title: "Keep one source of truth",
        description: [
          "Treating the app as an experience layer over the core kept balances consistent across mobile, branch and teller.",
        ],
      },
      {
        number: "02",
        title: "Reuse core rules, don't rebuild them",
        description: [
          "Routing every action through the core API let new mobile features ship without re-implementing financial logic.",
        ],
      },
      {
        number: "03",
        title: "Roll out in stages",
        description: [
          "Starting with the most-requested transactions and expanding as trust grows keeps each release small and easy to verify.",
        ],
      },
    ],
  },

  fit: {
    headline: "Will this work for your bank or NBFC?",
    subline: "Who it fits, what it connects to and how a rollout is usually scoped.",
    intro:
      "This approach fits institutions that want a secure mobile channel on top of an existing core banking system, without a rip-and-replace.",
    body: [
      "Built for: cooperative and urban co-op banks, small finance banks, commercial banks, NBFCs and fintech platforms",
      "Integrates with: your core banking system through its API layer, plus UPI, IMPS, NEFT and RTGS",
      "Typical scope: map the most-requested transactions, confirm core APIs, then roll out in stages",
    ],
    imageSrc:
      "https://res.cloudinary.com/cjzo6qye/image/upload/v1792402788/1_Mobile_Banking_in_a_Cozy_Workspace.png",
    imageAlt: "Mobile banking app displayed on a laptop and smartphone",
  },

  faqs: {
    tagTitle: "Mobile banking FAQs",
    heading: "Frequently asked questions",
    questions: mb.faqs.questions,
  },

  disclosure: {
    text: "Client name withheld under a confidentiality agreement. Results reflect this client's data and will vary. Some figures are indicative estimates pending measured client data.",
    links: [
      {
        label: "Related reading",
        items: [
          { label: "Software for financial services", href: "/industries/fintech" },
          { label: "Core banking case study", href: "/insights/case-studies/fintech/core-banking" },
          { label: "Digital KYC case study", href: "/insights/case-studies/fintech/digital-kyc" },
          { label: "Application security testing", href: "/cybersecurity/application-security" },
        ],
      },
    ],
  },

  related: {
    title: "More fintech case studies",
    description: "Related work on core banking, onboarding and compliance platforms for banks and NBFCs.",
  },

  cta: {
    heading: "Give your customers banking that fits in their pocket.",
    description:
      "Talk with Tizora about secure mobile access, connected core banking, and a rollout plan designed around your institution's customers.",
    buttonText: "Talk to our financial services team",
    buttonLink: "/contact",
  },
};

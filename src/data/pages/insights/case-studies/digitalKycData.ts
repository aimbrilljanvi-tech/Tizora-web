// Case Study: Digital KYC (video KYC onboarding) for a regional Indian bank.
// Copy follows the approved case-study format (answer capsule, outcomes, challenge, build,
// stack, results table, quote, lessons, fit, FAQ, disclosure). The format's "At a glance"
// panel and author/reviewer bylines are intentionally left out.

import type { CaseStudyContent } from "./caseStudyTypes";

export const PAGE_URL =
  "https://www.tizora.ai/insights/case-studies/fintech/digital-kyc";

const HERO_IMAGE =
  "https://res.cloudinary.com/cjzo6qye/image/upload/v1792402364/1_Smartphone_KYC_Verification_at_a_Modern_Bank_Branch.png";

export const PUBLISHED = "2026-09-30";
export const MODIFIED = "2026-10-09";
// Credited in metadata and structured data only; bylines are not shown on the page.
export const AUTHOR_NAME = "Tizora Team";

export const seoData = {
  title: "Digital KYC Case Study: 3 Days to 5 Minutes",
  description:
    "How Tizora helped a regional Indian bank cut account opening from 3 days to under 5 minutes with V-CIP video KYC, OCR and Aadhaar eSign.",
  url: PAGE_URL,
  // Card image on the case-studies listing.
  image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790250677/ChatGPT_Image_Sep_24_2026_05_20_49_PM.png",
  imageAlt:
    "Digital KYC artwork showing a verified customer with identity verification, face match and document validation checks",
  primaryKeyword: "digital KYC",
  secondaryKeywords: [
    "video KYC",
    "V-CIP",
    "Aadhaar eKYC",
    "Aadhaar eSign",
    "OCR KYC",
    "digital account opening",
    "bank onboarding",
    "KYC compliance for banks and NBFCs",
  ],
  // Social / search share image (Open Graph and Twitter).
  // 1200x630 JPEG (~100 KB). WhatsApp and some other apps skip share images over ~300 KB.
  ogImage: "https://res.cloudinary.com/cjzo6qye/image/upload/f_jpg,q_80,w_1200,h_630,c_fill/v1790249920/digital-kyc-og-image.png",
  ogImageAlt:
    "Tizora Digital KYC banner reading \"Secure Identity. Seamless Access.\" with a smiling customer in a face-scan frame and checks for identity verification, face match and document validation",
};

export const digitalKycData = {
  /* 1-3 Headline + answer capsule -> HeroSplit */
  hero: {
    label: "Banking · Digital onboarding · Video KYC · OCR · eSign",
    title: "Digital KYC",
    description:
      "Tizora built a digital KYC platform for a 140-branch regional bank in India, bringing V-CIP video KYC, OCR document checks and Aadhaar eSign into one mobile and branch onboarding flow. In 7 months, account opening time fell from 3 days to 4 min 40 s, drop-off fell from 38% to 14%, and every KYC step became audit-ready for RBI inspection.",
    image: HERO_IMAGE,
    imageAlt:
      "Smiling customer inside a face-scan frame, with liveness check, face match and identity verified labels ticking off during a video KYC check",
    cta: { label: "Discuss a similar KYC rollout", href: "/contact" },
  },

  /* 4 Key outcomes -> StatBand */
  outcomes: {
    tagTitle: "Key outcomes",
    heading: "What changed in the first 90 days after go-live",
    stats: [
      {
        value: "4m 40s",
        label: "Average account opening time",
        description: "Down from 3 days · 90 days post go-live",
      },
      {
        value: "−24 pts",
        label: "Onboarding drop-off",
        description: "38% → 14% · same period",
      },
      {
        value: "81%",
        label: "Documents verified with no manual review",
        description: "OCR + automated checks",
      },
      {
        value: "0",
        label: "Audit observations on digital KYC",
        description: "First internal audit after launch",
      },
    ],
  },

  /* 7 The challenge -> ContentSplit (with bullets) */
  challenge: {
    label: "The challenge",
    title: "What problem was the bank facing?",
    paragraphs: [
      "Opening an account meant a branch visit, a six-page paper form and photocopied documents. Back-office staff then re-keyed and verified the data, which took an average of 3 days. Customers used to [opening a wallet in two minutes](/insights/case-studies/fintech/mobile-banking) didn't wait: 38% dropped out before their account was active.",
      "Speed couldn't come at the cost of compliance. Every onboarding had to verify identity against an Officially Valid Document, capture consent, collect a legally valid signature and keep records that would hold up in an RBI inspection.",
    ],
    bullets: [
      "22 minutes of back-office effort per application",
      "17% of applications sent back for rework because of data-entry errors",
      "A [core banking system](/insights/case-studies/fintech/core-banking) that couldn't be replaced during the project",
    ],
    image:
      "https://res.cloudinary.com/cjzo6qye/image/upload/v1792402365/2_Focused_Bank_Clerk_Reviewing_Documents.png",
    imageAlt: "Bank clerk reviewing customer documents during account onboarding",
    dark: false,
    reverse: false,
  },

  /* 8 How we built it -> ProcessUI (phases) */
  build: {
    heading: "How did Tizora and the bank build it?",
    description:
      "We built one onboarding workflow that runs on customers' phones and on branch tablets. It combines V-CIP video KYC, Aadhaar eKYC, officer-assisted Digital KYC, OCR and Aadhaar eSign, and connects to the bank's existing systems through one KYC API.",
    steps: [
      {
        label: "Weeks 1–4",
        title: "Discovery",
        description: "Mapped journeys and regulatory obligations with compliance.",
        image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790761232/case-studies/digital-kyc-step-1-discovery.svg",
        imageAlt: "Illustration of a customer journey map under a magnifying glass beside a compliance checklist",
      },
      {
        label: "Weeks 5–8",
        title: "Design & sign-off",
        description: "Controls agreed before a line of code.",
        image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790761235/case-studies/digital-kyc-step-2-design-signoff.svg",
        imageAlt: "Illustration of an onboarding screen wireframe beside a signed controls document with an approval seal",
      },
      {
        label: "Weeks 9–20",
        title: "Build",
        description: "V-CIP, OCR, eSign, KYC API, CBS/LOS integration.",
        image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790761237/case-studies/digital-kyc-step-3-build.svg",
        imageAlt: "Illustration of a phone video KYC call and a branch tablet reading an ID card, both connected to core banking, LOS and CRM systems",
      },
      {
        label: "Weeks 21–30",
        title: "Pilot → rollout",
        description: "12 pilot branches, then all 140.",
        image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790761241/case-studies/digital-kyc-step-4-pilot-rollout.svg",
        imageAlt: "Illustration of a few pilot branches going live, followed by the full branch network",
      },
    ],
  },

  /* 8 Architecture figure + key decisions -> FigureBlock */
  architecture: {
    tagTitle: "Platform architecture",
    heading: "Digital KYC platform architecture",
    paragraphs: [
      "Mobile app and branch tablet feed a KYC orchestration layer, which calls V-CIP, OCR, eSign, eKYC and CKYC services, then posts verified records through the KYC API to [core banking](/insights/case-studies/fintech/core-banking), LOS and CRM. Every step writes to an immutable audit log.",
    ],
    // Architecture diagram (labels match the copy: LOS, officer-assisted, "Picks the path").
    image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791544078/case-studies/digital-kyc-platform-architecture.png",
    imageWidth: 3198,
    imageHeight: 940,
    imageAlt:
      "Digital KYC platform architecture diagram. A self-service mobile app and a branch tablet feed a KYC orchestration layer that picks the verification path for each customer. It calls five services: V-CIP video KYC, OCR extraction, Aadhaar eKYC, Aadhaar eSign and CKYC lookup. Verified records pass through one KYC API to core banking, the loan origination system (LOS) and CRM/DMS. An immutable audit log underneath time-stamps and attributes every step for RBI inspection.",
    caption:
      "Figure 1. Digital KYC platform architecture. Mobile and branch journeys share one orchestration layer and one KYC API; the bank's existing core banking system and LOS stayed in place, and every step is written to an immutable audit log.",
    pointsTitle: "Three decisions that shaped the build",
    points: [
      {
        title: "One workflow, two channels.",
        text: "Mobile and branch journeys share the same checks and audit trail, so a customer can [start on the phone](/insights/case-studies/fintech/mobile-banking) and finish at a branch without starting over.",
      },
      {
        title: "AI assists the official; it doesn't replace them.",
        text: "Liveness detection and face match support the bank official on the V-CIP call, as RBI requires.",
      },
      {
        title: "Humans review what OCR is unsure about.",
        text: "Fields with low confidence scores go to review, which kept the error rate below the paper baseline.",
      },
    ],
  },

  /* 8b Tech stack -> TechStackTabs (one tab per layer; logos where a public one exists) */
  techStack: {
    title: "What technology powers the platform?",
    categories: [
      {
        name: "Mobile & web",
        description: "One codebase for the customer app and the branch tablet.",
        items: [
          { name: "React Native", icon: "https://cdn.simpleicons.org/react" },
          { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
          { name: "React (officer console)", icon: "https://cdn.simpleicons.org/react" },
        ],
      },
      {
        name: "Backend & APIs",
        description: "Orchestrates each KYC path and exposes one API to bank systems.",
        items: [
          { name: "Java 21", icon: "https://cdn.simpleicons.org/openjdk" },
          { name: "Spring Boot", icon: "https://cdn.simpleicons.org/springboot" },
          { name: "REST + OpenAPI", icon: "https://cdn.simpleicons.org/openapiinitiative" },
          { name: "Apache Kafka", icon: "https://cdn.simpleicons.org/apachekafka" },
        ],
      },
      {
        name: "Video KYC (V-CIP)",
        description: "Encrypted, recorded video calls that work on weak networks.",
        items: [
          { name: "WebRTC", icon: "https://cdn.simpleicons.org/webrtc" },
          { name: "TURN / STUN" },
          { name: "Adaptive bitrate" },
        ],
      },
      {
        name: "AI & document intelligence",
        description: "Reads Indian ID documents and supports the official on the call.",
        items: [
          { name: "Custom OCR (Aadhaar, PAN, passport, DL)" },
          { name: "Face match" },
          { name: "Liveness detection" },
          { name: "Python", icon: "https://cdn.simpleicons.org/python" },
          { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch" },
        ],
      },
      {
        name: "Data & storage",
        description: "Customer records, masked Aadhaar and tamper-proof audit trail.",
        items: [
          { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
          { name: "Redis", icon: "https://cdn.simpleicons.org/redis" },
          { name: "Amazon S3 (encrypted)" },
          { name: "Append-only audit log" },
        ],
      },
      {
        name: "Cloud & DevOps",
        description: "Hosted in India for data residency; zero-downtime releases.",
        items: [
          { name: "AWS Mumbai (ap-south-1)" },
          { name: "Kubernetes (EKS)", icon: "https://cdn.simpleicons.org/kubernetes" },
          { name: "Terraform", icon: "https://cdn.simpleicons.org/terraform" },
          { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions" },
        ],
      },
      {
        name: "Security",
        description: "Controls the bank's audit and InfoSec teams asked for.",
        items: [
          { name: "AES-256 at rest" },
          { name: "TLS 1.3" },
          { name: "RBAC + maker-checker" },
          { name: "AWS KMS" },
          { name: "VAPT before go-live" },
        ],
      },
      {
        name: "Integrations",
        description: "Connected, not replaced.",
        items: [
          { name: "Core banking (CBS)" },
          { name: "Loan origination (LOS)" },
          { name: "UIDAI eKYC via licensed partner" },
          { name: "Licensed eSign ASP" },
          { name: "DigiLocker" },
          { name: "CKYC registry" },
        ],
      },
    ],
  },

  /* 9 Mid-page CTA -> CtaStrip */
  midCta: {
    text: "Planning V-CIP or eKYC for your bank or NBFC? See how this architecture fits your core banking system.",
    buttonText: "Discuss a similar KYC rollout",
    buttonHref: "/contact",
    note: "30-minute call with our fintech engineering lead",
  },

  /* 10 Results -> ResultsTable */
  results: {
    tagTitle: "Results",
    heading: "Outcome: account opening 99% faster within 90 days",
    description:
      "We compared the 90 days before full rollout with the 90 days after, across 29,400 onboardings. Every figure comes from the platform's audit log and the bank's branch MIS reports, and was approved by the bank's digital banking team.",
    columns: ["Metric", "Before", "After", "Change"],
    rows: [
      ["Average account opening time", "3 days", "4 min 40 s", "−99%"],
      ["Onboarding drop-off", "38%", "14%", "−24 pts"],
      ["Back-office effort per application", "22 min", "4 min", "−82%"],
      ["Applications needing rework", "17%", "3%", "−14 pts"],
      ["Accounts opened per month", "6,200", "9,800", "+58%"],
    ],
    method: {
      title: "How we measured",
      items: [
        "Source: time-stamps in the platform audit log; baseline from the bank's branch MIS reports.",
        "Period: 90 days before vs. 90 days after full rollout (Mar–May vs. Sep–Nov 2025).",
        "Sample: 29,400 onboardings after go-live.",
        "Sign-off: figures reviewed and approved by the bank's digital banking team.",
      ],
    },
  },

  /* 11 Client quote -> QuoteBlock (credited by role, client under NDA) */
  quote: {
    quote:
      "Our first internal audit after launch closed with zero observations on digital KYC. Our branches opened 58% more accounts a month without adding a single back-office role.",
    author: "Chief Digital Officer",
    role: "Regional commercial bank, India (name withheld at the client's request)",
  },

  /* 12 What we learned -> BenefitGrid */
  learned: {
    label: "Lessons",
    title: "What we learned",
    items: [
      {
        number: "01",
        title: "Bring compliance in during week one",
        description: ["Agreeing controls before the build removed two rounds of rework later."],
      },
      {
        number: "02",
        title: "Branch staff drive adoption",
        description: ["41% of first-quarter volume came through officer-assisted journeys, not the app."],
      },
      {
        number: "03",
        title: "Plan for weak networks",
        description: ["Our first V-CIP build failed on 2G. Adaptive video and resumable sessions fixed it."],
      },
    ],
  },

  /* 13 Will this work for you? -> TextImage */
  fit: {
    headline: "Will this work for your institution?",
    subline: "Timeline, team and prerequisites for a similar rollout.",
    intro:
      "This approach fits RBI-regulated banks, NBFCs and PPI issuers that need V-CIP, eKYC or officer-assisted Digital KYC without replacing their [core systems](/insights/case-studies/fintech/core-banking).",
    body: [
      "Typical timeline: 6–8 months from discovery to full rollout",
      "Team: 8–10 engineers, QA, a designer and a compliance analyst",
      "Prerequisites: API access to core banking/LOS and a licensed eSign Service Provider",
    ],
    image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1792402365/3_Bank_Identity_Verification_Consultation.png",
    imageAlt: "Bank identity verification consultation",
  },

  /* 14 FAQ -> AccordionFAQ; the same list feeds the FAQPage schema */
  faqs: {
    tagTitle: "Video KYC FAQs",
    heading: "Frequently asked questions",
    questions: [
      {
        q: "What is digital KYC in banking?",
        a: "Digital KYC is verifying a bank customer's identity electronically instead of with paper. In India, the RBI's KYC Master Direction uses \"Digital KYC\" for a specific method: an authorised officer captures a live photo of the customer and their Officially Valid Document with GPS coordinates. Banks usually combine it with Aadhaar eKYC and video KYC (V-CIP) to cover every customer segment.",
      },
      {
        q: "What is the difference between digital KYC and video KYC?",
        a: "Digital KYC is officer-assisted: an authorised bank officer photographs the customer and their document on a secure app, with location and time recorded. Video KYC, called V-CIP by the RBI, is a live video call between the customer and a bank official, with liveness checks, geo-location and a recorded session. V-CIP lets customers complete full KYC without meeting anyone in person.",
      },
      {
        q: "Is video KYC (V-CIP) full KYC?",
        a: "Yes. RBI treats a V-CIP that meets its KYC Master Direction as equal to in-person verification. That requires a live official, liveness check, geo-location within India and a recorded session.",
      },
      {
        q: "Where is customer data stored?",
        a: "In the bank's own India-region infrastructure. Aadhaar numbers are masked before storage, and documents are encrypted at rest and in transit.",
      },
      {
        q: "Did the bank replace its core banking system?",
        a: "No. The platform connects to the existing CBS, LOS and CRM through one KYC API, and verified records arrive as structured data.",
      },
    ],
  },

  /* 15 Disclosure -> Disclosure */
  disclosure:
    "Client name withheld under a confidentiality agreement. This case study and its metrics were reviewed and approved by the client. Results reflect this client's data, systems and measurement period and will vary for other institutions. Tizora supported the client's compliance with the RBI Master Direction – KYC, 2016 (as amended); responsibility for compliance rests with the regulated entity. Screens shown use synthetic data.",

  // Shown with the disclosure: authoritative sources and related Tizora pages.
  disclosureLinks: [
    {
      label: "Regulatory references",
      items: [
        { label: "RBI Master Direction – KYC", href: "https://www.rbi.org.in/scripts/bs_viewmasdirections.aspx?id=11566" },
        { label: "RBI FAQs on KYC", href: "https://www.rbi.org.in/commonman/english/Scripts/FAQs.aspx?Id=3782" },
        { label: "UIDAI", href: "https://uidai.gov.in/" },
        { label: "MeitY (DPDP Act, 2023)", href: "https://www.meity.gov.in/" },
      ],
    },
    {
      label: "Related reading",
      items: [
        { label: "Software for financial services", href: "/industries/fintech" },
        { label: "Core banking case study", href: "/insights/case-studies/fintech/core-banking" },
        { label: "Mobile banking case study", href: "/insights/case-studies/fintech/mobile-banking" },
        { label: "DPDP Act compliance", href: "/compliance/dpdp" },
        { label: "Application security testing", href: "/cybersecurity/application-security" },
      ],
    },
  ],

  /* 16 Final CTA -> BannerCTA */
  cta: {
    heading: "Planning a digital KYC or video KYC rollout?",
    description:
      "In 30 minutes, our fintech engineering lead will map your onboarding journey and suggest a phased build and compliance plan for your core banking and loan systems.",
    buttonText: "Discuss a similar KYC rollout",
    buttonLink: "/contact",
    secondaryButtonText: "Request a reference call (under NDA)",
    secondaryButtonLink: "/contact",
    imageAlt:
      "Engineer wearing headphones writing code on a laptop, with labels for scalable architecture, AI integration and enterprise systems",
  },

  /* 17 Related case studies -> StoryCarousel */
  related: {
    title: "More from banking and fintech",
    description: "Related work engineering onboarding, banking and compliance platforms for banks and NBFCs.",
  },
};

/* ---- Standard case-study model (rendered by <CaseStudyTemplate>) ---- */
const d = digitalKycData;

export const digitalKycCaseStudy: CaseStudyContent = {
  id: "cs-digital-kyc",
  breadcrumbLabel: "Digital KYC",
  url: PAGE_URL,
  published: PUBLISHED,
  modified: MODIFIED,
  author: AUTHOR_NAME,
  inLanguage: "en-IN",
  seo: {
    title: seoData.title,
    description: seoData.description,
    ogImage: seoData.ogImage,
    ogImageAlt: seoData.ogImageAlt,
    primaryKeyword: seoData.primaryKeyword,
    secondaryKeywords: seoData.secondaryKeywords,
  },
  // Landscape artwork, so the 16:9 card frame shows the whole design (the square hero crops at the top and bottom).
  card: { image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790249920/digital-kyc-og-image.png", imageAlt: seoData.ogImageAlt },
  schema: {
    about: [
      { "@type": "Thing", name: "Know your customer", sameAs: "https://en.wikipedia.org/wiki/Know_your_customer" },
      { "@type": "Thing", name: "Video KYC (V-CIP)" },
      { "@type": "Thing", name: "Aadhaar", sameAs: "https://en.wikipedia.org/wiki/Aadhaar" },
      { "@type": "Thing", name: "Optical character recognition", sameAs: "https://en.wikipedia.org/wiki/Optical_character_recognition" },
    ],
    mentions: [
      { "@type": "GovernmentOrganization", name: "Reserve Bank of India", sameAs: "https://en.wikipedia.org/wiki/Reserve_Bank_of_India" },
      { "@type": "GovernmentOrganization", name: "Unique Identification Authority of India", sameAs: "https://en.wikipedia.org/wiki/Unique_Identification_Authority_of_India" },
      { "@type": "Legislation", name: "Prevention of Money Laundering Act, 2002" },
      { "@type": "Legislation", name: "Digital Personal Data Protection Act, 2023" },
    ],
  },
  hero: {
    ...d.hero,
    faceScan: {
      box: [33.5, 19.5, 29, 35],
      labels: [
        { text: "Liveness check", at: [10.9, 33.5, 20, 6.9], doneAt: 1 },
        { text: "Face match", at: [66.6, 40.6, 22.9, 6.9], tint: true, doneAt: 2 },
        { text: "Identity verified", at: [23.4, 65.2, 20.7, 6.8], doneAt: 4 },
      ],
      ticks: [
        { at: [14.7, 51.7], size: 7.6 },
        { at: [81.4, 61.1], size: 13.8 },
      ],
    },
  },
  outcomes: d.outcomes,
  challenge: d.challenge,
  build: d.build,
  architecture: d.architecture,
  techStack: d.techStack,
  midCta: d.midCta,
  results: d.results,
  quote: d.quote,
  learned: d.learned,
  fit: {
    headline: d.fit.headline,
    subline: d.fit.subline,
    intro: d.fit.intro,
    body: d.fit.body,
    imageSrc: d.fit.image,
    imageAlt: d.fit.imageAlt,
  },
  faqs: d.faqs,
  disclosure: { text: d.disclosure, links: d.disclosureLinks },
  related: d.related,
  cta: d.cta,
};

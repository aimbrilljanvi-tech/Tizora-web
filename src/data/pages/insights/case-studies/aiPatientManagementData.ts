// Case Study: AI-Ready Patient Management & Medication Administration Platform

import type { CaseStudyContent } from "./caseStudyTypes";

export const seoData = {
  title: "AI-Ready Patient Management & Medication Administration Platform",
  description: "Engineering a Connected Healthcare Platform for Safer, More Efficient Medication Management.",
  url: "https://www.tizora.ai/insights/case-studies/healthcare/ai-ready-patient-management-platform",
  image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1792406736/1_Scanning_Medication_in_a_Clinical_Setting.png"
};

export const aiPatientManagementData = {

  hero: {
    logo: 'HealthConnect',
    title: 'Engineering a Connected Healthcare Platform for Safer Medication Management',
    keyResults: [
      'Centralized medication and patient workflows',
      'Third-party pharmacy system integration',
      'Barcode-based inventory and administration tracking',
    ],
    image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1792406736/1_Scanning_Medication_in_a_Clinical_Setting.png',
    imageAlt: 'Medication being scanned in a clinical setting',
  },

  summary: {
    title: 'A centralized, secure, and scalable digital healthcare platform.',
    paragraph: 'Managing patients and medications involves multiple interconnected workflows. The challenge was transforming fragmented processes into a centralized, secure digital platform. We engineered a solution that integrates pharmacy data, automates medication workflows, supports barcode inventory, and creates a foundation for future AI-powered intelligence.',
    // Rows describe what was actually built, not generic case-study metadata.
    items: [
      { label: 'Care model', value: 'Digital health & medication administration' },
      { label: 'Pharmacy integration', value: 'Third-party pharmacy system integration' },
      { label: 'Inventory tracking', value: 'Barcode-based inventory and administration tracking' },
      { label: 'Workflows', value: 'Centralized medication and patient workflows' },
    ],
    metadata: {
      labels: { location: 'Reach', industry: 'Care model', period: 'Engagement', services: 'Engineering scope' },
      location: 'Global',
      period: '2023 - 2024',
      industry: 'Digital Health',
      services: ['Product Engineering', 'Cloud Architecture', 'Data Engineering', 'Integration Engineering']
    }
  },

  businessChallenge: {
    label: 'The Business Challenge',
    title: 'How can healthcare professionals get the right information without increasing administrative workload?',
    paragraphs: [
      'Healthcare staff were spending significant time on manual and disconnected activities: calling pharmacies, maintaining records, tracking inventory, coordinating appointments, and preparing reports.',
      'Searching across multiple sources for patient information was time-consuming and prone to errors.',
      'The product needed to answer a simple but critical question: How can we deliver the right information at the right time while actually reducing the administrative burden on clinical staff?'
    ],
    image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1792406737/2_Pharmacy_Worker_Checking_Medication_Inventory.png',
    dark: false,
    reverse: false
  },
  
  engineeringApproach: {
    feature2: {
      title: 'Our Product Engineering Approach',
      bullets: [
        'Designed a connected healthcare ecosystem, not a standalone app',
        'Built centralized Patient Records and Medication Management',
        'Engineered third-party Pharmacy and Inventory Integrations',
        'Structured architecture to be flexible for future AI capabilities'
      ]
    },
    warehouse: {
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop'
    }
  },

  coreChallenges: {
    label: 'Major Engineering Challenges We Solved',
    title: 'Building a Unified Operational View',
    description: 'We transformed disconnected systems into a single operational view of the patient.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    features: [
      {
        icon: 'Activity',
        title: 'Real-Time Medication Management',
        description: 'Implemented a centralized medication workflow and Medsheet that provides current dosage info and synchronizes with external IPS pharmacy systems.'
      },
      {
        icon: 'Database',
        title: 'Third-Party Pharmacy Integration',
        description: 'Created a complex integration layer to handle different data structures and inconsistencies, connecting external pharmacy info with the central record.'
      },
      {
        icon: 'ScanBarcode',
        title: 'Barcode-Based Inventory',
        description: 'Implemented barcode-based inventory workflows that digitally track medications from product identification to stock visibility and reordering.'
      },
      {
        icon: 'Users',
        title: 'Unified Patient Information',
        description: 'Consolidated demographics, allergies, medications, orders, and documents into a centralized, secure patient-management experience.'
      }
    ]
  },

  aiOpportunity: {
    label: 'AI Architecture',
    title: 'Where AI Can Add the Next Layer of Value',
    paragraphs: [
      'The engineering foundation enables several practical AI use cases. Intelligent Patient Summaries can review recent medication changes, allergies, and provider orders instantly.',
      'Medication Intelligence can identify unusual changes or inconsistencies and flag them for professional review, while Predictive Inventory analyzes consumption to forecast demand.',
      'Furthermore, Natural-Language Search allows authorized staff to ask complex questions like "Show patients with recent medication changes," translating them into secure queries.'
    ],
    image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1792406737/3_Nurses_Collaborating_Over_Medication_Cart.png',
    dark: false,
    reverse: true
  },

  contributions: {
    label: 'Engineering Focus',
    title: 'What Our Product Engineers Contributed',
    items: [
      { number: "01", title: "Product Architecture", description: ["Designed a scalable healthcare platform around interconnected workflows."] },
      { number: "02", title: "Integration Engineering", description: ["Connected third-party pharmacy systems with patient and medication records."] },
      { number: "03", title: "Data Engineering", description: ["Created structured patient, medication, provider and inventory data flows."] },
      { number: "04", title: "Workflow Automation", description: ["Digitized medication administration, inventory and reporting processes."] },
      { number: "05", title: "Cloud Engineering", description: ["Built the platform using AWS, Lambda and microservices."] },
      { number: "06", title: "Security Engineering", description: ["Incorporated controlled access, encryption and auditability aligned with HIPAA."] },
      { number: "07", title: "AI Readiness", description: ["Created the structured data and service architecture required to introduce intelligent capabilities safely."] }
    ]
  },

  technicalChallenges: {
    tagTitle: "Technical Deep-Dive",
    heading: "Key Technical Challenges",
    questions: [
      { q: "Fragmented Pharmacy Data", a: "Engineered an integration layer to normalize external IPS pharmacy systems." },
      { q: "Manual Inventory Tracking", a: "Implemented barcode scanning and digital stock visibility workflows." },
      { q: "Disconnected Patient Records", a: "Consolidated demographics, allergies, and orders into a single operational view." },
      { q: "Security & HIPAA Compliance", a: "Implemented strict access controls, encryption, and comprehensive audit trails." },
      { q: "Future AI Integration", a: "Established a structured data foundation and decoupled microservice architecture." }
    ]
  },

  businessValue: {
    label: "Business Value",
    title: "Measurable Operational Improvements",
    items: [
      {
        number: "01",
        title: "For Patients & Safety",
        description: ["Significantly reduced Medication Occurrence Reports and improved overall administration accuracy."]
      },
      {
        number: "02",
        title: "For Healthcare Staff",
        description: ["Reduced pharmacy calls and administrative effort, saving approximately 2 hours per patient per week."]
      },
      {
        number: "03",
        title: "For the Business",
        description: ["Represented ~520 nursing hours and $15,000 in annual nursing-time savings for a single group-home facility."]
      },
      {
        number: "04",
        title: "Technology Stack",
        description: ["AWS, Lambda, Microservices, Barcode Scanning Integration, Secure Data Pipelines."]
      }
    ]
  },

  productEngineering: {
    label: 'Engineering Impact',
    title: 'From Digital Healthcare to Intelligent Healthcare',
    paragraphs: [
      'The key lesson is that AI does not start with an AI model. It starts with reliable data, connected systems, well-engineered workflows, and a strong secure architecture.',
      'Our product engineering team delivered that foundation—turning fragmented healthcare processes into a connected platform that can continuously evolve toward AI-powered patient intelligence, the same foundation-first approach we applied to a [digital weight management platform](/insights/case-studies/healthcare/weight-management).',
      'We don\'t just add AI to software. We engineer the product foundation that allows AI to create measurable value in production, as in our [AI-enhanced license plate recognition](/insights/case-studies/parking/ai-lpr-parking-enforcement) work for parking enforcement.'
    ],
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop',
    dark: true,
    reverse: false
  },

  // Card items for this section are derived live from real case studies in
  // AIPatientManagement.tsx (getRelatedCaseStudies) -- not hardcoded here.
  related: {
    title: 'More engineering stories',
    description: 'Explore other ways we’ve solved complex engineering challenges.',
  }

};

/* ---- Standard case-study model (rendered by <CaseStudyTemplate>) ----
 * Copy follows the approved case-study document, word for word, for every section this template
 * has. Left out: sections with no component (in short, key takeaways, at a glance) and three
 * items held back until the owner confirms them, because the document is marked as a demo with
 * illustrative figures: the client quote, the "How we measured" source/sample/approval lines,
 * and the meta description that leads with those figures. The key features section, the
 * architecture heading and paragraphs, and the related-reading links are not in the document
 * and are unchanged. */
const pm = aiPatientManagementData;

export const patientManagementCaseStudy: CaseStudyContent = {
  id: "cs-patient-management",
  breadcrumbLabel: "AI-Ready Patient Management",
  url: seoData.url,
  published: "2026-04-02",
  modified: "2026-10-15",
  inLanguage: "en-US",
  seo: {
    title: "AI-Ready Patient Management Platform Case Study",
    description:
      "AI-ready patient management platform with pharmacy integration, barcode inventory and medication workflows on AWS, saving staff ~2 hours per patient a week.",
    // 1200x630 JPEG rendered from the hero artwork, so link previews show the image.
    ogImage: "https://res.cloudinary.com/cjzo6qye/image/upload/f_jpg,q_82/v1791958954/case-studies/patient-management-share.png",
    ogImageAlt:
      "Tizora case study artwork for the AI-Ready Patient Management Platform: a care staff Medsheet with medications ticked off as given, beside pharmacy sync, barcode inventory and AI summary cards on a white background",
    primaryKeyword: "AI-ready patient management platform",
    secondaryKeywords: [
      "medication administration software",
      "medication management platform",
      "pharmacy system integration",
      "barcode inventory tracking",
      "HIPAA-aligned healthcare platform",
      "AI-ready healthcare data",
      "AWS Lambda microservices",
      "healthcare product engineering",
    ],
  },
  // 16:9 listing card rendered from the same hero artwork, hosted on Cloudinary.
  card: {
    image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791958951/case-studies/patient-management-card.png",
    imageAlt:
      "Tizora case study artwork for the AI-Ready Patient Management Platform: a care staff Medsheet with medications ticked off as given, beside pharmacy sync, barcode inventory and AI summary cards on a white background",
  },
  schema: {
    about: [
      { "@type": "Thing", name: "Electronic health record", sameAs: "https://en.wikipedia.org/wiki/Electronic_health_record" },
      { "@type": "Thing", name: "Medication administration" },
      { "@type": "Thing", name: "Barcode", sameAs: "https://en.wikipedia.org/wiki/Barcode" },
      { "@type": "Thing", name: "Serverless computing", sameAs: "https://en.wikipedia.org/wiki/Serverless_computing" },
    ],
    mentions: [
      {
        "@type": "Legislation",
        name: "Health Insurance Portability and Accountability Act",
        sameAs: "https://en.wikipedia.org/wiki/Health_Insurance_Portability_and_Accountability_Act",
      },
    ],
    citation: [
      { "@type": "WebPage", name: "HIPAA, U.S. Department of Health and Human Services", url: "https://www.hhs.gov/hipaa/index.html" },
    ],
  },

  hero: {
    label: "Healthcare · Medication management · Pharmacy integration · AWS",
    title: "Connected Medication Management: Helping Nurses Spend Less Time on Administration and More Time on Patient Care",
    description:
      "Tizora built an AI-ready patient management platform for a group-home care provider. Patient records, medication administration, pharmacy data and barcode inventory now sit in one secure system on AWS, so staff see a current, complete medication picture without phoning the pharmacy or checking four systems. It was built on structured data from day one, so AI features can be added safely later.",
    image: pm.hero.image,
    imageAlt: "Medication being scanned in a clinical setting",
    cta: { label: "Discuss a similar project", href: "/contact" },
    compactTitle: true,
  },

  outcomes: {
    tagTitle: "Key outcomes",
    stats: [
      { value: "~2 hrs", label: "Staff time saved per patient per week", description: "~5 h → ~3 h on medication and admin tasks" },
      { value: "−73%", label: "Pharmacy confirmation calls", description: "~30 → ~8 calls a week" },
      { value: "4 → 1", label: "Systems checked per patient", description: "One medication view" },
      { value: "~520 hrs", label: "Nursing hours saved a year", description: "~$15,000 at a single group-home facility" },
    ],
  },

  challenge: {
    label: "The challenge",
    title: "Why was medication management costing nurses so much time?",
    paragraphs: [
      "Care staff were spending about 5 hours per patient each week on tasks around medication instead of care: calling pharmacies, updating records, counting stock and preparing reports. The information they needed existed, but it was spread across sources that didn't connect, and searching them was slow and prone to error.",
    ],
    bullets: [
      "Pharmacy details were confirmed by phone, around 30 calls a week",
      "Medication stock was tracked by hand, with no barcode-based visibility",
      "Demographics, allergies, medications and orders sat in four separate systems",
      "Every workflow had to meet strict access-control and HIPAA requirements",
    ],
    image: pm.businessChallenge.image,
    imageAlt: "Pharmacy worker checking medication inventory",
    dark: false,
    reverse: false,
  },

  build: {
    heading: "How does the connected platform work?",
    description:
      "Pharmacy data arrives through an integration layer that cleans and standardizes it, then joins a single structured patient record. Medication, inventory and patient services read and write to that record, and care staff see the result in one view. Access control, encryption and audit trails apply at every step.",
    steps: [
      {
        label: "Connect",
        title: "Pharmacy sync",
        description: "External IPS pharmacy systems feed the platform directly",
      },
      {
        label: "Normalize",
        title: "One patient record",
        description: "Demographics, allergies, medications, orders and documents in one place",
      },
      {
        label: "Administer",
        title: "Live Medsheet",
        description: "Staff see current dosage information for each patient",
      },
      {
        label: "Track",
        title: "Barcode inventory",
        description: "Each medication is scanned from identification through stock visibility to reordering",
      },
    ],
  },

  architecture: {
    tagTitle: "Platform architecture",
    heading: "An AI-ready architecture on AWS",
    // Not in the source document; kept from the previous version (they carry the internal links).
    paragraphs: [
      "The platform runs on AWS using Lambda and microservices. An integration layer normalizes data from external IPS pharmacy systems, which arrives in different structures and with inconsistencies, and connects it to the central patient record. Structured data flows link patient, medication, provider and inventory data, with controlled access, encryption and audit trails aligned with HIPAA. Barcode-driven stock tracking follows the same scan-and-verify pattern we built into the [CStore Master warehouse](/insights/case-studies/retail/cstore-master), where every picked item is checked before it moves on.",
      "That foundation is ready for practical AI use cases: intelligent patient summaries of recent medication changes, allergies and provider orders; medication intelligence that flags unusual changes for professional review; predictive inventory that forecasts demand from consumption; and natural-language search that turns questions like \"Show patients with recent medication changes\" into secure queries for authorized staff.",
      "It is the same foundation-first approach we applied to a [digital weight management platform](/insights/case-studies/healthcare/weight-management).",
    ],
    // Architecture diagram (illustrative), hosted on Cloudinary.
    image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791544085/case-studies/patient-management-architecture.png",
    imageWidth: 3380,
    imageHeight: 840,
    imageAlt:
      "AI-ready patient management platform architecture diagram. External IPS pharmacy systems and barcode scanners feed an integration layer that normalizes pharmacy data. Microservices on AWS Lambda handle patient records, medication administration and inventory tracking, writing to a central structured patient record used by the care staff app, provider orders and AI summaries. Secure pipelines apply access control, encryption and audit trails.",
    caption:
      "Figure 1. Platform architecture. Pharmacy data is normalized before it reaches one structured patient record, the foundation for AI features.",
    pointsTitle: "Three decisions that shaped the build",
    points: [
      {
        title: "A connected ecosystem, not a standalone app.",
        text: "Patient records, medication, pharmacy data and inventory share one platform, giving staff a single operational view of each patient.",
      },
      {
        title: "Normalize pharmacy data at the boundary.",
        text: "A dedicated integration layer absorbs the different structures and inconsistencies of external IPS pharmacy systems before they reach the record.",
      },
      {
        title: "Structured data and decoupled services.",
        text: "Microservices and structured data flows let AI capabilities be introduced later without reworking core workflows.",
      },
    ],
  },

  // Not in the source document; kept from the previous version.
  features: {
    tagTitle: "Key features",
    heading: "What the platform does",
    description: pm.coreChallenges.description,
    features: [
      {
        title: "Real-time medication management",
        description: pm.coreChallenges.features[0].description,
        bullets: ["Centralized medication workflow", "Medsheet with current dosage information", "Syncs with external IPS pharmacy systems"],
      },
      {
        title: "Third-party pharmacy integration",
        description: pm.coreChallenges.features[1].description,
        bullets: ["Normalizes different data structures", "Links pharmacy information to the central record", "Fewer calls to pharmacies"],
      },
      {
        title: "Barcode-based inventory",
        description: pm.coreChallenges.features[2].description,
        bullets: ["Barcode product identification", "Digital stock visibility", "Supports reordering"],
      },
      {
        title: "Unified patient information",
        description: pm.coreChallenges.features[3].description,
        bullets: ["Demographics and allergies", "Medications and provider orders", "Patient documents"],
      },
      {
        title: "Secure, auditable access",
        description: "Controlled access, encryption and comprehensive audit trails aligned with HIPAA protect patient and medication data across every workflow.",
      },
    ],
  },

  techStack: {
    title: "What technology powers the platform?",
    description:
      "The platform runs on AWS using Lambda and independent microservices, built in Node.js and Python and packaged with Docker. An integration layer handles third-party pharmacy data, and a security layer covers every workflow.",
    categories: [
      {
        name: "Cloud and compute",
        description: "Serverless functions and independent services",
        items: [
          { name: "AWS" },
          { name: "AWS Lambda" },
          { name: "Microservices" },
          { name: "Node.js" },
          { name: "Python" },
          { name: "Docker" },
        ],
      },
      {
        name: "Integrations",
        description: "Normalizes external pharmacy data and barcode scans",
        items: [
          { name: "IPS pharmacy systems" },
          { name: "Barcode scanners" },
          { name: "REST APIs" },
          { name: "Webhooks" },
        ],
      },
      {
        name: "Data",
        description: "One structured record linking patient, medication, provider and inventory",
        items: [{ name: "PostgreSQL on Amazon RDS" }, { name: "Amazon S3" }],
      },
      {
        name: "Security",
        description: "Protects patient and medication data in every workflow",
        items: [{ name: "Access control" }, { name: "Encryption" }, { name: "Audit trails" }],
      },
    ],
  },

  hurdles: {
    label: "Hurdles",
    title: "What made the project hard, and how was it solved?",
    description:
      "Three problems mattered most: inconsistent pharmacy data, replacing manual stock tracking without slowing staff down, and securing every workflow rather than only the database.",
    items: [
      {
        number: "01",
        title: "Pharmacy data doesn't arrive clean",
        description: ["External IPS systems sent data in different structures, with inconsistencies. Normalizing it at the boundary kept the central record trustworthy and cut weekly pharmacy calls from about 30 to about 8."],
      },
      {
        number: "02",
        title: "Manual stock counts had to go without adding work",
        description: ["A scan-and-verify barcode workflow replaced hand tracking. About 90% of medication stock records are now updated by scan, up from zero."],
      },
      {
        number: "03",
        title: "Patient data is sensitive at every step",
        description: ["Access control, encryption and audit trails cover every workflow that touches patient or medication data, designed to align with HIPAA."],
      },
    ],
  },

  midCta: {
    text: "Need pharmacy integration, barcode inventory or an AI-ready data foundation for your care platform?",
    buttonText: "Discuss a similar project",
    buttonHref: "/contact",
  },

  results: {
    tagTitle: "Results",
    heading: "What results did the platform deliver?",
    description:
      "Staff time on medication and admin tasks fell from about 5 hours to about 3 hours per patient each week. At a single group-home facility, that is around 520 nursing hours and $15,000 a year. Medication Occurrence Reports at that facility fell from 9 to 4 a quarter.",
    columns: ["Metric", "Before", "After", "Change"],
    rows: [
      ["Staff time on medication and admin, per patient per week", "~5 h", "~3 h", "−40%"],
      ["Pharmacy calls to confirm medication details, per week", "~30", "~8", "−73%"],
      ["Systems checked to build a patient's medication view", "4", "1", "−3"],
      ["Medication stock records updated by barcode scan", "0%", "~90%", "+90 pts"],
      ["Nursing time per year, one group-home facility", "Baseline", "~520 h fewer", "~$15,000 saved"],
      ["Medication Occurrence Reports, per quarter", "9", "4", "−56%"],
    ],
    // The document's source, period, sample and "approved by" lines are held back until the owner
    // confirms the figures were measured that way; this existing note stays meanwhile.
    method: {
      title: "How we measured",
      items: [
        "Indicative figures based on project estimates; to be replaced with measured client data.",
        "Staff time and cost savings (about 2 hours per patient per week, ~520 nursing hours and $15,000 a year) were reported for a single group-home facility.",
      ],
    },
  },

  // The document's client quote is held back until the owner confirms it; the existing
  // first-party statement stays meanwhile.
  quote: {
    quote:
      "We didn't start with an AI model. We connected pharmacy data, medication workflows and barcode inventory into one secure platform first, so intelligent features can be added on a reliable foundation.",
    author: "Tizora engineering team",
    role: "Project team, Tizora",
  },

  learned: {
    label: "Lessons",
    title: "What did we learn?",
    items: [
      {
        number: "01",
        title: "AI starts with the data foundation",
        description: ["Reliable data, connected systems and sound workflows come before any model."],
      },
      {
        number: "02",
        title: "Normalize integration data at the boundary",
        description: ["Third-party data should be cleaned before it joins the patient record, not after."],
      },
      {
        number: "03",
        title: "Build security into every workflow",
        description: ["Protection has to cover each workflow that touches patient data, not only where it is stored."],
      },
    ],
  },

  fit: {
    headline: "Will this work for your care organization?",
    subline: "Typical timeline, what you'll need and scope.",
    intro:
      "Yes, if your team handles daily medication administration across pharmacy, inventory and patient records. The platform connects to the pharmacy systems and scanners you already use.",
    body: [
      "Typical timeline: 16–24 weeks to launch",
      "You'll need: Access to your pharmacy system, barcode scanners and existing patient records",
      "Scope: Product architecture, integration, data, cloud and security engineering on AWS",
    ],
    imageSrc: pm.aiOpportunity.image,
    imageAlt: "Nurses collaborating over a medication cart",
  },

  faqs: {
    tagTitle: "Patient management FAQs",
    heading: "Frequently asked questions",
    questions: [
      {
        q: "What is an AI-ready patient management platform?",
        a: "A patient and medication system built on structured data, connected integrations and decoupled services, so AI features such as patient summaries and predictive inventory can be added safely later.",
      },
      {
        q: "How does it handle fragmented pharmacy data?",
        a: "An integration layer normalizes data from external IPS pharmacy systems and connects it to the central patient record.",
      },
      {
        q: "How was manual inventory tracking replaced?",
        a: "Barcode scanning tracks each medication from product identification through stock visibility to reordering.",
      },
      {
        q: "How does it address security and HIPAA?",
        a: "It uses strict access controls, encryption and full audit trails, designed to align with HIPAA.",
      },
      {
        q: "Which AI features is it ready for?",
        a: "Patient summaries of recent medication changes, alerts that flag unusual changes for professional review, demand forecasting for inventory and natural-language search for authorized staff.",
      },
      {
        q: "How much staff time does the platform save?",
        a: "About 2 hours per patient each week. At a single group-home facility that adds up to around 520 nursing hours and $15,000 a year.",
      },
      {
        q: "Does it replace our existing pharmacy system?",
        a: "No. It integrates with third-party pharmacy systems such as IPS, barcode scanners and existing patient records, so those systems stay in place.",
      },
      {
        q: "Who is this platform built for?",
        a: "Care providers, group homes and digital health teams that manage daily medication administration across pharmacy, inventory and patient records.",
      },
    ],
  },

  disclosure: {
    text: [
      "Client name withheld under a confidentiality agreement. Results reflect this client's data and will vary. Security controls were designed to align with HIPAA; responsibility for compliance rests with the healthcare organization. This case study describes software engineering work and is not medical advice.",
      "Some figures are indicative estimates pending measured client data.",
    ],
    links: [
      {
        label: "Related reading",
        items: [
          { label: "Healthcare software development company", href: "/industries/healthcare" },
          { label: "Digital weight management case study", href: "/insights/case-studies/healthcare/weight-management" },
          { label: "Enterprise solutions", href: "/services/enterprise-solutions" },
          { label: "Application security testing", href: "/cybersecurity/application-security" },
        ],
      },
    ],
  },

  related: {
    title: "Related case studies",
    description: "Other connected, data-ready healthcare products we have engineered.",
  },

  cta: {
    heading: "One patient record can give hours back to care",
    description:
      "Tell us about your pharmacy systems and medication workflows. In 30 minutes we'll show how a connected platform could fit, and what it would take to launch.",
    buttonText: "Discuss a similar project",
    buttonLink: "/contact",
    secondaryButtonText: "Request a reference call (under NDA)",
    secondaryButtonLink: "/contact",
  },
};

// Case Study: HealthTech Weight Management Platform

import type { CaseStudyContent } from "./caseStudyTypes";

export const seoData = {
  title: "AI-Powered Digital Weight Management Platform",
  description: "Connected Health Data to Personalized Patient Intelligence for Gastric Balloon Patients.",
  url: "https://www.tizora.ai/insights/case-studies/healthcare/weight-management",
  image: "https://images.unsplash.com/photo-1637929476734-bd7f5f78e40a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

export const healthtechCaseStudyData = {

  hero: {
    logo: 'HealthSync',
    title: 'From Connected Health Data to Personalized Patient Intelligence',
    keyResults: [
      'Automated Bluetooth scale synchronization',
      'Unified patient data across sleep, exercise, and weight',
      'Real-time Chat & Video consultation workflows',
    ],
    image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1792406745/1_Connected_Wellness_Dashboard_Setup.png',
    imageAlt: 'Connected wellness dashboard setup for monitoring patient health data',
  },

  summary: {
    title: 'Weight-loss programs require more than a medical intervention.',
    paragraph: 'Patients need continuous monitoring, behavioral support, expert guidance, and motivation throughout their journey. The challenge was to build a digital platform that could bring these disconnected elements together—weight measurements, physical activity, sleep, exercise, patient communication, and expert guidance—into one seamless patient experience.',
    // Rows describe what was actually built, not generic case-study metadata.
    items: [
      { label: 'Patients', value: 'Gastric balloon program participants' },
      { label: 'Device sync', value: 'Automated Bluetooth scale synchronization' },
      { label: 'Unified data', value: 'Sleep, exercise and weight in one patient view' },
      { label: 'Care workflows', value: 'Real-time chat & video consultations' },
    ],
    metadata: {
      labels: { location: 'Reach', industry: 'Care model', period: 'Engagement', services: 'Engineering scope' },
      location: 'Global',
      period: '2023 - 2024',
      industry: 'Digital Health',
      services: ['Product Engineering', 'Cloud Architecture', 'Connected Devices', 'AI Enablement']
    }
  },

  businessChallenge: {
    label: 'The Business Challenge',
    title: 'A continuous digital feedback loop between data, behavior, and guidance.',
    paragraphs: [
      'A gastric balloon program does not end with the procedure. The patient\'s success depends heavily on what happens afterward—whether they follow recommended lifestyle changes, remain physically active, monitor their progress, and continue engaging with healthcare professionals.',
      'The traditional approach creates several problems: manual weight tracking, distributed activity data, limited visibility for healthcare professionals, and fragmented communication.',
      'The product needed to solve a bigger problem than simply "track weight." It needed to create a continuous digital feedback loop between patient data, patient behavior, and healthcare guidance.'
    ],
    image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1792406746/2_Doctor_Explaining_Health_App_Metrics.png',
    dark: false,
    reverse: false
  },
  engineeringApproach: {
    feature2: {
      title: 'Our Product Engineering Approach',
      bullets: [
        'Collect data automatically from connected devices',
        'Normalize and process incoming health information',
        'Convert raw measurements into actionable insights',
        'Enable healthcare professionals to communicate via video',
      ]
    },
    warehouse: {
      image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=1200&auto=format&fit=crop'
    }
  },

  coreChallenges: {
    label: 'Major Engineering Challenges We Solved',
    title: 'Building Personalized Intelligence',
    description: 'We transformed raw health data into visual reports, progress patterns, and a connected care loop.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    features: [
      {
        icon: 'Bluetooth',
        title: 'Bluetooth Scale Data',
        description: 'Engineered a synchronization workflow reducing dependence on manual data entry and creating a continuous stream of weight information.'
      },
      {
        icon: 'Database',
        title: 'Multiple Health Sources',
        description: 'Created a consistent patient data model despite different sources producing different formats, timestamps, frequencies, and measurement patterns.'
      },
      {
        icon: 'LineChart',
        title: 'Meaningful Progress',
        description: 'Transformed raw health data into daily/weekly progress, weight trends, activity summaries, and visual reports.'
      },
      {
        icon: 'MessageSquare',
        title: 'Real-Time Communication',
        description: 'Incorporated real-time communication through chat and video consultation using Twilio directly inside the patient\'s digital journey.'
      }
    ]
  },

  aiOpportunity: {
    label: 'AI Architecture',
    title: 'The AI Architecture Opportunity',
    paragraphs: [
      'A future-ready architecture can introduce an intelligence layer above the existing data platform.',
      'Instead of delivering identical content to everyone, an AI personalization engine can determine what a patient should see next based on historical data, trends, patterns, and risk signals.',
      'This transforms content delivery from scheduled communication into context-aware engagement.'
    ],
    image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1792406748/3_Telehealth_Workspace_with_Health_Dashboard.png',
    dark: false,
    reverse: true
  },

  contributions: {
    label: 'Engineering Focus',
    title: 'What Our Product Engineers Actually Contributed',
    items: [
      { number: "01", title: "Product Architecture", description: ["Designed a scalable architecture capable of handling mobile applications, connected devices, healthcare data and real-time communication."] },
      { number: "02", title: "Device Integration", description: ["Engineered Bluetooth-enabled scale synchronization to eliminate manual weight entry."] },
      { number: "03", title: "Data Engineering", description: ["Created a unified data flow for weight, activity, sleep and exercise information coming from multiple sources."] },
      { number: "04", title: "Mobile Engineering", description: ["Delivered cross-platform patient experiences across iOS and Android."] },
      { number: "05", title: "Cloud Engineering", description: ["Built cloud-based backend services using AWS, Lambda, Python and PostgreSQL."] },
      { number: "06", title: "API & Microservices", description: ["Separated core capabilities into services that can evolve independently and support future integrations."] },
      { number: "07", title: "Real-Time Communication", description: ["Integrated chat and video capabilities to connect patients with healthcare professionals."] },
      { number: "08", title: "Analytics & Visualization", description: ["Converted raw patient data into understandable progress reports and trends."] },
      { number: "09", title: "AI Enablement", description: ["Created the structured data foundation required for future AI capabilities such as personalized recommendations and risk scoring."] }
    ]
  },

  technicalChallenges: {
    tagTitle: "Technical Deep-Dive",
    heading: "Key Technical Challenges",
    questions: [
      { q: "Manual weight tracking", a: "Engineered Bluetooth-enabled automatic synchronization." },
      { q: "Multiple health data sources", a: "Created a unified patient data model." },
      { q: "Device/API differences", a: "Built an integration and normalization layer." },
      { q: "Large volume of health data", a: "Deployed scalable cloud architecture." },
      { q: "Patient engagement", a: "Delivered personalized content and progress insights." },
      { q: "Remote expert support", a: "Integrated real-time chat and video workflows." },
      { q: "Complex patient journeys", a: "Designed program-aware application workflows." },
      { q: "Future AI requirements", a: "Established structured data and a service-oriented architecture." }
    ]
  },

  businessValue: {
    label: "Business Value",
    title: "A Digital Operating Layer",
    items: [
      {
        number: "01",
        title: "For Patients",
        description: ["Less manual data entry, one place for health information, better understanding of progress, and more personalized engagement."]
      },
      {
        number: "02",
        title: "For Healthcare Professionals",
        description: ["Better visibility into patient progress, centralized patient information, more efficient remote communication, and ability to identify behavioral patterns."]
      },
      {
        number: "03",
        title: "For the Business",
        description: ["Higher digital engagement, scalable patient monitoring, connected-device ecosystem, and foundation for AI-powered personalization."]
      },
      {
        number: "04",
        title: "Technology Stack",
        description: ["AWS, AWS Lambda, Python Microservices, PostgreSQL, React, iOS, Android, Twilio."]
      }
    ]
  },

  productEngineering: {
    label: 'Engineering Impact',
    title: 'Why This Is Product Engineering—Not Just App Development',
    paragraphs: [
      'The complexity of this project was not in building screens. It was in engineering the ecosystem behind those screens.',
      'A successful digital health product required us to solve: Device Connectivity, Health Data Engineering, Cloud Architecture, Mobile Experience, Real-Time Communication, Analytics, AI Readiness, and Human-Centered Healthcare Workflows.',
      'That is the difference between building an application and engineering a digital product. The resulting platform brought weight tracking, activity monitoring, fitness data, progress reporting, educational content and healthcare communication into a unified digital experience. The same engineering-first approach shaped our [AI-ready patient management platform](/insights/case-studies/healthcare/ai-ready-patient-management-platform).'
    ],
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop',
    dark: true,
    reverse: false
  },

  // Card items for this section are derived live from real case studies in
  // AIWeightManagement.tsx (getRelatedCaseStudies) -- not hardcoded here.
  related: {
    title: 'More engineering stories',
    description: 'Explore other ways we’ve solved complex engineering challenges.',
  }

};

/* ---- Standard case-study model (rendered by <CaseStudyTemplate>) ---- */
// Copy follows the approved case-study document, word for
// word, for every section this template has. Sections the template does not have (key takeaways,
// at a glance) are left out; the key features section, the
// architecture paragraphs and the related-reading links are not in the document and are unchanged.
const w = healthtechCaseStudyData;

export const weightManagementCaseStudy: CaseStudyContent = {
  id: "cs-healthtech",
  breadcrumbLabel: "Digital Weight Management",
  url: seoData.url,
  published: "2026-06-10",
  modified: "2026-10-09",
  inLanguage: "en-US",
  seo: {
    title: "Digital Weight Management Platform Case Study",
    description:
      "Digital weight management platform case study: Bluetooth scale sync, one view of weight, sleep and exercise data, and video care for gastric balloon patients.",
    // 1200x630 JPEG rendered from the hero mockup, so link previews show the image.
    ogImage: "https://res.cloudinary.com/cjzo6qye/image/upload/f_jpg,q_80/v1791539539/case-studies/weight-management-share.png",
    ogImageAlt:
      "Tizora case study artwork for the Digital Weight Management Platform: a phone showing a weekly chart of weight, steps and heart rate with a health status list, with a white Tizora-branded Bluetooth scale on its left and a wristband showing heart rate and steps on its right",
    primaryKeyword: "digital weight management platform",
    secondaryKeywords: [
      "gastric balloon patient app",
      "Bluetooth scale integration",
      "connected health devices",
      "remote patient monitoring",
      "health data engineering",
      "Twilio video consultation",
      "AI personalization in healthcare",
      "healthcare product engineering",
    ],
  },
  // 16:9 listing card rendered from the same hero mockup, hosted on Cloudinary.
  card: {
    image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791539535/case-studies/weight-management-card.png",
    imageAlt:
      "Tizora case study artwork for the Digital Weight Management Platform: a phone showing a weekly chart of weight, steps and heart rate with a health status list, with a white Tizora-branded Bluetooth scale on its left and a wristband showing heart rate and steps on its right",
  },
  schema: {
    about: [
      { "@type": "Thing", name: "Weight management", sameAs: "https://en.wikipedia.org/wiki/Weight_management" },
      { "@type": "Thing", name: "Intragastric balloon", sameAs: "https://en.wikipedia.org/wiki/Intragastric_balloon" },
      { "@type": "Thing", name: "Remote patient monitoring", sameAs: "https://en.wikipedia.org/wiki/Remote_patient_monitoring" },
      { "@type": "Thing", name: "Telehealth", sameAs: "https://en.wikipedia.org/wiki/Telehealth" },
      { "@type": "Thing", name: "Bluetooth", sameAs: "https://en.wikipedia.org/wiki/Bluetooth" },
    ],
  },

  hero: {
    label: "Digital health · Remote patient monitoring · Connected devices · Telehealth · USA",
    title: "A digital weight management platform that syncs patient weigh-ins in under a minute",
    description:
      "Tizora built a digital weight management platform for a US health and wellness provider's gastric balloon program, used by more than 100,000 patients since 2018. Bluetooth scales sync weigh-ins automatically, and weight, sleep and exercise data are combined into one patient view. Patients get progress reports plus in-app chat and video with their care team, and every weigh-in reaches the patient record in under a minute.",
    image: w.hero.image,
    imageAlt: w.hero.imageAlt,
    cta: { label: "Discuss a connected health project", href: "/contact" },
    compactTitle: true,
  },

  outcomes: {
    tagTitle: "Key outcomes",
    heading: "What the platform changed for patients and care teams",
    stats: [
      { value: "100,000+", label: "Patients on the platform", description: "Since 2018, across the USA" },
      { value: "<1 min", label: "Weigh-in to patient record", description: "Automatic Bluetooth sync" },
      { value: "95%+", label: "Weigh-ins with no manual entry", description: "Was 100% typed by hand" },
      { value: "~60%", label: "Less care-team review time", description: "~10 min → ~4 min per patient" },
    ],
  },

  challenge: {
    label: "The challenge",
    title: "What problem was the gastric balloon program facing?",
    paragraphs: [
      "After a gastric balloon procedure, success depends on what patients do day to day: staying active, tracking progress and keeping in touch with their care team. But weight was typed in by hand, activity data sat in different apps, and clinicians had little visibility between appointments.",
      "The program didn't need another weight tracker. It needed a continuous feedback loop between patient data, patient behaviour and professional guidance.",
    ],
    bullets: [
      "Weight tracked manually by patients",
      "Activity, sleep and exercise data spread across separate sources",
      "Limited visibility of patient progress for healthcare professionals",
      "Communication between patients and experts happened outside any shared record",
    ],
    image: w.businessChallenge.image,
    imageAlt: "Doctor explaining health app metrics to a patient",
    dark: false,
    reverse: false,
  },

  build: {
    heading: "How did Tizora build the weight management platform?",
    description:
      "We engineered the system behind the screens. Bluetooth scales sync automatically, a normalization layer turns every data source into one patient model, reports turn data into progress, and Twilio adds chat and video. Structured data comes first, so AI can be added later without a rebuild.",
    steps: [
      {
        label: "Phase 1",
        title: "Connect devices",
        description: "Bluetooth scale sync replaces manual weight entry",
      },
      {
        label: "Phase 2",
        title: "Normalize data",
        description: "Weight, activity, sleep and exercise combined into one patient model",
      },
      {
        label: "Phase 3",
        title: "Insight + care",
        description: "Progress reports, trends, and in-app chat and video",
      },
      {
        label: "Phase 4",
        title: "Ready for AI",
        description: "Structured data for personalization and risk scoring",
      },
    ],
  },

  architecture: {
    tagTitle: "Platform architecture",
    heading: "How is the platform architected?",
    // Not in the source document; kept from the previous version (they carry the internal links).
    paragraphs: [
      "Cloud-based backend services run on AWS, AWS Lambda, Python and PostgreSQL. Core capabilities are separated into services that can evolve independently, and an integration and normalization layer turns data from Bluetooth scales and other health sources into one patient data model shared by the iOS and Android apps, progress reports and chat and video consultations.",
      "The architecture leaves room for an intelligence layer above the data platform. Instead of delivering identical content to everyone, an AI personalization engine can determine what a patient should see next based on historical data, trends, patterns and risk signals, turning scheduled communication into context-aware engagement. It is the same idea behind our [AI skin analysis](/insights/case-studies/retail/ai-skin-analysis) feature, which matches each shopper to the right products.",
      "The complexity of this project was not in building screens. It was in engineering the ecosystem behind those screens. The same engineering-first approach shaped our [AI-ready patient management platform](/insights/case-studies/healthcare/ai-ready-patient-management-platform).",
    ],
    // Architecture diagram redrawn from the source document's Figure 1, hosted on Cloudinary.
    image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791544092/case-studies/weight-management-architecture.png",
    imageWidth: 3674,
    imageHeight: 948,
    imageAlt:
      "Digital weight management platform architecture diagram. A Bluetooth scale (weight), activity apps (exercise, steps) and sleep data from wearables feed an integration and normalization layer that keeps one patient model. Python microservices on AWS Lambda handle progress tracking, reports and insights, chat and video with Twilio, and program workflows, storing structured data in PostgreSQL. That serves the iOS and Android patient app, the React care-team dashboard and, in a dashed box marked next phase, AI personalization.",
    caption: "Figure 1. Platform architecture. The dashed box is the planned AI layer, not yet live.",
    pointsTitle: "Three decisions that shaped the build",
    points: [
      {
        title: "Normalize data where it enters.",
        text: "Devices report in different formats, timestamps and frequencies. Fixing that at the door means every feature works from one patient model.",
      },
      {
        title: "Services that evolve independently.",
        text: "Core capabilities run as separate microservices, so the platform can grow with data volumes and new integrations.",
      },
      {
        title: "Structured data before AI.",
        text: "The data foundation came first, so personalization and risk scoring can be added without rebuilding the platform.",
      },
    ],
  },

  // Not in the source document; kept from the previous version.
  features: {
    tagTitle: "Key features",
    heading: "What does the platform do?",
    description: w.coreChallenges.description,
    features: [
      {
        title: "Bluetooth scale sync",
        description: "A synchronization workflow reduces dependence on manual data entry and creates a continuous stream of weight information.",
      },
      {
        title: "Unified patient data",
        description: "One consistent patient data model for weight, activity, sleep and exercise, despite sources with different formats, timestamps, frequencies and measurement patterns.",
      },
      {
        title: "Progress reports and trends",
        description: "Raw health data becomes daily and weekly progress, weight trends, activity summaries and visual reports that patients and professionals can understand.",
      },
      {
        title: "In-app chat and video",
        description: "Real-time chat and video consultations built with Twilio connect patients with healthcare professionals inside their digital journey.",
      },
      {
        title: "Program-aware workflows",
        description: "Application workflows designed around the gastric balloon program to support complex patient journeys.",
      },
      {
        title: "Personalized content",
        description: "Personalized content and progress insights keep patients engaged between consultations.",
      },
    ],
  },

  techStack: {
    title: "What technology powers the platform?",
    description:
      "Native iOS and Android patient apps and a React care-team dashboard sit on Python microservices running on AWS Lambda, with structured health data in PostgreSQL. Bluetooth scales sync weight automatically, and Twilio powers in-app chat and video consultations.",
    categories: [
      {
        name: "Mobile & web",
        description: "Patient apps and the care-team view",
        items: [
          { name: "iOS", icon: "https://cdn.simpleicons.org/ios" },
          { name: "Android", icon: "https://cdn.simpleicons.org/android" },
          { name: "React", icon: "https://cdn.simpleicons.org/react" },
        ],
      },
      {
        name: "Cloud & backend",
        description: "Independent, scalable services",
        items: [
          { name: "AWS" },
          { name: "AWS Lambda" },
          { name: "Python microservices", icon: "https://cdn.simpleicons.org/python" },
        ],
      },
      {
        name: "Data",
        description: "One structured patient model",
        items: [
          { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
          { name: "Integration & normalization layer" },
        ],
      },
      {
        name: "Connected devices",
        description: "Data that arrives without typing",
        items: [
          { name: "Bluetooth scales", icon: "https://cdn.simpleicons.org/bluetooth" },
          { name: "Activity data" },
          { name: "Sleep data" },
        ],
      },
      {
        name: "Real-time communication",
        description: "Care inside the patient journey",
        items: [{ name: "Twilio chat" }, { name: "Twilio video" }],
      },
      {
        name: "Security & privacy",
        description: "How health data is protected",
        items: [
          { name: "HIPAA safeguards" },
          { name: "GDPR data rights" },
          { name: "Role-based access" },
          { name: "Encrypted data" },
        ],
      },
    ],
  },

  hurdles: {
    label: "Hurdles",
    title: "What made the project hard, and how was it solved?",
    description:
      "The hard part wasn't the screens. It was keeping wearable devices connected so activity data had no gaps, and keeping times correct for patients in different time zones.",
    items: [
      {
        number: "01",
        title: "Bluetooth disconnects on wrist-worn trackers",
        description: ["In 2021 we paired wrist-worn devices over Bluetooth to track patients' activity during the weight-loss program. The Bluetooth module disconnected often, leaving gaps in activity data. We added a rapid retry loop that reconnects the device automatically after a drop. Tracking interruptions fell, and activity monitoring stayed continuous."],
      },
      {
        number: "02",
        title: "Sources that disagree on format and time",
        description: ["The app supported patients across multiple time zones, which complicated activity tracking, notifications and reporting. We stored every timestamp in UTC to keep records aligned across regions, then converted times to each patient's local time zone for notifications and reports."],
      },
    ],
  },

  midCta: {
    text: "Building a connected health or remote monitoring product? See how this architecture fits your devices and care workflows.",
    buttonText: "Discuss a connected health project",
    buttonHref: "/contact",
  },

  results: {
    tagTitle: "Results",
    heading: "What results did the platform deliver?",
    description:
      "Weigh-ins now reach the patient record in under a minute without typing, patients see all their health data in one place, and care-team reviews are faster. Weekly patient engagement also rose from 38% to 67%. These are operational results, not clinical outcomes.",
    columns: ["Metric", "Before", "After", "Change"],
    rows: [
      ["Weigh-ins entered by hand", "100%", "<5%", "−95 pts"],
      ["Weigh-in to patient record", "Next manual entry", "<1 min", "Near real time"],
      ["Places a patient checks for health data", "3+", "1", "One view"],
      ["Care-team review per patient", "~10 min", "~4 min", "−60%"],
      ["Patient engagement (weekly active)", "38%", "67%", "+29 pts"],
    ],
  },

  quote: {
    quote:
      "Our coaches used to chase patients for weigh-ins. Now the data is just there, and our check-ins are about progress, not paperwork.",
    author: "Program Director",
    role: "Gastric balloon program, USA (name withheld at the client's request)",
  },

  learned: {
    label: "Lessons",
    title: "What did we learn?",
    items: [
      {
        number: "01",
        title: "Normalize before you analyze",
        description: ["Devices report in different formats and frequencies, so normalization had to come before any progress reporting."],
      },
      {
        number: "02",
        title: "Remove the manual step",
        description: ["Bluetooth sync removed the manual entry that the old tracking depended on, and that is what made the data reliable."],
      },
      {
        number: "03",
        title: "Structure data now for AI later",
        description: ["One data model and independent services let personalization and risk scoring be added without a rebuild."],
      },
    ],
  },

  fit: {
    headline: "Will this work for your digital health program?",
    subline: "Typical timeline, team and what it connects to.",
    intro:
      "Yes, if your program depends on monitoring and supporting patients between visits. It fits gastric balloon, bariatric, weight-loss and lifestyle programs that need connected devices, progress reports and remote care in one app.",
    body: [
      "Typical timeline: 6–9 months to first release",
      "Team: 1 solution architect, 3 software engineers, 1 frontend developer, 1 QA, 1 DevOps, 1 project manager",
      "Connects to: Bluetooth scales, activity and sleep sources, Twilio chat and video",
    ],
    imageSrc: w.aiOpportunity.image,
    imageAlt: "Telehealth workspace with a health dashboard",
  },

  faqs: {
    tagTitle: "Digital weight management FAQs",
    heading: "Frequently asked questions",
    questions: [
      {
        q: "How does a weight management app capture weight without manual entry?",
        a: "Patients step on a Bluetooth scale, and the reading syncs to the app and their record in under a minute, with no typing.",
      },
      {
        q: "How is data from different health devices combined?",
        a: "An integration and normalization layer converts each source's format, timestamps and frequency into one patient data model for weight, activity, sleep and exercise.",
      },
      {
        q: "Can patients talk to their care team inside the app?",
        a: "Yes. Real-time chat and video consultations, built with Twilio, run inside the app as part of the patient's program.",
      },
      {
        q: "Does the platform use AI today?",
        a: "Not yet. It was built AI-ready: structured data and independent services make it possible to add personalized recommendations and risk scoring without rebuilding.",
      },
    ],
  },

  disclosure: {
    text: "Client name withheld under a confidentiality agreement. This case study and its metrics were reviewed and approved by the client. Results reflect this client's data and measurement period and will vary; Results shown are operational, not clinical outcomes. Tizora built the platform to support the provider's HIPAA and GDPR obligations; responsibility for compliance rests with the provider. This case study describes software engineering work and is not medical advice. Screens shown use synthetic data.",
    links: [
      {
        label: "Related reading",
        items: [
          { label: "Healthcare software development", href: "/industries/healthcare" },
          { label: "AI-ready patient management case study", href: "/insights/case-studies/healthcare/ai-ready-patient-management-platform" },
          { label: "Enterprise solutions", href: "/services/enterprise-solutions" },
        ],
      },
    ],
  },

  related: {
    title: "Related healthcare case studies",
    description: "Related work engineering connected, data-driven platforms for healthcare programs and providers.",
  },

  cta: {
    heading: "Building a connected health or remote monitoring product?",
    description:
      "Tell us about your devices, data and care workflows. In 30 minutes we'll suggest an architecture and a phased build plan.",
    buttonText: "Discuss a connected health project",
    buttonLink: "/contact",
    secondaryButtonText: "Request a reference call (under NDA)",
    secondaryButtonLink: "/contact",
  },
};

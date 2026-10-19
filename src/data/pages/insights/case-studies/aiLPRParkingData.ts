// Case Study: AI-Enhanced LPR Parking Enforcement

import type { CaseStudyContent } from "./caseStudyTypes";
// aiLPRParkingStory.ts has no imports, so importing it here is not circular.
import { lprStory } from "./aiLPRParkingStory";

export const seoData = {
  title: "AI-Enhanced LPR Parking Enforcement",
  description:
    "Improving license plate detection and permit validation in challenging real-world conditions.",
  url: "https://www.tizora.ai/insights/case-studies/parking/ai-lpr-parking-enforcement",
  // Listing card / hero picture, and a 1200x630 padded copy for social sharing.
  image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1792401431/1_Parking_Officer_Scanning_License_Plate.png",
  ogImage: "https://res.cloudinary.com/cjzo6qye/image/upload/c_pad,b_auto:predominant,w_1200,h_630,f_jpg,q_80/v1790257173/Automatic_Number_Plate_Recognition_case_study_og.png",
  imageAlt:
    "Illustration of a person scanning a white car with a phone while AI license plate recognition highlights the plate and confirms the number ABC 5678",
  imageCaption:
    "AI-assisted license plate recognition confirming a plate on a phone-based parking enforcement scan.",
  type: "article" as const,
};

export const lprFaqs = [
  {
    q: "How does AI improve license plate recognition accuracy in bad weather?",
    a: "AI-assisted image processing evaluates each captured image for quality issues — such as snow, mud, glare or motion blur — and applies the appropriate enhancement technique (denoising, contrast correction, deblurring) before recognition is attempted. This contextual approach improves read accuracy in conditions that cause conventional LPR systems to fail.",
  },
  {
    q: "What's the difference between LPR and ALPR?",
    a: "LPR (license plate recognition) and ALPR (automatic license plate recognition) refer to the same core technology. Usage varies by region and industry, but both describe software that captures, reads and matches vehicle license plates against a database in real time.",
  },
  {
    q: "How does confidence scoring work in an AI-assisted LPR pipeline?",
    a: "Each recognition result is evaluated against a confidence threshold. High-confidence reads proceed directly to permit validation; low-confidence reads trigger a retry, an alternate processing pipeline, or escalation to manual review — preventing incorrect enforcement decisions from uncertain reads.",
  },
  {
    q: "Can AI-enhanced LPR integrate with an existing mobile enforcement app?",
    a: "Yes. The AI processing layer sits ahead of the existing LPR recognition engine and mobile workflow, so enforcement officers continue using their current application without added steps.",
  },
  {
    q: "Does AI-assisted LPR work with damaged or obscured plates?",
    a: "Specialized processing pipelines handle the most common causes of LPR failure — snow, mud, glare, motion blur and poor lighting — by enhancing the specific visual information needed for recognition, rather than applying a single generic filter to every image.",
  },
];

export const lprCaseStudyData = {
  hero: {
    logo: "ParkSmart",
    title:
      "AI-Enhanced License Plate Recognition for Smarter Parking Enforcement",
    keyResults: [
      "Significant reduction in repeated scans for difficult plates",
      "Faster permit validation for enforcement officers",
      "Production-ready AI deployed in real-world conditions",
    ],
    image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1792401431/1_Parking_Officer_Scanning_License_Plate.png",
    imageAlt:
      "Illustration of a person scanning a white car with a phone while AI license plate recognition highlights the plate and confirms the number ABC 5678",
    cta: {
      label: "Discuss a similar project",
      href: "/contact",
    },
    secondaryCta: {
      label: "Try the live LPR demo",
      href: "/products/license-plate-recognition",
    },
  },

  summary: {
    title:
      "Improving license plate detection and permit validation in challenging real-world conditions.",
    paragraph:
      "Parking enforcement officers rely on a mobile application to scan vehicle license plates and determine whether a vehicle has a valid parking permit. We designed an AI-assisted LPR processing layer around the existing enforcement workflow — adding intelligent image-processing and recognition logic to dramatically improve accuracy in difficult environments.",
    metadata: {
      location: "North America",
      period: "2024 – Ongoing",
      industry: "Smart Mobility & Parking",
      services: [
        "AI Product Engineering",
        "Computer Vision",
        "Mobile Integration",
        "API Development",
      ],
    },
  },

  challenge: {
    label: "The Challenge",
    title: "Real-world enforcement is far messier than the test lab.",
    paragraphs: [
      "In ideal conditions, conventional LPR technology can identify a license plate quickly. But real-world parking enforcement environments introduce a range of challenges that degrade recognition accuracy.",
      "Snow, mud, glare, damaged plates, poor lighting, motion blur and awkward angles all conspire to make reliable plate reading extremely difficult. When the plate cannot be read, the enforcement workflow slows down — requiring manual verification or repeated scans.",
      "The client needed a smarter LPR layer that could handle these conditions reliably at scale, without adding friction for officers in the field.",
    ],
    image:
      "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?q=80&w=900&auto=format&fit=crop",
    dark: false,
    reverse: false,
  },

  workflow: {
    label: "Our AI Engineering approach",
    title:
      "A seven-step intelligent pipeline — from capture to enforcement decision.",
    items: [
      {
        number: "01",
        title: "Image Capture",
        description: [
          "The officer scans a vehicle using the mobile enforcement application. Image quality varies widely depending on lighting, angle and plate condition.",
        ],
      },
      {
        number: "02",
        title: "Quality Assessment",
        description: [
          "The system evaluates the captured image against a set of quality signals — sharpness, lighting, occlusion and angle — to determine how it should be processed.",
        ],
      },
      {
        number: "03",
        title: "AI-Assisted Enhancement",
        description: [
          "Based on the quality assessment, the appropriate image processing pipeline is applied. This may include denoising, contrast enhancement, deblurring or occlusion handling.",
        ],
      },
      {
        number: "04",
        title: "LPR Recognition",
        description: [
          "The enhanced image is passed through the LPR recognition engine, which attempts to extract a plate number with the best possible confidence score.",
        ],
      },
      {
        number: "05",
        title: "Confidence Validation",
        description: [
          "The recognition result is evaluated against confidence thresholds. Low-confidence results can trigger a retry, fallback handling or an escalation path for manual review.",
        ],
      },
      {
        number: "06",
        title: "Permit Verification",
        description: [
          "The recognised plate number is used to query the parking permit database. The system determines whether the vehicle holds a valid, active permit for the location.",
        ],
      },
      {
        number: "07",
        title: "Enforcement Decision",
        description: [
          "The officer receives a clear, immediate result in the mobile application — valid permit, no permit found, or unable to determine — enabling fast, accurate enforcement actions.",
        ],
      },
    ],
  },

  engineeringApproach: {
    feature2: {
      title:
        "Intelligent processing, designed for production — and for the real world.",
      bullets: [
        "Rather than treating every image identically, the system intelligently determines how each image should be processed before attempting recognition. This contextual approach makes the entire LPR pipeline significantly more resilient.",
        "We engineered the surrounding intelligence — the image quality logic, the confidence handling, the exception pathways — to make the technology work reliably in a production parking-enforcement environment.",
        "When snow, mud or environmental debris partially obscures the plate, the AI-assisted pipeline enhances the relevant visual information. The system knows which processing technique to apply, rather than guessing.",
        "This creates a more resilient LPR workflow for real-world enforcement environments where perfect image conditions are the exception, not the rule.",
      ],
    },
    warehouse: {
      image:
        "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1400&auto=format&fit=crop",
    },
  },

  engineeringAreas: {
    label: "Key engineering areas",
    title: "Nine areas of deep technical work behind the solution",
    items: [
      {
        number: "01",
        title: "AI-Assisted Image Processing",
        description: [
          "Contextual enhancement pipelines that apply the right processing technique based on the quality characteristics of each captured image.",
        ],
      },
      {
        number: "02",
        title: "LPR Integration",
        description: [
          "Deep integration with the LPR recognition library, optimised to extract the best possible plate number from enhanced imagery.",
        ],
      },
      {
        number: "03",
        title: "Confidence Handling",
        description: [
          "Recognition confidence scoring, threshold logic, fallback handling and retry pathways to maximise usable recognition results.",
        ],
      },
      {
        number: "04",
        title: "Difficult-Image Processing",
        description: [
          "Specialised processing for snow, mud, glare, motion blur and poor lighting — the most common causes of LPR failure in the field.",
        ],
      },
      {
        number: "05",
        title: "Mobile Workflow Integration",
        description: [
          "Seamless integration into the existing mobile enforcement application, maintaining officer workflow speed and simplicity.",
        ],
      },
      {
        number: "06",
        title: "Permit Validation",
        description: [
          "End-to-end connection from plate recognition to permit database lookup, delivering a binary enforcement decision in real time.",
        ],
      },
      {
        number: "07",
        title: "API & Backend Integration",
        description: [
          "Robust API design connecting the AI processing layer, the LPR engine and the permit database across the production infrastructure.",
        ],
      },
      {
        number: "08",
        title: "Performance Optimisation",
        description: [
          "Production-oriented tuning to ensure the AI processing pipeline meets the latency requirements of a mobile enforcement workflow.",
        ],
      },
      {
        number: "09",
        title: "Exception & Fallback Handling",
        description: [
          "Graceful degradation logic that ensures the enforcement workflow continues even when recognition cannot be completed reliably.",
        ],
      },
    ],
  },

  businessImpact: {
    label: "Business impact",
    title: "Faster, more reliable enforcement — in any conditions.",
    paragraphs: [
      "The objective was to make parking enforcement faster, more reliable and less dependent on perfect image conditions. The AI-enhanced approach directly improves the day-to-day experience for enforcement officers in the field.",
      "By connecting AI-based computer vision directly to the operational business process, the solution creates a stronger and more intelligent foundation for parking enforcement at scale.",
    ],
    image:
      "https://images.unsplash.com/photo-1553708917-68ce200d86b2?q=80&w=900&auto=format&fit=crop",
    dark: false,
    reverse: true,
  },

  testimonial: {
    quote:
      "AI delivers the most value when it solves real operational problems — not when it is added simply because it is AI. In this project, we applied computer vision to an existing production workflow where accuracy and reliability directly affect day-to-day enforcement operations.",
    author: "Tizora Engineering",
    role: "AI Product Engineering",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    companyName: "Tizora",
  },

  // Card `items` for this section are derived live from real case studies
  // in AILPRParking.tsx (getRelatedCaseStudies) -- not hardcoded here.
  relatedStories: {
    title: "Related case studies",
    description:
      "Explore more AI engineering projects where we turned complex capabilities into reliable, production-ready features.",
  },
};

/* ---- Standard case-study model (rendered by <CaseStudyTemplate>) ---- */
const LPR_DEMO = "/products/license-plate-recognition";

export const lprParkingCaseStudy: CaseStudyContent = {
  id: "cs-lpr",
  breadcrumbLabel: "AI LPR Parking Enforcement",
  url: seoData.url,
  published: "2026-08-20",
  modified: "2026-10-09",
  inLanguage: "en-US",
  seo: {
    title: "AI License Plate Recognition: Parking Case Study",
    description:
      "AI license plate recognition case study: how Tizora made a mobile parking enforcement app read plates in snow, mud, glare and blur, with fewer repeated scans.",
    ogImage:
      "https://res.cloudinary.com/cjzo6qye/image/upload/f_jpg,q_80,w_1200,h_630,c_fill/v1790257173/Automatic_Number_Plate_Recognition_case_study_og.png",
    ogImageAlt: lprCaseStudyData.hero.imageAlt,
    primaryKeyword: "AI license plate recognition",
    secondaryKeywords: [
      "parking enforcement software",
      "automatic license plate recognition",
      "ALPR",
      "LPR",
      "computer vision",
      "permit validation",
      "mobile parking enforcement",
      "confidence scoring",
    ],
  },
  card: { image: seoData.image, imageAlt: seoData.imageAlt },
  schema: {
    about: [
      { "@type": "Thing", name: "Automatic number-plate recognition", sameAs: "https://en.wikipedia.org/wiki/Automatic_number-plate_recognition" },
      { "@type": "Thing", name: "Computer vision", sameAs: "https://en.wikipedia.org/wiki/Computer_vision" },
      { "@type": "Thing", name: "Digital image processing", sameAs: "https://en.wikipedia.org/wiki/Digital_image_processing" },
      { "@type": "Thing", name: "Parking enforcement", sameAs: "https://en.wikipedia.org/wiki/Parking_enforcement_officer" },
    ],
  },

  hero: {
    label: "Parking · Permit enforcement · AI license plate recognition",
    title: lprCaseStudyData.hero.title,
    description:
      "Tizora built an AI license plate recognition layer for ParkSmart's mobile parking enforcement app in North America. It checks each image, applies the right fix for snow, mud, glare or blur, and scores confidence before permit validation. Officers saw fewer repeated scans and faster permit answers, with no new steps in their app.",
    image: lprCaseStudyData.hero.image,
    imageAlt: lprCaseStudyData.hero.imageAlt,
    cta: { label: lprCaseStudyData.hero.cta.label, href: "/contact" },
    secondaryCta: { label: "Try the live demo", href: LPR_DEMO },
    compactTitle: true,
  },

  outcomes: {
    tagTitle: "Key outcomes",
    heading: "What changed once the AI layer was live",
    stats: [
      { value: "−35%", label: "Repeated scans on difficult plates", description: "Snow, mud, glare and blur · first months in production" }, // PLACEHOLDER: replace with measured data
      { value: "−30%", label: "Time to a permit answer", description: "From scan to a valid / no permit result" }, // PLACEHOLDER: replace with measured data
      { value: "3", label: "Clear outcomes per scan", description: "Valid permit, no permit, or unable to determine" },
      { value: "0", label: "New steps for officers", description: "Same mobile enforcement app" },
    ],
  },

  challenge: {
    label: "The challenge",
    title: "What was stopping plate scans from working at the curb?",
    paragraphs: lprStory.challenge.paragraphs,
    bullets: [
      "Officers had to keep their existing mobile enforcement app, with no added steps",
      "The LPR recognition engine already in use had to stay in place",
      "Processing had to fit the latency budget of a mobile enforcement workflow",
      "An uncertain read could never turn into a wrong enforcement decision",
    ],
    image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1792401437/2_Rainy_Parking_Lot_Plate_Inspection.png",
    imageAlt: "Aerial view of a busy open-air parking lot with rows of parked cars",
    dark: false,
    reverse: false,
  },

  build: {
    heading: "How does the AI LPR pipeline work?",
    description: `Tizora built a seven-step pipeline from scan to enforcement decision. Steps 2, 3 and 5 are the new AI layer; the rest use the officer's app, the existing LPR engine and the permit database. You can try the [plate recognition step](${LPR_DEMO}) in our live demo.`,
    // Same seven steps as lprCaseStudyData.workflow, with sentence-case titles.
    steps: [
      "Image capture",
      "Quality assessment",
      "AI-assisted enhancement",
      "LPR recognition",
      "Confidence validation",
      "Permit verification",
      "Enforcement decision",
    ].map((title, i) => ({
      label: `Step ${i + 1}`,
      title,
      description: lprCaseStudyData.workflow.items[i].description[0],
    })),
  },

  architecture: {
    tagTitle: "Solution architecture",
    heading: lprStory.solution.feature2.title.replace(/\.$/, ""),
    paragraphs: [
      lprStory.solution.feature2.bullets[0],
      "The design is layered, so AI is added without disturbing the systems already in production: the officer's mobile enforcement app, an API layer built by Tizora, the AI image processing layer, the existing LPR recognition engine and the permit database. The same confidence-first design runs through our [AI skin analysis](/insights/case-studies/retail/ai-skin-analysis) feature, and the image quality checks work much like document capture in our [digital KYC platform](/insights/case-studies/fintech/digital-kyc). The wrap-don't-replace layering is also how our [aircraft turnaround management software](/insights/case-studies/aviation/aircraft-turnaround-management-software) sits on top of existing airport systems.",
      lprStory.solution.feature2.bullets[1],
    ],
    // Architecture diagram of the layers described in this section (illustrative).
    image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791544080/case-studies/lpr-solution-architecture.png",
    imageWidth: 3182,
    imageHeight: 840,
    imageAlt:
      "AI LPR parking enforcement architecture diagram. The officer's mobile app sends each scan to an API layer built by Tizora, which routes it through AI image processing (quality check, AI enhancement, confidence check) before the existing LPR engine reads the plate. Each read then goes to a permit check, a retry or fallback path, or manual review, with confidence thresholds ensuring uncertain reads never go straight to enforcement.",
    caption:
      "Figure 1. Solution architecture. The AI layer sits in front of the existing LPR engine; confidence thresholds decide whether a read goes to permit validation, a retry or fallback, or manual review.",
    pointsTitle: "Three decisions that shaped the build",
    points: [
      {
        title: "Wrap, don't replace.",
        text: "The AI layer sits ahead of the recognition engine already in use: lower risk, faster to ship and no retraining.",
      },
      {
        title: "Assess first, then fix.",
        text: "Each image is checked for sharpness, lighting, occlusion and angle, then gets the enhancement it needs rather than one filter for all.",
      },
      {
        title: "Confidence decides, not guesswork.",
        text: "Thresholds send each read to permit validation, a retry, a fallback path or manual review, so uncertain reads never become enforcement decisions.",
      },
    ],
  },

  features: {
    tagTitle: "Key features",
    heading: "What the product does",
    description: lprStory.approach.description,
    features: [
      {
        title: "Quality-aware processing",
        description: "Every image is checked before recognition, so the system knows how it should be processed.",
        bullets: ["Sharpness", "Lighting", "Occlusion and angle"],
      },
      {
        title: "Adaptive enhancement",
        description: "The right fix for snow, glare, blur or low light, applied per image instead of one generic filter.",
        bullets: ["Denoising", "Contrast enhancement", "Deblurring and occlusion handling"],
      },
      {
        title: "Confidence handling",
        description: "Retry, fall back or escalate, never guess. Each read is scored against confidence thresholds.",
        bullets: ["Threshold logic", "Retry and fallback paths", "Escalation to manual review"],
      },
      {
        title: "Permit validation",
        description: "A real-time answer inside the existing app, from plate recognition to permit database lookup.",
        bullets: ["Permit lookup", "Validity check", "Result in the officer's app"],
      },
      {
        title: "Graceful fallback",
        description: "The enforcement workflow continues even when a plate cannot be read reliably.",
        bullets: ["Exception handling", "Unable-to-determine result", "No stalled patrols"],
      },
    ],
  },

  techStack: {
    title: "How does the system fit together?",
    description: lprStory.architecture.description,
    // API, image processing and recognition layers: the real stack of Tizora's open-source LPR API
    // (github.com/Tizora-ai/license-plate-recognition-api-parking, requirements.txt + alpr_engine.py).
    // Items marked PLACEHOLDER (client app platforms, permit database, container) are indicative until confirmed.
    categories: [
      {
        name: "Mobile enforcement app",
        description: lprStory.architecture.categories[0].details[0],
        items: [
          { name: "Officer's existing app" },
          { name: "iOS", icon: "https://cdn.simpleicons.org/ios" }, // PLACEHOLDER: replace with measured data
          { name: "Android", icon: "https://cdn.simpleicons.org/android" }, // PLACEHOLDER: replace with measured data
        ],
      },
      {
        name: "API layer",
        description: lprStory.architecture.categories[1].details[0],
        items: [
          { name: "Python", icon: "https://cdn.simpleicons.org/python" },
          { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi" },
          { name: "Uvicorn" },
          { name: "REST + multipart uploads" },
        ],
      },
      {
        name: "AI image processing",
        description: lprStory.architecture.categories[2].details[0],
        items: [
          { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv" },
          { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy" },
          { name: "ONNX Runtime", icon: "https://cdn.simpleicons.org/onnx" },
        ],
      },
      {
        name: "LPR recognition engine",
        description: lprStory.architecture.categories[3].details[0],
        items: [
          { name: "fast-alpr plate detection" },
          { name: "Plate OCR model" },
          { name: "Per-read confidence score" },
        ],
      },
      {
        name: "Permit database & hosting",
        description: lprStory.architecture.categories[4].details[0],
        items: [
          { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" }, // PLACEHOLDER: replace with measured data
          { name: "Docker", icon: "https://cdn.simpleicons.org/docker" }, // PLACEHOLDER: replace with measured data
          { name: "AWS EC2" },
        ],
      },
    ],
  },

  midCta: {
    text: "Losing scans to snow, glare or blur? See how an AI layer can fit your existing enforcement app and LPR engine.",
    buttonText: "Talk to our AI engineering team",
    buttonHref: "/contact",
  },

  results: {
    tagTitle: "Results",
    heading: "Outcome: fewer rescans and faster permit answers",
    description: `${lprStory.results.subheading} The comparison below describes the enforcement workflow before and after the AI layer went live in production.`,
    columns: ["Metric", "Before", "After", "Change"],
    rows: [
      ["Repeated scans on difficult plates", "Scan after scan", "Usable read far more often on the first try", "−35%"], // PLACEHOLDER: replace with measured data
      ["Time to a permit answer", "Slowed by rescans and manual checks", "Permit answers arrive sooner", "−30%"], // PLACEHOLDER: replace with measured data
      ["Unreadable or uncertain plates", "Manual checks by the officer", "Automatic retry, fallback or escalation to review", "No guessed reads"],
      ["Snow, mud, glare and blur", "Plates often unreadable", "Handled in production", "Reliable in real conditions"],
      ["Officer workflow", "Existing mobile app", "Same familiar app", "No new steps"],
    ],
    method: {
      title: "How we measured",
      items: [
        "Before and after descriptions come from the client's enforcement workflow before and after the AI layer went live.",
        "Indicative figures based on project estimates; to be replaced with measured client data.",
      ],
    },
  },

  // First-party Tizora quote already on the page (not a client testimonial). Its stock portrait is
  // not reused, since it does not show a real Tizora person.
  quote: {
    quote: lprCaseStudyData.testimonial.quote,
    author: lprCaseStudyData.testimonial.author,
    role: lprCaseStudyData.testimonial.role,
    companyName: lprCaseStudyData.testimonial.companyName,
  }, // PLACEHOLDER: replace with a client quote when approved

  learned: {
    label: "Lessons",
    title: "What we learned",
    items: [
      {
        number: "01",
        title: "Assess every image before fixing it",
        description: ["Picking the fix per image, rather than one filter for all, made the whole LPR pipeline more resilient."],
      },
      {
        number: "02",
        title: "Treat uncertain reads as a risk",
        description: ["Confidence thresholds, retries, fallbacks and manual review stop an unsure read from becoming a wrong enforcement decision."],
      },
      {
        number: "03",
        title: "Set the latency budget first",
        description: ["Agreeing speed and fallback rules before any code shipped kept the AI layer fast enough for officers in the field."],
      },
    ],
  },

  fit: {
    headline: "Will this work for your parking operation?",
    subline: "Who it fits, what it connects to and typical scope.",
    intro:
      "This approach fits [parking](/industries/parking) operators and enforcement teams that already scan plates on a mobile app and lose time to plates that cannot be read.",
    body: [
      "Built for: mobile permit enforcement where snow, mud, glare, blur and poor lighting make plates hard to read",
      "Integrates with: your existing enforcement app, LPR recognition engine and permit database, through an API layer",
      `Typical scope: image quality assessment, adaptive enhancement, confidence handling and permit validation (try the [LPR demo](${LPR_DEMO}))`,
    ],
    imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/v1792401431/3_Rainy_Rooftop_Parking_Surveillance.png",
    imageAlt: "Aerial view of a rooftop parking deck with numbered bays and parked cars",
  },

  faqs: {
    tagTitle: "License plate recognition FAQs",
    heading: "Frequently asked questions",
    questions: lprFaqs,
  },

  disclosure: {
    text: "Results reflect this client's data and will vary. Some figures are indicative estimates pending measured client data.",
    links: [
      {
        label: "Related reading",
        items: [
          { label: "Try the live LPR demo", href: LPR_DEMO },
          { label: "AI license plate recognition for parking enforcement", href: "/industries/parking" },
          { label: "Enterprise solutions", href: "/services/enterprise-solutions" },
          { label: "AI skin analysis case study", href: "/insights/case-studies/retail/ai-skin-analysis" },
          { label: "Aircraft turnaround management case study", href: "/insights/case-studies/aviation/aircraft-turnaround-management-software" },
        ],
      },
    ],
  },

  related: {
    title: "More case studies",
    description: lprCaseStudyData.relatedStories.description,
  },

  cta: {
    heading: lprStory.finalOutcome.heading,
    description: lprStory.finalOutcome.description,
    buttonText: "Explore enterprise solutions",
    buttonLink: "/services/enterprise-solutions",
    secondaryButtonText: lprCaseStudyData.hero.secondaryCta.label,
    secondaryButtonLink: LPR_DEMO,
  },
};

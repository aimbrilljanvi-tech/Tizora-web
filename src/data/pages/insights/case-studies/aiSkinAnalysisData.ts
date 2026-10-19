// Case Study: AI Skin Analysis (AI Face Scan) for skincare e-commerce.
// The page copy (skinAnalysisCaseStudy at the bottom, and skinAnalysisFaqs) follows the approved
// case-study document.
// See aiSkinAnalysisStory.ts for the earlier section-by-section narrative still used in places.

import type { CaseStudyContent } from "./caseStudyTypes";
import { skinAnalysisStory as story } from "./aiSkinAnalysisStory";

export const seoData = {
  title: "AI Skin Analysis for Skincare E-Commerce",
  description:
    "How an AI skin analysis (AI face scan) feature turns a customer selfie into visible skin-concern findings, mapped straight to products in the brand's catalog.",
  url: "https://www.tizora.ai/insights/case-studies/retail/ai-skin-analysis",
  // Listing card / hero picture.
  image:
    "https://res.cloudinary.com/cjzo6qye/image/upload/v1790662948/skin_analysis_case_study_card_thumbnail.png",
  // Social / search share image, cropped to the standard 1200x630 OG size.
  ogImage:
    "https://res.cloudinary.com/cjzo6qye/image/upload/c_pad,b_auto:predominant,w_1200,h_630,f_jpg,q_80/v1790662939/skin_analysis_case_study_og.png",
  imageAlt:
    "AI Skin Analysis product graphic: a portrait with a skin-health score, hydration, pore size, texture and fine-line readouts, and a matched product panel",
  imageCaption:
    "AI skin analysis reads a customer's selfie, scores what it finds, and connects it to a matching product.",
  type: "article" as const,
};

export const skinAnalysisFaqs = [
  {
    q: "Does AI skin analysis diagnose skin conditions?",
    a: "No. It flags visible concerns to guide shoppers toward relevant products. It isn't built or positioned as a medical tool.",
  },
  {
    q: "How accurate is the skin concern detection?",
    a: "On a held-out test set of 3,500 real-world selfies, concern detection reached 91% precision. Results below the confidence threshold are never shown as fact.",
  },
  {
    q: "Does it work for all skin tones?",
    a: "Yes. The model was tested across Fitzpatrick skin types I–VI, and accuracy varied by no more than 4 points between groups.",
  },
  {
    q: "What happens to a customer's selfie?",
    a: "It's analyzed in memory and deleted as soon as results are shown. It isn't stored or used for training without the shopper's explicit consent.",
  },
  {
    q: "Can it work with our existing e-commerce catalog?",
    a: "Yes. An API layer sits in front of your storefront and catalog, so recommendations stay in step with live inventory without a separate platform.",
  },
];

export const skinAnalysisCaseStudyData = {
  hero: {
    logo: "AI Skin Analysis",
    title:
      "AI Skin Analysis: Turning a Customer Selfie into Personalized Product Recommendations",
    keyResults: [
      "A single selfie connected directly to relevant products in the brand's own catalog",
      "Visible skin-concern detection built for merchandising, not medical diagnosis",
      "Production-ready AI feature designed for skincare and beauty e-commerce",
    ],
    image:
      "https://res.cloudinary.com/cjzo6qye/image/upload/v1792408457/1_Clinical_Skincare_Portrait_with_Gentle_Examination.png",
    imageAlt:
      "Clinical skincare portrait during a gentle examination",
    cta: {
      label: "Discuss a similar project",
      href: "/contact",
    },
  },

  workflow: {
    label: "Our AI engineering approach",
    title: "A seven-step pipeline — from selfie to product recommendation.",
    items: [
      {
        number: "01",
        title: "Selfie Capture",
        description: [
          "The customer takes or uploads a selfie in the brand's own web or app skin-analysis flow, with on-screen guidance for framing and lighting.",
        ],
      },
      {
        number: "02",
        title: "Face & Region Detection",
        description: [
          "The system locates the face and segments the regions it's designed to assess — forehead, cheeks, under-eyes, nose and chin — so analysis focuses on skin, not background or hair.",
        ],
      },
      {
        number: "03",
        title: "Skin Concern Detection",
        description: [
          "An AI model scans the segmented regions for the visible concerns it's built to recognise, such as redness, visible breakouts, dryness, fine lines, dark spots or uneven tone.",
        ],
      },
      {
        number: "04",
        title: "Confidence & Quality Check",
        description: [
          "Poor lighting, angle or resolution can affect a result. Low-confidence findings are flagged rather than reported as fact, and the customer may be prompted to retake the photo.",
        ],
      },
      {
        number: "05",
        title: "Concern-to-Catalog Mapping",
        description: [
          "Each detected concern is mapped, through a defined rule set, to product categories and specific items already in the brand's catalog.",
        ],
      },
      {
        number: "06",
        title: "Personalized Results Screen",
        description: [
          "The customer sees the concerns detected in their own selfie alongside matching product recommendations, inside the brand's own storefront experience.",
        ],
      },
      {
        number: "07",
        title: "Catalog Sync",
        description: [
          "Recommendations stay aligned with the brand's real, in-stock inventory as the catalog changes, instead of pointing to discontinued or unavailable products.",
        ],
      },
    ],
  },

  testimonial: {
    quote:
      "A skin-analysis feature only earns its place in a storefront if it's honest about what it can and can't tell a customer. We built ours to say what it can see, and what it would suggest, nothing dressed up as a diagnosis.",
    author: "Tizora Engineering",
    role: "AI Product Engineering",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    companyName: "Tizora",
  },

  // Card `items` for this section are derived live from real case studies
  // in the page (getRelatedCaseStudies) -- not hardcoded here.
  relatedStories: {
    title: "Related case studies",
    description:
      "Explore more AI engineering projects where we turned complex capabilities into reliable, production-ready features.",
  },
};

/* ---- Standard case-study model (rendered by <CaseStudyTemplate>) ---- */
// Copy follows the approved case-study document, word for
// word, for every section this template has. Sections the template does not have (key takeaways,
// at a glance) are left out; the key features section, the
// architecture paragraphs and the related-reading links are not in the document and are unchanged.
const d = skinAnalysisCaseStudyData;

export const skinAnalysisCaseStudy: CaseStudyContent = {
  id: "cs-skin-analysis",
  breadcrumbLabel: "AI Skin Analysis",
  url: seoData.url,
  published: "2026-09-29",
  modified: "2026-10-09",
  inLanguage: "en-US",
  seo: {
    title: seoData.title,
    description:
      "AI skin analysis case study: a selfie-based face scan that detects visible skin concerns and maps each one to in-stock products in a skincare brand's catalog.",
    // Already cropped to 1200x630.
    ogImage: seoData.ogImage,
    ogImageAlt: seoData.imageAlt,
    primaryKeyword: "AI skin analysis",
    secondaryKeywords: [
      "AI face scan",
      "skincare e-commerce personalization",
      "selfie skin analysis",
      "skin concern detection",
      "AI product recommendations",
      "beauty e-commerce",
      "concern-to-catalog mapping",
      "computer vision",
    ],
  },
  card: { image: seoData.image, imageAlt: seoData.imageAlt },
  schema: {
    about: [
      { "@type": "Thing", name: "AI skin analysis (AI face scan)" },
      { "@type": "Thing", name: "Skincare e-commerce personalization" },
      { "@type": "Thing", name: "Computer vision", sameAs: "https://en.wikipedia.org/wiki/Computer_vision" },
      { "@type": "Thing", name: "Recommender system", sameAs: "https://en.wikipedia.org/wiki/Recommender_system" },
      { "@type": "Thing", name: "Skin care", sameAs: "https://en.wikipedia.org/wiki/Skin_care" },
    ],
  },

  hero: {
    label: "Skincare e-commerce · Computer vision · Personalization · Web & app",
    title: "AI skin analysis: one selfie leads shoppers to the right skincare products",
    description:
      "Tizora built an AI skin analysis feature for a D2C skincare brand in India. A shopper takes one selfie, and the system detects visible concerns such as dryness, redness or uneven tone, then recommends in-stock products from the brand's own catalog. Low-confidence reads prompt a retake instead of a guess. It's a shopping feature, not a medical diagnosis.",
    image: d.hero.image,
    imageAlt: d.hero.imageAlt,
    cta: { label: "Discuss an AI skin analysis feature", href: "/contact" },
    skinScan: {
      gridBox: [42, 27, 42, 46],
      // Two sets of spots, concerns and products -- each full loop of the animation shows a
      // different pair, so the demo doesn't repeat the exact same finding every time.
      pointSets: [
        [
          {
            at: [63, 36],
            labelAt: [40, 34],
            align: "left",
            label: "Fine lines",
            product: {
              name: "Retinol",
              image:
                "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=100&auto=format&fit=crop",
            },
          },
          {
            at: [66, 60],
            labelAt: [40, 68],
            align: "left",
            label: "Uneven tone",
            product: {
              name: "Brightening",
              image:
                "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=100&auto=format&fit=crop",
            },
          },
        ],
        [
          {
            at: [52, 42],
            labelAt: [40, 40],
            align: "left",
            label: "Dryness",
            product: {
              name: "Hydrating",
              image:
                "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=100&auto=format&fit=crop",
            },
          },
          {
            at: [72, 64],
            labelAt: [40, 70],
            align: "left",
            label: "Dark spots",
            product: {
              name: "Vitamin C",
              image:
                "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=100&auto=format&fit=crop",
            },
          },
        ],
      ],
    },
    compactTitle: true,
  },

  outcomes: {
    tagTitle: "Key outcomes",
    heading: "What the feature delivers",
    stats: [
      { value: "+20%", label: "Add-to-cart on recommendations", description: "3.0% → 3.6%, scan users vs. old grid" },
      { value: "<10 s", label: "Selfie to results", description: "Typical, on a mobile connection" },
      { value: "87%", label: "Scans with a high-confidence result", description: "First attempt, real-world selfies" },
      { value: "74%", label: "Shoppers who finish a scan", description: "Of those who start one" },
    ],
  },

  challenge: {
    ...story.challenge,
    title: "Why is buying skincare online still a guessing game?",
    paragraphs: [
      "Most skincare stores show every visitor the same product grid, whatever their skin looks like. Quizzes ask shoppers to judge concerns they may not have the words or the lighting to assess. The brand needed a way to connect what a customer's skin actually looks like to what's in its catalog.",
    ],
    bullets: [
      "Every visitor saw the same grid, so 71% left product pages without adding anything",
      "Quizzes relied on self-assessment, and 58% abandoned before the end",
      "Real selfies come from bathroom mirrors and front cameras, not studio lighting",
      "A face photo is sensitive data, so handling and retention had to be designed in from day one",
    ],
  },

  build: {
    heading: "How does the AI skin analysis pipeline work?",
    description:
      "A guided selfie is checked for quality, the face is split into regions, and an AI model scores visible concerns with a confidence level. Confident findings are mapped by rules to in-stock products in the brand's catalog. Uncertain ones trigger a retake.",
    steps: [
      {
        label: "Capture",
        title: "Guided selfie",
        description: "Framing and lighting tips in the brand's own web or app flow",
      },
      {
        label: "Analyze",
        title: "Regions + concerns",
        description: "Forehead, cheeks, under-eyes, nose and chin scanned for visible concerns",
      },
      {
        label: "Check",
        title: "Confidence gate",
        description: "Low-confidence reads are flagged, or the shopper is asked to retake",
      },
      {
        label: "Recommend",
        title: "Catalog match",
        description: "Rules map each concern to in-stock products, synced as the catalog changes",
      },
    ],
  },

  architecture: {
    tagTitle: "The solution",
    heading: "An engine that reads skin, then hands off to the catalog",
    // Not in the source document; kept from the previous version (they carry the internal links).
    paragraphs: [
      story.solution.feature2.bullets[0],
      `${story.solution.feature2.bullets[1]} It's the same rule our [AI license plate recognition](/insights/case-studies/parking/ai-lpr-parking-enforcement) layer follows: a result the system isn't sure of never becomes a decision.`,
      ...story.solution.feature2.bullets.slice(2),
      story.architecture.description,
    ],
    // Architecture diagram redrawn from the source document's Figure 1, hosted on Cloudinary.
    image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791544088/case-studies/skin-analysis-architecture.png",
    imageWidth: 3436,
    imageHeight: 876,
    imageAlt:
      "AI skin analysis architecture diagram. Selfie capture in React and TypeScript goes to an API and orchestration layer in Python and FastAPI, then to the AI skin-analysis engine built on PyTorch and OpenCV for region segmentation, concern detection and confidence scoring. A rule-based concern-to-catalog mapping step connects each finding to the brand catalog, live inventory and the results screen in the storefront. Low-confidence results ask the shopper for a retake, and the feature plugs into the existing storefront and catalog without replacing either.",
    caption:
      "Figure 1. Feature architecture. The engine reads visible concerns and hands off to the brand's own catalog. Uncertain results loop back to the shopper.",
    pointsTitle: "Three decisions that shaped the build",
    points: [
      {
        title: "Merchandising, not medicine.",
        text: "The feature flags visible concerns to guide shopping. Anything resembling a medical claim is out of scope.",
      },
      {
        title: "Confidence decides what's shown.",
        text: "Low-confidence findings are flagged, or the shopper is asked for a clearer photo, rather than shown a guess.",
      },
      {
        title: "Plug in, don't replace.",
        text: "An API layer calls the brand's existing storefront and catalog, and neither changes.",
      },
    ],
  },

  // Not in the source document; kept from the previous version.
  features: {
    tagTitle: "Key features",
    heading: "What the feature does",
    description: story.approach.description,
    features: [
      {
        title: "Guided selfie flow",
        description:
          "Framing and lighting guidance built into the capture step, designed for bathroom mirrors and front-facing cameras, not studio lighting.",
        bullets: ["Lighting variance", "Angle & framing", "Retake guidance"],
        imageSrc: story.approach.features[0].imageSrc,
        imageAlt: "Person captured in a well-lit close-up, similar to a guided selfie",
      },
      {
        title: "Visible concern detection",
        description:
          "Scans the face regions it's designed to assess for visible concerns such as redness, dryness, fine lines, dark spots or uneven tone.",
        bullets: ["Region segmentation", "Concern detection", "Merchandising, not medicine"],
        imageSrc: story.approach.features[1].imageSrc,
        imageAlt: story.challenge.imageAlt,
      },
      {
        title: "Confidence handling",
        description:
          "Uncertain reads are flagged, not guessed. Poor lighting, angle or resolution prompts a retake instead of a result stated as fact.",
        bullets: ["Confidence scoring", "Honest confidence", "Plain language"],
        imageSrc: story.approach.features[3].imageSrc,
      },
      {
        title: "Catalog mapping",
        description:
          "Every finding resolves to a real product through a defined rule set tied to the categories and attributes in the brand's catalog.",
        bullets: ["Concern taxonomy", "Catalog attributes", "No dead ends"],
        imageSrc: story.approach.features[2].imageSrc,
        imageAlt: story.technicalChallenges.imageAlt,
      },
    ],
  },

  techStack: {
    title: "What technology powers the AI skin analysis?",
    description:
      "The selfie flow is built in React and TypeScript. Python and FastAPI orchestrate each request, and the analysis engine uses PyTorch and OpenCV for face segmentation, concern detection and confidence scoring. A rule-based layer maps concerns to the brand's catalog and live inventory.",
    categories: [
      {
        name: "Selfie capture (web & app)",
        description: "Guided capture inside the brand's site or app",
        items: [{ name: "React" }, { name: "TypeScript" }, { name: "Guided capture UI" }],
      },
      {
        name: "API & orchestration",
        description: "Coordinates capture, AI, mapping and results",
        items: [{ name: "Python" }, { name: "FastAPI" }, { name: "Request orchestration" }],
      },
      {
        name: "AI skin-analysis engine",
        description: "Segments, detects and scores its own confidence",
        items: [
          { name: "PyTorch" },
          { name: "OpenCV" },
          { name: "Region segmentation" },
          { name: "Concern detection" },
          { name: "Confidence scoring" },
        ],
      },
      {
        name: "Concern-to-catalog mapping",
        description: "Rules linking each concern to products",
        items: [{ name: "Concern taxonomy" }, { name: "Catalog attributes" }],
      },
      {
        name: "Brand storefront",
        description: "Unchanged by the integration",
        items: [{ name: "Existing storefront" }, { name: "Live inventory" }, { name: "Shopify Plus" }],
      },
      {
        name: "Privacy",
        description: "How selfies are handled",
        items: [{ name: "Deleted after analysis" }, { name: "Opt-in consent screen" }, { name: "AWS Mumbai" }],
      },
    ],
  },

  hurdles: {
    label: "Hurdles",
    title: "What made the project hard, and how was it solved?",
    description:
      "Three problems mattered most: real-world selfies with poor lighting, making the model work fairly across skin tones, and handling face photos as sensitive data. Each was solved before launch.",
    items: [
      {
        number: "01",
        title: "Selfies aren't lab photos",
        description: ["Checking image quality first, then applying the fix each photo needs, worked better than one process for every image. Retake prompts cut low-confidence results from 24% to 13%."],
      },
      {
        number: "02",
        title: "Working fairly across skin tones",
        description: ["Tested on 6,200 consented images across Fitzpatrick skin types I–VI; detection accuracy varied by no more than 4 points between groups."],
      },
      {
        number: "03",
        title: "A face photo is sensitive data",
        description: ["Selfies are processed in memory, deleted as soon as results are shown, and never used for training without opt-in consent."],
      },
    ],
  },

  midCta: {
    text: "Selling skincare or beauty online? See how a selfie could lead straight to your own catalog.",
    buttonText: "Discuss an AI skin analysis feature",
    buttonHref: "/contact",
  },

  results: {
    tagTitle: "Results",
    heading: "What results did AI skin analysis deliver?",
    description:
      "Shoppers who used the scan added recommended products to their cart about 20% more often than with the old product grid, and results arrived in under 10 seconds. Scan users also finished the flow 74% of the time and spent 18% more per order.",
    columns: ["Metric", "Before", "After", "Change"],
    rows: [
      ["Add-to-cart rate, recommended products", "3.0%", "3.6%", "+20%"],
      ["Selfie to results screen", "No selfie flow", "<10 s", "New"],
      ["Scans with a high-confidence result", "—", "87%", "—"],
      ["Scan completion rate", "Quiz: 42%", "74%", "+32 pts"],
      ["Average order value, scan users", "₹ 1,240", "₹ 1,465", "+18%"],
    ],
    method: {
      title: "How we measured",
      items: [
        "Source: Shopify analytics and GA4, scan users vs. visitors who saw the product grid",
        "Period: 1 Mar – 31 May 2026",
        "Sample: 48,300 scans",
        "Method: Before/after with a 50/50 A/B holdout",
        "Approved by: the brand's e-commerce team",
      ],
    },
  },

  quote: {
    quote:
      "Shoppers stopped asking our support team which serum to buy. The scan answers it, and it only ever suggests products we actually have in stock.",
    author: "Head of E-commerce",
    role: "D2C skincare brand, India (name withheld at the client's request)",
  },

  learned: {
    label: "Lessons",
    title: "What did we learn?",
    items: [
      {
        number: "01",
        title: "Check image quality first",
        description: [
          "Selfies vary widely. Assessing quality before analysis, then fixing what each photo needs, beat one process for all.",
        ],
      },
      {
        number: "02",
        title: "Every finding needs a product",
        description: ["A detected concern always resolves to something in the catalog, so shoppers never hit a dead end."],
      },
      {
        number: "03",
        title: "Say what the AI can't see",
        description: [
          "Flagging uncertain reads built more trust than showing every result with the same confidence.",
        ],
      },
    ],
  },

  fit: {
    headline: "Will AI skin analysis work for your store?",
    subline: "Typical timeline, what you'll need and scope.",
    intro:
      "Yes, if you sell skincare or beauty products through your own web or app storefront and your catalog has categories and attributes to map concerns to. The feature plugs in through an API, without replacing your store.",
    body: [
      "Typical timeline: 8–10 weeks to launch",
      "You'll need: Storefront API access and a tagged product catalog",
      "Scope: Visible-concern merchandising, not diagnosis, with selfie rules agreed up front",
    ],
    imageSrc:
      "https://res.cloudinary.com/cjzo6qye/image/upload/v1792408470/7_AI_Skincare_Recommendations_in_a_Calm_Studio.png",
    imageAlt: "AI skincare recommendations presented in a calm studio setting",
  },

  faqs: {
    tagTitle: "AI skin analysis FAQs",
    heading: "Frequently asked questions",
    questions: skinAnalysisFaqs,
  },

  disclosure: {
    text: "Client name withheld under a confidentiality agreement. Results reflect this client's data and measurement period and will vary; AI skin analysis is a cosmetic product-recommendation feature, not a medical diagnosis. Screens shown use synthetic or consented images.",
    links: [
      {
        label: "Related reading",
        items: [
          { label: "Software for eCommerce", href: "/industries/ecommerce" },
          { label: "CStore Master case study", href: "/insights/case-studies/retail/cstore-master" },
          { label: "Enterprise solutions", href: "/services/enterprise-solutions" },
        ],
      },
    ],
  },

  related: {
    title: "Related AI and e-commerce case studies",
    description: d.relatedStories.description,
  },

  cta: {
    heading: "A selfie can be a shortcut to the right product",
    description:
      "Tell us about your catalog and storefront. In 30 minutes we'll show how AI skin analysis could plug in, and what it would take to launch.",
    buttonText: "Discuss an AI skin analysis feature",
    buttonLink: "/contact",
    secondaryButtonText: "Request a reference call (under NDA)",
    secondaryButtonLink: "/contact",
  },
};

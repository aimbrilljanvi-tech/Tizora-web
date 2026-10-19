import type { CaseStudyContent } from "./caseStudyTypes";

// Case Study: CStore Master
export const seoData = {
  title: "CStore Master: Scalable eCommerce & AMR Integration",
  description: "Integrated headless eCommerce with real-time AMR warehouse robotics to automate high-volume convenience retail.",
  url: "https://www.tizora.ai/insights/case-studies/retail/cstore-master",
  image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1792408435/1_Automated_Warehouse_Fulfillment_in_Motion.png"
};

export const cstoreData = {
  hero: {
    logo: 'CStore Master',
    title: 'Scalable eCommerce & AMR Robotics Integration for Convenience Retail',
    keyResults: [
      '60% faster order fulfillment',
      '40% reduction in warehouse labor cost',
      'Near-zero picking errors'
    ],
    image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1792408435/1_Automated_Warehouse_Fulfillment_in_Motion.png',
  },
  summary: {
    title: 'Automating high-volume orders with headless commerce and robotics.',
    paragraph: 'Our client in Alabama needed a highly scalable eCommerce and mobile ordering system tightly integrated with their Autonomous Mobile Robot (AMR) warehouse. We engineered a seamless data flow from mobile app to warehouse floor, fully automating picking, packing, and dispatch.',
    metadata: {
      location: 'Alabama, USA',
      period: '2023 - 2024',
      industry: 'Convenience Retail & Warehousing',
      services: ['Product Engineering', 'Robotics Integration', 'Headless Commerce']
    }
  },
  businessChallenge: {
    label: 'The Business Challenge',
    title: 'Scaling order fulfillment across southern states.',
    paragraphs: [
      'As the business expanded across Alabama, Tennessee, and neighboring regions, manual warehouse operations became a severe bottleneck for convenience retail distribution.',
      'High-volume orders required rapid turnaround times, but manual picking was slow, labor-intensive, and prone to errors.',
      'The client needed a system that could connect front-end digital ordering directly to their new AMR robotics warehouse infrastructure in real-time.'
    ],
    image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1792408440/2_Scanning_the_Warehouse_Aisle.png',
    dark: false,
    reverse: false
  },
  engineeringApproach: {
    feature2: {
      title: 'Our Product Engineering Approach',
      bullets: [
        'Built a headless eCommerce platform using Magento + Shopify',
        'Developed native-feeling iOS & Android apps via React Native',
        'Engineered custom APIs to communicate Orders → Robots → Packing Station',
        'Implemented a MySQL + JavaScript architecture for rapid data flow'
      ]
    },
    warehouse: {
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop'
    }
  },
  coreChallenges: {
    label: 'Major Engineering Challenges We Solved',
    title: 'Bridging Software and Robotics',
    description: 'We transformed a disjointed supply chain into an automated, real-time fulfillment engine.',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1200&auto=format&fit=crop',
    features: [
      {
        icon: 'ShoppingCart',
        title: 'Headless Commerce',
        description: 'Decoupled the frontend ordering experience from the backend inventory systems for maximum flexibility and performance.'
      },
      {
        icon: 'Smartphone',
        title: 'Omnichannel Ordering',
        description: 'Deployed responsive React Native applications to provide B2B and B2C customers a seamless ordering experience.'
      },
      {
        icon: 'Cpu',
        title: 'Real-Time AMR Integration',
        description: 'Created custom middleware to instantly translate incoming eCommerce orders into actionable routing data for warehouse robots.'
      },
      {
        icon: 'PackageCheck',
        title: 'Automated Dispatch',
        description: 'Digitized the packing station to automatically verify robot-picked items, reducing human error to near zero.'
      }
    ]
  },
  aiOpportunity: {
    label: 'Scalable Architecture',
    title: 'Engineered for Multi-State Expansion',
    paragraphs: [
      'The underlying MySQL and JavaScript architecture was specifically designed for high-concurrency environments, ensuring that as order volume spikes, the data flow to the warehouse remains uninterrupted.',
      'By utilizing a headless approach, the client can easily expand into new digital storefronts or regions without overhauling their warehouse robotics integrations, the same plug-in-without-replacing approach behind our [AI skin analysis](/insights/case-studies/retail/ai-skin-analysis) feature for skincare catalogs.'
    ],
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop',
    dark: false,
    reverse: true
  },
  contributions: {
    label: 'Engineering Focus',
    title: 'Four builds that connected every order to a warehouse robot',
    description: "From the shopper's tap in the app to the packing station in Alabama, our engineers owned the layers that made robotic fulfillment work.",
    items: [
      {
        title: "Order-to-Robot APIs",
        description: "We built the middleware layer that turns every checkout into a robot-ready pick instruction, keeping Shopify, Magento and the AMR controllers in lockstep.",
        bullets: [
          "Custom endpoints from Shopify/Magento to AMR controllers",
          "Orders → Robots → Packing Station event flow",
          "Retry and idempotency handling for zero lost orders"
        ],
        imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/v1792408438/3_Robotics-Driven_Warehouse_Fulfillment_1.png"
      },
      {
        title: "B2B & B2C Ordering Apps",
        description: "One React Native codebase delivers a native-feeling ordering experience on iOS and Android for both B2B buyers and B2C shoppers.",
        bullets: [
          "Cross-platform apps with shared business logic",
          "Live inventory and order status from the headless backend",
          "Fast reorder flows built for high-volume repeat buyers"
        ],
        imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/v1792408437/4_Online_Shopping_Workspace_Workflow.png"
      },
      {
        title: "Real-Time Fulfillment Data",
        description: "A MySQL schema designed for high concurrency tracks every order from cart to dispatch, so volume spikes never stall the warehouse.",
        bullets: [
          "Indexed, lock-free write paths for peak order load",
          "Real-time fulfillment state for every order and tote",
          "Audit-ready history across all stages"
        ],
        imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/v1792408439/5_Warehouse_Operations_Dashboard.png"
      },
      {
        title: "Cart-to-Dispatch Pipeline",
        description: "We connected storefront, apps, robots and packing stations into a single automated pipeline, from the customer's tap to the loading dock.",
        bullets: [
          "End-to-end sync from cart checkout to physical dispatch",
          "Packing-station verification of robot-picked items",
          "Modular design ready for new regions and storefronts"
        ],
        imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
      }
    ]
  },
  technicalChallenges: {
    tagTitle: "Technical Deep-Dive",
    heading: "Key Technical Challenges",
    questions: [
      { q: "Hardware-Software Sync", a: "Ensured millisecond-latency API calls to keep robots synchronized with incoming order queues." },
      { q: "Headless CMS Complexity", a: "Unified Magento and Shopify backends into a single cohesive frontend mobile experience." },
      { q: "Scalability", a: "Designed the data flow to support rapid expansion across Alabama, Tennessee, and nearby regions without database locks." }
    ]
  },
  businessValue: {
    label: "Business Value",
    title: "Measurable Operational Improvements",
    items: [
      {
        number: "01",
        title: "60% Faster Fulfillment",
        description: ["Orders are processed, picked, and packed in less than half the time."]
      },
      {
        number: "02",
        title: "40% Labor Reduction",
        description: ["Significantly lowered warehouse staffing costs through robotics automation."]
      },
      {
        number: "03",
        title: "Near-Zero Errors",
        description: ["Automated picking eliminated human error in order assembly."]
      },
      {
        number: "04",
        title: "Tech Stack",
        description: ["React Native, Magento, Shopify, MySQL, JavaScript, Custom APIs."]
      }
    ]
  },
  productEngineering: {
    label: 'Engineering Impact',
    title: 'Ready for Regional Dominance',
    paragraphs: [
      'True digital transformation occurs when software effectively drives physical operations. We successfully bridged the gap between a consumer-facing digital app and industrial warehouse robotics, much as our [AI license plate recognition](/insights/case-studies/parking/ai-lpr-parking-enforcement) work puts software to work in the physical world.',
      'With a highly scalable foundation, CStore Master is fully equipped to expand their automated fulfillment model across the entire southern United States.'
    ],
    image: 'https://res.cloudinary.com/cjzo6qye/image/upload/v1792408440/6_Automated_Warehouse_Fulfillment_in_Action.png',
    dark: true,
    reverse: false
  },
  // Card items for this section are derived live from real case studies in
  // CStoreMaster.tsx (getRelatedCaseStudies) -- not hardcoded here.
  related: {
    title: 'More engineering stories',
    description: 'Explore other ways we’ve solved complex engineering challenges.',
  }
};

/* ---- Standard case-study model (rendered by <CaseStudyTemplate>) ----
 * Copy follows the approved case-study document, word for word, for every section this template
 * has. Left out: sections with no component (in short, key takeaways, at a glance, key terms) and
 * two items held back until the owner confirms them, because the document is marked as a demo
 * with illustrative figures and they speak for a named client: the client quote and the
 * "How we measured" source/sample/approval lines. The key features section, the architecture
 * heading and paragraphs, and the related-reading links are not in the document and are
 * unchanged. */
const HERO_ALT = "Automated warehouse fulfillment in motion";

const SHARE_ALT =
  "Tizora case study artwork for CStore Master: one eCommerce order moving from the Shopify app to an AMR warehouse robot, through the packing station check and on to dispatch, on a white background";

export const cstoreMasterCaseStudy: CaseStudyContent = {
  id: "cs-cstore-master",
  breadcrumbLabel: "CStore Master",
  url: seoData.url,
  published: "2026-02-15",
  modified: "2026-10-13",
  inLanguage: "en-US",

  seo: {
    // 49 characters; " | Tizora" is added by the root layout.
    title: "AMR Robotics Integration for eCommerce Case Study",
    description:
      "How CStore Master connected Magento, Shopify and mobile ordering apps to AMR warehouse robots: 60% faster fulfillment and 40% lower labor cost.",
    ogImage: "https://res.cloudinary.com/cjzo6qye/image/upload/f_jpg,q_82/v1791960181/case-studies/cstore-master-share.png",
    ogImageAlt: SHARE_ALT,
    primaryKeyword: "AMR robotics integration",
    secondaryKeywords: [
      "eCommerce warehouse robot integration",
      "order-to-robot API",
      "headless eCommerce",
      "Magento AMR integration",
      "Shopify warehouse automation",
      "React Native ordering app",
      "automated order fulfillment",
      "convenience store distribution",
    ],
  },

  card: {
    image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791960179/case-studies/cstore-master-card.png",
    imageAlt: SHARE_ALT,
  },

  schema: {
    about: [
      { "@type": "Thing", name: "Autonomous mobile robot", sameAs: "https://en.wikipedia.org/wiki/Autonomous_mobile_robot" },
      { "@type": "Thing", name: "Headless commerce", sameAs: "https://en.wikipedia.org/wiki/Headless_commerce" },
      { "@type": "Thing", name: "Order fulfillment", sameAs: "https://en.wikipedia.org/wiki/Order_fulfillment" },
      { "@type": "Thing", name: "Convenience store", sameAs: "https://en.wikipedia.org/wiki/Convenience_store" },
    ],
    mentions: [
      { "@type": "SoftwareApplication", name: "Magento", sameAs: "https://en.wikipedia.org/wiki/Magento" },
      { "@type": "SoftwareApplication", name: "Shopify", sameAs: "https://en.wikipedia.org/wiki/Shopify" },
      { "@type": "SoftwareApplication", name: "React Native", sameAs: "https://en.wikipedia.org/wiki/React_Native" },
      { "@type": "SoftwareApplication", name: "MySQL", sameAs: "https://en.wikipedia.org/wiki/MySQL" },
    ],
    // Sources for the industry figures quoted in "The challenge".
    citation: [
      {
        "@type": "ScholarlyArticle",
        name: "Design and control of warehouse order picking: a literature review",
        author: "de Koster, Le-Duc and Roodbergen",
        datePublished: "2007",
        url: "https://pure.eur.nl/ws/portalfiles/portal/46713708/DesignandControl_2007.pdf",
      },
      { "@type": "Book", name: "Warehouse and Distribution Science", author: "Bartholdi and Hackman", url: "https://www.warehouse-science.com/" },
      {
        "@type": "WebPage",
        name: "U.S. Convenience Store Count",
        publisher: "NACS",
        url: "https://www.convenience.org/Research/FactSheets/IndustryStoreCount",
      },
    ],
  },

  hero: {
    label: "Retail and eCommerce · Warehouse robotics · Headless commerce · Mobile apps",
    title: "AMR robotics integration: online orders reach warehouse robots in real time, cutting fulfillment time 60%",
    description:
      "Tizora connected CStore Master's online storefronts and mobile ordering apps directly to its AMR (autonomous mobile robot) warehouse in Alabama. Every order placed on Magento, Shopify or the React Native apps becomes a robot pick instruction through a custom order-to-robot API, is verified at a digitized packing station and is dispatched without manual re-entry. Fulfillment is 60% faster, warehouse labor cost is 40% lower and picking errors are near zero.",
    image: cstoreData.hero.image,
    imageAlt: HERO_ALT,
    cta: { label: "Discuss a similar project", href: "/contact" },
    compactTitle: true,
  },

  outcomes: {
    tagTitle: "Key outcomes",
    stats: [
      { value: "60%", label: "Faster order fulfillment", description: "~5 h → ~2 h, checkout to dispatch" },
      { value: "40%", label: "Lower warehouse labor cost", description: "Robots pick; people verify and pack" },
      { value: "<0.1%", label: "Picking error rate", description: "Down from 1.5%, checked at the packing station" },
      { value: "10 weeks", label: "Scoping to production", description: "For the storefront-to-robot integration" },
    ],
  },

  challenge: {
    label: "The challenge",
    title: "Why couldn't manual picking keep up with growth?",
    paragraphs: [
      "As CStore Master expanded across Alabama, Tennessee and neighboring regions, manual warehouse work became the bottleneck. Orders were high in volume and needed fast turnaround, but people walking the aisles could not pick them quickly or accurately enough, and every order had to be handed to the warehouse by hand.",
      "This is a known cost problem. Order picking can account for as much as 55% of a warehouse's operating expense (de Koster, Le-Duc and Roodbergen, 2007), and about half of a picker's time goes on travel between storage locations (Bartholdi and Hackman, Warehouse and Distribution Science). The customers feel it too: 63% of the 151,975 convenience stores in the United States belong to operators with 10 or fewer stores (NACS, 2026), and small operators depend on distributors that deliver quickly and correctly.",
    ],
    bullets: [
      "Checkout to dispatch took about 5 hours, and about 1.5% of picks were wrong",
      "Storefront stock did not always match warehouse stock, which caused overselling and cancellations",
      "Orders that could only be partly filled needed a manual split-shipment decision",
      "A new AMR warehouse was in place, but orders had no real-time path to the robots",
    ],
    image: cstoreData.businessChallenge.image,
    imageAlt: "Warehouse aisle being scanned during automated fulfillment",
    dark: false,
    reverse: false,
  },

  build: {
    heading: "How do online orders reach the warehouse robots?",
    description:
      "Storefronts and apps send each order to a headless commerce layer. A custom order-to-robot API turns the order into a pick instruction for the AMR controllers. Robots pick the items, a digitized packing station verifies them, and the order is dispatched while its status flows back to the customer.",
    steps: [
      {
        label: "Order",
        title: "Checkout on web or app",
        description: "A B2B buyer or B2C shopper orders against live inventory",
      },
      {
        label: "Route",
        title: "Order-to-robot API",
        description: "Middleware turns the order into routing data for the AMR controllers",
      },
      {
        label: "Pick",
        title: "Robots collect items",
        description: "AMRs carry out the pick while order status updates in real time",
      },
      {
        label: "Verify",
        title: "Packing-station check",
        description: "Robot-picked items are verified in software before dispatch",
      },
    ],
  },

  architecture: {
    tagTitle: "Scalable architecture",
    heading: "Engineered for multi-state expansion",
    // Not in the source document; kept from the previous version (they carry the internal links).
    paragraphs: [
      ...cstoreData.aiOpportunity.paragraphs,
      "Software that drives physical operations is the core of this build: the consumer-facing app and the industrial warehouse robots share one real-time data flow, much as our [AI license plate recognition](/insights/case-studies/parking/ai-lpr-parking-enforcement) work puts software to work in the physical world, and Bluetooth scales feed readings straight into our [digital weight management platform](/insights/case-studies/healthcare/weight-management).",
    ],
    // Architecture diagram (illustrative), hosted on Cloudinary.
    image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1791544076/case-studies/cstore-master-architecture.png",
    imageWidth: 2822,
    imageHeight: 780,
    imageAlt:
      "CStore Master architecture diagram. Magento and Shopify headless storefronts and React Native ordering apps feed a headless commerce layer for orders and inventory, which calls a retry-safe, idempotent order-to-robot API. The API drives AMR warehouse robotics for picking, packing-station checks and automated dispatch, with lock-free MySQL writes keeping fulfillment state for every order and tote current in real time.",
    caption:
      "Figure 1. Order-to-robot architecture. Storefronts stay decoupled from the warehouse, so new channels plug in without touching the robots.",
    pointsTitle: "Three decisions that shaped the build",
    points: [
      {
        title: "Headless, so storefronts change without touching robots.",
        text: "The ordering experience is decoupled from inventory and warehouse systems. New storefronts or regions plug in without reworking the robotics integration.",
      },
      {
        title: "Every order is safe to retry.",
        text: "Retry and idempotency handling in the middleware means a dropped call never becomes a lost or duplicate order.",
      },
      {
        title: "A database designed for peak load.",
        text: "Indexed, lock-free MySQL write paths keep fulfillment state current for every order and tote as volume spikes.",
      },
    ],
  },

  // Not in the source document; kept from the previous version.
  features: {
    tagTitle: "Key features",
    heading: cstoreData.contributions.title,
    description: cstoreData.contributions.description,
    features: [
      {
        ...cstoreData.contributions.items[0],
        imageAlt: "Server racks with bundles of fiber-optic cables and status lights",
      },
      {
        ...cstoreData.contributions.items[1],
        imageAlt: "Close-up of a smartphone home screen showing app icons",
      },
      {
        ...cstoreData.contributions.items[2],
        imageAlt: "Laptop screen showing a real-time analytics dashboard with charts",
      },
      {
        ...cstoreData.contributions.items[3],
        imageAlt: "Engineer working on a laptop at a hardware test bench surrounded by cables and equipment",
      },
    ],
  },

  techStack: {
    title: "What technology powers the platform?",
    description:
      "Magento and Shopify run as headless backends behind every storefront and app. The ordering apps are built once in React Native for iOS and Android. Custom JavaScript middleware connects orders to the AMR controllers, and a MySQL data layer designed for high concurrency tracks every order from cart to dispatch.",
    categories: [
      {
        name: "Commerce",
        description: "Headless backends behind every storefront and app",
        items: [
          { name: "Magento" },
          { name: "Shopify", icon: "https://cdn.simpleicons.org/shopify" },
          { name: "Headless storefront layer" },
        ],
      },
      {
        name: "Mobile apps",
        description: "B2B and B2C ordering with live inventory, order status and fast reorder",
        items: [
          { name: "React Native", icon: "https://cdn.simpleicons.org/react" },
          { name: "iOS", icon: "https://cdn.simpleicons.org/ios" },
          { name: "Android", icon: "https://cdn.simpleicons.org/android" },
        ],
      },
      {
        name: "Integration and middleware",
        description: "Turns each checkout into a robot-ready pick instruction",
        items: [
          { name: "Custom REST APIs" },
          { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
          { name: "Retry and idempotency handling" },
        ],
      },
      {
        name: "Data",
        description: "Real-time fulfillment state and audit-ready history",
        items: [
          { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
          { name: "Indexed, lock-free write paths" },
        ],
      },
      {
        name: "Warehouse robotics",
        description: "Automated picking, verification and dispatch",
        items: [{ name: "AMR controllers" }, { name: "Digitized packing station" }],
      },
    ],
  },

  hurdles: {
    label: "Hurdles",
    title: "What made the project hard, and how was it solved?",
    description:
      "Software that drives physical machines has no room for a lost message. Four problems mattered most: failed calls, short stock, two commerce backends and peak load.",
    items: [
      {
        number: "01",
        title: "A dropped call must never lose or duplicate an order",
        description: ["Every order-to-robot call is idempotent, so the middleware can retry freely. The same order sent twice still produces one pick."],
      },
      {
        number: "02",
        title: "Stock runs short in the middle of an order",
        description: ["Partial fulfillment follows fixed rules instead of a manual decision. If 30 units are ordered and 25 are available, 25 ship now and 5 go on backorder with an automatic customer notice."],
      },
      {
        number: "03",
        title: "Two commerce platforms, one ordering experience",
        description: ["Magento and Shopify sit behind one headless layer, and a single React Native codebase serves B2B buyers and B2C shoppers on iOS and Android."],
      },
      {
        number: "04",
        title: "Order spikes must not stall the warehouse",
        description: ["Indexed, lock-free MySQL write paths keep data flowing to the robots at peak volume, with order handoff completing in under 200 milliseconds."],
      },
    ],
  },

  midCta: {
    text: "Connecting eCommerce orders to warehouse robots or automated picking?",
    buttonText: "Discuss a similar project",
    buttonHref: "/contact",
  },

  results: {
    tagTitle: "Results",
    heading: "What results did the AMR integration deliver?",
    description:
      "Order fulfillment became 60% faster, with checkout-to-dispatch time falling from about 5 hours to about 2 hours. Warehouse labor cost fell 40%, and the picking error rate dropped from 1.5% to under 0.1%. Orders now move from checkout to robot pick to packing-station check without anyone re-entering them.",
    columns: ["Metric", "Before", "After", "Change"],
    rows: [
      ["Order fulfillment time, checkout to dispatch", "~5 h", "~2 h", "−60%"],
      ["Warehouse labor cost (index)", "100", "60", "−40%"],
      ["Picking error rate", "1.5%", "<0.1%", "Near zero"],
      ["Order handoff to the warehouse", "Manual re-entry", "Real-time API, under 200 ms", "Automated"],
      ["Storefront stock matching warehouse stock", "87%", "95%", "+8 pts"],
      ["Orders cancelled for stock mismatch", "3.1%", "0.8%", "−74%"],
    ],
    // The document's source, period, sample and "approved by CStore Master's operations team" lines
    // are held back until the owner confirms them; this existing note stays meanwhile.
    method: {
      title: "How we measured",
      items: [
        "Indicative figures based on project estimates; to be replaced with measured client data.",
        "Scope: orders fulfilled through the client's AMR warehouse in Alabama, 2023–2024.",
      ],
    },
  },

  // The document's quote is attributed to a named client role (Head of Operations, CStore Master).
  // It is held back until the owner confirms it; the existing first-party statement stays meanwhile.
  quote: {
    quote:
      "We built the middleware that turns every checkout into a robot-ready pick instruction, so the storefronts, apps and AMR warehouse run as one pipeline from cart to dispatch.",
    author: "Tizora engineering team",
    role: "Project team, Tizora",
  },

  learned: {
    label: "Lessons",
    title: "What did we learn?",
    items: [
      {
        number: "01",
        title: "Design every order to be retried",
        description: ["Idempotent order-to-robot calls let the middleware retry freely without losing or duplicating a pick."],
      },
      {
        number: "02",
        title: "Keep the storefront apart from the robots",
        description: ["A headless setup lets new storefronts and regions launch without reworking the warehouse integration."],
      },
      {
        number: "03",
        title: "Verify robot picks in software",
        description: ["Checking robot-picked items at a digitized packing station is what pushed errors toward zero."],
      },
    ],
  },

  fit: {
    headline: "Will this work for your stores?",
    subline: "Who it is built for, what it works with and what you'll need.",
    intro:
      "Yes, if you sell through web and mobile channels, handle high-volume repeat orders and run, or plan, an AMR warehouse. The integration connects to the commerce platforms you already use, so nothing is replaced.",
    body: [
      "Built for: B2B and B2C retailers and distributors with high-volume, repeat orders",
      "Works with: Magento or Shopify storefronts and iOS and Android ordering apps",
      "You'll need: API access to your AMR controllers and inventory data",
      "Typical timeline: 10–16 weeks to launch",
    ],
    imageSrc: cstoreData.productEngineering.image,
    imageAlt: "Automated warehouse fulfillment in action",
  },

  faqs: {
    tagTitle: "CStore Master FAQs",
    heading: "Frequently asked questions",
    questions: [
      {
        q: "What is AMR robotics integration for eCommerce?",
        a: "It is the software layer that sends online orders directly to autonomous mobile robots (AMRs) in a warehouse and returns picking, packing and dispatch status to the storefront in real time, so no one re-enters orders by hand.",
      },
      {
        q: "How do online orders reach the warehouse robots?",
        a: "A custom order-to-robot API turns each checkout from Magento, Shopify or the mobile apps into a pick instruction for the AMR controllers. Robots pick the items, the packing station verifies them and the order status flows back to the customer.",
      },
      {
        q: "What results did CStore Master see?",
        a: "Order fulfillment became 60% faster, warehouse labor cost fell 40% and picking errors dropped to near zero.",
      },
      {
        q: "What is headless commerce, and why use it with warehouse robots?",
        a: "Headless commerce separates the customer-facing storefront from the backend inventory and order systems. Here it meant new storefronts or regions could be added without overhauling the AMR warehouse integration.",
      },
      {
        q: "What happens if an API call to the robots fails?",
        a: "The middleware retries it. Every order-to-robot call is idempotent, so a retried call never creates a lost or duplicate order.",
      },
      {
        q: "How are robot-picked orders checked before dispatch?",
        a: "A digitized packing station automatically verifies robot-picked items against the order before dispatch, which reduced order-assembly errors to near zero.",
      },
      {
        q: "Can Magento and Shopify run behind one ordering app?",
        a: "Yes. Both backends sit behind one headless commerce layer, and a single React Native codebase delivers the iOS and Android apps for B2B and B2C customers.",
      },
      {
        q: "How does the platform scale to new regions?",
        a: "Storefronts are decoupled from the warehouse and the MySQL data layer uses indexed, lock-free write paths, so new storefronts and regions can be added across Alabama, Tennessee and nearby states without reworking the robotics integration.",
      },
      {
        q: "How long does an AMR integration take?",
        a: "For CStore Master, the storefront-to-robot integration went from scoping to production in 10 weeks. Timelines depend on the robot vendor's API and the number of storefronts involved.",
      },
      {
        q: "Who is this approach built for?",
        a: "Convenience and multi-store retailers and distributors with high-volume repeat orders that sell through web and mobile channels and run, or plan, an AMR warehouse.",
      },
    ],
  },

  disclosure: {
    text: [
      "Results reflect this client's data and measurement period and will vary. Industry figures describe warehouses and convenience retail in general, not this client.",
      "Some figures are indicative estimates pending measured client data.",
    ],
    links: [
      {
        label: "Related reading",
        items: [
          { label: "Software for eCommerce", href: "/industries/ecommerce" },
          { label: "AI skin analysis case study", href: "/insights/case-studies/retail/ai-skin-analysis" },
          { label: "AI license plate recognition case study", href: "/insights/case-studies/parking/ai-lpr-parking-enforcement" },
          { label: "Aircraft turnaround management case study", href: "/insights/case-studies/aviation/aircraft-turnaround-management-software" },
          { label: "Enterprise solutions", href: "/services/enterprise-solutions" },
        ],
      },
    ],
  },

  related: {
    title: "Related case studies",
    description: "Related work on commerce platforms, retail AI and software that drives physical operations.",
  },

  cta: {
    heading: "Your storefront can talk straight to your warehouse robots",
    description:
      "Tell us about your storefronts, apps and warehouse. In 30 minutes we'll show how orders could flow to AMR picking, packing and dispatch without replacing the systems you already run.",
    buttonText: "Discuss a similar project",
    buttonLink: "/contact",
    secondaryButtonText: "Request a reference call",
    secondaryButtonLink: "/contact",
  },
};

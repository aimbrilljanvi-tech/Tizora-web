// Narrative content for the AI-Enhanced LPR Parking Enforcement case study,
// shaped for the site's existing section components. Each section uses a
// different component so the page keeps a distinct, minimal rhythm.
// No numeric results are claimed -- outcomes are described qualitatively.

const IMG = {
  curb: "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?q=80&w=900&auto=format&fit=crop",
  layer: "https://images.unsplash.com/photo-1553708917-68ce200d86b2?q=80&w=900&auto=format&fit=crop",
  field: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1400&auto=format&fit=crop",
  workshop: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  snow: "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=1200&auto=format&fit=crop",
  circuit: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  metrics: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
};

export const lprStory = {
  /* Overview -> SummaryMeta */
  overview: {
    title: "The project at a glance",
    paragraph:
      "ParkSmart's officers scan plates on a mobile app to check for a valid parking permit. We added an AI layer so those scans keep working in snow, mud, glare and motion blur, without changing how officers work.",
    metadata: {
      location: "North America",
      period: "2024 – Ongoing",
      industry: "Smart Mobility & Parking",
      services: ["Computer vision", "Image processing", "LPR integration", "API development", "Mobile integration"],
    },
  },

  /* Challenge -> ContentSplit */
  challenge: {
    label: "The challenge",
    title: "Plate recognition works in the lab. The curb is a different story.",
    paragraphs: [
      "Snow, mud, glare, damaged plates and motion blur made plates unreadable. Officers had to rescan or verify by hand, and every failed scan slowed the patrol.",
      "Recognition treated every image the same, with no quality check and no clear path for an uncertain read, which risked wrong enforcement decisions.",
    ],
    image: IMG.curb,
    dark: false,
    reverse: false,
  },

  /* Goals & approach -> FeatureGrid */
  approach: {
    tagTitle: "Goals & approach",
    heading: "We started from the curb, not the algorithm.",
    description: "Dependable reads, fewer rescans and fast permit answers, with no new steps for officers.",
    features: [
      { title: "Understand the workflow", imageSrc: IMG.workshop, description: "How officers scan, and what a good answer looks like in the moment.", bullets: ["Scan flow", "Decision points", "Time pressure"] },
      { title: "Map the failure modes", imageSrc: IMG.snow, description: "Group why reads fail, so each cause can be handled on purpose.", bullets: ["Weather", "Light and blur", "Angle and damage"] },
      { title: "Wrap, don't replace", imageSrc: IMG.circuit, description: "Add an intelligent layer ahead of the engine already in use.", bullets: ["Lower risk", "Faster to ship", "No retraining"] },
      { title: "Set production limits", imageSrc: IMG.metrics, description: "Agree the speed and fallback rules before any code ships.", bullets: ["Latency budget", "Fallback paths", "Confidence rules"] },
    ],
  },

  /* Solution -> ScrollReveal */
  solution: {
    feature2: {
      title: "An AI layer that makes every scan smarter.",
      bullets: [
        "It sits between the officer's camera and the existing LPR engine. It judges each image, improves it the way that image needs, then checks how sure the result is.",
        "Strong reads go straight through, weak ones retry, and unclear ones go to manual review instead of a guess.",
        "Officers keep the app they know and always get one of three clear outcomes: valid permit, no permit, or unable to determine.",
      ],
    },
    warehouse: { image: IMG.layer },
  },

  /* Key features -> StatBand */
  features: {
    tagTitle: "Key features",
    heading: "What the product does.",
    items: [
      { value: "Assess", label: "Quality-aware processing", description: "Every image is checked before recognition." },
      { value: "Enhance", label: "Adaptive enhancement", description: "The right fix for snow, glare, blur or low light." },
      { value: "Score", label: "Confidence handling", description: "Retry, fall back or escalate, never guess." },
      { value: "Validate", label: "Permit validation", description: "A real-time answer inside the existing app." },
    ],
  },

  /* User journey -> BenefitGrid: reuses the existing 7-step pipeline data
     (lprCaseStudyData.workflow); only its heading is overridden on the page. */
  journey: {
    label: "User journey",
    title: "From scan to enforcement decision in seven steps.",
  },

  /* Technical architecture -> TechStack */
  architecture: {
    title: "How the system fits together",
    description: "A layered design that adds AI without disturbing the systems already in production.",
    categories: [
      { name: "1. Mobile enforcement app", image: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto,w_900/v1790158515/parking-second_-section-1.png", details: ["Where the officer captures the plate and reads the result. It stays the officer's existing app, with no added steps."], icon: "smartphone", items: ["Plate capture", "Result display"] },
      { name: "2. API layer", image: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto,w_900/v1790158515/parking-second_-section-2.png", details: ["Orchestrates each request between the app, the AI layer, the recognition engine and the permit database. Built by Tizora."], icon: "plug", items: ["Request orchestration", "Built by Tizora"] },
      { name: "3. AI image processing", image: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto,w_900/v1790158515/parking-second-section-3.png", details: ["Assesses image quality, applies the right enhancement, and handles confidence before recognition is attempted."], icon: "cpu", items: ["Quality assessment", "Enhancement", "Confidence handling"] },
      { name: "4. LPR recognition engine", image: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto,w_900/v1790158515/parking-second_-section-4.png", details: ["The existing engine that extracts the plate and returns a confidence score."], icon: "scan-line", items: ["Plate extraction", "Confidence score"] },
      { name: "5. Permit database", image: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto,w_900/v1790157512/download_1.jpg", details: ["Looks up the recognised plate and checks whether the permit is valid."], icon: "database", items: ["Permit lookup", "Validity check"] },
    ],
  },

  /* Technical challenges -> FeatureList */
  technicalChallenges: {
    label: "Technical challenges",
    title: "The hard parts, and how we solved them.",
    description: "Each challenge, the approach we took and what shipped.",
    image: IMG.field,
    imageAlt: "Enforcement officer scanning a vehicle plate outdoors",
    features: [
      { icon: "01", title: "Every image is different", description: "Assess first, then pick the fix per image, not one filter for all." },
      { icon: "02", title: "Uncertain reads are risky", description: "Confidence drives thresholds, retries, fallbacks and manual review." },
      { icon: "03", title: "Speed in the field", description: "A latency budget from the mobile workflow, tuned end to end." },
      { icon: "04", title: "Plates that can't be read", description: "Graceful degradation, so enforcement never stalls." },
    ],
  },

  /* Results -> TracingBeamSection (max 3 phases; kept to title + one line) */
  results: {
    tagTitle: "Results & impact",
    heading: "What changed once the AI layer was live.",
    subheading: "Qualitative outcomes, before and after.",
    content: [
      {
        badge: "Result 01",
        title: "Fewer repeated scans",
        description: "Before, difficult plates meant scan after scan. Now a usable read comes far more often on the first try.",
      },
      {
        badge: "Result 02",
        title: "Faster, safer decisions",
        description: "Before, unreadable plates meant manual checks. Now uncertain reads retry or escalate, and permit answers arrive sooner.",
      },
      {
        badge: "Result 03",
        title: "Reliable in real conditions",
        description: "Snow, mud, glare and blur are handled in production, with the same familiar app.",
      },
    ],
  },

  finalOutcome: {
    heading: "A fragile scan step became a dependable one.",
    description:
      "An AI layer, invisible to officers, turned difficult real-world images into confident enforcement decisions.",
  },
};

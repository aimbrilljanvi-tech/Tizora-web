// Narrative content for the AI Skin Analysis case study, shaped for the
// site's existing section components. No numeric results are claimed --
// outcomes are described qualitatively, and the FAQ is explicit that this
// is a merchandising feature, not a medical diagnostic tool.

const IMG = {
  portrait: "https://res.cloudinary.com/cjzo6qye/image/upload/w_900,c_limit,q_auto,f_auto/v1790661284/skin_analysis_case_study_thumbnail.png",
  closeup: "https://res.cloudinary.com/cjzo6qye/image/upload/v1792408454/2_Mirror_Check_Skincare_Routine.png",
  serum: "https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?q=80&w=1400&auto=format&fit=crop",
  flatlay: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=900&auto=format&fit=crop",
  palette: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=900&auto=format&fit=crop",
  makeup: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=900&auto=format&fit=crop",
  tube: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=900&auto=format&fit=crop",
  code: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=900&auto=format&fit=crop",
  circuit: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop",
};

export const skinAnalysisStory = {
  /* Overview -> SummaryMeta */
  overview: {
    title: "The project at a glance",
    paragraph:
      "AI Skin Analysis (also called an AI Face Scan) is a feature for skincare and beauty e-commerce brands. A customer takes a selfie, the system identifies the visible skin concerns it's designed to recognise, and those findings are connected straight to relevant products already in the brand's catalog.",
    // Rows describe what the feature actually does, not generic case-study metadata.
    items: [
      { label: "Input", value: "A customer selfie" },
      { label: "Output", value: "Visible skin concerns it's designed to recognise" },
      { label: "Match", value: "Concern-to-catalog product mapping" },
      { label: "Scope", value: "Merchandising, not medical diagnosis" },
    ],
  },

  /* Challenge -> ContentSplit */
  challenge: {
    label: "The challenge",
    title: "Skincare shopping online is still a guessing game.",
    paragraphs: [
      "Most skincare storefronts show the same product grid to every visitor, whether they're dealing with dryness, breakouts, or nothing in particular. Generic quizzes ask people to describe concerns they may not have the vocabulary, or the mirror light, to judge accurately.",
      "Brands needed a way to connect what a customer's skin actually looks like to what's already sitting in their catalog, without turning the customer into their own dermatologist first, much like our [CStore Master](/insights/case-studies/retail/cstore-master) work connects a storefront directly to what's actually in stock.",
    ],
    image: IMG.closeup,
    imageAlt: "Person checking their skin during a skincare routine in a mirror",
    dark: false,
    reverse: false,
  },

  /* Goals & approach -> FeatureGrid */
  approach: {
    tagTitle: "Goals & approach",
    heading: "We designed around the selfie, not the algorithm.",
    description: "A feature that reads real selfies, states its limits honestly, and always resolves to a real product.",
    features: [
      { title: "Understand the shopping moment", imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/v1792408456/3_Calm_Portrait_Against_Blue_Gradient.png", description: "Where in the storefront a customer reaches for a selfie, and what a useful answer looks like there.", bullets: ["Capture moment", "Decision point", "On-page flow"] },
      { title: "Scope what the AI should claim", imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/v1792408466/4_Natural_Skincare_Portrait_in_Soft_Daylight.png", description: "Draw a clear line between a visible-concern feature and a medical diagnosis.", bullets: ["Merchandising, not medicine", "Honest confidence", "Plain language"] },
      { title: "Map concerns to real SKUs", imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/v1792408464/5_Smartphone_Skin_Scan_Portrait.png", description: "Every concern the AI can detect needs a product it can point to.", bullets: ["Concern taxonomy", "Catalog attributes", "No dead ends"] },
      { title: "Design for ordinary selfies", imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/v1792408464/5_Smartphone_Skin_Scan_Portrait.png", description: "Bathroom mirrors and front-facing cameras, not studio lighting.", bullets: ["Lighting variance", "Angle & framing", "Retake guidance"] },
    ],
  },

  /* Solution -> ScrollReveal */
  solution: {
    feature2: {
      title: "An engine that reads skin, then hands off to the catalog.",
      bullets: [
        "The feature segments the face into the regions it's designed to assess, checks each region against the visible concerns it's built to recognise, and scores how confident it is in what it found.",
        "High-confidence findings go straight to the concern-to-catalog mapping. Low-confidence findings are shown as such, or the customer is prompted for a clearer photo, instead of a guess dressed up as certainty.",
        "Every result on screen pairs a visible finding with a product from the brand's own catalog, not a generic skincare-quiz outcome.",
      ],
    },
    warehouse: { image: IMG.serum },
  },

  /* Key features -> StatBand */
  features: {
    tagTitle: "Key features",
    heading: "What the feature does.",
    items: [
      { value: "Capture", label: "Guided selfie flow", description: "Framing and lighting guidance built into the capture step." },
      { value: "Detect", label: "Visible concern detection", description: "Scans the regions it's designed to assess." },
      { value: "Score", label: "Confidence handling", description: "Uncertain reads are flagged, not guessed." },
      { value: "Match", label: "Catalog mapping", description: "Every finding resolves to a real product." },
    ],
  },

  /* User journey -> BenefitGrid: reuses the 7-step pipeline data
     (skinAnalysisCaseStudyData.workflow); only its heading is overridden here. */
  journey: {
    label: "User journey",
    title: "From selfie to product recommendation in seven steps.",
  },

  /* Technical architecture -> TechStack */
  architecture: {
    title: "How the feature fits into an existing storefront",
    description: "A layer that plugs into the brand's existing catalog and storefront, instead of replacing them.",
    categories: [
      { name: "1. Selfie capture (web & app)", image: IMG.portrait, imageAlt: "Person captured in a well-lit close-up, similar to a guided selfie", details: ["Embeds into the brand's existing site or app as a capture widget, with on-screen guidance for framing and lighting."], icon: "smartphone", items: ["Guided capture UI", "Web and app support"] },
      { name: "2. API & orchestration layer", image: IMG.code, imageAlt: "Code editor, representing the orchestration layer", details: ["Coordinates every request between the capture step, the AI engine, the catalog mapping and the results screen. Built by Tizora."], icon: "plug", items: ["Request orchestration", "Built by Tizora"] },
      { name: "3. AI skin-analysis engine", image: IMG.circuit, imageAlt: "Circuit board, representing the AI processing engine", details: ["Segments the face into regions, detects the visible concerns it's designed to recognise, and scores its own confidence."], icon: "cpu", items: ["Region segmentation", "Concern detection", "Confidence scoring"] },
      { name: "4. Concern-to-catalog mapping", image: IMG.makeup, imageAlt: "Beauty products laid out, representing the product catalog", details: ["Rule-based logic connecting each detectable concern to product categories and attributes already defined in the brand's catalog."], icon: "database", items: ["Concern taxonomy", "Catalog attributes"] },
      { name: "5. Brand's product catalog & storefront", image: IMG.tube, imageAlt: "Skincare product tube, representing the brand's own storefront", details: ["The brand's existing e-commerce platform and catalog, called through the API layer, unchanged by the integration."], icon: "scan-line", items: ["Existing storefront", "Live inventory"] },
    ],
  },

  /* Technical challenges -> FeatureList */
  technicalChallenges: {
    label: "Technical challenges",
    title: "The hard parts, and how we approached them.",
    description: "Each challenge, the approach we took and what it means for the feature in production.",
    image: IMG.palette,
    imageAlt: "Hand holding a makeup palette, representing hands-on product selection",
    features: [
      { icon: "01", title: "Every selfie is different", description: "Assess quality first, then apply the fix each image needs, rather than one process for every photo." },
      { icon: "02", title: "Selfies aren't lab photos", description: "Real bathroom and bedroom lighting, front-facing cameras and filters, not a studio setup." },
      { icon: "03", title: "Findings must map to real products", description: "No dead ends: a detected concern always resolves to something in the brand's catalog." },
      { icon: "04", title: "A face photo is sensitive data", description: "Selfie handling and retention are a deliberate decision agreed with the brand, not an afterthought." },
    ],
  },

  /* Results -> TracingBeamSection (max 3 phases; kept to title + one line) */
  results: {
    tagTitle: "Results & impact",
    heading: "What changed once the feature was live.",
    subheading: "Qualitative outcomes, before and after.",
    content: [
      {
        badge: "Result 01",
        title: "From generic to personal",
        description: "Before, every visitor saw the same product grid. Now the results screen is shaped by that customer's own selfie.",
      },
      {
        badge: "Result 02",
        title: "Fewer dead-end recommendations",
        description: "Before, recommendations were disconnected from a person's actual skin. Now every suggestion traces back to a specific detected concern.",
      },
      {
        badge: "Result 03",
        title: "Confidence, not guesses",
        description: "Uncertain reads prompt a retake or a flagged result, instead of a wrong recommendation stated as fact.",
      },
    ],
  },

  finalOutcome: {
    heading: "A selfie became a shortcut to the right product.",
    description:
      "AI Skin Analysis turns a moment of uncertainty in the storefront into a personalized answer grounded in the brand's own catalog.",
  },
};

import React from "react";
import { Shield, Gauge, FileCode2 } from "lucide-react";
import { patientManagementCaseStudy } from "../insights/case-studies/aiPatientManagementData";
import { weightManagementCaseStudy } from "../insights/case-studies/aiWeightManagementData";
import { lprParkingCaseStudy as lprCaseStudy } from "../insights/case-studies/aiLPRParkingData";
import Link from "next/link";

const LPR_CASE_STUDY = "/insights/case-studies/parking/ai-lpr-parking-enforcement";

export const financialServicesData = {
  /** Section labels and CTA copy for this industry page (falls back to template defaults). */
  labels: {
    heroLabel: "FINANCIAL SERVICES",
    approach: { tagTitle: "OUR APPROACH", heading: "How we build for financial institutions." },
    caseStudies: { title: "Financial engineering in practice.", description: "See how we have built banking, onboarding and mobile platforms." },
    cta: { heading: "Ready to modernise your financial platform?", description: "Talk to us about core banking, mobile banking or digital onboarding.", buttonText: "Talk to our team", buttonLink: "/contact" },
  },
  topbar: {
    line1: "Secure architecture",
    line2: "and algorithmic velocity",
    line3: "for global financial markets",
    description: "Accelerating FinTech and traditional banking with high-frequency trading platforms and zero-trust security.",
    buttonText: "Explore financial solutions"
  },
  heroImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1600&auto=format&fit=crop",
  about: {
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200&auto=format&fit=crop",
    eyebrowNum: "001",
    eyebrowText: "FINANCIAL SERVICES",
    heading: React.createElement(
      React.Fragment,
      null,
      React.createElement("span", { className: "muted" }, "We engineer ultra-low latency"),
      React.createElement("br"),
      React.createElement("span", { className: "muted" }, "trading systems"),
      React.createElement("br"),
      React.createElement("span", { className: "strong" }, "and impenetrable "),
      React.createElement("span", { className: "accent" }, "security infrastructures")
    ),
    description: "Over the last decade, we have partnered with Wall Street's top firms to rebuild legacy mainframes, implement real-time fraud detection AI, and scale blockchain architectures.",
    buttonText: "Explore our expertise",
    stats: [
      { num: "$50B+", label: "daily volume processed on our systems" },
      { num: "0.01ms", label: "latency achieved on matching engines" }
    ]
  },
  steps: [
    { n: "001", title: "Legacy System Audit", text: "Thorough analysis of existing mainframe dependencies and security protocols.", image: { src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop", alt: "Financial audit and analysis" } },
    { n: "002", title: "Compliance Engineering", text: "Baking in SOC2, PCI-DSS, and local regulatory requirements directly into the CI/CD pipeline.", image: { src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop", alt: "Compliance and security engineering" } },
    { n: "003", title: "Strangler-Fig Migration", text: "Zero-downtime transition from monolith to microservices using parallel execution.", image: { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop", alt: "Cloud migration architecture" } },
    { n: "004", title: "Algorithmic Scaling", text: "Deploying high-frequency data lakes for real-time risk assessment and fraud detection.", image: { src: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&auto=format&fit=crop", alt: "Algorithmic trading systems" } },
  ],
  quote: {
    quote: "Tizora re-architected our entire settlement engine in under six months. Trade reconciliation that once took hours now completes in milliseconds — our counterparties noticed the difference immediately.",
    author: "Chief Technology Officer",
    role: "Global Investment Bank",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    companyName: "Tier-1 Financial Institution"
  },
  features: {
    label: "CORE CAPABILITIES",
    title: "Precision-engineered for capital markets.",
    description: "Our financial platforms are built on deterministic architectures that guarantee order execution integrity, sub-millisecond latency, and complete audit trails across every transaction.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2000&auto=format&fit=crop",
    features: [
      { icon: "01", title: "Real-Time Fraud Detection", description: "ML models scoring every transaction in under 2ms with 99.7% precision across card-present and card-not-present channels." },
      { icon: "02", title: "Regulatory Reporting Automation", description: "Automated generation of MiFID II, Dodd-Frank, and Basel III compliance reports directly from the transaction data lake." },
      { icon: "03", title: "Ultra-Low Latency Matching", description: "Custom matching engines achieving sub-10μs latency using kernel-bypass networking and lock-free data structures." }
    ]
  },
  agileTimeline: {
    tagTitle: "REGULATED DELIVERY",
    heading: "From risk assessment to a dark launch.",
    steps: [
      { number: "01", title: "Risk Assessment", description: "Mapping regulatory exposure and legacy system dependencies across all trading desks.", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop" },
      { number: "02", title: "Protocol Design", description: "Designing FIX/FAST protocol adapters and zero-copy memory architectures for order flow.", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop" },
      { number: "03", title: "Parallel Build", description: "Engineering in isolated sandboxes with synthetic market data and chaos testing.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" },
      { number: "04", title: "Dark Launch", description: "Shadow-mode deployment processing live market data without affecting production order flow.", image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  interactiveTabs: {
    label: "METHODOLOGY",
    title: "Built for Wall Street rigor.",
    buttonText: "Talk to our FinTech team",
    tabs: [
      { id: "t1", icon: Shield, title: "SOC2 & PCI-DSS Native", description: "Compliance is embedded in every CI/CD pipeline — not a post-deployment checkbox.", imageSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop" },
      { id: "t2", icon: Gauge, title: "Microsecond Execution", description: "FPGA-accelerated order routing with deterministic jitter under 5μs at the 99th percentile.", imageSrc: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop" },
      { id: "t3", icon: FileCode2, title: "Immutable Audit Trails", description: "Every state change is cryptographically signed and stored in append-only ledgers for full regulatory traceability.", imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop" }
    ]
  },
  scrollReveal: {
    feature2: {
      title: "Advanced Capabilities for Enterprise scale",
      bullets: [
        "Real-time trade processing at microsecond latency.",
        "Dynamic yield management algorithms for portfolio optimization.",
        "Deep integration with SWIFT, FIX, and enterprise settlement databases."
      ]
    },
    warehouse: {
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&auto=format&fit=crop"
    }
  },
};

export const healthcareData = {
  /** Section labels and CTA copy for this industry page (falls back to template defaults).
   *  Copy follows the Healthcare page SEO brief (15 Oct 2026). Primary keyword:
   *  "healthcare software development company". */
  labels: {
    heroLabel: "HEALTHCARE",
    summary: {
      items: [
        { label: "Industry", value: "Healthcare" },
        { label: "Services", value: "Product architecture, integration, data, cloud and security engineering" },
        { label: "Delivery", value: "Cloud-based, AWS" },
      ],
    },
    cta: {
      heading: "Talk to a healthcare software development company that builds for AI from day one",
      description: "Tell us about your care workflows, pharmacy and EHR systems. In 30 minutes we will show how a connected, custom healthcare software platform could fit and what it would take to launch.",
      buttonText: "Discuss your healthcare project",
      buttonLink: "/contact",
    },
  },
  topbar: {
    line1: "Healthcare software development company",
    line2: "for AI-ready,",
    line3: "interoperable platforms",
    description: "We design and build HIPAA-aligned patient management, medication and data platforms for care providers and digital health teams, connected to your EHR and pharmacy systems through HL7 FHIR.",
    buttonText: "See our healthcare software work",
    buttonHref: "/insights/case-studies?industry=healthcare",
    secondaryButtonText: "Talk to our healthcare team",
    secondaryButtonHref: "/contact",
  },
  heroImage: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790157798/medical-first_image.png",
  heroImageAlt: "Healthcare software development company Tizora: a clinician reviews patient data, outcome trends and EHR, lab and pharmacy integration dashboards on a transparent screen",
  /** Plain-text definition under the hero (id="in-short", used by the speakable schema). */
  inShort: "Tizora is a healthcare software development company. We build custom patient management, medication management and data interoperability platforms that are designed to align with HIPAA and structured so AI features can be added safely later.",
  about: {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    eyebrowNum: "001",
    eyebrowText: "HEALTHCARE",
    heading: React.createElement(
      React.Fragment,
      null,
      React.createElement("span", { className: "muted" }, "Healthcare data interoperability "),
      React.createElement("span", { className: "accent" }, "with HL7 FHIR")
    ),
    description: "Patient information often sits in separate EHR, pharmacy and inventory systems. We connect them so care staff work from one structured patient record, using HL7 FHIR APIs, a normalization layer for third-party data, and access controls and audit trails on every workflow.",
  },
  /** "What we build": four linked capability cards. */
  capabilities: {
    title: "What our custom healthcare software development covers",
    items: [
      { number: "01", title: "Patient management software development", description: ["One secure record for demographics, allergies, medications, orders and documents."], href: "/insights/case-studies/healthcare/ai-ready-patient-management-platform" },
      { number: "02", title: "Medication management software", description: ["Medication workflows and a live medication sheet, synced with pharmacy systems, with barcode inventory tracking."], href: "/insights/case-studies/healthcare/ai-ready-patient-management-platform" },
      { number: "03", title: "FHIR integration services", description: ["EHR, pharmacy and scanner integrations through HL7 FHIR and a normalization layer."], href: "/insights/case-studies/healthcare/ai-ready-patient-management-platform" },
      { number: "04", title: "AI-ready data foundation", description: ["Structured data and decoupled services so summaries, alerts and forecasting can be added without reworking core workflows."], href: "/insights/case-studies/healthcare/ai-ready-patient-management-platform" },
    ],
  },
  // Testimonial removed: no approved client quote backs it.
  quote: null,
  features: {
    label: "CORE CAPABILITIES",
    title: "HIPAA-compliant software development built into every layer",
    description: "We build healthcare software with security designed in from the first sprint. Patient and medication data is protected with encryption in transit and at rest, role-based access control and full audit trails across every workflow that touches it. We design to align with HIPAA, and responsibility for compliance rests with the healthcare organization.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop",
    features: [
      { icon: "01", title: "HL7 FHIR interoperability", description: "FHIR-based APIs for data exchange between EHR, pharmacy and inventory systems." },
      { icon: "02", title: "Encryption, access control and audit trails", description: "On every workflow, not only the records store." },
      { icon: "03", title: "AI-ready architecture", description: "Decoupled microservices on AWS so intelligent features can be added later." }
    ]
  },
  agileTimeline: {
    tagTitle: "DELIVERY",
    heading: "How our healthcare software development process works",
    steps: [
      { number: "01", title: "Compliance and data mapping", description: "We review how patient data is stored, moved and accessed, and map the controls each workflow needs.", image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800&auto=format&fit=crop" },
      { number: "02", title: "Data architecture", description: "We design the structured patient record and the integration layer for third-party systems.", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop" },
      { number: "03", title: "Secure build and testing", description: "We build services with access control, encryption and audit logging, and test them against agreed requirements.", image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=800&auto=format&fit=crop" },
      { number: "04", title: "Staged rollout", description: "We deploy facility by facility or department by department, with staff training and parallel running.", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  /** Both healthcare case studies as full cards with direct links (replaces the banner and the carousel). */
  caseStudyCards: {
    heading: "Healthcare software we have built",
    buttonText: "All healthcare case studies",
    buttonHref: "/insights/case-studies?industry=healthcare",
    studies: [
      {
        id: "hc-patient-management",
        type: "standard" as const,
        title: "AI-ready patient management platform",
        description: "Patient records, medication administration, pharmacy integration and barcode inventory in one secure system on AWS.",
        image: patientManagementCaseStudy.card.image,
        imageAlt: patientManagementCaseStudy.card.imageAlt,
        bgColor: "bg-[#0d3a3a]",
        link: "/insights/case-studies/healthcare/ai-ready-patient-management-platform",
        linkLabel: "patient management software case study",
      },
      {
        id: "hc-weight-management",
        type: "standard" as const,
        title: "Digital weight management platform",
        description: "Connected health data to personalized patient intelligence for gastric balloon patients.",
        image: weightManagementCaseStudy.card.image,
        imageAlt: weightManagementCaseStudy.card.imageAlt,
        bgColor: "bg-[#2D5A27]",
        link: "/insights/case-studies/healthcare/weight-management",
        linkLabel: "digital health platform case study",
      },
    ],
  },
  /** "How to choose a healthcare software development company": placed after the case studies. */
  vendorChecklist: {
    title: "How to choose a healthcare software development company",
    description: "Ask every vendor these six questions before you shortlist. We answer them for our own work on a discovery call.",
    items: [
      { number: "01", title: "Will you sign a Business Associate Agreement, and will your cloud and subcontractors sign one too?", description: [] },
      { number: "02", title: "Which EHR and pharmacy systems have you integrated in production, and with what access or sandbox credentials?", description: [] },
      { number: "03", title: "Which FHIR version do you build to, and can you show a working integration flow?", description: [] },
      { number: "04", title: "What evidence backs a security claim? HIPAA has no official certification, so ask for a security assessment or penetration test, not a badge.", description: [] },
      { number: "05", title: "Who owns the code and the data after launch?", description: [] },
      { number: "06", title: "What do hosting, maintenance and support cost after go-live?", description: [] },
    ],
  },
  interactiveTabs: {
    label: "METHODOLOGY",
    title: "Engineering principles for healthcare software",
    buttonText: "Discuss your healthcare project",
    tabs: [
      { id: "t1", icon: Shield, title: "HIPAA-aligned by design", description: "Encryption, audit logging and role-based access on every service from day one.", imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790157798/medical-second-section-1.png" },
      { id: "t2", icon: Gauge, title: "Integration first", description: "Normalize third-party data before it reaches the patient record.", imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790157798/medical-second-section-2.png" },
      { id: "t3", icon: FileCode2, title: "AI-ready foundations", description: "Structured data and decoupled services.", imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790157798/medical-second-section-3.png" }
    ]
  },
  /** Visible FAQ; the page's FAQPage schema is built from this same list, so text and schema match. */
  faqs: {
    tagTitle: "FAQ",
    heading: "Healthcare software development FAQs",
    questions: [
      { q: "What does a healthcare software development company do?", a: "A healthcare software development company designs, builds and maintains software for care providers and digital health teams, such as patient management systems, medication management platforms, EHR and pharmacy integrations, and secure data platforms. Tizora builds these on AWS with security and HIPAA alignment designed in from the start." },
      { q: "What makes healthcare software HIPAA-compliant?", a: "HIPAA has no official software certification. Compliance depends on safeguards such as encryption, access control and audit trails, signed Business Associate Agreements, and how the healthcare organization uses the system. Tizora designs software to align with HIPAA, and responsibility for compliance rests with the healthcare organization." },
      { q: "What is FHIR integration and why does it matter?", a: "HL7 FHIR is a standard for exchanging healthcare data through APIs. FHIR integration lets your platform read and write patient information from EHR, pharmacy and lab systems in a consistent format, so staff do not re-enter data or check several systems." },
      { q: "How does Tizora handle data from different pharmacy and EHR systems?", a: "We build an integration layer that normalizes data from external systems, which often arrives in different structures with inconsistencies, before it joins one structured patient record. In the patient management platform we built, this layer connects third-party IPS pharmacy systems to the central record." },
      { q: "What does AI-ready mean for a healthcare platform?", a: "An AI-ready platform stores patient, medication, provider and inventory data in a structured form and runs on decoupled services, so features such as patient summaries, unusual-change alerts and inventory forecasting can be added later without reworking core workflows." },
      { q: "How long does custom healthcare software take to build, and what does it cost?", a: "Timeline and cost depend on scope, the number of systems to integrate, and the security and compliance requirements. We fix both after a discovery phase that maps your workflows, data sources and integrations." },
      { q: "Can you integrate with our existing systems?", a: "Yes. Our patient management work connects to third-party pharmacy systems, barcode scanners and existing patient records, and the platform is designed to plug in without replacing the systems you already run." },
      { q: "What should I ask a healthcare software development company before hiring?", a: "Ask whether they will sign a Business Associate Agreement, which EHR and pharmacy systems they have integrated in production, which FHIR version they build to, what evidence supports their security claims, who owns the code and data after launch, and what hosting and maintenance cost." },
    ],
  },
  // The "Capabilities built for clinical precision" scroll section is left out: its claims
  // (real-time monitoring with sub-second alerts) are not backed by a case study.
};

export const parkingData = {
  /** Section labels and CTA copy for this industry page (falls back to template defaults).
   *  Copy follows the Parking page SEO brief (16 Oct 2026). Primary keyword:
   *  "AI license plate recognition for parking enforcement". */
  labels: {
    heroLabel: "PARKING & MOBILITY",
    summary: {
      items: [
        { label: "Industry", value: "Parking & Mobility" },
        { label: "Services", value: "AI image processing, API integration, field validation" },
        { label: "Works with", value: "Your existing LPR engine, permit database and enforcement app" },
      ],
    },
    cta: {
      heading: "Add AI license plate recognition to your parking enforcement",
      description: "Tell us where your reads fail today. In a short call we will look at your capture conditions, recognition engine and permit database, and show how an AI layer could fit. This is license plate recognition software development built around the system you already run.",
      buttonText: "Discuss your enforcement workflow",
      buttonLink: "/contact",
    },
  },
  topbar: {
    line1: "AI license plate recognition",
    line2: "for parking enforcement",
    line3: "that works in snow, mud and glare",
    description: "We add an AI layer to your existing recognition engine and enforcement app, so parking teams spend less time on rescans and manual checks and get a clear result on every plate.",
    buttonText: "Talk to our team",
    buttonHref: "/contact",
    secondaryButtonText: "See the case study",
    secondaryButtonHref: LPR_CASE_STUDY,
  },
  heroImage: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790158516/parking-first_image.png",
  heroImageAlt: "AI license plate recognition for parking enforcement: a camera reads the plate of a car stopped at a parking barrier gate",
  /** Plain-text definition under the hero (id="in-short", used by the speakable schema). */
  inShort: "Tizora builds AI license plate recognition for parking enforcement. We add an AI layer in front of your existing recognition engine and mobile enforcement app, so poor-quality plate images are enhanced, scored and validated before an enforcement decision is made. This works for ALPR for parking enforcement as well as LPR.",
  about: {
    image: "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?q=80&w=1200&auto=format&fit=crop",
    eyebrowNum: "001",
    eyebrowText: "PARKING & MOBILITY",
    heading: React.createElement(
      React.Fragment,
      null,
      React.createElement("span", { className: "muted" }, "LPR parking enforcement software "),
      React.createElement("span", { className: "accent" }, "that works with your existing engine")
    ),
    description: "Conventional LPR reads plates well in ideal conditions. Real streets and lots are messier. Instead of replacing your system, we add an AI processing layer around your existing recognition engine and mobile workflow, so difficult plates are enhanced, scored and validated before an enforcement decision is made.",
  },
  /** "How our AI license plate recognition pipeline works": four numbered steps (ProcessUI), all with descriptions. */
  pipeline: {
    heading: "How our AI license plate recognition pipeline works",
    imageFit: "cover",
    steps: [
      { label: "Step 01", title: "Image quality assessment", description: "Each capture is checked for sharpness, lighting, occlusion and angle to decide how it should be processed.", image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790158515/parking-second_-section-1.png", imageAlt: "Security cameras of different types mounted on a building wall" },
      { label: "Step 02", title: "Targeted enhancement", description: "The system applies the specific fix each image needs, such as glare or blur correction, instead of one generic filter for everything.", image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790158515/parking-second_-section-2.png", imageAlt: "Analyst reviewing image analysis dashboards on a large screen" },
      { label: "Step 03", title: "Confidence-scored recognition", description: "Every read gets a confidence score. High-confidence reads move on, and uncertain reads are retried or escalated.", image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790158515/parking-second-section-3.png", imageAlt: "Smartphone lying on a desk beside a pen" },
      { label: "Step 04", title: "Permit verification", description: "The plate is checked against your permit database, and the officer sees valid permit, no permit found, or unable to determine.", image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790158515/parking-second_-section-4.png", imageAlt: "Laptop showing a data dashboard" },
    ],
  },
  quote: null,
  features: {
    label: "CORE CAPABILITIES",
    title: "Better license plate recognition accuracy in snow, mud, glare and low light",
    description: "Snow, mud, glare, damaged plates, poor lighting, motion blur and awkward angles are what break conventional LPR outside ideal conditions. We design for those conditions, which is why license plate recognition in snow and at night is where an AI layer helps most.",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=2000&auto=format&fit=crop",
    imageAlt: "Cars parked in rows in an open-air parking lot",
    features: [
      { icon: "01", title: "Parking enforcement app integration", description: "The AI layer sits ahead of your current recognition engine and mobile app, so officers keep using the tools they know." },
      { icon: "02", title: "Confidence scoring that prevents wrong tickets", description: "High-confidence reads go straight to permit validation. Uncertain reads are retried or escalated, so a guess never becomes an enforcement call." },
      { icon: "03", title: "Condition-aware image processing", description: "Each image is assessed and gets the specific enhancement it needs." }
    ]
  },
  /** "Replace your LPR system, or add an AI layer?": placed right after the capabilities. */
  comparison: {
    heading: "Replace your LPR system, or add an AI layer?",
    description: "Both routes can work. This is how they differ for an enforcement team.",
    columns: ["Question", "Replace the system", "Add an AI layer"],
    rows: [
      ["Recognition engine", "Swapped for a new one", "Your existing engine stays"],
      ["Officer workflow", "New app and retraining", "Same mobile app, no added steps"],
      ["Permit database", "Often needs migrating or reconnecting", "Connected through APIs"],
      ["Uncertain reads", "Depends on the new product", "Scored, then retried or escalated to review"],
      ["Best when", "Your current system is end of life", "Your system works but fails in poor conditions"],
    ],
  },
  agileTimeline: {
    tagTitle: "FIELD-READY DELIVERY",
    heading: "How we integrate AI into your parking enforcement workflow",
    description: "Integration follows the same four steps on every project, and we fix scope after the site assessment.",
    steps: [
      { number: "01", title: "Site Assessment", description: "Reviewing the current enforcement workflow, the capture conditions you face, and where reads fail today.", image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790157512/download_1.jpg" },
      { number: "02", title: "Pipeline Design", description: "Designing the processing layer around your existing recognition engine and mobile application.", image: "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?q=80&w=800&auto=format&fit=crop" },
      { number: "03", title: "Integration", description: "Connecting the layer to your permit database and enforcement app through APIs.", image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop" },
      { number: "04", title: "Field Validation", description: "Testing in real conditions, tuning confidence thresholds, and moving to production.", image: "https://res.cloudinary.com/cjzo6qye/image/upload/v1789632133/second_-section-4.png" }
    ]
  },
  /** "AI license plate recognition for parking enforcement in practice": the case study, with direct links. */
  caseStudySpotlight: {
    label: "CASE STUDY",
    title: "AI license plate recognition for parking enforcement in practice",
    paragraphs: [
      "A North American provider of a mobile parking enforcement app added our AI layer ahead of its existing recognition engine. The result: fewer rescans, faster permit checks and no guessed reads on uncertain plates.",
      React.createElement(Link, { key: "cs", href: LPR_CASE_STUDY, className: "text-accent underline underline-offset-4" }, "Read the AI-enhanced LPR parking enforcement case study"),
      React.createElement(Link, { key: "all", href: "/insights/case-studies?industry=Parking", className: "text-accent underline underline-offset-4" }, "See all parking case studies"),
    ],
    image: lprCaseStudy.card.image,
    imageAlt: lprCaseStudy.card.imageAlt,
    dark: false,
    reverse: false,
  },
  interactiveTabs: {
    label: "METHODOLOGY",
    title: "Why add an AI layer instead of replacing your LPR system?",
    buttonText: "Talk to our team",
    tabs: [
      { id: "t1", icon: Shield, title: "Weather-ready recognition", description: "Processing pipelines target the most common causes of LPR failure: snow, mud, glare, motion blur and poor lighting.", imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790158515/parking-second_-section-1.png" },
      { id: "t2", icon: Gauge, title: "Confidence you can act on", description: "Each read is scored, so officers see a clear result: valid permit, no permit found, or unable to determine.", imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790158515/parking-second_-section-2.png" },
      { id: "t3", icon: FileCode2, title: "Integrates with your current engine, permit database and enforcement app", description: "With no added steps for officers.", imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790158515/parking-second-section-3.png" }
    ]
  },
  /** "Related license plate recognition work": the case study and the product page. */
  relatedWork: {
    heading: "Related license plate recognition work",
    studies: [
      {
        id: "pk-lpr-case-study",
        type: "standard" as const,
        title: "AI-enhanced LPR parking enforcement",
        description: "How a mobile parking enforcement app added an AI layer that reads plates in snow, mud, glare and blur, with fewer repeated scans.",
        image: lprCaseStudy.card.image,
        imageAlt: lprCaseStudy.card.imageAlt,
        bgColor: "bg-surface",
        link: LPR_CASE_STUDY,
        linkLabel: "AI-enhanced LPR parking enforcement case study",
      },
      {
        id: "pk-lpr-product",
        type: "standard" as const,
        title: "License plate recognition (ALPR / ANPR)",
        description: "Our open-source license plate recognition API for parking, tolling, fleet and access control, with a live demo you can try in the browser.",
        image: "/images/case_studies/ipr_case_study_banner.png",
        imageAlt: "Tizora license plate recognition product banner",
        bgColor: "bg-surface",
        link: "/products/license-plate-recognition",
        linkLabel: "license plate recognition product",
      },
    ],
  },
  /** "Who needs AI license plate recognition for parking enforcement?": before the FAQ. */
  audience: {
    headline: "Who needs AI license plate recognition for parking enforcement?",
    intro: "This approach fits parking enforcement app providers and parking operators that already run a recognition engine and a permit database, and lose time to rescans, manual checks or uncertain reads. It does not suit teams without any LPR system or permit data.",
    // Facts from the parking case study's fit section and the brief's FAQ, so nothing new is claimed.
    body: [
      "Built for: mobile permit enforcement where snow, mud, glare, blur and poor lighting make plates hard to read",
      "Works with: your existing enforcement app, LPR or ALPR recognition engine and permit database, through an API layer",
      "You will need: access to your capture workflow, API access to your permit database and enforcement app, and sample images from the conditions where reads fail today.",
      "How it starts: a site assessment of your enforcement workflow and capture conditions, after which we fix the scope",
    ],
    imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790158515/parking-second_-section-1.png",
    imageAlt: "Security cameras of different types mounted on a building wall",
  },
  /** Visible FAQ; the page's FAQPage schema is built from this same list, so text and schema match. */
  faqs: {
    tagTitle: "FAQ",
    heading: "AI license plate recognition FAQs",
    questions: [
      { q: "What is AI license plate recognition for parking enforcement?", a: "It is an AI processing layer that improves how plate images are read for parking enforcement. It checks image quality, enhances difficult images, scores each read for confidence and validates the plate against a permit database before an enforcement decision is made. Tizora adds this layer in front of your existing recognition engine." },
      { q: "How does AI improve license plate recognition in snow, mud and glare?", a: "The system assesses each image for sharpness, lighting, occlusion and angle, then applies the specific enhancement that image needs instead of one generic filter. Each read is then scored for confidence, so uncertain plates are retried or escalated and do not become guessed enforcement calls." },
      { q: "What is the difference between LPR and ALPR?", a: "LPR (license plate recognition) and ALPR (automatic license plate recognition) are used interchangeably for software that reads plates from camera images. ALPR is the common US term and ANPR is the common UK term for the same technology." },
      { q: "How does confidence scoring work in license plate recognition?", a: "Each plate read gets a confidence score. High-confidence reads go straight to permit validation. Low-confidence reads are retried, handled by a fallback, or sent for manual review. The officer then sees a clear result: valid permit, no permit found, or unable to determine." },
      { q: "Can AI be added to our existing LPR engine and enforcement app?", a: "Yes. The AI layer sits ahead of your current recognition engine and connects to your permit database and enforcement app through APIs, so officers keep using the tools they already know." },
      { q: "Does it work with damaged or obscured plates?", a: "It improves the chance of a usable read by enhancing the image and retrying. When a plate still cannot be read with confidence, the system reports it as unable to determine and sends it for review instead of guessing." },
      { q: "How long does an integration take?", a: "It depends on your recognition engine, your permit database and the conditions where reads fail today. We fix the scope after a site assessment that reviews your enforcement workflow and capture conditions." },
      { q: "What do we need to get started?", a: "You need access to your capture workflow, API access to your permit database and enforcement app, and sample images from the conditions where your reads fail today." },
    ],
  },
  // The "Fewer rescans. Faster permit checks." scroll section is replaced by the case study block above.
};

export const ecommerceData = {
  /** Section labels and CTA copy for this industry page (falls back to template defaults). */
  labels: {
    heroLabel: "ECOMMERCE & RETAIL",
    approach: { tagTitle: "OUR APPROACH", heading: "How we build for commerce." },
    caseStudies: { title: "Commerce engineering in practice.", description: "See how we have connected storefronts to warehouse robotics." },
    cta: { heading: "Ready to scale your commerce platform?", description: "Talk to us about storefronts, integrations and fulfilment.", buttonText: "Talk to our team", buttonLink: "/contact" },
  },
  topbar: {
    line1: "Hyper-personalization",
    line2: "and resilient architecture",
    line3: "for global eCommerce",
    description: "Scaling digital storefronts to handle Black Friday traffic and building AI recommendation engines.",
    buttonText: "Explore eCommerce solutions"
  },
  heroImage: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790158080/ecommerce-first-_image.png",
  about: {
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    eyebrowNum: "001",
    eyebrowText: "ECOMMERCE & RETAIL",
    heading: React.createElement(
      React.Fragment,
      null,
      React.createElement("span", { className: "muted" }, "We architect headless"),
      React.createElement("br"),
      React.createElement("span", { className: "muted" }, "commerce platforms and"),
      React.createElement("br"),
      React.createElement("span", { className: "strong" }, "revenue-driving "),
      React.createElement("span", { className: "accent" }, "recommendation AI")
    ),
    description: "We decouple frontends from monolith backends, delivering sub-second page loads globally while implementing predictive inventory models that eliminate out-of-stocks.",
    buttonText: "Explore our expertise",
    stats: [
      { num: "500K", label: "requests per second handled during peak sales" },
      { num: "18%", label: "average boost in AOV via recommendation engines" }
    ]
  },
  steps: [
    { n: "001", title: "Headless Migration", text: "Decoupling the frontend UX from the backend commerce engine via GraphQL APIs.", image: { src: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790158080/ecommerce-second-section-1.png", alt: "Headless eCommerce architecture" } },
    { n: "002", title: "Global CDN Edge", text: "Deploying serverless functions to edge nodes for sub-100ms global response times.", image: { src: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790158081/ecommerce-second-section-2.png", alt: "Global CDN infrastructure" } },
    { n: "003", title: "Inventory Intelligence", text: "Integrating real-time warehouse data with predictive algorithms to optimize stock.", image: { src: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790158079/ecommerce-second-section-3.png", alt: "Smart warehouse inventory" } },
    { n: "004", title: "Personalization AI", text: "Training deep learning models on user clickstreams to deliver hyper-relevant product feeds.", image: { src: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790158079/ecommerce-second-section-4.png", alt: "AI product recommendations" } },
  ],
  quote: {
    quote: "Our Black Friday infrastructure used to buckle under 50K concurrent users. After Tizora rebuilt our platform on a headless architecture, we handled 500K concurrent sessions with zero degradation — and saw a 23% lift in conversion.",
    author: "Head of Digital Commerce",
    role: "Global Fashion Retailer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop",
    companyName: "Fortune 500 Retail Brand"
  },
  features: {
    label: "CORE CAPABILITIES",
    title: "Engineered for peak-traffic resilience.",
    description: "Our commerce platforms are designed to absorb 10x traffic spikes without pre-warming, delivering sub-200ms page loads globally through intelligent edge caching and serverless compute.",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2000&auto=format&fit=crop",
    features: [
      { icon: "01", title: "Headless Commerce Engine", description: "Fully decoupled storefront architecture using GraphQL federation, enabling independent deployment of checkout, catalog, and content systems." },
      { icon: "02", title: "AI Recommendation Engine", description: "Deep learning models trained on clickstream, purchase history, and contextual signals to deliver hyper-personalized product feeds in real-time." },
      { icon: "03", title: "Predictive Inventory", description: "Demand forecasting models that reduce out-of-stock events by 40% while cutting overstock carrying costs by 25%." }
    ]
  },
  agileTimeline: {
    tagTitle: "COMMERCE DELIVERY",
    heading: "From platform audit to a load-tested launch.",
    steps: [
      { number: "01", title: "Platform Audit", description: "Profiling current storefront performance, conversion funnels, and infrastructure bottlenecks under load.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
      { number: "02", title: "Headless Architecture", description: "Designing the decoupled frontend-backend topology with GraphQL gateways and CDN edge caching layers.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" },
      { number: "03", title: "AI Integration", description: "Training and deploying recommendation models, search ranking algorithms, and dynamic pricing engines.", image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop" },
      { number: "04", title: "Load-Tested Launch", description: "Synthetic load testing at 3x peak projections with automated canary deployments and instant rollback.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop" }
    ]
  },
  interactiveTabs: {
    label: "METHODOLOGY",
    title: "Commerce that never sleeps.",
    buttonText: "Scale your storefront",
    tabs: [
      { id: "t1", icon: Shield, title: "PCI-DSS Level 1", description: "Tokenized payment processing with end-to-end encryption — your customers' card data never touches your servers.", imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790158080/ecommerce-second-section-1.png" },
      { id: "t2", icon: Gauge, title: "Sub-200ms Global", description: "Edge-rendered storefronts served from 200+ PoPs worldwide with intelligent prefetching and image optimization.", imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790158081/ecommerce-second-section-2.png" },
      { id: "t3", icon: FileCode2, title: "Composable Stack", description: "Best-of-breed services for CMS, search, payments, and fulfillment — assembled into a unified, testable platform.", imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/v1790158079/ecommerce-second-section-3.png" }
    ]
  },
  scrollReveal: {
    feature2: {
      title: "Built for conversion at global scale",
      bullets: [
        "Real-time inventory sync across all channels and warehouses.",
        "AI-driven dynamic pricing responding to demand signals in milliseconds.",
        "Deep integration with Shopify, Stripe, Algolia, and enterprise OMS platforms."
      ]
    },
    warehouse: {
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop"
    }
  },
};

// src/data/views/industriesPageData.ts

export const seoData = {
  title: "Industries We Build AI Software For",
  description: "AI-ready software for healthcare, aviation, fintech, parking and eCommerce. See what Tizora builds for each industry, with case studies and ebooks.",
  url: "https://www.tizora.ai/industries",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
};

export const pageHeaderData = {
  title: "Industry Solutions\n& Expertise",
  description: "Tizora builds AI-ready software for industries where accuracy, compliance and uptime matter: patient and medication platforms in healthcare, turnaround and stand intelligence in aviation, core banking and digital KYC in fintech, license plate recognition in parking, and headless commerce with warehouse robotics in eCommerce. Each industry below links to the work we have shipped."
};

export const industriesList = [
  {
    id: "financial-services",
    title: "Financial Services",
    href: "/industries/fintech",
    description: "Tizora helps financial institutions reduce complexity and simplify operating models to unlock growth and navigate disruption securely. We help improve operations, enabled by deterministic systems that create new business value.",
    bgColor: "#85C7C3",
    textColor: "#003640",
    buttonColor: "#FFFFFF",
    offerings: [
      { title: "Core Banking Infrastructure", href: "#" },
      { title: "Deterministic Ledgers", href: "#" },
      { title: "Algorithmic Trading & Risk", href: "#" },
      { title: "Fraud Detection Systems", href: "#" }
    ],
    imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789540362/first_section.png"
  },
  {
    id: "healthcare-medical",
    title: "Healthcare and Medical",
    href: "/industries/healthcare",
    description: "Tizora drives inclusive growth by providing end-to-end healthcare solutions and improving patient care/administration. Implement next-generation solutions using cloud-based data integration and AI systems.",
    bgColor: "#00B4D8",
    textColor: "#FFFFFF",
    buttonColor: "#FFFFFF",
    offerings: [
      { title: "Patient Management Software", href: "/insights/case-studies/healthcare/ai-ready-patient-management-platform" },
      { title: "Medication Management Software", href: "/insights/case-studies/healthcare/ai-ready-patient-management-platform" },
      { title: "FHIR Integration Services", href: "/industries/healthcare" }
    ],
    imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789540362/second_section.png"
  },
  {
    id: "aviation",
    title: "Aviation",
    href: "/industries/aviation",
    description: "Tizora helps aviation teams turn operational data, procedures, and real-time events into faster, more confident decisions across airport and airline operations.",
    bgColor: "#7B68EE",
    textColor: "#FFFFFF",
    buttonColor: "#FFFFFF",
    offerings: [
      { title: "Operational Knowledge Assistant", href: "#" },
      { title: "Flight-Disruption & Delay Intelligence", href: "#" },
      { title: "Turnaround & Gate/Stand Intelligence", href: "/insights/case-studies/aviation/aircraft-turnaround-management-software" }
    ],
    imageSrc: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "parking",
    title: "Parking",
    href: "/industries/parking",
    description: "Modernize your parking operations with AI-driven License Plate Recognition, real-time permit validation, and highly available edge computing solutions for rapid enforcement.",
    bgColor: "#F4A261",
    textColor: "#003640",
    buttonColor: "#FFFFFF",
    offerings: [
      { title: "LPR Edge Systems", href: "#" },
      { title: "Permit Validation Logic", href: "#" },
      { title: "Mobile Enforcement Apps", href: "#" }
    ],
    imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789540362/third_section.png"
  },
  {
    id: "ecommerce",
    title: "eCommerce",
    href: "/industries/ecommerce",
    description: "High-performance platforms and inventory intelligence built for scale. Tizora engineers deterministic checkout logic combined with probabilistic product discovery.",
    bgColor: "#FF8FA3",
    textColor: "#003640",
    buttonColor: "#FFFFFF",
    offerings: [
      { title: "High-Volume Checkout", href: "#" },
      { title: "Inventory Intelligence", href: "#" },
      { title: "Algorithmic Pricing", href: "#" },
      { title: "Supply Chain Analytics", href: "#" }
    ],
    imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789540362/forth_section.png"
  }
];

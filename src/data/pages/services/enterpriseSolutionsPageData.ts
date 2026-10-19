// Card links derived from each case study's own canonical seoData.url, so this
// page can never point at a stale route if a case study's URL changes.
import { seoData as lprSeo } from '@/data/pages/insights/case-studies/aiLPRParkingData';
import { seoData as weightSeo } from '@/data/pages/insights/case-studies/aiWeightManagementData';
import { seoData as patientSeo } from '@/data/pages/insights/case-studies/aiPatientManagementData';
import { seoData as cstoreSeo } from '@/data/pages/insights/case-studies/cstoreMasterData';

function linkFromUrl(url: string): string {
  return url.replace('https://www.tizora.ai', '');
}

export const seoData = {
  title: "MVP Enterprise Solution Services for Large Organizations",
  description: "Innovate at scale with rapid prototyping, secure cloud architecture, and market-ready MVP engineering for enterprise organizations.",
  url: "https://www.tizora.ai/services/enterprise-solutions",
  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
};

export const showcaseHeroData = {
  title: "MVP Enterprise Solution Services for Large Organizations",
  subtitle: "Innovate at scale with rapid prototyping, secure cloud architecture, and market-ready MVP engineering for large organizations.",
  video: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4"
};

export const logoTickerData = [
  { name: 'AWS', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Microsoft Azure', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg' },
  { name: 'Salesforce', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
  { name: 'Snowflake', url: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg' },
  { name: 'Kubernetes', url: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg' }
];

export const scrollRevealData = {
  feature2: {
    title: "Secure MVP Development for Enterprises",
    bullets: [
      "Compliance-Ready Development ensuring regulatory adherence.",
      "End-to-End Data Protection protecting intellectual property.",
      "Advanced Access Control safeguarding sensitive corporate data.",
      "Secure Cloud Architecture supporting robust enterprise-grade applications."
    ]
  },
  warehouse: {
    image: "https://i.pinimg.com/originals/fc/71/63/fc71635c7f1b09ed30413f59bb749582.gif"
  }
};

export const cardGridData = {
  tagTitle: "ENTERPRISE CAPABILITIES",
  heading: "Enterprise-Grade MVP from Prototype to Launch",
  studies: [
    {
      id: "strategy",
      type: "large" as const,
      category: "Parking & Logistics",
      title: "AI-Enhanced LPR Parking Enforcement",
      description: "Built an AI-assisted license plate recognition layer that dramatically improved accuracy in difficult real-world conditions.",
      image: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789476207/ENTERPRISE_CAPABILITIES-1.png",
      bgColor: "#1B3A4B",
      link: linkFromUrl(lprSeo.url)
    },
    {
      id: "prototyping",
      type: "standard" as const,
      category: "Healthcare",
      title: "Digital Weight Management Platform",
      description: "Connected health data to personalized patient intelligence for gastric balloon patients.",
      image: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789476206/ENTERPRISE_CAPABILITIES-2.png",
      bgColor: "#2D5A27",
      link: linkFromUrl(weightSeo.url)
    },
    {
      id: "development",
      type: "standard" as const,
      category: "Healthcare",
      title: "AI-Ready Patient Management",
      description: "Engineered a connected healthcare platform for safer, more efficient medication and inventory management.",
      image: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789476206/ENTERPRISE_CAPABILITIES-3.png",
      bgColor: "#0d3a3a",
      link: linkFromUrl(patientSeo.url)
    },
    {
      id: "testing",
      type: "large" as const,
      category: "eCommerce",
      title: "CStore Master: eCommerce & AMR Robotics",
      description: "Integrated headless eCommerce with real-time AMR warehouse robotics to automate high-volume convenience retail.",
      image: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789476206/ENTERPRISE_CAPABILITIES-4.png",
      bgColor: "#4A2B3D",
      link: linkFromUrl(cstoreSeo.url)
    }
  ]
};

export const tracingBeamData = [
  {
    badge: "Phase 1: Discovery & Prototyping",
    title: "Rapid Concept-to-Prototype & Architecture Discovery",
    description: "We rapidly de-risk complex enterprise initiatives by converting multi-departmental requirements into high-fidelity interactive prototypes, end-to-end user journeys, and technical feasibility blueprints for early executive alignment.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Interactive enterprise system design and prototyping session",
    keyOutcome: "2–4 Weeks to Functional Prototype",
    deliverables: [
      "Interactive UI/UX Prototypes & Wireframes",
      "Technical Feasibility & Cost Assessment",
      "Executive Alignment & ROI Validation",
      "Domain-Driven System Decomposition"
    ]
  },
  {
    badge: "Phase 2: Strategy & Architecture",
    title: "Enterprise-Grade Architecture & Cloud Strategy",
    description: "We engineer resilient, distributed cloud architectures built for high-concurrency environments. Our blueprints prioritize event-driven microservices, multi-region failover, strict governance, and zero-trust security postures.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Distributed cloud infrastructure and microservices engineering",
    keyOutcome: "Deterministic & Compliant Foundation",
    deliverables: [
      "Scalable Event-Driven Microservices",
      "Multi-Cloud & Hybrid Deployment Models",
      "SOC2, HIPAA & ISO-Ready Compliance",
      "Zero-Trust API Gateway & IAM Integration"
    ]
  },
  {
    badge: "Phase 3: Intelligence & Global Scale",
    title: "AI Decision Pipelines & Scalable Cloud Automation",
    description: "Infuse enterprise workflows with predictive ML pipelines, deterministic document processing, and automated CI/CD infrastructure that empowers your organization to deploy securely and operate reliably at global scale.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Enterprise AI analytics and business intelligence visualization",
    keyOutcome: "99.99% Availability & Predictive AI",
    deliverables: [
      "Predictive ML & Decision Pipelines",
      "Deterministic Document Extraction",
      "Automated CI/CD & Multi-Cloud Scaling",
      "Real-Time Telemetry & 24/7 SRE Observability"
    ]
  }
];

export const profileSpotlightData = {
  name: "Chetan Sheladiya",
  role: "Founder & CEO at Tizora",
  image: "https://ai-bot-knowledge-bucket.s3.ap-south-1.amazonaws.com/recomai_images/1773399840360_07wpap.jpeg",
  aboutHeading: "Driving corporate-level innovation.",
  aboutText: "With extensive experience overseeing enterprise DevOps and agile transformations, our team successfully leads innovation labs for emerging technologies, guiding enterprises toward AI, Digital Twins, and API-first economies.",
  socials: {
    linkedin: "#",
    twitter: "#"
  }
};

export const storyCarouselData = {
  title: "Case Studies & Success Stories",
  description: "See how we've partnered with major industries to deliver reliable MVP Enterprise Solutions.",
};

export const faqData = {
  tagTitle: "FREQUENTLY ASKED QUESTIONS",
  heading: "Answering your enterprise queries.",
  questions: [
    {
      question: "What security and compliance standards do you follow?",
      answer: "We ensure compliance-ready development, end-to-end data protection, and continuous monitoring to meet enterprise security standards seamlessly."
    },
    {
      question: "Can you help with MVP launch strategy and team enablement?",
      answer: "Yes, we focus on both rapid prototyping for stakeholder buy-in and launch planning, including cloud-ready deployment and agile transformation for your teams."
    },
    {
      question: "Why choose Tizora over in-house teams?",
      answer: "We provide dedicated enterprise-level product engineering strategies without the heavy overhead, allowing your in-house teams to maintain focus on core operations."
    },
    {
      question: "How do we Implement an Enterprise Measurement Strategy?",
      answer: "We define goals, utilize enterprise dashboards & BI tools, automate data collection, and review & optimize regularly to ensure measurable ROIs."
    }
  ]
};

export const locationsData = [
  {
    id: "sf",
    country: "United States",
    type: "HQ",
    city: "San Francisco",
    address: "100 Market St, SF, CA 94105",
    phone: "+1 (415) 555-0198",
    coordinates: [-122.4194, 37.7749] as [number, number]
  },
  {
    id: "london",
    country: "United Kingdom",
    type: "EMEA Node",
    city: "London",
    address: "1 Canada Square, London E14 5AB",
    phone: "+44 20 7946 0958",
    coordinates: [-0.1276, 51.5072] as [number, number]
  },
  {
    id: "singapore",
    country: "Singapore",
    type: "APAC Node",
    city: "Singapore",
    address: "Marina Bay Financial Centre",
    phone: "+65 6555 0123",
    coordinates: [103.8198, 1.3521] as [number, number]
  }
];

export const ctaData = {
  heading: "Contact Us Today!",
  description: "Achieve long-term success with scalable MVP enterprise solutions built for the complexity of large organizations.",
  buttonText: "Schedule a Free Consultation",
  buttonLink: "/contact"
};

// Copy for the TextImage section (headline lines are split on \n).
export const textImageData = {
  headline: "Scalable\
Enterprise\
Solutions.",
  subline: "Built for the complexity of large organizations.",
  intro: "Our approach ensures smooth integration with your existing systems, adaptability to changing user demands, and a clear path from MVP to full-scale enterprise operations without missing a beat.",
  imageSrc: "https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1789476207/second_image.png",
  imageAlt: "Global enterprise logistics",
  body: [
    "Large organizations rarely start from a blank page. We plan around the systems you already run, so new capabilities connect to them instead of replacing them.",
    "From the first MVP to full-scale enterprise operations, the path stays clear, with room to adapt as user demands change.",
  ],
  footerTitle: "Long-term Success",
  footerText: "Transform legacy capabilities into secure, globally distributed infrastructures ready for scale.",
};

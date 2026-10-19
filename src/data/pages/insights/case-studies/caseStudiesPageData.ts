// Case Studies Showcase Page Data
import type { BreadcrumbItem } from "@/components/common/Breadcrumb";
import { readingMinutes } from "@/lib/readingTime";
import { digitalKycCaseStudy } from "./digitalKycData";
import { mobileBankingCaseStudy } from "./mobileBankingData";
import { coreBankingCaseStudy } from "./coreBankingData";
import { lprParkingCaseStudy } from "./aiLPRParkingData";
import { weightManagementCaseStudy } from "./aiWeightManagementData";
import { patientManagementCaseStudy } from "./aiPatientManagementData";
import { cstoreMasterCaseStudy } from "./cstoreMasterData";
import { skinAnalysisCaseStudy } from "./aiSkinAnalysisData";
import { turnaroundManagementCaseStudy } from "./turnaroundManagementData";

// Credited in metadata only; bylines are not shown on cards or pages.
const AUTHOR = "Tizora Team";

// Card link derived from each case study's own canonical seoData.url, so
// the listing page can never point at a stale route if a case study's URL
// changes — the two DPDP/LPR canonical-URL bugs fixed earlier in this repo
// were exactly this class of duplicated-by-hand mistake.
function linkFromUrl(url: string): string {
  return url.replace("https://www.tizora.ai", "");
}

export const seoData = {
  title: "Case Studies",
  description:
    "Explore how Tizora delivers measurable impact through AI engineering, product development, and cloud architecture across industries.",
  url: "https://www.tizora.ai/insights/case-studies",
  // Same banner as before, served from Cloudinary as a 1200x630 JPEG (the original PNG was 1.4 MB,
  // too large for WhatsApp and some other apps to show in link previews).
  image: "https://res.cloudinary.com/cjzo6qye/image/upload/f_jpg,q_80,w_1200,h_630,c_fill/v1791541237/case-studies/case-studies-share.png",
};

export const caseStudiesShowcaseHero = {
  title: "Real Problems. Engineered Solutions.",
  subtitle:
    "See how TIZORA has helped its clients achieve their vision of digital innovation.",
  video: "https://www.pexels.com/download/video/4153410/",
};

export const caseStudiesSummary = {
  title: "Delivering measurable impact across industries and scale.",
  paragraph:
    "From intelligent mobility systems to digital healthcare ecosystems, our engineering teams build AI-powered solutions that solve complex real-world challenges. We partner with industry leaders to deliver deterministic systems and agentic AI products that drive operational efficiency.",
  metadata: {
    location: "Global Reach",
    period: "2015 - Present",
    industry: "Multi-Industry Portfolio",
    services: [
      "AI Product Engineering",
      "Cloud Architecture",
      "Data Infrastructure",
      "Enterprise Systems",
    ],
  },
};

// Fixed industry taxonomy — kept identical to the /industries nav so the
// filter always lists every industry Tizora serves, not just the ones with
// a published case study yet.
export const CASE_STUDY_INDUSTRIES = [
  "Parking",
  "Fintech",
  "Aviation",
  "Healthcare",
  "eCommerce",
] as const;

export type CaseStudyIndustry = (typeof CASE_STUDY_INDUSTRIES)[number];

// Only real, published case studies with a live detail page belong here —
// each thumbnail reuses that case study's own hero image for accuracy.
// `date` is the case study's publish date, used for "Latest" sorting.
export const caseStudiesGrid = {
  studies: [
    {
      id: "cs-turnaround",
      imageAlt: turnaroundManagementCaseStudy.card.imageAlt,
      type: "standard" as const,
      title: "Aircraft Turnaround Management Software",
      description:
        "Turnaround delay risk, gate and stand occupancy and aircraft parking recommendations in one live view for airport operations teams.",
      industry: "Aviation" as CaseStudyIndustry,
      date: turnaroundManagementCaseStudy.published,
      modified: turnaroundManagementCaseStudy.modified,
      author: AUTHOR,
      readingTime: readingMinutes(turnaroundManagementCaseStudy),
      image: turnaroundManagementCaseStudy.card.image,
      bgColor: "bg-[#1B3A4B]",
      link: linkFromUrl(turnaroundManagementCaseStudy.url)
    },
    {
      id: "cs-digital-kyc",
      imageAlt: digitalKycCaseStudy.card.imageAlt,
      type: "standard" as const,
      title: "Digital KYC — Paperless customer onboarding",
      description:
        "Digital KYC creates seamless onboarding experiences while ensuring compliance with regulatory requirements.",
      industry: "Fintech" as CaseStudyIndustry,
      date: "2026-09-30",
      modified: "2026-10-09",
      author: "Tizora Team",
      readingTime: readingMinutes(digitalKycCaseStudy),
      image: digitalKycCaseStudy.card.image,
      bgColor: "bg-[#003640]",
      link: linkFromUrl(digitalKycCaseStudy.url)
    },
    {
      id: "cs-mobile-banking",
      imageAlt: mobileBankingCaseStudy.card.imageAlt,
      type: "standard" as const,
      title: "Mobile Banking Platform",
      description:
        "Engineering a secure, API-first mobile banking experience connected directly to the core banking platform.",
      industry: "Fintech" as CaseStudyIndustry,
      date: "2026-09-23",
      modified: "2026-10-09",
      author: AUTHOR,
      readingTime: readingMinutes(mobileBankingCaseStudy),
      image: mobileBankingCaseStudy.card.image,
      bgColor: "bg-[#1B3A4B]",
      link: linkFromUrl(mobileBankingCaseStudy.url)
    },
    {
      id: "cs-core-banking",
      imageAlt: coreBankingCaseStudy.card.imageAlt,
      type: "standard" as const,
      title: "Core Banking Operations Platform",
      description:
        "Engineering a unified operating foundation for deposits, lending, accounting, member operations, and connected banking services.",
      industry: "Fintech" as CaseStudyIndustry,
      date: "2026-09-22",
      modified: "2026-10-09",
      author: AUTHOR,
      readingTime: readingMinutes(coreBankingCaseStudy),
      image: coreBankingCaseStudy.card.image,
      bgColor: "bg-[#003640]",
      link: linkFromUrl(coreBankingCaseStudy.url)
    },
    {
      id: "cs-lpr",
      imageAlt: lprParkingCaseStudy.card.imageAlt,
      type: "standard" as const,
      title: "AI-Enhanced LPR Parking Enforcement",
      description:
        "Built an AI-assisted license plate recognition layer that dramatically improved accuracy in difficult real-world conditions.",
      industry: "Parking" as CaseStudyIndustry,
      date: "2026-08-20",
      modified: "2026-10-09",
      author: AUTHOR,
      readingTime: readingMinutes(lprParkingCaseStudy),
      image: lprParkingCaseStudy.card.image,
      bgColor: "bg-[#1B3A4B]",
      link: linkFromUrl(lprParkingCaseStudy.url)
    },
    {
      id: "cs-healthtech",
      imageAlt: weightManagementCaseStudy.card.imageAlt,
      type: "standard" as const,
      title: "Digital Weight Management Platform",
      description:
        "Connected health data to personalized patient intelligence for gastric balloon patients.",
      industry: "Healthcare" as CaseStudyIndustry,
      date: "2026-06-10",
      modified: "2026-10-09",
      author: AUTHOR,
      readingTime: readingMinutes(weightManagementCaseStudy),
      image: weightManagementCaseStudy.card.image,
      bgColor: "bg-[#2D5A27]",
      link: linkFromUrl(weightManagementCaseStudy.url)
    },
    {
      id: "cs-patient-management",
      imageAlt: patientManagementCaseStudy.card.imageAlt,
      type: "standard" as const,
      title: "AI-Ready Patient Management",
      description:
        "Engineered a connected healthcare platform for safer, more efficient medication and inventory management.",
      industry: "Healthcare" as CaseStudyIndustry,
      date: "2026-04-02",
      modified: "2026-10-15",
      author: AUTHOR,
      readingTime: readingMinutes(patientManagementCaseStudy),
      image: patientManagementCaseStudy.card.image,
      bgColor: "bg-[#0d3a3a]",
      link: linkFromUrl(patientManagementCaseStudy.url)
    },
    {
      id: "cs-cstore-master",
      imageAlt: cstoreMasterCaseStudy.card.imageAlt,
      type: "standard" as const,
      title: "CStore Master: eCommerce & AMR Robotics",
      description:
        "Integrated headless eCommerce with real-time AMR warehouse robotics to automate high-volume convenience retail.",
      industry: "eCommerce" as CaseStudyIndustry,
      date: "2026-02-15",
      modified: "2026-10-13",
      author: AUTHOR,
      readingTime: readingMinutes(cstoreMasterCaseStudy),
      image: cstoreMasterCaseStudy.card.image,
      bgColor: "bg-[#4A2B3D]",
      link: linkFromUrl(cstoreMasterCaseStudy.url)
    },
    {
      id: "cs-skin-analysis",
      imageAlt: skinAnalysisCaseStudy.card.imageAlt,
      type: "standard" as const,
      title: "AI Skin Analysis for Skincare E-Commerce",
      description:
        "An AI face-scan feature that reads a customer selfie and connects the visible skin concerns it finds to matching products in the brand's catalog.",
      industry: "eCommerce" as CaseStudyIndustry,
      date: "2026-09-29",
      modified: "2026-10-09",
      author: AUTHOR,
      readingTime: readingMinutes(skinAnalysisCaseStudy),
      image: skinAnalysisCaseStudy.card.image,
      bgColor: "bg-[#6b4a3a]",
      link: linkFromUrl(skinAnalysisCaseStudy.url)
    },
  ],
};

export const caseStudiesTestimonial = {
  quote:
    "Tizora didn\u2019t just deliver features \u2014 they engineered a system that fundamentally changed how our business operates. The depth of their technical thinking is rare.",
  author: "Sarah Jenkins",
  role: "VP of Engineering",
  companyName: "Fortune 500 Client",
  image:
    "https://images.unsplash.com/photo-1586296835409-fe3fe6b35b56?q=80&w=1476&auto=format&fit=crop",
};

const RELATED_COLORS = ["#34451D", "#67793D", "#1B3A4B", "#4A2B3D"];

export interface RelatedCaseStudyItem {
  number: string;
  color: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
  linkText: string;
}

/**
 * Real related-case-study cards for the StoryCarousel component, derived
 * from the same caseStudiesGrid used by the listing page — never
 * hand-written placeholder content. Pass the current case study's id to
 * exclude it from its own "related" list.
 */
export function getRelatedCaseStudies(
  excludeId?: string,
  limit = 4,
): RelatedCaseStudyItem[] {
  return caseStudiesGrid.studies
    .filter((study) => study.id !== excludeId)
    .slice(0, limit)
    .map((study, idx) => ({
      number: String(idx + 1).padStart(2, "0"),
      color: RELATED_COLORS[idx % RELATED_COLORS.length],
      title: study.title,
      description: study.description,
      image: study.image,
      imageAlt: study.imageAlt ?? study.title,
      link: study.link,
      linkText: "Read case study",
    }));
}

export const caseStudiesRelated = {
  title: "More from our engineering journal",
  description:
    "Explore our collection of in-depth engineering case studies. Discover how we partner with industry leaders to design resilient cloud architectures, build scalable AI products, and solve complex operational challenges using cutting-edge technology and deterministic systems.",
  items: getRelatedCaseStudies(),
};

/** Published / modified dates (ISO) for a case study, used for page metadata and structured data. */
export function getCaseStudyDates(id: string): { published: string; modified: string } {
  const study = caseStudiesGrid.studies.find((c) => c.id === id);
  const published = study?.date ?? "";
  return { published, modified: study?.modified ?? published };
}

/** One case study's listing entry (dates, author, real reading time) by id. */
export function getCaseStudy(id: string) {
  return caseStudiesGrid.studies.find((c) => c.id === id);
}

/**
 * "Home › Case Studies › Industry › Page" trail for a case study's hero, built from the
 * same `caseStudiesGrid` entry the listing page uses — so a title or industry change
 * never has to be kept in sync by hand in a second place.
 */
export function getBreadcrumbItems(id: string, currentLabel: string): BreadcrumbItem[] {
  const study = getCaseStudy(id);
  const items: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Case Studies", href: "/insights/case-studies" },
  ];
  if (study?.industry) {
    items.push({
      label: study.industry,
      href: `/insights/case-studies?industry=${encodeURIComponent(study.industry)}`,
    });
  }
  items.push({ label: currentLabel });
  return items;
}

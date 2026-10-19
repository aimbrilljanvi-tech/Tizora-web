/**
 * Standard data model for every case study page. One object per case study feeds the page
 * (via <CaseStudyTemplate>), its metadata, its structured data and its listing card, so all
 * case studies share one structure and cannot drift apart.
 *
 * Section order on the page is fixed by the template:
 *   hero -> outcomes -> challenge -> build -> architecture -> features -> techStack -> hurdles -> midCta
 *   -> results -> impact -> quote -> learned -> fit -> faqs -> disclosure -> related -> cta
 * Optional sections are simply left out when a case study has no real content for them.
 * Never fill a section with invented facts; leave it out instead.
 */
import type { FaceScanBox, SkinScanBox, StatusPanelData } from "@/components/sections/C001_HeroSplit";
import type { HealthAppMockupData } from "@/components/common/HealthAppMockup";
import type { BankingAppMockupData } from "@/components/common/BankingAppMockup";
import type { PatientAppMockupData } from "@/components/common/PatientAppMockup";
import type { WarehouseAppMockupData } from "@/components/common/WarehouseAppMockup";
import type { StatItem } from "@/components/sections/C043_StatBand";
import type { ContentSplitProps } from "@/components/sections/C017_ContentSplit";
import type { ProcessUIStep } from "@/components/sections/C056_ProcessUI";
import type { FigureBlockProps } from "@/components/sections/C052_FigureBlock";
import type { FeatureGridProps } from "@/components/sections/C040_FeatureGrid";
import type { TechStackTabsCategory } from "@/components/sections/C046_TechStackTabs";
import type { CtaStripProps } from "@/components/sections/C054_CtaStrip";
import type { ResultsTableProps } from "@/components/sections/C053_ResultsTable";
import type { QuoteBlockProps } from "@/components/sections/C014_QuoteBlock";
import type { BenefitGridProps } from "@/components/sections/C023_BenefitGrid";
import type { C036Props } from "@/components/sections/C036_TextImage";
import type { FAQItem } from "@/components/sections/C008_AccordionFAQ";
import type { DisclosureLinkGroup } from "@/components/sections/C055_Disclosure";
import type { BannerCTAProps } from "@/components/sections/C032_BannerCTA";

type SchemaNode = Record<string, unknown>;

export interface CaseStudyContent {
  /** Listing id in caseStudiesPageData (drives breadcrumbs, industry and related studies). */
  id: string;
  /** Last breadcrumb item, e.g. "Digital KYC". */
  breadcrumbLabel: string;
  /** Absolute canonical URL. */
  url: string;
  /** ISO dates. */
  published: string;
  modified: string;
  /** Credited in metadata and structured data only; bylines are not shown on the page. Defaults to "Tizora Team". */
  author?: string;
  /** Page language for structured data, e.g. "en-IN" or "en-US". */
  inLanguage?: string;

  seo: {
    /** Page title without the " | Tizora" suffix (added by the root layout). ~50-60 chars with the suffix. */
    title: string;
    /** 140-160 characters. */
    description: string;
    /** 1200x630 share image. */
    ogImage: string;
    ogImageAlt: string;
    primaryKeyword: string;
    secondaryKeywords: string[];
  };

  /** Listing card image (the card title/description live in caseStudiesPageData). */
  card: { image: string; imageAlt: string };

  /** Optional structured-data extras: topics the article is about, entities it mentions, and sources it cites. */
  schema?: { about?: SchemaNode[]; mentions?: SchemaNode[]; citation?: SchemaNode[] };

  /** Breadcrumb, H1 and the 40-60 word answer capsule (the executive summary). */
  hero: {
    label: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    cta: { label: string; href: string };
    /** Optional second, outlined button (e.g. a live demo). */
    secondaryCta?: { label: string; href: string };
    /** Optional hero overlays (face verification / skin scan animations). */
    faceScan?: FaceScanBox;
    skinScan?: SkinScanBox;
    /** Optional animated health-app mockup shown instead of the hero image. */
    healthApp?: HealthAppMockupData;
    /** Optional animated banking-app artwork shown instead of the hero image. */
    bankingApp?: BankingAppMockupData;
    /** Optional animated patient-management artwork shown instead of the hero image. */
    patientApp?: PatientAppMockupData;
    /** Optional animated order-to-robot warehouse artwork shown instead of the hero image. */
    warehouseApp?: WarehouseAppMockupData;
    /** Optional compact animated status readout over the hero image. */
    statusPanel?: StatusPanelData;
    /** Which side of the hero image stays in view when it is cropped (default: centre). */
    imagePosition?: "left" | "center" | "right";
    /** Smaller H1 for titles that wrap to 3+ lines. */
    compactTitle?: boolean;
  };

  /** Key outcomes: 3-4 measured numbers, each with what it measures and when. */
  outcomes?: { tagTitle?: string; heading?: string; stats: StatItem[] };

  /** "The challenge": baseline problem and constraints. `[text](/path)` links are supported. */
  challenge: ContentSplitProps["data"];

  /** How it was built / how it works: phases or steps, optional illustrations. */
  build?: { heading: string; description?: string; steps: ProcessUIStep[] };

  /** Architecture / solution detail: paragraphs, optional diagram and numbered key decisions. */
  architecture?: FigureBlockProps;

  /** Key features / capabilities (cards; images optional). */
  features?: FeatureGridProps;

  /** Technology, grouped by layer. */
  techStack?: { title: string; description?: string; categories: TechStackTabsCategory[] };

  /** "What made the project hard, and how was it solved?": the hurdles met and how each was handled. */
  hurdles?: BenefitGridProps["data"];

  /** Mid-page call to action. */
  midCta: CtaStripProps;

  /** Before/after results table with "How we measured". Only with real before/after data. */
  results?: ResultsTableProps;

  /** "What those numbers mean": the practical effect of the results, as short cards. */
  impact?: BenefitGridProps["data"];

  /** Client quote, credited by role when the client is under NDA. */
  quote?: QuoteBlockProps["data"];

  /** What we learned / key takeaways / challenges & solutions. */
  learned?: BenefitGridProps["data"];

  /** "Will this work for you?": fit, timeline, team, prerequisites or who it is built for. */
  fit?: C036Props;

  faqs?: { tagTitle: string; heading: string; questions: FAQItem[] };

  /** Disclosure small print plus reference / related-reading links. */
  disclosure?: { text: string | string[]; links?: DisclosureLinkGroup[] };

  /** Related case studies carousel heading. */
  related: { title: string; description: string };

  /** Closing call to action. */
  cta: BannerCTAProps["data"];
}

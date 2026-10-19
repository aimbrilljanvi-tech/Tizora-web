import { StatItem } from "../../components/sections/C043_StatBand";
import { TimelineStep } from "../../components/sections/C038_AgileTimeline";

export interface TopicPageData {
  seo: {
    title: string;
    description: string;
    url: string;
    image: string;
  };
  hero: {
    label: string;
    title: string;
    description: string;
    buttonText: string;
    imageSrc: string;
  };
  stats: {
    tagTitle?: string;
    heading?: string;
    items: StatItem[];
  };
  summary: {
    title: string;
    paragraph: string;
    metadata: {
      location: string;
      period: string;
      industry: string;
      services: string[];
    };
  };
  pillars: {
    number: string;
    title: string;
    description: string;
    tags?: string[];
    image?: { src: string; alt: string };
  }[];
  framework: {
    title: string;
    description?: string;
    categories: {
      name: string;
      items: string[];
      /** Card image and back-of-card copy, used by the TechStack cards. */
      image?: string;
      imageAlt?: string;
      details?: string[];
    }[];
  };
  deepDive: {
    label: string;
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
    features: { icon: string; title: string; description: string }[];
  };
  process: {
    tagTitle?: string;
    heading: string;
    steps: TimelineStep[];
  };
  faq: {
    tagTitle: string;
    heading: string;
    questions: { q: string; a: string }[];
  };
  cta: {
    heading: string;
    description: string;
    buttonText: string;
    buttonLink?: string;
  };
  // Optional page-specific sections — each topic page uses exactly one of
  // these to keep the four pages from feeling like the same template
  // reskinned four times.
  quote?: {
    quote: string;
    author: string;
    role: string;
    image: string;
    companyName?: string;
  };
  statement?: {
    title: string;
    bullets: string[];
    image: string;
  };
  comparison?: {
    label: string;
    title: string;
    paragraphs: string[];
    image: string;
    reverse?: boolean;
  };
  // Optional lead-gen callout sections used by the Shopify App VPAT/VAPT
  // landing pages — a hook near the hero and a nudge lower on the page.
  // Rendered as custom JSX directly in the page component rather than
  // forced into an existing section component.
  hook?: {
    heading: string;
    lead: string;
    body: string[];
    buttonText: string;
  };
  preFormNudge?: {
    heading: string;
    body: string[];
    ctaText: string;
  };
}

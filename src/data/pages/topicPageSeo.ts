import { TopicPageData } from './topicPageTypes';

const TIZORA_LOGO = 'https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788860642/tizora_new_logo.png';

export interface BuildTopicJsonLdOptions {
  /** Clean service name for structured data, e.g. "AI Cybersecurity" (not the full SEO <title>). */
  name: string;
  data: TopicPageData;
  keywords?: string[];
}

/**
 * Structured data for a Security/Compliance topic page: a Service entry
 * (so search engines understand this is a professional service, not an
 * article), a FAQPage entry generated from the page's own FAQ content
 * (drives FAQ rich results), and a two-level BreadcrumbList. Mirrors the
 * Article/FAQPage/Breadcrumb pattern already used on blog and case-study
 * pages, adapted for a service rather than a content page.
 */
export function buildTopicJsonLd({ name, data, keywords }: BuildTopicJsonLdOptions): object[] {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name,
    description: data.seo.description,
    url: data.seo.url,
    image: data.seo.image,
    ...(keywords && keywords.length > 0 ? { keywords: keywords.join(', ') } : {}),
    provider: {
      '@type': 'Organization',
      name: 'Tizora',
      url: 'https://www.tizora.ai',
      logo: TIZORA_LOGO,
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
  };

  const faqJsonLd = data.faq.questions.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faq.questions.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  } : null;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tizora.ai' },
      { '@type': 'ListItem', position: 2, name, item: data.seo.url },
    ],
  };

  return faqJsonLd
    ? [serviceJsonLd, faqJsonLd, breadcrumbJsonLd]
    : [serviceJsonLd, breadcrumbJsonLd];
}

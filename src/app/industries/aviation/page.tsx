import type { Metadata } from 'next';
import Link from 'next/link';
import { MainLayout } from '@/components/layout/MainLayout';
import { JsonLd } from '@/components/common/JsonLd';
import { industryBreadcrumbItems } from '@/data/pages/industries/industryBreadcrumbs';
import {
  AccordionFAQ,
  BannerCTA,
  BenefitGrid,
  ContentSplit,
  FeatureList,
  HeroSplit,
  InteractiveServicesList,
  ScrollReveal,
  StatBand,
  TechStack,
} from '@/components/sections';
import { RelatedCaseStudy } from '@/components/sections/C050_RelatedCaseStudy';
import { aviationData as d, aviationFaq, aviationSeo as seo, AVIATION_URL, IMG, OG_IMAGE } from '@/data/pages/industries/aviationData';

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: AVIATION_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: {
    type: 'website',
    title: seo.ogTitle,
    description: seo.description,
    url: AVIATION_URL,
    siteName: 'Tizora',
    locale: 'en_US',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, type: 'image/jpeg', alt: seo.ogAlt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.ogTitle,
    description: seo.description,
    images: [{ url: OG_IMAGE, alt: seo.ogAlt }],
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${AVIATION_URL}#webpage`,
    url: AVIATION_URL,
    name: seo.title,
    description: seo.description,
    inLanguage: 'en',
    datePublished: seo.datePublished,
    about: ['Airport operations', 'Aircraft turnaround', 'Flight disruption management', 'Gate and stand management'],
    keywords: seo.keywords.join(', '),
    primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630, description: seo.ogAlt },
    isPartOf: { '@type': 'WebSite', name: 'Tizora', url: 'https://www.tizora.ai' },
    breadcrumb: { '@id': `${AVIATION_URL}#breadcrumb` },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${AVIATION_URL}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tizora.ai/' },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.tizora.ai/industries' },
      { '@type': 'ListItem', position: 3, name: 'Aviation', item: AVIATION_URL },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${AVIATION_URL}#service`,
    name: 'AI Intelligence for Airport Operations',
    serviceType: 'Aviation operations AI',
    description: seo.description,
    provider: { '@type': 'Organization', name: 'Tizora', url: 'https://www.tizora.ai' },
    audience: { '@type': 'BusinessAudience', name: 'Airports, airlines and ground-handling teams' },
    url: AVIATION_URL,
    image: OG_IMAGE,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Key aviation capabilities',
      itemListElement: d.capabilities.items.map((c) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: c.title, description: c.description },
      })),
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: aviationFaq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
];

export default function AviationPage() {
  return (
    <MainLayout>
      <JsonLd data={jsonLd} />

      {/* 1. Hero */}
      <HeroSplit
        breadcrumb={industryBreadcrumbItems('Aviation')}
        label={d.hero.label}
        title={d.hero.title}
        description={d.hero.description}
        buttonText={d.hero.cta.label}
        buttonHref={d.hero.cta.href}
        secondaryButtonText={d.hero.secondaryCta.label}
        secondaryButtonHref={d.hero.secondaryCta.href}
        imageSrc={IMG.hero}
        imageAlt={d.hero.imageAlt}
        animatedTitle
        compactTitle
      />

      {/* 2. Aviation domain expertise */}
      <TechStack
        label={d.expertise.label}
        title={d.expertise.title}
        description={d.expertise.description}
        categories={d.expertise.categories}
        enhanced
      />

      {/* 3. The aviation knowledge challenge */}
      <ContentSplit data={d.challenge} spacing="compact" gap="tight" />

      {/* 4. How Tizora helps */}
      <FeatureList data={d.helps} />

      {/* 5. Key aviation capabilities */}
      <div className="bg-background pt-16">
        <InteractiveServicesList
          tagTitle={d.capabilities.tagTitle}
          heading={d.capabilities.heading}
          items={d.capabilities.items}
          background="#f6f6f6"
          activeNumberColor="#171716"
          inactiveNumberColor="#c4c3bd"
          activeTitleColor="#171716"
          inactiveTitleColor="#c4c3bd"
          descriptionColor="#4a4a48"
          borderColor="#e5e5e5"
          columnGap={32}
          rowGap={16}
          listPadding="1rem"
          heightVh={80}
        />
      </div>

      {/* 6. Designed for aviation operations teams */}
      <BenefitGrid data={d.teams} bordered />

      {/* 7. Trust, governance, and control */}
      <ScrollReveal
        label="Trust, governance, and control"
        data={d.trust}
        imagePosition="center top"
        fadeClassName="h-10"
        imageAlt="Aircraft on final approach over an airfield"
      />

      {/* 8. From knowledge to action */}
      <StatBand tagTitle={d.action.tagTitle} heading={d.action.heading} stats={d.action.stats} />

      {/* 9. Featured aviation use case (teaser; the full story lives on its own case-study page) */}
      <ContentSplit data={d.useCase} gap="tight" />
      <div className="flex justify-center px-5 pb-12 sm:px-8 lg:px-16 xl:px-24">
        <Link
          href={d.useCase.cta.href}
          className="inline-flex items-center gap-3 rounded-full bg-[#696e2e] px-6 py-3 text-[13px] font-medium text-white transition-colors hover:bg-[#585c26]"
        >
          {d.useCase.cta.label}
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* Case studies in this industry (renders once an aviation case study is published) */}
      <RelatedCaseStudy industry="Aviation" />

      {/* 10. FAQ (mirrors the FAQPage JSON-LD) */}
      <AccordionFAQ tagTitle="Aviation FAQ" heading="Common questions about Tizora for aviation." questions={aviationFaq} hideContactCta />

      {/* 11. Final CTA */}
      <BannerCTA data={d.cta} />
    </MainLayout>
  );
}

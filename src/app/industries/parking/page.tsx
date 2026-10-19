import type { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { buildMetadata } from '@/lib/seo';
import { parkingData } from '@/data/pages/industries/industriesData';
import { ParkingClient } from '@/components/pages/industries/ParkingClient';

const URL = 'https://www.tizora.ai/industries/parking';
// "| Tizora" is added by the root layout's title template.
const TITLE = 'AI License Plate Recognition for Parking Enforcement';
const SOCIAL_TITLE = 'AI License Plate Recognition for Parking Enforcement';
const DESCRIPTION =
  'Tizora builds AI license plate recognition for parking enforcement: an AI layer on your existing LPR engine that reads plates in snow, mud and glare.';
const MODIFIED = '2026-10-16';

const base = buildMetadata({ title: TITLE, description: DESCRIPTION, url: URL, image: parkingData.heroImage });

export const metadata: Metadata = {
  ...base,
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: { ...base.openGraph, title: SOCIAL_TITLE },
  twitter: { ...base.twitter, title: SOCIAL_TITLE },
};

// Organization, WebPage, Service, BreadcrumbList and FAQPage in one graph (replaces the breadcrumb-only script).
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.tizora.ai/#organization',
      name: 'Tizora',
      url: 'https://www.tizora.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://res.cloudinary.com/cjzo6qye/image/upload/e_trim/v1788875430/Tizora_-_Logo-Sel-F-Typo.png',
      },
      sameAs: ['https://www.linkedin.com/company/tizora/'],
    },
    {
      '@type': 'WebPage',
      '@id': `${URL}#webpage`,
      url: URL,
      name: `${TITLE} | Tizora`,
      description: DESCRIPTION,
      inLanguage: 'en-US',
      dateModified: MODIFIED,
      isPartOf: { '@id': 'https://www.tizora.ai/#organization' },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '#in-short'] },
    },
    {
      '@type': 'Service',
      '@id': `${URL}#service`,
      name: 'AI license plate recognition for parking enforcement',
      serviceType: 'AI license plate recognition for parking enforcement',
      url: URL,
      provider: { '@id': 'https://www.tizora.ai/#organization' },
      description:
        'An AI processing layer that sits ahead of an existing license plate recognition engine and enforcement app. It assesses image quality, applies targeted enhancement, scores each read for confidence and validates plates against a permit database.',
      audience: { '@type': 'Audience', audienceType: 'Parking enforcement app providers and parking operators' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tizora.ai/' },
        { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.tizora.ai/industries' },
        { '@type': 'ListItem', position: 3, name: 'Parking', item: URL },
      ],
    },
    {
      '@type': 'FAQPage',
      // Built from the same list the page shows, so the schema and the visible FAQ match word for word.
      mainEntity: parkingData.faqs.questions.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function ParkingPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ParkingClient />
    </>
  );
}

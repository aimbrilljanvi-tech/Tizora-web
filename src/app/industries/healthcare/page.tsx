import type { Metadata } from 'next';
import { buildMetadata, jsonLdScript } from '@/lib/seo';
import { healthcareData } from '@/data/pages/industries/industriesData';
import { HealthcareClient } from '@/components/pages/industries/HealthcareClient';

const URL = 'https://www.tizora.ai/industries/healthcare';
// "| Tizora" is added by the root layout's title template.
const TITLE = 'Healthcare Software Development Company';
const SOCIAL_TITLE = 'Healthcare Software Development Company for AI-Ready Platforms';
const DESCRIPTION =
  'Tizora is a healthcare software development company building HIPAA-aligned, FHIR-ready patient management and medication platforms that are ready for AI.';
const MODIFIED = '2026-10-15';

const base = buildMetadata({ title: TITLE, description: DESCRIPTION, url: URL, image: healthcareData.heroImage });

export const metadata: Metadata = {
  ...base,
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  openGraph: { ...base.openGraph, title: SOCIAL_TITLE },
  twitter: { ...base.twitter, title: SOCIAL_TITLE },
};

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
      name: 'Healthcare software development',
      serviceType: 'Healthcare software development',
      url: URL,
      provider: { '@id': 'https://www.tizora.ai/#organization' },
      description:
        'Custom patient management, medication management and data interoperability platforms for care providers and digital health teams, built on AWS, designed to align with HIPAA and structured for future AI features.',
      audience: { '@type': 'Audience', audienceType: 'Care providers, group homes and digital health teams' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Healthcare software services',
        itemListElement: [
          'Patient management software development',
          'Medication management software',
          'FHIR integration services',
          'AI-ready healthcare data foundation',
        ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tizora.ai/' },
        { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.tizora.ai/industries' },
        { '@type': 'ListItem', position: 3, name: 'Healthcare', item: URL },
      ],
    },
    {
      '@type': 'FAQPage',
      // Built from the same list the page shows, so the schema and the visible FAQ match word for word.
      mainEntity: healthcareData.faqs.questions.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function HealthcarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(schema) }} />
      <HealthcareClient />
    </>
  );
}

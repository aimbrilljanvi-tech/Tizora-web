import type { Metadata } from 'next';
import { Suspense } from 'react';
import { buildMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/common/JsonLd';
import { seoData, caseStudiesGrid } from '@/data/pages/insights/case-studies/caseStudiesPageData';
import { CaseStudiesContent, CaseStudiesView } from '@/components/pages/insights/CaseStudiesContent';

export const metadata: Metadata = buildMetadata(seoData);

const SITE = 'https://www.tizora.ai';
const abs = (u: string) => (u.startsWith('http') ? u : `${SITE}${u}`);

// Listing structured data: every card is an Article with its thumbnail as an ImageObject
// (same alt text as the card), so search and answer engines can read the images too.
const listingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Case Studies',
  url: `${SITE}/insights/case-studies`,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: caseStudiesGrid.studies.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Article',
        url: abs(s.link),
        name: typeof s.title === 'string' ? s.title : s.industry,
        description: s.description,
        image: {
          '@type': 'ImageObject',
          url: abs(s.image),
          description: s.imageAlt,
        },
      },
    })),
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={listingJsonLd} />
      {/* The fallback is the full, unfiltered listing, so it is present in the page's HTML. */}
      <Suspense fallback={<CaseStudiesView industryParam={null} />}>
        <CaseStudiesContent />
      </Suspense>
    </>
  );
}

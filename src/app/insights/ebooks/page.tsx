import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/common/JsonLd';
import { seoData, ebookGridData, allEbooks, EBOOKS_URL } from '@/data/pages/insights/ebooks/ebooksPageData';
import { EbooksContent } from '@/components/pages/insights/EbooksContent';

const SITE = 'https://www.tizora.ai';

export const metadata: Metadata = buildMetadata({ ...seoData, image: allEbooks[0]?.ogImage });

// Listing structured data: every card is a Book (ebook format) with its cover artwork as an ImageObject.
const listingJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Ebooks',
    url: EBOOKS_URL,
    description: seoData.description,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: ebookGridData.items.map((e, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Book',
          bookFormat: 'https://schema.org/EBook',
          url: `${SITE}${e.link}`,
          name: e.title,
          description: e.description,
          datePublished: e.isoDate,
          image: { '@type': 'ImageObject', url: e.image, description: e.imageAlt },
        },
      })),
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: `${SITE}/insights` },
      { '@type': 'ListItem', position: 3, name: 'Ebooks', item: EBOOKS_URL },
    ],
  },
];

export default function EbooksPage() {
  return (
    <>
      <JsonLd data={listingJsonLd} />
      <EbooksContent />
    </>
  );
}

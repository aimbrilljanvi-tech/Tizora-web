import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/common/JsonLd';
import { seoData, blogGridData } from '@/data/pages/insights/blogs/blogPageData';
import { BlogsContent } from '@/components/pages/insights/BlogsContent';

export const metadata: Metadata = buildMetadata(seoData);

const SITE = 'https://www.tizora.ai';

// Listing structured data: every card is a BlogPosting with its thumbnail as an ImageObject
// (same alt text as the card), so search and answer engines can read the images too.
const listingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Blogs',
  url: `${SITE}/insights/blogs`,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: blogGridData.studies.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'BlogPosting',
        url: `${SITE}${b.link}`,
        headline: b.title,
        description: b.description,
        datePublished: b.date,
        image: {
          '@type': 'ImageObject',
          url: b.image,
          description: b.imageAlt ?? b.title,
        },
      },
    })),
  },
};

export default function BlogsPage() {
  return (
    <>
      <JsonLd data={listingJsonLd} />
      <BlogsContent />
    </>
  );
}

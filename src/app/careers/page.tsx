import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/common/JsonLd';
import { seoData, careersOpeningsData } from '@/data/pages/careers/careersPageData';
import { CareersContent } from '@/components/pages/careers/CareersContent';

export const metadata: Metadata = buildMetadata(seoData);

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tizora.ai' },
    { '@type': 'ListItem', position: 2, name: 'Careers', item: 'https://www.tizora.ai/careers' },
  ],
};

const jobListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: careersOpeningsData.items
    .filter((job) => job.link.startsWith('/careers/'))
    .map((job, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: job.title,
      url: `https://www.tizora.ai${job.link}`,
    })),
};

export default function CareersPage() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd, jobListJsonLd]} />
      <CareersContent />
    </>
  );
}

import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { MainLayout } from '@/components/layout';
import { IndustryBands } from '@/components/sections/C030_IndustryBands';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { JsonLd } from '@/components/common/JsonLd';
import { industryBreadcrumbItems, industryBreadcrumbSchema } from '@/data/pages/industries/industryBreadcrumbs';
import { seoData, pageHeaderData } from '@/data/pages/industries/industriesPageData';

export const metadata: Metadata = buildMetadata(seoData);

export default function IndustriesPage() {
  return (
    <MainLayout>
      <JsonLd data={industryBreadcrumbSchema()} />
      <section className="w-full bg-white pt-24 sm:pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <Breadcrumb items={industryBreadcrumbItems()} className="mb-8 sm:mb-10" />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#003640] tracking-tight mb-6 whitespace-pre-line">
          {pageHeaderData.title}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          {pageHeaderData.description}
        </p>
      </section>

      <IndustryBands />
    </MainLayout>
  );
}

import type { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { industryBreadcrumbSchema } from '@/data/pages/industries/industryBreadcrumbs';
import { buildMetadata } from '@/lib/seo';
import { financialServicesData } from '@/data/pages/industries/industriesData';
import { FinancialServicesClient } from '@/components/pages/industries/FinancialServicesClient';

const NAME = 'Financial Services';

export const metadata: Metadata = buildMetadata({
  title: NAME,
  description: financialServicesData.topbar.description,
  url: 'https://www.tizora.ai/industries/fintech',
});

export default function FinancialServicesPage() {
  return (
    <>
      <JsonLd data={industryBreadcrumbSchema('Fintech', '/industries/fintech')} />
      <FinancialServicesClient />
    </>
  );
}

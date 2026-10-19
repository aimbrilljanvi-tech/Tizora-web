import type { Metadata } from 'next';
import { JsonLd } from '@/components/common/JsonLd';
import { industryBreadcrumbSchema } from '@/data/pages/industries/industryBreadcrumbs';
import { buildMetadata } from '@/lib/seo';
import { ecommerceData } from '@/data/pages/industries/industriesData';
import { EcommerceClient } from '@/components/pages/industries/EcommerceClient';

const NAME = 'eCommerce & Retail';

export const metadata: Metadata = buildMetadata({
  title: NAME,
  description: ecommerceData.topbar.description,
  url: 'https://www.tizora.ai/industries/ecommerce',
  image: ecommerceData.heroImage,
});

export default function EcommercePage() {
  return (
    <>
      <JsonLd data={industryBreadcrumbSchema('eCommerce', '/industries/ecommerce')} />
      <EcommerceClient />
    </>
  );
}

import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ShopifyPlusPartnerContent } from '@/components/pages/services/ShopifyPlusPartnerContent';

export const metadata: Metadata = buildMetadata({
  title: 'Shopify Plus Partner',
  description:
    'Certified Shopify Plus partner. We build enterprise-grade headless architectures, custom checkout flows, and seamless migrations.',
  url: 'https://www.tizora.ai/shopify-plus-partner',
});

export default function ShopifyPlusPartnerPage() {
  return <ShopifyPlusPartnerContent />;
}

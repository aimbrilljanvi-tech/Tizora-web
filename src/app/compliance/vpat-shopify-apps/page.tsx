import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { vpatShopifyAppsPageData as d } from '@/data/pages/compliance/vpatShopifyAppsPageData';
import { VPATShopifyAppsContent } from '@/components/pages/compliance/VPATShopifyAppsContent';

export const metadata: Metadata = buildMetadata(d.seo);

export default function VPATShopifyAppsPage() {
  return <VPATShopifyAppsContent />;
}

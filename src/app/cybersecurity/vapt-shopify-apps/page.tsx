import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { vaptShopifyAppsPageData as d } from '@/data/pages/cybersecurity/vaptShopifyAppsPageData';
import { VAPTShopifyAppsContent } from '@/components/pages/cybersecurity/VAPTShopifyAppsContent';

export const metadata: Metadata = buildMetadata(d.seo);

export default function VAPTShopifyAppsPage() {
  return <VAPTShopifyAppsContent />;
}

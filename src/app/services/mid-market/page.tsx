import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { seoData } from '@/data/pages/services/midMarketPageData';
import { MidMarketContent } from '@/components/pages/services/MidMarketContent';

export const metadata: Metadata = buildMetadata(seoData);

export default function MidMarketPage() {
  return <MidMarketContent />;
}

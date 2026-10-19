import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { seoData } from '@/data/pages/insights/ai-trends/aiTrendsPageData';
import { AITrendsContent } from '@/components/pages/insights/AITrendsContent';

export const metadata: Metadata = buildMetadata(seoData);

export default function AITrendsPage() {
  return <AITrendsContent />;
}

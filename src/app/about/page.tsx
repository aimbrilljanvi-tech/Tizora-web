import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { seoData } from '@/data/pages/about/aboutUsPageData';
import { AboutContent } from '@/components/pages/about/AboutContent';

export const metadata: Metadata = buildMetadata(seoData);

export default function AboutPage() {
  return <AboutContent />;
}

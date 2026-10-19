import type { Metadata } from 'next';
import { RecomAIContent } from '@/components/pages/products/RecomAIContent';

export const metadata: Metadata = {
  title: 'ReCom AI - AI Sales Agent for Modern Brands',
  description:
    'ReCom AI is your 24/7 AI sales agent that helps customers discover, engage, and buy across every channel including Shopify, Instagram, Facebook, and WordPress. Drive more sales effortlessly.',
  keywords: [
    'AI sales agent',
    'ReCom AI',
    'AI commerce',
    'automated customer support',
    'AI recommendations',
    'Instagram selling',
    'Facebook selling',
    'Shopify AI integration',
    'eCommerce automation',
    'Tizora',
  ],
  alternates: { canonical: 'https://www.tizora.ai/products/recomai' },
  openGraph: {
    title: 'ReCom AI - The Ultimate AI Sales Agent for Modern Brands',
    description:
      'Transform your customer experience with ReCom AI. Your 24/7 AI sales agent that helps customers discover, engage, and buy across every channel.',
    type: 'website',
    siteName: 'Tizora',
    url: 'https://www.tizora.ai/products/recomai',
    images: ['https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788431306/logo_symbol_only.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReCom AI - AI Sales Agent for Modern Brands',
    description:
      'ReCom AI is your 24/7 AI sales agent that helps customers discover, engage, and buy across every channel.',
  },
};

export default function RecomAIPage() {
  return <RecomAIContent />;
}

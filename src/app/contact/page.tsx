import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ContactContent } from '@/components/pages/contact/ContactContent';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us',
  description:
    'Talk to Tizora about your AI product, platform or integration. Email sales@tizora.ai, call our USA or India team, or book a call with an engineer.',
  url: 'https://www.tizora.ai/contact',
});

export default function ContactPage() {
  return <ContactContent />;
}

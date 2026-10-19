import type { Metadata } from 'next';

const SITE_NAME = 'Tizora';
const DEFAULT_IMAGE =
  'https://res.cloudinary.com/cjzo6qye/image/upload/w_1200,h_630,c_fill,q_80/v1788860885/og.png';

export interface PageSeoInput {
  title: string;
  description: string;
  url?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
}

/**
 * Builds a Next.js Metadata object equivalent to the old <SEO> component
 * (react-helmet-async). Root layout's title template appends " | Tizora",
 * so `title` here should be the bare page title, not the suffixed one.
 */
export function buildMetadata({
  title,
  description,
  url,
  canonical,
  image = DEFAULT_IMAGE,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  tags,
}: PageSeoInput): Metadata {
  const canonicalUrl = canonical || url;
  const imageType = image?.endsWith('.png') ? 'image/png' : 'image/jpeg';

  return {
    title,
    description,
    alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
    openGraph: {
      type,
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: image
        ? [{ url: image, width: 1200, height: 630, type: imageType }]
        : undefined,
      ...(type === 'article'
        ? {
            publishedTime,
            modifiedTime,
            authors: author ? [author] : undefined,
            tags,
          }
        : {}),
    },
    twitter: {
      card: image ? 'summary_large_image' : 'summary',
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

/**
 * Serializes JSON-LD for a <script type="application/ld+json"> tag via
 * dangerouslySetInnerHTML. Escapes "<" so a literal "</script>" inside any
 * string field (title, description, etc.) can't prematurely close the tag
 * and break out into the surrounding HTML.
 */
export function jsonLdScript(data: object | object[]) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

import { books } from './books';

export * from './ebookTypes';

export const EBOOKS_URL = 'https://www.tizora.ai/insights/ebooks';

export const seoData = {
  title: 'Ebooks and Guides',
  description:
    'Ebooks from the Tizora engineering team: practical guides to building AI-ready software for healthcare, aviation and other industries.',
  url: EBOOKS_URL,
};

export const heroData = {
  tagTitle: 'EBOOKS',
  heading: 'Ebooks and guides',
  description:
    'Practical guides from our engineering team on building AI-ready software for regulated and operations-heavy industries.',
};

/** Newest first. */
export const allEbooks = [...books].sort((a, b) => b.isoDate.localeCompare(a.isoDate));

export const ebookGridData = {
  items: allEbooks.map((e) => ({
    id: e.id,
    title: e.title,
    description: e.description,
    image: e.cardImage,
    imageAlt: e.cardImageAlt,
    topic: e.topic,
    date: e.date,
    isoDate: e.isoDate,
    link: `/insights/ebooks/${e.slug}`,
  })),
};

export function getEbook(slug: string) {
  return allEbooks.find((e) => e.slug === slug);
}

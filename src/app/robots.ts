import type { MetadataRoute } from 'next';

// Search and AI answer-engine crawlers are welcome everywhere public. API routes and the
// internal component playground are kept out (the playground is also noindex).
const DISALLOW = ['/api/', '/playground'];
const CRAWLERS = [
  'Googlebot',
  'Bingbot',
  'Google-Extended',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'Perplexity-User',
  'Applebot',
  'Applebot-Extended',
  'DuckAssistBot',
  'Meta-ExternalAgent',
  'Amazonbot',
  'MistralAI-User',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...CRAWLERS.map((userAgent) => ({ userAgent, allow: '/', disallow: DISALLOW })),
      { userAgent: '*', allow: '/', disallow: DISALLOW },
    ],
    sitemap: 'https://www.tizora.ai/sitemap.xml',
    host: 'https://www.tizora.ai',
  };
}

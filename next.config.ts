import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  // Pins the workspace root to this project so Next.js doesn't get confused
  // by an unrelated lockfile higher up in the user's home directory.
  outputFileTracingRoot: path.join(__dirname),
  // Don't advertise the framework/version to every response.
  poweredByHeader: false,
  // Lets a production build run in its own folder (NEXT_DIST_DIR=.next-build) while a dev server is running.
  distDir: process.env.NEXT_DIST_DIR || '.next',
  async headers() {
    return [
      {
        // Baseline hardening headers on every response. No Content-Security-Policy
        // here -- this site loads scripts/fonts/images from several third-party
        // hosts (Google Tag Manager, Fontshare, Cloudinary, Unsplash, etc.) and a
        // CSP strict enough to be worth having would need careful, ongoing
        // upkeep of that allowlist to avoid silently breaking a section.
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Removed industry pages (Oct 2026): send old links and search results to the industries hub.
      {
        source: '/industries/telecom',
        destination: '/industries',
        permanent: true,
      },
      {
        source: '/industries/life-sciences',
        destination: '/industries',
        permanent: true,
      },
      {
        source: '/apps/:slug*',
        destination: '/products/:slug*',
        permanent: true,
      },
      {
        source: '/industries/financial-services',
        destination: '/industries/fintech',
        permanent: true,
      },
      {
        source: '/products/lpr-demo',
        destination: '/products/license-plate-recognition',
        permanent: true,
      },
      {
        source: '/insights/case-studies/automotive/:slug*',
        destination: '/insights/case-studies/parking/:slug*',
        permanent: true,
      },
      // The weight management case study moved to a shorter address (the platform is
      // AI-ready, not AI-powered). Both older addresses go straight to the new one.
      {
        source: '/insights/case-studies/healthcare/ai-powered-digital-weight-management-platform',
        destination: '/insights/case-studies/healthcare/weight-management',
        permanent: true,
      },
      {
        source: '/client-success/healthcare/ai-powered-digital-weight-management-platform',
        destination: '/insights/case-studies/healthcare/weight-management',
        permanent: true,
      },
      // Case studies used to live under /client-success. Google still lists those URLs, so each
      // one goes straight to its current page (most specific rule first; the first match wins).
      {
        source: '/client-success',
        destination: '/insights/case-studies',
        permanent: true,
      },
      {
        source: '/client-success/automotive/:slug*',
        destination: '/insights/case-studies/parking/:slug*',
        permanent: true,
      },
      {
        source: '/client-success/:path*',
        destination: '/insights/case-studies/:path*',
        permanent: true,
      },
      // Fintech case studies were briefly published under /financial-services, and core banking
      // under a longer slug.
      {
        source: '/insights/case-studies/:industry(financial-services|fintech)/core-banking-platform',
        destination: '/insights/case-studies/fintech/core-banking',
        permanent: true,
      },
      {
        source: '/insights/case-studies/financial-services/:slug*',
        destination: '/insights/case-studies/fintech/:slug*',
        permanent: true,
      },
    ];
  },
  images: {
    // Every remote host any data file points an <Image> at -- content data
    // (case studies, industries, testimonials, etc.) is shared across many
    // generically-typed section components, so a host missing here surfaces
    // as a runtime crash on whichever page happens to render that image.
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.pravatar.cc' },
      { protocol: 'https', hostname: 'i.pinimg.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'framerusercontent.com' },
      { protocol: 'https', hostname: 'ai-bot-knowledge-bucket.s3.ap-south-1.amazonaws.com' },
      { protocol: 'https', hostname: 'dl.dropboxusercontent.com' },
      { protocol: 'https', hostname: 'miro.medium.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
    ],
    // Quality levels pages may request (75 is the default; diagrams ask for 100). Required from Next.js 16.
    qualities: [75, 100],
  },
};

export default nextConfig;

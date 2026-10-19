import type { MetadataRoute } from "next";
import { allBlogs } from "@/data/pages/insights/blogs/blogPageData";
import { allTrends } from "@/data/pages/insights/ai-trends/aiTrendsPageData";
import { caseStudiesGrid } from "@/data/pages/insights/case-studies/caseStudiesPageData";
import { allEbooks } from "@/data/pages/insights/ebooks/ebooksPageData";

const BASE_URL = "https://www.tizora.ai";

// Mirrors the static route list previously maintained by hand in
// public/sitemap.xml. `playground` is a component showcase, not real
// content, so it's intentionally left out here too.
const STATIC_ROUTES: { path: string; priority: number; lastModified?: string }[] = [
  { path: "/", priority: 1.0 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
  { path: "/careers", priority: 0.6 },
  { path: "/careers/dotnet-fullstack-developer", priority: 0.5 },
  { path: "/careers/nextjs-developer", priority: 0.5 },
  { path: "/careers/enterprise-project-manager", priority: 0.5 },
  { path: "/careers/ui-ux-designer", priority: 0.5 },

  { path: "/services/startup-mvp", priority: 0.8 },
  { path: "/services/mid-market", priority: 0.8 },
  { path: "/services/enterprise-solutions", priority: 0.8 },
  { path: "/shopify-plus-partner", priority: 0.6 },

  { path: "/industries", priority: 0.8, lastModified: "2026-10-15" },
  { path: "/industries/fintech", priority: 0.7, lastModified: "2026-10-15" },
  { path: "/industries/aviation", priority: 0.7, lastModified: "2026-10-15" },
  { path: "/industries/healthcare", priority: 0.7, lastModified: "2026-10-15" },
  { path: "/industries/parking", priority: 0.7, lastModified: "2026-10-16" },
  { path: "/industries/ecommerce", priority: 0.7, lastModified: "2026-10-15" },

  { path: "/insights", priority: 0.9, lastModified: "2026-10-15" },
  { path: "/insights/case-studies", priority: 0.9, lastModified: "2026-10-13" },
  { path: "/insights/blogs", priority: 0.8 },
  { path: "/insights/ai-trends", priority: 0.8 },
  { path: "/insights/ebooks", priority: 0.8, lastModified: "2026-10-15" },

  { path: "/cybersecurity/ai-security", priority: 0.8 },
  { path: "/cybersecurity/application-security", priority: 0.8 },
  { path: "/compliance/dpdp", priority: 0.8 },
  { path: "/compliance/vpat-accessibility", priority: 0.8 },
  { path: "/compliance/vpat-shopify-apps", priority: 0.7 },
  { path: "/cybersecurity/vapt-shopify-apps", priority: 0.7 },

  { path: "/products", priority: 0.7 },
  { path: "/products/recomai", priority: 0.6 },
  { path: "/products/license-plate-recognition", priority: 0.8, lastModified: "2026-10-03" },

  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map(({ path, priority, lastModified }) => ({
    url: `${BASE_URL}${path}`,
    priority,
    ...(lastModified ? { lastModified } : {}),
  }));

  // Every published case study, straight from the listing, so none can be missing or stale.
  const caseStudyEntries = caseStudiesGrid.studies.map((study) => ({
    url: `${BASE_URL}${study.link}`,
    priority: 0.8,
    lastModified: study.modified || study.date,
  }));

  const blogEntries = allBlogs.map((blog) => ({
    url: `${BASE_URL}/insights/blogs/${blog.slug}`,
    priority: 0.7,
    lastModified: blog.isoDate,
  }));

  const trendEntries = allTrends.map((trend) => ({
    url: `${BASE_URL}/insights/ai-trends/${trend.slug}`,
    priority: 0.7,
    lastModified: trend.isoDate,
  }));

  const ebookEntries = allEbooks.map((ebook) => ({
    url: `${BASE_URL}/insights/ebooks/${ebook.slug}`,
    priority: 0.7,
    lastModified: ebook.modifiedIsoDate ?? ebook.isoDate,
  }));

  return [...staticEntries, ...caseStudyEntries, ...blogEntries, ...trendEntries, ...ebookEntries];
}

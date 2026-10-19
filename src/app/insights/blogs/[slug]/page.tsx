import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ContentImage as Image } from '@/components/common/ContentImage';
import { ArrowLeft, Facebook, Linkedin, Twitter } from 'lucide-react';
import { MainLayout } from '@/components/layout';
import { JsonLd } from '@/components/common/JsonLd';
import { readingMinutes } from '@/lib/readingTime';
import { PageOutline } from '@/components/sections/C051_PageOutline';
import { ArticleGrid } from '@/components/articles';
import { CopyLinkButton } from '@/components/pages/insights/CopyLinkButton';
import { buildMetadata } from '@/lib/seo';

import { allBlogs } from '@/data/pages/insights/blogs/blogPageData';
import { getRelatedArticles } from '@/data/pages/insights/relatedInsights';


function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export function generateStaticParams() {
  return allBlogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = allBlogs.find((b) => b.slug === slug);
  if (!blog) return {};

  const canonicalUrl = `https://www.tizora.ai/insights/blogs/${blog.slug}`;
  return buildMetadata({
    title: blog.title,
    description: blog.description,
    image: blog.ogImage ?? blog.image,
    url: canonicalUrl,
    canonical: canonicalUrl,
    type: 'article',
    publishedTime: blog.isoDate || blog.date,
    modifiedTime: blog.modifiedIsoDate || blog.isoDate || blog.date,
    author: blog.author,
    tags: blog.tags,
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = allBlogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const readingTime = readingMinutes({ content: blog.content, faqs: blog.faqs });
  const canonicalUrl = `https://www.tizora.ai/insights/blogs/${blog.slug}`;

  const shareLinks = [
    { name: 'Twitter', icon: Twitter, href: `https://twitter.com/intent/tweet?url=${canonicalUrl}&text=${encodeURIComponent(blog.title)}` },
    { name: 'LinkedIn', icon: Linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${canonicalUrl}` },
    { name: 'Facebook', icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${canonicalUrl}` },
  ];

  const faqs = blog.faqs || [];

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: blog.description,
    image: [
      {
        '@type': 'ImageObject',
        url: blog.ogImage ?? blog.image,
        width: blog.ogImage ? 1200 : undefined,
        height: blog.ogImage ? 630 : undefined,
        caption: blog.imageCaption,
        description: blog.imageAlt,
      },
    ],
    datePublished: blog.isoDate || blog.date,
    dateModified: blog.modifiedIsoDate || blog.isoDate || blog.date,
    author: {
      '@type': blog.author ? 'Person' : 'Organization',
      name: blog.author || 'Tizora',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tizora',
      logo: {
        '@type': 'ImageObject',
        url: 'https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788860642/tizora_new_logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    keywords: (blog.tags || []).join(', '),
  };

  const faqJsonLd = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq: any) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Insights', item: 'https://www.tizora.ai/insights' },
      { '@type': 'ListItem', position: 2, name: 'Blogs', item: 'https://www.tizora.ai/insights/blogs' },
      { '@type': 'ListItem', position: 3, name: blog.title, item: canonicalUrl },
    ],
  };

  const jsonLd = faqJsonLd ? [articleJsonLd, faqJsonLd, breadcrumbJsonLd] : [articleJsonLd, breadcrumbJsonLd];

  return (
    <MainLayout>
      <PageOutline heroSelector="article > div:first-of-type" shiftHero />
      <JsonLd data={jsonLd} />

      <article className="w-full">

        {/* Header: back link, date, title, subtitle — centered */}
        <div className="pt-32 pb-12 lg:pt-40 lg:pb-16 px-5 sm:px-8 lg:px-12 max-w-3xl mx-auto w-full text-center">
          <Link href="/insights/blogs" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-10 text-sm font-medium">
            <ArrowLeft size={16} />
            <span className="uppercase tracking-wider">Back to Blogs</span>
          </Link>

          <div className="text-[12px] font-bold tracking-[0.15em] uppercase text-muted mb-5">
            {blog.date}
          </div>

          <h1 className="text-[34px] sm:text-[44px] lg:text-[52px] font-normal leading-[1.15] tracking-tight text-primary mb-5">
            {blog.title}
          </h1>

          {blog.description && (
            <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed max-w-xl mx-auto">
              {blog.description}
            </p>
          )}
        </div>

        {/* Hero Image */}
        {blog.image && (
          <div className="px-5 sm:px-8 lg:px-12 max-w-6xl mx-auto w-full mb-16 lg:mb-20">
            <figure>
              <div className="relative w-full aspect-video sm:aspect-21/9 rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={blog.image}
                  alt={blog.imageAlt ?? blog.title}
                  title={blog.imageCaption}
                  fill
                  sizes="(min-width: 1024px) 1152px, 100vw"
                  priority
                  className="object-cover"
                />
              </div>
              {blog.imageCaption && (
                <figcaption className="mt-3 text-center text-[13px] leading-relaxed text-muted">
                  {blog.imageCaption}
                </figcaption>
              )}
            </figure>
          </div>
        )}

        {/* Mobile share row */}
        <div className="flex lg:hidden items-center gap-3 px-5 sm:px-8 max-w-6xl mx-auto w-full mb-10">
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-muted">Share</span>
          {shareLinks.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Share on ${s.name}`}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-primary active:border-accent active:text-accent transition-colors shrink-0"
            >
              <s.icon size={15} />
            </a>
          ))}
          <CopyLinkButton url={canonicalUrl} className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-primary active:border-accent active:text-accent transition-colors shrink-0" />
        </div>

        {/* Body: share rail / content / meta sidebar */}
        <div className="px-5 sm:px-8 lg:px-12 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[120px_1fr_260px] gap-10 lg:gap-12 pb-20 lg:pb-28">

          {/* Share rail (desktop) */}
          <div className="hidden lg:flex flex-col gap-4 pt-2">
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-muted mb-1">Share</span>
            {shareLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Share on ${s.name}`}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-primary hover:border-accent hover:text-accent transition-colors"
              >
                <s.icon size={15} />
              </a>
            ))}
            <CopyLinkButton url={canonicalUrl} className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-primary hover:border-accent hover:text-accent transition-colors" />
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-gray max-w-none min-w-0">
            {blog.content.map((block: any, idx: number) => {
              if (block.type === 'paragraph') {
                return (
                  <p key={idx} className="text-[16px] sm:text-[17px] leading-[1.8] text-gray-600 mb-8">
                    {block.text}
                  </p>
                );
              }
              if (block.type === 'heading') {
                return (
                  <h2 key={idx} className="text-[24px] sm:text-[28px] font-medium text-primary mt-4 mb-6">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'image') {
                return (
                  <figure key={idx} className="my-12">
                    <div className="w-full rounded-xl overflow-hidden bg-gray-100">
                      <img
                        src={block.url}
                        alt={block.caption || blog.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    {block.caption && (
                      <figcaption className="text-sm text-center text-gray-500 mt-4">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              if (block.type === 'list') {
                return (
                  <ul key={idx} className="list-none pl-0 mb-8 flex flex-col gap-3">
                    {block.items.map((item: any, i: number) => (
                      <li key={i} className="flex gap-3 text-[16px] sm:text-[17px] leading-[1.8] text-gray-600">
                        <span className="text-accent mt-[2px]">—</span>
                        <span>
                          {item.lead && <strong className="text-primary font-medium">{item.lead} </strong>}
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}

            {/* FAQ section — mirrors the FAQPage structured data above */}
            {faqs.length > 0 && (
              <div className="mt-16 pt-12 border-t border-border">
                <h2 className="text-[22px] sm:text-[26px] font-medium text-primary mb-8">Frequently asked questions</h2>
                <div className="flex flex-col gap-8">
                  {faqs.map((faq: any, idx: number) => (
                    <div key={idx}>
                      <h3 className="text-[16px] sm:text-[17px] font-medium text-primary mb-2">{faq.question}</h3>
                      <p className="text-[15px] sm:text-[16px] leading-[1.75] text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Meta sidebar */}
          <aside className="flex flex-col gap-6 lg:sticky lg:top-28 h-fit">
            <div className="border border-border rounded-2xl p-6">
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-muted block mb-4">Details</span>
              <dl className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-[13.5px]">
                  <dt className="text-muted">Date</dt>
                  <dd className="text-primary font-medium">{blog.date}</dd>
                </div>
                {blog.category && (
                  <div className="flex items-center justify-between text-[13.5px]">
                    <dt className="text-muted">Category</dt>
                    <dd className="text-primary font-medium">{blog.category}</dd>
                  </div>
                )}
                <div className="flex items-center justify-between text-[13.5px]">
                  <dt className="text-muted">Reading</dt>
                  <dd className="text-primary font-medium">{readingTime} Min</dd>
                </div>
              </dl>
            </div>

            {blog.author && (
              <div className="border border-border rounded-2xl p-6">
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-muted block mb-4">Author</span>
                <div className="flex items-center gap-3 mb-3">
                  {blog.authorAvatar ? (
                    <Image src={blog.authorAvatar} alt={blog.author} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-[13px] font-semibold text-primary">
                      {getInitials(blog.author)}
                    </div>
                  )}
                  <div>
                    <div className="text-[14px] font-medium text-primary">{blog.author}</div>
                    {blog.authorRole && (
                      <div className="text-[11px] uppercase tracking-wide text-muted">{blog.authorRole}</div>
                    )}
                  </div>
                </div>
                {blog.authorBio && (
                  <p className="text-[13px] text-muted leading-relaxed">{blog.authorBio}</p>
                )}
              </div>
            )}
          </aside>
        </div>
      </article>

      {/* Related Articles */}
      <div className="border-t border-border pt-12 pb-4 px-5 sm:px-8 lg:px-12 max-w-6xl mx-auto w-full">
        <h2 className="text-[22px] sm:text-[26px] font-medium text-primary mb-2">Related Articles</h2>
      </div>
      <ArticleGrid
        articles={getRelatedArticles(`blog-${blog.id}`, blog.category)}
        className="pt-2 pb-16 sm:pb-24 px-5 sm:px-8 lg:px-12 max-w-6xl mx-auto w-full"
      />
    </MainLayout>
  );
}

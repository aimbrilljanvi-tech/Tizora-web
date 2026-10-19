import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MainLayout } from '@/components/layout/MainLayout';
import { JsonLd } from '@/components/common/JsonLd';
import {
  HeroSplit,
  InShort,
  SummaryMeta,
  BenefitGrid,
  CardGrid,
  AccordionFAQ,
  BannerCTA,
} from '@/components/sections';
import { ProcessUI } from '@/components/sections/C056_ProcessUI';
import { Disclosure } from '@/components/sections/C055_Disclosure';
import { buildMetadata } from '@/lib/seo';
import { allEbooks, getEbook, EBOOKS_URL } from '@/data/pages/insights/ebooks/ebooksPageData';

const SITE = 'https://www.tizora.ai';

export function generateStaticParams() {
  return allEbooks.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const book = getEbook(slug);
  if (!book) return {};
  return buildMetadata({
    title: `${book.title} (Ebook)`,
    description: book.description,
    url: `${EBOOKS_URL}/${book.slug}`,
    image: book.ogImage,
    type: 'article',
    publishedTime: book.isoDate,
    modifiedTime: book.modifiedIsoDate ?? book.isoDate,
    author: book.author,
    tags: book.keywords,
  });
}

export default async function EbookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = getEbook(slug);
  if (!book) notFound();

  const url = `${EBOOKS_URL}/${book.slug}`;
  const pdfUrl = `${SITE}${book.pdf.url}`;
  const downloadLabel = `Download the ebook (PDF, ${book.pdf.pages} pages)`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Book',
      '@id': `${url}#book`,
      name: book.title,
      alternativeHeadline: book.subtitle,
      description: book.description,
      url,
      bookFormat: 'https://schema.org/EBook',
      numberOfPages: book.pdf.pages,
      inLanguage: 'en-US',
      datePublished: book.isoDate,
      dateModified: book.modifiedIsoDate ?? book.isoDate,
      image: { '@type': 'ImageObject', url: book.ogImage, width: 1200, height: 630, description: book.cardImageAlt },
      author: { '@type': 'Organization', name: 'Tizora', url: SITE },
      publisher: { '@type': 'Organization', name: 'Tizora', url: SITE },
      about: book.topic,
      keywords: book.keywords.join(', '),
      audience: { '@type': 'Audience', audienceType: book.audience },
      encoding: { '@type': 'MediaObject', contentUrl: pdfUrl, encodingFormat: 'application/pdf' },
      hasPart: book.chapters.map((c, i) => ({ '@type': 'Chapter', position: i + 1, name: c.title, abstract: c.summary })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Insights', item: `${SITE}/insights` },
        { '@type': 'ListItem', position: 3, name: 'Ebooks', item: EBOOKS_URL },
        { '@type': 'ListItem', position: 4, name: book.title, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: book.faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    },
  ];

  return (
    <MainLayout>
      <JsonLd data={jsonLd} />

      <HeroSplit
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: 'Ebooks', href: '/insights/ebooks' },
          { label: book.title },
        ]}
        label={`EBOOK · ${book.topic.toUpperCase()}`}
        title={book.title}
        description={book.subtitle}
        buttonText={downloadLabel}
        buttonHref={book.pdf.url}
        secondaryButtonText="Talk to our team"
        secondaryButtonHref="/contact"
        imageSrc={book.heroImage}
        imageAlt={book.heroImageAlt}
        compactTitle
      />

      <InShort text={book.inShort} />

      <SummaryMeta
        data={{
          title: 'Who this ebook is for',
          paragraph: `${book.audience}.`,
          items: [
            { label: 'Format', value: `PDF, ${book.pdf.pages} pages (${book.pdf.size})` },
            { label: 'Topic', value: book.topic },
            { label: 'Chapters', value: String(book.chapters.length) },
            { label: 'Published', value: book.date },
            { label: 'Written by', value: 'The Tizora engineering team' },
          ],
        }}
      />

      <BenefitGrid
        bordered
        data={{
          title: 'What you will learn',
          items: book.learn.map((l, i) => ({ number: String(i + 1).padStart(2, '0'), title: l.title, description: [l.text] })),
        }}
      />

      <div className="bg-background">
        <ProcessUI
          heading="What is inside"
          description={`${book.chapters.length} chapters, each with a short summary below. The full text is in the PDF.`}
          maxVisible={3}
          steps={book.chapters.map((c, i) => ({ label: `Chapter ${String(i + 1).padStart(2, '0')}`, title: c.title, description: c.summary }))}
        />
      </div>

      {book.related.length > 0 && (
        <CardGrid
          heading="See it in practice"
          studies={book.related.map((r) => ({
            id: r.href,
            type: 'standard' as const,
            title: r.title,
            description: r.description,
            image: r.image,
            imageAlt: r.imageAlt,
            bgColor: 'bg-[#0d3a3a]',
            link: r.href,
            linkLabel: r.linkLabel,
          }))}
        />
      )}

      <AccordionFAQ tagTitle="FAQ" heading={`${book.title}: FAQs`} questions={book.faqs.map((f) => ({ q: f.question, a: f.answer }))} hideContactCta />

      {book.notice && <Disclosure text={book.notice} />}

      <BannerCTA
        data={{
          heading: `Get "${book.title}"`,
          description: `${book.subtitle}. PDF, ${book.pdf.pages} pages.`,
          buttonText: 'Download the PDF',
          buttonLink: book.pdf.url,
        }}
      />
    </MainLayout>
  );
}

import type { Metadata } from "next";
import { LicensePlateRecognitionContent } from "@/components/pages/products/LicensePlateRecognitionContent";
import { JsonLd } from "@/components/common/JsonLd";
import { LPR_FAQS, LPR_URL, LPR_SEO, LPR_GITHUB_URL, LPR_MODIFIED } from "@/data/pages/products/lprData";

export const metadata: Metadata = {
  title: { absolute: LPR_SEO.title },
  description: LPR_SEO.description,
  keywords: [
    "license plate recognition",
    "ALPR",
    "ANPR",
    "automatic license plate recognition",
    "automatic number plate recognition",
    "LPR software",
    "license plate reader",
    "license plate recognition API",
    "license plate recognition online",
    "license plate recognition demo",
    "number plate recognition",
    "license plate detection",
    "plate recognition OCR",
    "ALPR parking system",
    "open source license plate recognition",
    "Tizora LPR",
  ],
  applicationName: "Tizora AI License Plate Recognition Demo",
  authors: [{ name: "Tizora", url: "https://www.tizora.ai" }],
  creator: "Tizora",
  publisher: "Tizora",
  alternates: { canonical: LPR_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: LPR_URL,
    siteName: "Tizora",
    locale: "en_US",
    title: LPR_SEO.title,
    description: LPR_SEO.description,
    images: [{ url: LPR_SEO.ogImage, width: 1200, height: 630, alt: LPR_SEO.ogImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: LPR_SEO.title,
    description: LPR_SEO.description,
    images: [{ url: LPR_SEO.ogImage, alt: LPR_SEO.ogImageAlt }],
  },
};

const ORG_ID = "https://www.tizora.ai/#organization";

// One graph: the page, the web app it hosts, the open-source code behind it, breadcrumbs and FAQ.
// Every FAQ answer is also rendered in the page HTML, so the schema matches visible content.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${LPR_URL}#webpage`,
      url: LPR_URL,
      name: LPR_SEO.title,
      description: LPR_SEO.description,
      inLanguage: "en",
      dateModified: LPR_MODIFIED,
      isPartOf: { "@type": "WebSite", name: "Tizora", url: "https://www.tizora.ai" },
      primaryImageOfPage: { "@type": "ImageObject", url: LPR_SEO.ogImage, width: 1200, height: 630, caption: LPR_SEO.ogImageAlt },
      breadcrumb: { "@id": `${LPR_URL}#breadcrumb` },
      mainEntity: { "@id": `${LPR_URL}#app` },
    },
    {
      "@type": "WebApplication",
      "@id": `${LPR_URL}#app`,
      name: "Tizora License Plate Recognition (ALPR / ANPR) Demo",
      alternateName: ["ALPR demo", "ANPR demo", "License plate reader online"],
      url: LPR_URL,
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Any (web browser)",
      browserRequirements: "Requires JavaScript",
      isAccessibleForFree: true,
      description:
        "Online AI license plate recognition demo that detects and reads vehicle number plates from an uploaded image.",
      featureList: [
        "Detects every license plate in a photo",
        "Reads plate text with OCR",
        "Detection confidence score per plate",
        "Cropped plate image and annotated result photo",
        "JPG, PNG and WEBP uploads up to 15 MB",
      ],
      image: LPR_SEO.ogImage,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      publisher: { "@type": "Organization", "@id": ORG_ID, name: "Tizora", url: "https://www.tizora.ai" },
      isBasedOn: { "@id": `${LPR_URL}#code` },
    },
    {
      "@type": "SoftwareSourceCode",
      "@id": `${LPR_URL}#code`,
      name: "License Plate Recognition API for Parking",
      codeRepository: LPR_GITHUB_URL,
      programmingLanguage: "Python",
      author: { "@id": ORG_ID },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${LPR_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tizora.ai" },
        { "@type": "ListItem", position: 2, name: "Products", item: "https://www.tizora.ai/products" },
        { "@type": "ListItem", position: 3, name: "License Plate Recognition", item: LPR_URL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${LPR_URL}#faq`,
      mainEntity: LPR_FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};


export default function LprDemoPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <LicensePlateRecognitionContent />
    </>
  );
}

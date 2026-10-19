import type { Metadata } from "next";
import Link from "next/link";
import { CardGrid } from "@/components/sections/C004_CardGrid";
import { MainLayout } from "@/components/layout/MainLayout";
import { JsonLd } from "@/components/common/JsonLd";

const URL = "https://www.tizora.ai/products";

export const metadata: Metadata = {
  title: "AI Products | ReCom AI & License Plate Recognition",
  description:
    "Tizora's AI products: ReCom AI, a 24/7 AI sales agent for eCommerce, and an open-source ALPR / ANPR license plate recognition API with a live demo.",
  keywords: [
    "Tizora products",
    "AI products",
    "AI sales agent",
    "ReCom AI",
    "license plate recognition",
    "ALPR",
    "ANPR",
    "computer vision API",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    url: URL,
    siteName: "Tizora",
    title: "AI Products | ReCom AI & License Plate Recognition",
    description:
      "AI products built by Tizora: an AI sales agent for eCommerce and an open-source license plate recognition API.",
    images: [{ url: "https://res.cloudinary.com/cjzo6qye/image/upload/w_1200,h_630,c_fill,q_80/v1788860885/og.png", width: 1200, height: 630 }],
  },
};

const PRODUCTS = [
  {
    id: "recomai",
    type: "standard" as const,
    title: "ReCom AI",
    description:
      "A 24/7 AI sales agent that helps shoppers discover, engage and buy across Shopify, WordPress, Instagram and Facebook.",
    industry: "AI for eCommerce",
    image: "/images/case_studies/recomai.gif",
    bgColor: "bg-primary",
    link: "/products/recomai",
  },
  {
    id: "license-plate-recognition",
    type: "standard" as const,
    title: "License Plate Recognition (ALPR / ANPR)",
    description:
      "An open-source AI API that detects and reads vehicle plates for parking, tolling, fleet and access control. Try the free live demo.",
    industry: "Computer vision",
    image: "/images/case_studies/ipr_case_study_banner.png",
    bgColor: "bg-surface",
    link: "/products/license-plate-recognition",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Tizora AI Products",
    url: URL,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.title,
        url: `https://www.tizora.ai${p.link}`,
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tizora.ai" },
      { "@type": "ListItem", position: 2, name: "Products", item: URL },
    ],
  },
];

export default function ProductsPage() {
  return (
    <MainLayout>
      <JsonLd data={structuredData} />
      <main className="overflow-x-clip bg-[#f6f6f6]">
        <section className="relative bg-gradient-to-b from-[#003640] to-[#00252c] pb-16 pt-28 text-white sm:pb-20 sm:pt-36">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-6 text-xs text-white/60">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-white">Home</Link>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-white/90">Products</li>
              </ol>
            </nav>
            <h1 className="max-w-3xl text-[34px] font-normal leading-[1.08] tracking-tight sm:text-[52px] lg:text-[64px]">
              AI products built to ship.
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/70 sm:text-[18px]">
              Production-ready AI from Tizora, from conversational commerce to
              computer vision. Each product grew out of problems we solved for
              clients, and each is used in production today.
            </p>
          </div>
        </section>

        <CardGrid
          tagTitle="Our products"
          heading="Explore what we've built."
          studies={PRODUCTS}
          className="bg-background pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-24"
        />

        <section className="bg-background pb-20 sm:pb-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-10 border-t border-border/60 pt-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-[26px] font-normal leading-[1.2] tracking-tight text-primary sm:text-[32px]">
                  From product to production
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-[16px]">
                  ReCom AI answers shoppers&apos; questions, recommends products and guides them to checkout on
                  Shopify, WordPress, Instagram and Facebook. Our license plate recognition API reads vehicle plates
                  for parking, tolling, fleet and access control, and you can try it in the browser with the live demo.
                </p>
              </div>
              <div>
                <h2 className="text-[26px] font-normal leading-[1.2] tracking-tight text-primary sm:text-[32px]">
                  Need something custom?
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-[16px]">
                  The same team builds custom AI products. See how we made{" "}
                  <Link href="/insights/case-studies/parking/ai-lpr-parking-enforcement" className="text-accent underline underline-offset-4">
                    license plate recognition work in snow, mud and glare
                  </Link>{" "}
                  for a parking enforcement app, browse{" "}
                  <Link href="/insights/case-studies" className="text-accent underline underline-offset-4">
                    all our case studies
                  </Link>
                  , or{" "}
                  <Link href="/contact" className="text-accent underline underline-offset-4">
                    talk to our team
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

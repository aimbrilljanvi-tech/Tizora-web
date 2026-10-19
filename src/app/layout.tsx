import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Suspense } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { RouteProgressBar } from "@/components/common/RouteProgressBar";
import "./globals.css";

const SITE_URL = "https://www.tizora.ai";
const OG_IMAGE =
  "https://res.cloudinary.com/cjzo6qye/image/upload/w_1200,h_630,c_fill,q_80/v1788860885/og.png";
const DEFAULT_DESCRIPTION =
  "Tizora builds AI products end to end — architecture, engineering, launch and ongoing support.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tizora | AI Product Engineering",
    template: "%s | Tizora",
  },
  description: DEFAULT_DESCRIPTION,
  icons: {
    icon: "https://res.cloudinary.com/cjzo6qye/image/upload/v1789733398/Tizora_-_Logo-Sel-H1_icon.png",
  },
  openGraph: {
    type: "website",
    title: "Tizora | AI Product Engineering",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tizora | AI Product Engineering",
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#003640",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Nearly every image on the site is served from Cloudinary -- opening
            the connection early shaves the DNS/TLS handshake off the first
            image request instead of paying for it inline. */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/cjzo6qye/video/upload/so_0,q_auto/v1788515314/tizora-bg.jpg"
        />
        {/* The navbar logo is only referenced inside a React component, so the
            browser's preload scanner can't discover it until after JS renders —
            preloading it here means it starts fetching immediately instead. */}
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/cjzo6qye/image/upload/e_trim/v1788875430/Tizora_-_Logo-Sel-F-Typo.png"
        />
        {/* Only the weights actually used in the CSS (font-light/normal/medium/semibold/bold,
            plus the one italic-600 usage on the services list "when to use" line) --
            the full family ships 14 weight/style variants and most of that was
            dead weight blocking first paint. */}
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@300,400,500,600,601,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Suspense fallback={null}>
          <RouteProgressBar />
        </Suspense>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KPEP21L6VX"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KPEP21L6VX');
          `}
        </Script>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

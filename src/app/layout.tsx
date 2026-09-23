import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBackgroundLoader from "@/components/PageBackgroundLoader";
import ScrollProgress from "@/components/ScrollProgress";
import BookingProvider from "@/components/BookingProvider";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://www.ahmad-hassan.dev";
const SITE_NAME = "Ahmad Hassan";
const SITE_DESCRIPTION =
  "Ahmad Hassan is a full-stack developer building fast, reliable web applications with React, Next.js, and Node.js — from internal business platforms to client products.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ahmad Hassan — Full-Stack Developer",
    template: "%s | Ahmad Hassan",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Ahmad Hassan",
    "full-stack developer",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "web developer portfolio",
  ],
  authors: [{ name: "Ahmad Hassan", url: SITE_URL }],
  creator: "Ahmad Hassan",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Ahmad Hassan — Full-Stack Developer",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/portfolio-image.png",
        width: 637,
        height: 578,
        alt: "Portrait of Ahmad Hassan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Hassan — Full-Stack Developer",
    description: SITE_DESCRIPTION,
    images: ["/portfolio-image.png"],
  },
  icons: {
    icon: "/portfolio--image.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a09",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ahmad Hassan",
  url: SITE_URL,
  jobTitle: "Full-Stack Developer",
  description: SITE_DESCRIPTION,
  image: `${SITE_URL}/portfolio-image.png`,
  sameAs: [
    "https://github.com/ahmad129096",
    "https://www.linkedin.com/in/ahmad-hassan-792619140/",
  ],
  knowsAbout: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Framer Motion",
    "WordPress",
    "React Native",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

const THEME_INIT = `
(function () {
  try {
    if (localStorage.getItem("theme") === "light") {
      document.documentElement.classList.remove("dark");
    }
  } catch (e) {}
})();
`;

const CAL_LOADER = `
(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "30min", {origin: "https://cal.com"});
Cal("init", "15min", {origin: "https://cal.com"});
Cal("preload", {calLink: "ahmadhassan/30min"});
Cal("preload", {calLink: "ahmadhassan/15min"});
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{ __html: THEME_INIT }}
        />
        <link rel="preconnect" href="https://cal.com" />
        <link rel="preconnect" href="https://app.cal.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`page bg-background text-text ${headingFont.variable} ${bodyFont.variable}`}
      >
        <PageBackgroundLoader />
        <ScrollProgress />
        <div
          aria-hidden
          className="grain-overlay pointer-events-none fixed inset-0 z-[95] opacity-[0.03] mix-blend-overlay dark:opacity-[0.05]"
        />
        <SmoothScroll />
        <BookingProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </BookingProvider>
        <CustomCursor />
        <Preloader />
        <Script
          id="cal-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: CAL_LOADER }}
        />
      </body>
    </html>
  );
}

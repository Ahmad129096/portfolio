import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import PageBackgroundLoader from "@/components/PageBackgroundLoader";
import ScrollProgress from "@/components/ScrollProgress";

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

export const metadata: Metadata = {
  title: "Ahmad Hassan",
  description: "Full-stack developer crafting polished digital experiences",
};

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cal.com" />
        <link rel="preconnect" href="https://app.cal.com" />
      </head>
      <body
        className={`page bg-background text-text ${headingFont.variable} ${bodyFont.variable}`}
      >
        <PageBackgroundLoader />
        <ScrollProgress />
        <Header />
        {children}
        <Script
          id="cal-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: CAL_LOADER }}
        />
      </body>
    </html>
  );
}

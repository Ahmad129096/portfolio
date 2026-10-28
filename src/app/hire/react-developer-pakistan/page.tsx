import type { Metadata } from "next";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const SITE_URL = "https://www.ahmad-hassan.dev";

export const metadata: Metadata = {
  title: "React Developer Pakistan | Ahmad Hassan",
  description:
    "Hire a React.js Developer in Pakistan. Ahmad Hassan builds fast, modern React & Next.js apps for startups - from MVPs to production-ready products.",
  keywords: [
    "react developer pakistan",
    "react js developer pakistan",
    "hire react developer pakistan",
    "nextjs developer pakistan",
    "frontend developer pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/hire/react-developer-pakistan`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/hire/react-developer-pakistan`,
    title: "React Developer Pakistan | Ahmad Hassan",
    description:
      "Hire a React.js Developer in Pakistan. I build modern, performant React & Next.js apps for startups.",
    images: [
      {
        url: "/portfolio-image.png",
        width: 1122,
        height: 1402,
        alt: "Ahmad Hassan - React Developer in Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "React Developer Pakistan | Ahmad Hassan",
    description:
      "Hire a React.js Developer in Pakistan. Modern React & Next.js for startups.",
    images: ["/portfolio-image.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "React.js Development Services in Pakistan",
  serviceType: "Frontend Web Development",
  provider: {
    "@type": "Person",
    name: "Ahmad Hassan",
    url: SITE_URL,
    jobTitle: "React Developer",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
    },
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
  },
  areaServed: "Pakistan",
  description:
    "React.js and Next.js development services for startups and businesses in Pakistan.",
};

export default function ReactDeveloperPakistan() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-muted">
              Hire in Pakistan
            </p>
            <h1 className="mb-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              React Developer <span className="text-primary">Pakistan</span>
            </h1>
            <p className="mb-8 text-lg text-muted sm:text-xl">
              I&apos;m Ahmad Hassan, a React.js & Next.js Developer in Pakistan building fast, interactive, and
              scalable frontend experiences for startups. Clean UI, great UX, and production-ready code.
            </p>
            <div className="mb-12 flex flex-wrap items-center gap-4">
              <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                Hire a React Developer
                <HiArrowRight />
              </Link>
              <Link href="/#work" className="btn-secondary inline-flex items-center gap-2">
                View Projects
                <HiArrowRight />
              </Link>
            </div>

            <section className="mb-12">
              <h2 className="mb-4 text-3xl font-semibold">React.js Development Services</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "React.js Apps", desc: "Custom React apps built with modern hooks, context, and best practices." },
                  { title: "Next.js Development", desc: "SEO-friendly, fast-loading sites with SSR, SSG, and App Router." },
                  { title: "UI/UX Implementation", desc: "Pixel-perfect, responsive interfaces that look great on all devices." },
                  { title: "Performance Optimization", desc: "Faster load times, smooth interactions, and optimized bundles." },
                ].map((item) => (
                  <div key={item.title} className="glass-card p-5">
                    <h3 className="mb-2 text-lg font-medium">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-3xl font-semibold">Why Choose Me as Your React Developer in Pakistan</h2>
              <p className="mb-4 text-muted">
                With 5+ years of experience building React applications, I help Pakistani businesses turn ideas into
                fast, modern web apps that users love and that convert.
              </p>
              <div className="grid gap-3">
                {[
                  "5+ years of React.js & Next.js experience",
                  "Proven track record with data-heavy dashboards",
                  "Clean, maintainable component architecture",
                  "Mobile-first responsive design",
                  "Available for remote work across Pakistan",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3 rounded-xl border border-primary/20 p-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <p className="text-text">{point}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="text-center">
              <div className="glass-card mx-auto max-w-2xl p-8">
                <h2 className="mb-4 text-3xl font-semibold">Need a React Developer in Pakistan?</h2>
                <p className="mb-6 text-muted">
                  Let&apos;s build your React app. I&apos;m ready to help with your next project.
                </p>
                <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                  Get Started
                  <HiArrowRight />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

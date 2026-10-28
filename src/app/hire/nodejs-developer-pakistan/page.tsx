import type { Metadata } from "next";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const SITE_URL = "https://www.ahmad-hassan.dev";

export const metadata: Metadata = {
  title: "Node.js Developer Pakistan | Ahmad Hassan",
  description:
    "Hire a Node.js Developer in Pakistan. Ahmad Hassan builds robust REST APIs, backends, and server-side apps for startups using Node.js, Express, and PostgreSQL.",
  keywords: [
    "nodejs developer pakistan",
    "node js developer pakistan",
    "backend developer pakistan",
    "api developer pakistan",
    "express js developer pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/hire/nodejs-developer-pakistan`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/hire/nodejs-developer-pakistan`,
    title: "Node.js Developer Pakistan | Ahmad Hassan",
    description:
      "Hire a Node.js Developer in Pakistan. I build scalable APIs and backends for startups.",
    images: [
      {
        url: "/portfolio-image.png",
        width: 1122,
        height: 1402,
        alt: "Ahmad Hassan - Node.js Developer in Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Node.js Developer Pakistan | Ahmad Hassan",
    description:
      "Hire a Node.js Developer in Pakistan. Scalable APIs & backends.",
    images: ["/portfolio-image.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Node.js Backend Development Services in Pakistan",
  serviceType: "Backend Web Development",
  provider: {
    "@type": "Person",
    name: "Ahmad Hassan",
    url: SITE_URL,
    jobTitle: "Node.js Developer",
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
    "Node.js, Express.js API development and backend services for startups and businesses in Pakistan.",
};

export default function NodejsDeveloperPakistan() {
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
              Node.js Developer <span className="text-primary">Pakistan</span>
            </h1>
            <p className="mb-8 text-lg text-muted sm:text-xl">
              I&apos;m Ahmad Hassan, a Node.js Developer in Pakistan building fast, secure, and scalable REST
              APIs, backends, and server-side logic for startups. Clean architecture that scales with your business.
            </p>
            <div className="mb-12 flex flex-wrap items-center gap-4">
              <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                Hire a Node.js Developer
                <HiArrowRight />
              </Link>
              <Link href="/case-studies/accounts-management-system" className="btn-secondary inline-flex items-center gap-2">
                View Backend Work
                <HiArrowRight />
              </Link>
            </div>

            <section className="mb-12">
              <h2 className="mb-4 text-3xl font-semibold">Node.js Backend Services</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "REST API Development", desc: "Robust, well-documented APIs built with Node.js & Express." },
                  { title: "Database Design", desc: "Efficient PostgreSQL schemas with proper indexing and relationships." },
                  { title: "Authentication & Security", desc: "JWT, role-based access, and secure authentication flows." },
                  { title: "Business Logic APIs", desc: "Complex workflows like ledgers, reports, and automated processes." },
                ].map((item) => (
                  <div key={item.title} className="glass-card p-5">
                    <h3 className="mb-2 text-lg font-medium">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-3xl font-semibold">Why Hire Me as Your Node.js Developer in Pakistan</h2>
              <div className="grid gap-3">
                {[
                  "Experience with data-heavy, transaction-based systems",
                  "Optimized PostgreSQL queries for speed",
                  "Clean, scalable backend architecture",
                  "Proven results - cut reconciliation from 3 days to afternoon",
                  "Full stack capability - can handle frontend + backend",
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
                <h2 className="mb-4 text-3xl font-semibold">Need a Node.js Backend Developer?</h2>
                <p className="mb-6 text-muted">
                  Let&apos;s build a robust API or backend for your Pakistani startup.
                </p>
                <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                  Discuss Your API Needs
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

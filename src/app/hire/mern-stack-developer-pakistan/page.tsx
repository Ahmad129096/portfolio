import type { Metadata } from "next";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const SITE_URL = "https://www.ahmad-hassan.dev";

export const metadata: Metadata = {
  title: "MERN Stack Developer Pakistan | Ahmad Hassan",
  description:
    "Hire a MERN Stack Developer in Pakistan. Ahmad Hassan builds fast, scalable React, Node.js, Express & MongoDB/Postgres apps for startups with real business results.",
  keywords: [
    "mern stack developer pakistan",
    "mern developer pakistan",
    "hire mern stack developer pakistan",
    "full stack developer pakistan",
    "react node developer pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/hire/mern-stack-developer-pakistan`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/hire/mern-stack-developer-pakistan`,
    title: "MERN Stack Developer Pakistan | Ahmad Hassan",
    description:
      "Hire a MERN Stack Developer in Pakistan. I build production-ready React, Node.js, and database-driven apps for Pakistani startups.",
    images: [
      {
        url: "/portfolio-image.png",
        width: 1122,
        height: 1402,
        alt: "Ahmad Hassan - MERN Stack Developer in Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MERN Stack Developer Pakistan | Ahmad Hassan",
    description:
      "Hire a MERN Stack Developer in Pakistan. React, Node.js, Express, PostgreSQL/MongoDB for startups.",
    images: ["/portfolio-image.png"],
  },
};

const faqs = [
  {
    q: "Why hire a MERN Stack developer in Pakistan?",
    a: "Pakistan has a strong pool of experienced developers with great English communication. Hiring locally or remotely gives you access to senior-level full stack talent at competitive rates without compromising on quality.",
  },
  {
    q: "What tech do you use as a MERN Stack developer?",
    a: "I work with React, Next.js, Node.js, Express, PostgreSQL, and MongoDB. I pick the right database based on your data model - not just what’s trendy.",
  },
  {
    q: "Can you build an MVP for my Pakistani startup?",
    a: "Yes. I focus on building lean MVPs that are production-ready from day one - auth, roles, payments, dashboards, and APIs built with scalability in mind.",
  },
  {
    q: "Do you work remotely with clients across Pakistan?",
    a: "Yes, I work remotely with startups across Lahore, Karachi, Islamabad, and all of Pakistan. I’m available for both short-term MVP builds and long-term product work.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "MERN Stack Development Services in Pakistan",
  serviceType: "Web Application Development",
  provider: {
    "@type": "Person",
    name: "Ahmad Hassan",
    url: SITE_URL,
    jobTitle: "Full Stack MERN Developer",
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
    "Full stack MERN (MongoDB, Express, React, Node.js) development services for startups and businesses in Pakistan.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function MernStackDeveloperPakistan() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-muted">
              Hire in Pakistan
            </p>
            <h1 className="mb-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              MERN Stack Developer <span className="text-primary">Pakistan</span>
            </h1>
            <p className="mb-8 text-lg text-muted sm:text-xl">
              I&apos;m Ahmad Hassan, a Full Stack MERN Stack Developer based in Pakistan helping startups build
              fast, secure, and scalable web apps with React, Node.js, Express, and the right database for your
              product.
            </p>
            <div className="mb-12 flex flex-wrap items-center gap-4">
              <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                Hire Me For Your Project
                <HiArrowRight />
              </Link>
              <Link href="/#case-studies" className="btn-secondary inline-flex items-center gap-2">
                View Case Studies
                <HiArrowRight />
              </Link>
            </div>

            <section className="mb-12">
              <h2 className="mb-4 text-3xl font-semibold">Why Hire Me As Your MERN Stack Developer in Pakistan</h2>
              <p className="mb-4 text-muted">
                Pakistani startups need developers who can take an idea from wireframe to production without
                over-engineering. I focus on clean architecture, performance, and business logic that actually
                matters.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Production-Ready Code", desc: "Built for scale, with proper auth, validation, and error handling." },
                  { title: "Fast Delivery", desc: "Lean MVPs delivered quickly without cutting corners on core functionality." },
                  { title: "Data-Heavy Expertise", desc: "Experience building dashboards that handle 100+ records in under 2 seconds." },
                  { title: "Business-Focused", desc: "I solve business problems, not just write code. From reconciliation to reporting." },
                ].map((item) => (
                  <div key={item.title} className="glass-card p-5">
                    <h3 className="mb-2 text-lg font-medium">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-3xl font-semibold">MERN Stack Services I Offer</h2>
              <div className="grid gap-4">
                {[
                  "MERN Stack Web App Development",
                  "React.js & Next.js Frontend Development",
                  "Node.js & Express.js API Development",
                  "REST & JSON API Design",
                  "PostgreSQL & MongoDB Database Design",
                  "Admin Dashboards & Internal Tools",
                  "Authentication, RBAC & User Management",
                  "Third-Party API Integrations",
                ].map((service) => (
                  <div key={service} className="flex items-center gap-3 rounded-xl border border-primary/20 p-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <p className="text-text">{service}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-3xl font-semibold">Recent Work</h2>
              <p className="mb-6 text-muted">
                Real projects with measurable results - from cutting reconciliation time from 3 days to an afternoon,
                to dashboards rendering 100+ records in under 2 seconds.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Link href="/case-studies/reilitics" className="glass-card group p-5 transition hover:border-primary/40">
                  <h3 className="mb-2 text-xl font-medium transition group-hover:text-primary">Reilitics</h3>
                  <p className="mb-3 text-sm text-muted">
                    Data-dense property comparables dashboard rendering 100+ records in under 2 seconds.
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary">
                    View Case Study <HiArrowRight className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
                <Link href="/case-studies/accounts-management-system" className="glass-card group p-5 transition hover:border-primary/40">
                  <h3 className="mb-2 text-xl font-medium transition group-hover:text-primary">Accounts Management System</h3>
                  <p className="mb-3 text-sm text-muted">
                    Consolidated accounts platform that cut month-end reconciliation from 3 days to a single afternoon.
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary">
                    View Case Study <HiArrowRight className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 text-3xl font-semibold">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="glass-card p-5">
                    <h3 className="mb-2 text-lg font-medium">{faq.q}</h3>
                    <p className="text-muted">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="text-center">
              <div className="glass-card mx-auto max-w-2xl p-8">
                <h2 className="mb-4 text-3xl font-semibold">Ready to Hire a MERN Stack Developer in Pakistan?</h2>
                <p className="mb-6 text-muted">
                  Let&apos;s discuss your project. Tell me about your startup, MVP idea, or product you need built.
                </p>
                <Link href="/#contact" className="btn-primary inline-flex items-center gap-2">
                  Start Your Project
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

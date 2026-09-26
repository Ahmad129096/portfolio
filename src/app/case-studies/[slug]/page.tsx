import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HiArrowLeft, HiArrowUpRight } from "react-icons/hi2";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import BookCallButton from "@/components/BookCallButton";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies, getCaseStudy } from "@/content/case-studies";

const SITE_URL = "https://www.ahmad-hassan.dev";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

type Params = { params: { slug: string } };

export function generateMetadata({ params }: Params): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return {};

  const url = `/case-studies/${study.slug}`;

  return {
    title: `${study.title} Case Study`,
    description: study.summary,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: `${study.title} Case Study`,
      description: study.summary,
      images: [{ url: study.cover, alt: study.coverAlt }],
    },
  };
}

/**
 * One case study: problem, approach, outcome. Static-generated from the
 * content module, so adding a study is adding an object, no page code.
 */
export default function CaseStudyPage({ params }: Params) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const others = caseStudies.filter((s) => s.slug !== study.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${study.title} Case Study`,
    description: study.summary,
    image: `${SITE_URL}${study.cover}`,
    author: {
      "@type": "Person",
      name: "Ahmad Hassan",
      url: SITE_URL,
    },
  };

  return (
    <div className="container mx-auto px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Reveal>
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
        >
          <HiArrowLeft aria-hidden /> All case studies
        </Link>
      </Reveal>

      {/* ── Header ─────────────────────────────────────────────── */}
      <header className="mt-8 max-w-3xl">
        <Reveal>
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted">
            {study.category}
          </p>
        </Reveal>
        <SplitReveal as="h1" className="h1" trigger="load" delay={0.1}>
          {study.title}
        </SplitReveal>
        <Reveal delay={0.15}>
          <p className="text-lg leading-8 text-muted">{study.summary}</p>
        </Reveal>

        <Reveal delay={0.2} className="mt-8">
          <dl className="glass-panel grid gap-6 p-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">
                Role
              </dt>
              <dd className="mt-1 font-heading text-sm font-semibold text-text">
                {study.role}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">
                Timeline
              </dt>
              <dd className="mt-1 font-heading text-sm font-semibold text-text">
                {study.timeline}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">
                Stack
              </dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {study.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-overlay/15 px-2.5 py-1 text-[11px] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>
      </header>

      {/* ── Cover ──────────────────────────────────────────────── */}
      <Reveal delay={0.1} className="mt-10">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-overlay/10">
          <Image
            src={study.cover}
            alt={study.coverAlt}
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </Reveal>

      {/* ── Problem ────────────────────────────────────────────── */}
      <section className="mt-16 max-w-3xl">
        <SplitReveal as="h2" className="h2">
          The problem
        </SplitReveal>
        <Reveal>
          <p className="text-lg leading-8">{study.problem}</p>
        </Reveal>
      </section>

      {/* ── Approach ───────────────────────────────────────────── */}
      <section className="mt-16 max-w-3xl">
        <SplitReveal as="h2" className="h2">
          The approach
        </SplitReveal>
        <ol className="mt-2 space-y-6">
          {study.steps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 0.05} className="glass-card flex gap-5 p-6">
                <span className="font-heading text-sm font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-text">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-7">{step.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Outcome ────────────────────────────────────────────── */}
      <section className="mt-16 max-w-3xl">
        <SplitReveal as="h2" className="h2">
          The outcome
        </SplitReveal>
        <Reveal>
          <p className="text-lg leading-8">{study.outcome}</p>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {study.metrics.map((metric, index) => (
            <Reveal
              key={metric.label}
              delay={index * 0.05}
              className="glass-card p-6"
            >
              <div className="font-heading text-3xl font-semibold text-accent">
                {metric.value}
              </div>
              <div className="mt-1 text-sm text-muted">{metric.label}</div>
            </Reveal>
          ))}
        </div>
        {study.liveUrl && (
          <Reveal delay={0.1} className="mt-6">
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Visit live site
              <HiArrowUpRight aria-hidden />
            </a>
          </Reveal>
        )}
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <Reveal className="mt-16 max-w-3xl">
        <div className="glass-panel flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-text">
              Want results like this?
            </h2>
            <p className="mt-1 text-sm">
              Book a call and let&apos;s talk about your project.
            </p>
          </div>
          <BookCallButton />
        </div>
      </Reveal>

      {/* ── More case studies ──────────────────────────────────── */}
      <section className="mt-16">
        <h2 className="h2">More case studies</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          {others.map((other) => (
            <CaseStudyCard key={other.slug} study={other} />
          ))}
        </div>
      </section>
    </div>
  );
}

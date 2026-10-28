"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SplitReveal from "@/components/SplitReveal";
import { fadeIn } from "@/app/variants";
import { caseStudies } from "@/content/case-studies";
import { HiArrowRight } from "react-icons/hi2";

const featured = caseStudies.filter(
  (study) => study.slug === "reilitics" || study.slug === "accounts-management-system"
);

const CaseStudySpotlight = () => {
  return (
    <section id="featured-work" className="relative scroll-mt-20 pb-24 pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn("up", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted">
            Featured Case Studies
          </p>
          <SplitReveal as="h2" className="h2 mb-4" delay={0.05}>
            Measurable work, <span className="text-accent">not just shipped.</span>
          </SplitReveal>
          <p className="text-base text-muted sm:text-lg">
            Two builds where performance or reconciliation moved the needle. Before
            / after, decisions, and numbers front and center.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {featured.map((study, index) => (
            <motion.article
              key={study.slug}
              variants={fadeIn("up", 0.08 + index * 0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
            >
              <div className="lg:sticky lg:top-32">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
                  <span>{study.category}</span>
                  <span className="h-1 w-1 rounded-full bg-muted/60" />
                  <span>{study.role}</span>
                  <span className="h-1 w-1 rounded-full bg-muted/60" />
                  <span>{study.timeline}</span>
                </div>
                <h3 className="mb-4 text-3xl font-semibold sm:text-4xl lg:text-5xl">
                  {study.title}
                </h3>
                <p className="mb-6 text-lg text-muted">{study.summary}</p>
                <p className="mb-6 text-base leading-relaxed text-foreground/90">
                  {study.outcome}
                </p>
                <div className="mb-8 grid gap-4 sm:grid-cols-2">
                  {study.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="glass-card flex flex-col gap-1 px-5 py-4"
                    >
                      <span className="text-2xl font-semibold text-accent sm:text-3xl">
                        {metric.value}
                      </span>
                      <span className="text-sm text-muted">{metric.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mb-8 flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  {study.liveUrl ? (
                    <Link
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      View live
                      <HiArrowRight />
                    </Link>
                  ) : null}
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    Read full case study
                    <HiArrowRight />
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_60px_120px_-80px_rgba(94,234,212,0.25)]">
                  <div className="relative aspect-[16/10] w-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
                    <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.25em] text-muted backdrop-blur">
                      <span>Before → After</span>
                    </div>
                    <div className="absolute inset-x-6 bottom-6 flex flex-col gap-2 rounded-xl bg-black/50 p-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm text-foreground/90">Problem</p>
                        <p className="text-sm text-muted">{study.problem}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-foreground/90">Outcome</p>
                        <p className="text-sm text-accent">{study.metrics[0]?.value} — {study.metrics[0]?.label}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {study.steps.slice(0, 2).map((step) => (
                    <div key={step.title} className="glass-card flex flex-col gap-2 p-5">
                      <p className="text-sm uppercase tracking-[0.25em] text-muted">
                        {step.title}
                      </p>
                      <p className="text-sm leading-relaxed text-muted">
                        {step.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySpotlight;

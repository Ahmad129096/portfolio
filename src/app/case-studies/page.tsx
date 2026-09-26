import type { Metadata } from "next";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import BookCallButton from "@/components/BookCallButton";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Deep dives into shipped projects by Ahmad Hassan: the problem, the approach, and the outcome behind each build.",
  alternates: {
    canonical: "/case-studies",
  },
};

/**
 * Hub for every case study. Pure server component: the cards and the
 * booking button are self-contained client leaves.
 */
export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <Reveal>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
        >
          <HiArrowLeft aria-hidden /> Home
        </Link>
      </Reveal>

      <Reveal delay={0.05} className="mt-8 max-w-2xl">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted">
          Case Studies
        </p>
        <SplitReveal as="h1" className="h1" trigger="load" delay={0.1}>
          The work, <span className="text-accent">unpacked.</span>
        </SplitReveal>
        <p className="text-lg leading-8 text-muted">
          Deep dives into shipped projects: the problem, the approach, and
          what changed after launch.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>

      <Reveal className="mt-16">
        <div className="glass-panel flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-text">
              Have a project like this?
            </h2>
            <p className="mt-1 text-sm">
              Tell me what you are building and I will tell you how I would
              approach it.
            </p>
          </div>
          <BookCallButton />
        </div>
      </Reveal>
    </div>
  );
}

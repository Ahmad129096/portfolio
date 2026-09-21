"use client";
import ServiceSlider from "@/components/ServiceSlider";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiClock } from "react-icons/hi2";
import { fadeIn } from "../variants";

const collaborationModes = [
  { number: "01", label: "Freelance Contracts" },
  { number: "02", label: "Full Project Builds" },
  { number: "03", label: "Ongoing Support & Maintenance" },
];

export default function Services() {
  return (
    <div className="relative min-h-screen pb-16 pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-sm uppercase tracking-[0.2em] text-stone-500">
          Services
        </p>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="glass-panel p-8 sm:p-10"
          >
            <h2 className="h2 mb-4 text-left">
              <span className="text-accent">Focused support</span> for
              product teams.
            </h2>
            <p className="mb-8 text-left text-base text-stone-400">
              Partnering with startups, agencies, and product teams to build
              resilient web apps, clean component systems, and interfaces
              that hold up under real use.
            </p>

            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-stone-500">
              Modes of collaboration
            </p>
            <div className="mb-8 space-y-1">
              {collaborationModes.map((mode) => (
                <div
                  key={mode.number}
                  className="flex items-center gap-3 border-b border-white/5 py-3 last:border-0"
                >
                  <span className="text-xs text-accent">{mode.number}</span>
                  <span className="text-sm font-medium text-white">
                    {mode.label}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="group mb-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:bg-accent/90 sm:w-auto"
            >
              Discuss a project
              <HiArrowRight className="transition group-hover:translate-x-1" />
            </Link>
            <div className="flex items-center gap-2 text-xs text-stone-500">
              <HiClock />
              Typical sprint: 2–6 weeks · Fixed-scope or ongoing
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="glass-panel min-w-0 p-6 sm:p-8"
          >
            <div className="mb-6 flex flex-col gap-2 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
              <span>
                Discipline: <span className="text-stone-300">Full-Stack Development</span>
              </span>
              <span>
                Availability: <span className="text-accent">Open for projects</span>
              </span>
            </div>

            <h3 className="mb-6 font-heading text-base font-semibold text-white">
              Specialized practices
            </h3>

            <ServiceSlider />
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="glass-card mt-6 flex flex-col items-center gap-5 p-6 sm:p-8 xl:flex-row xl:items-center xl:justify-between"
        >
          <div className="text-center xl:text-left">
            <h3 className="font-heading text-base font-semibold text-white">
              Have a project in mind?
            </h3>
            <p className="mt-1 max-w-md text-sm text-slate-400">
              Available for freelance projects, ongoing support, and
              technical consultations.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30"
          >
            Get in touch
            <HiArrowRight />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

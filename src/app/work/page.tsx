"use client";
import WorkSlider from "@/components/WorkSlider";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { fadeIn } from "../variants";

const stats = [
  { value: "8", label: "Featured projects" },
  { value: "100%", label: "Live & deployed" },
];

export default function Work() {
  return (
    <div className="relative min-h-screen pb-16 pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-sm uppercase tracking-[0.2em] text-stone-500">
          Selected Work
        </p>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="glass-panel min-w-0 p-8 sm:p-10"
          >
            <h2 className="h2 mb-4 text-left">
              A portfolio of <span className="text-accent">practical, polished</span> builds.
            </h2>
            <p className="mb-8 text-left text-base text-stone-400">
              A curated index of shipped, production-live projects — from
              internal business platforms to client products.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-left">
                  <div className="text-2xl font-semibold text-accent sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-xs text-stone-500">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:bg-accent/90"
            >
              Discuss a project
              <HiArrowRight className="transition group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="glass-panel min-w-0 p-6 sm:p-8"
          >
            <h3 className="mb-6 font-heading text-base font-semibold text-white">
              Featured projects
            </h3>
            <WorkSlider />
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
            <p className="mt-1 max-w-md text-sm text-stone-400">
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

"use client";
import TestimonialSlider from "@/components/TestimonialSlider";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { fadeIn } from "../variants";

export default function Testimonials() {
  return (
    <div className="relative min-h-screen pb-16 pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-sm uppercase tracking-[0.2em] text-stone-500">
          Testimonials
        </p>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mb-10 text-center"
        >
          <h2 className="h2 mb-4">
            What clients <span className="text-accent">say.</span>
          </h2>
          <p className="mx-auto max-w-xl text-base text-stone-400">
            A few words from people I&apos;ve worked with.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.4)}
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

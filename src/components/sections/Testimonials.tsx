"use client";
import TestimonialSlider from "@/components/TestimonialSlider";
import { motion } from "framer-motion";
import SplitReveal from "@/components/SplitReveal";
import { fadeIn } from "@/app/variants";

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative min-h-screen scroll-mt-20 pb-16 pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-sm uppercase tracking-[0.2em] text-muted">
          Testimonials
        </p>

        <motion.div
          variants={fadeIn("up", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 text-center"
        >
          <SplitReveal as="h2" className="h2 mb-4" delay={0.05}>
            What clients <span className="text-accent">say.</span>
          </SplitReveal>
          <p className="mx-auto max-w-xl text-base text-muted">
            A few words from the 20+ founders, teams, and independent clients
            I&apos;ve shipped work with.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

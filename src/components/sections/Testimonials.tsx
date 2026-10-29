"use client";
import { motion } from "framer-motion";
import SplitReveal from "@/components/SplitReveal";
import { TestimonialCarousel } from "@/components/ui/profile-card-testimonial-carousel";
import { fadeIn } from "@/app/variants";

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative scroll-mt-20 pb-24 pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn("up", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted">
            Testimonials
          </p>
          <SplitReveal as="h2" className="h2 mb-4" delay={0.05}>
            What clients <span className="text-primary">say.</span>
          </SplitReveal>
          <p className="mx-auto max-w-xl text-base text-muted">
            A few words from founders, teams, and clients I&apos;ve worked with.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <TestimonialCarousel />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

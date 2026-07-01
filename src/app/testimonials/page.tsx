"use client";
import TestimonialSlider from "@/components/TestimonialSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function Testimonials() {
  return (
    <div className="relative min-h-[calc(100vh-16rem)] py-32 text-center">
      <div className="container mx-auto mt-5 flex h-full flex-col justify-center">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="glass-panel mx-auto mb-8 max-w-3xl p-8 sm:p-10"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-accent/60">
            Testimonials
          </p>
          <h2 className="h2 mb-0">
            What clients <span className="text-accent">say.</span>
          </h2>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
}

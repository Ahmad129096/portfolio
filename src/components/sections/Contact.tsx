"use client";
import CalComWidget from "@/components/CalComWidget";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";

const Contact = () => {
  return (
    <section id="contact" className="relative min-h-screen scroll-mt-20 pb-24 pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="glass-panel mx-auto max-w-4xl p-8 text-center sm:p-10"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-stone-500">
            Contact
          </p>
          <h2 className="h2 mb-4">
            Let&apos;s <span className="text-accent">connect.</span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base text-stone-400">
            Book a call to talk about your project — pick a duration and a
            time that works for you below.
          </p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface p-4">
            <CalComWidget />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-stone-500">
            <span>Instant calendar invite</span>
            <span className="hidden sm:inline text-stone-700">·</span>
            <span>No spam, ever</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

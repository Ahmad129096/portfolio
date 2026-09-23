"use client";
import { motion } from "framer-motion";
import { HiClock, HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { fadeIn } from "@/app/variants";
import BookCallButton from "@/components/BookCallButton";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen scroll-mt-20 pb-28 pt-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn("up", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="glass-panel mx-auto max-w-4xl p-8 text-center sm:p-10"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted">
            Contact
          </p>
          <h2 className="h2 mb-4">
            Let&apos;s <span className="text-accent">connect.</span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base text-muted">
            Book a 15- or 30-minute call about your project. The scheduler opens
            right here in a modal — no new tabs, no back-and-forth emails.
          </p>

          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <BookCallButton
              variant="primary"
              className="w-full justify-center sm:w-auto"
            />
            <a
              href="https://www.linkedin.com/in/ahmad-hassan-792619140/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full justify-center sm:w-auto"
            >
              <HiChatBubbleBottomCenterText />
              Message me on LinkedIn
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <HiClock className="text-base" />
              15 or 30 minutes
            </span>
            <span className="hidden text-muted/60 sm:inline">·</span>
            <span>Instant calendar invite</span>
            <span className="hidden text-muted/60 sm:inline">·</span>
            <span>No spam, ever</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

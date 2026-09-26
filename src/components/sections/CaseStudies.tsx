"use client";
import { motion } from "framer-motion";
import SplitReveal from "@/components/SplitReveal";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/content/case-studies";
import { fadeIn } from "@/app/variants";

/**
 * Deep-dive proof: links each project from the Work grid to a full
 * case-study page. Sits between Testimonials (social proof) and Contact
 * (the CTA) so the funnel reads: work -> what people say -> how I think.
 */
const CaseStudies = () => {
  return (
    <section id="case-studies" className="relative scroll-mt-20 pb-24 pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn("up", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted">
            Case Studies
          </p>
          <SplitReveal as="h2" className="h2 mb-4" delay={0.05}>
            Projects, <span className="text-accent">in depth.</span>
          </SplitReveal>
          <p className="text-base text-muted">
            Three builds from first problem to production, with the decisions
            behind each one.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;

"use client";
import WorkGrid from "@/components/WorkGrid";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { fadeIn } from "@/app/variants";

const stats = [
  { value: "8", label: "Featured projects" },
  { value: "100%", label: "Live & deployed" },
];

const Work = () => {
  return (
    <section
      id="work"
      className="relative min-h-screen scroll-mt-20 pb-20 pt-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn("up", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted">
            Selected Work
          </p>
          <h2 className="h2 mb-4">
            A portfolio of{" "}
            <span className="text-accent">practical, polished</span> builds.
          </h2>
          <p className="text-base text-muted">
            A curated index of shipped, production-live projects — from internal
            business platforms to client products.
          </p>

          <div className="mt-6 flex items-center justify-center gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-xl font-semibold text-accent sm:text-2xl">
                  {stat.value}
                </div>
                <div className="text-xs text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
        >
          <WorkGrid />
        </motion.div>
      </div>
    </section>
  );
};

export default Work;

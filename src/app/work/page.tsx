"use client";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import WorkSlider from "@/components/WorkSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function Work() {
  return (
    <div className="relative flex min-h-[calc(100vh-16rem)] items-center py-32">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 xl:flex-row xl:gap-12">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col text-center lg:text-left xl:w-[32%]"
          >
            <div className="glass-panel p-8 sm:p-10">
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-accent/60">
                Selected work
              </p>
              <h2 className="h2 mb-4">
                A portfolio of practical, polished builds.
              </h2>
              <p className="mx-auto max-w-[420px] text-left text-base text-slate-300 lg:mx-0">
                Every project here reflects a focus on clarity, execution, and
                measurable product impact.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[68%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
}

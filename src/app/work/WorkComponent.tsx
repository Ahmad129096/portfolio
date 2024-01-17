"use client";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import WorkSlider from "@/components/WorkSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function WorkComponent() {
  return (
    <div className="w-full h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div
            className="text-center flex xl:w-[30vm] flex-col lg:text-left
            mb-4 xl:mb-0"
          >
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mb-0 mt-10 xl:mb-2 xl:mt-12"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb:0 xl:mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Experienced professional adept at managing diverse tasks with
              precision. Proven ability to navigate challenges and deliver
              results. Skilled in multitasking, problem-solving, and fostering
              efficient collaboration.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
}

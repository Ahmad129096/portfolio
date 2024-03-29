"use client";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import ServiceSlider from "@/components/ServiceSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function Services() {
  return (
    <div className="w-full h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto mt-10 xl:mt-0">
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
              className="h2 xl:mt-8"
            >
              My Services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Elevate your experience with my comprehensive services. I
              specialize in crafting tailored solutions, adeptly managing tasks,
              and ensuring seamless collaboration.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
}

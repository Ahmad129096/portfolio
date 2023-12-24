"use client";
import Circles from "@/components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function Contact() {
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <div
        className="container mx-auto h-full flex flex-col items-center
    xl:flex-row gap-x-6 mt-5"
      >
        <div className="flex-1 flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            action=""
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="name" className="input" />
              <input type="text" placeholder="email" className="input" />
            </div>
            <input type="text" placeholder="subject" className="input" />
            <textarea
              name="message"
              placeholder="message"
              id=""
              className="textarea"
            ></textarea>
            <button
              className="btn rounded-full border border-white/50
              max-w-[170px] px-8 transition-all duration-300 flex items-center
              justify-center overflow-hidden hover:border-accent group"
            >
              <span
                className="group-hover:translate-y-[120%] group-hover:opacity-0
                transition-all duration-500"
              >
                lets talk
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex
                group-hover:-translate-y-0 group-hover:opacity-100 transition-all
                duration-100 absolute text-[22px]"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}

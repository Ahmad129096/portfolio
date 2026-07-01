"use client";
import ProjectsBtn from "@/components/ProjectsBtn";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import Avatar from "@/components/Avatar";
import ParticlesContainer from "@/components/ParticlesContainer";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "UI Systems Builder",
  "Product-Focused Engineer",
];

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;
    let currentText = "";

    const type = () => {
      const fullText = roles[currentIndex];

      if (currentText.length < fullText.length) {
        currentText = fullText.slice(0, currentText.length + 1);
        setDisplayedText(currentText);
        timeout = setTimeout(type, 90);
      } else {
        timeout = setTimeout(() => {
          currentText = fullText.slice(0, Math.max(0, currentText.length - 1));
          setDisplayedText(currentText);

          if (currentText.length === 0) {
            currentIndex = (currentIndex + 1) % roles.length;
            timeout = setTimeout(type, 250);
          } else {
            timeout = setTimeout(type, 50);
          }
        }, 1400);
      }
    };

    timeout = setTimeout(type, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,240,255,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.16),transparent_30%)]" />
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto flex h-full items-center px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-6 xl:grid-cols-[1.1fr_0.9fr] xl:gap-6">
            <div className="mx-auto max-w-2xl text-center xl:mx-0 xl:text-left">
              <motion.h3
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 text-4xl sm:text-5xl xl:text-6xl"
              >
                Building <span className="text-accent">future-ready</span>
                <br /> digital products.
              </motion.h3>
              <motion.p
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mx-auto mb-6 max-w-2xl text-base text-slate-300 sm:text-lg xl:mx-0"
              >
                Hello, I’m Ahmad Hassan — a full-stack developer who turns clean
                architecture, thoughtful UI, and rapid iteration into products
                that feel effortless.
              </motion.p>
              <motion.div
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex flex-col items-center gap-4 sm:flex-row xl:items-start"
              >
                <ProjectsBtn />
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:border-accent/60 hover:bg-accent/10 hover:text-accent"
                >
                  Let’s talk
                </Link>
              </motion.div>
            </div>

            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="relative mx-auto flex h-[280px] w-full max-w-[280px] items-center justify-center sm:h-[320px] sm:max-w-[320px] xl:h-[460px] xl:max-w-[360px]"
            >
              <div className="absolute inset-0 rounded-[2.5rem] border border-accent/10 bg-accent/05 blur-3xl" />
              <Avatar />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

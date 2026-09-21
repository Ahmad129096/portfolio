"use client";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import Avatar from "@/components/Avatar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import CountUp from "react-countup";

const roles = [
  "Full-Stack Developer",
  "UI Systems Builder",
  "Product-Focused Engineer",
];

const stats = [
  { value: 5, suffix: "+", label: "Years experience" },
  { value: 20, suffix: "+", label: "Clients" },
  { value: 15, suffix: "+", label: "Projects" },
];

const toolkit = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "WordPress",
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
    <div className="relative min-h-screen pb-16 pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 xl:grid-cols-[1.1fr_0.9fr] xl:gap-10">
          <div className="mx-auto max-w-2xl text-center xl:mx-0 xl:text-left">
            <motion.p
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 text-sm uppercase tracking-[0.2em] text-stone-500"
            >
              Portfolio — 2026
            </motion.p>

            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 text-4xl font-semibold leading-tight sm:text-5xl xl:text-6xl"
            >
              Building <span className="text-accent">future-ready</span>
              <br /> digital products.
            </motion.h1>

            <motion.p
              variants={fadeIn("down", 0.25)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-6 min-h-[1.75rem] font-heading text-lg text-stone-300"
            >
              {displayedText}
            </motion.p>

            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto mb-8 max-w-2xl text-base text-stone-400 sm:text-lg xl:mx-0"
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
              className="mb-10 flex flex-col items-center gap-4 sm:flex-row xl:items-start"
            >
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:bg-accent/90"
              >
                View Projects
                <HiArrowRight className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-white/30"
              >
                <HiChatBubbleBottomCenterText />
                Let’s talk
              </Link>
            </motion.div>

            <motion.div
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="glass-card mx-auto grid max-w-lg grid-cols-3 divide-x divide-white/10 xl:mx-0"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="px-4 py-4 text-center xl:text-left"
                >
                  <div className="text-2xl font-semibold text-accent sm:text-3xl">
                    <CountUp start={0} end={stat.value} duration={4} />
                    {stat.suffix}
                  </div>
                  <div className="mt-1 text-xs text-stone-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="relative mx-auto flex flex-col items-center gap-4 xl:mx-0"
          >
            <p className="text-sm text-stone-500">React · Next.js · Node.js</p>
            <div className="flex h-[280px] w-full max-w-[280px] items-center justify-center sm:h-[320px] sm:max-w-[320px] xl:h-[420px] xl:max-w-[360px]">
              <Avatar />
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="glass-card mt-14 flex flex-col items-center gap-5 p-6 sm:p-8 xl:flex-row xl:items-center xl:justify-between"
        >
          <div className="text-center xl:text-left">
            <h3 className="font-heading text-base font-semibold text-white">
              Core toolkit
            </h3>
            <p className="mt-1 max-w-md text-sm text-stone-400">
              The stack I reach for most when shipping clean, fast, and
              maintainable web products.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 xl:justify-end">
            {toolkit.map((item, index) => (
              <span key={item} className="text-sm text-stone-400">
                {item}
                {index < toolkit.length - 1 && (
                  <span className="ml-4 text-stone-700">·</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

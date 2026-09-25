"use client";
import dynamic from "next/dynamic";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import Avatar from "@/components/Avatar";
import BookCallButton from "@/components/BookCallButton";
import Magnetic from "@/components/Magnetic";
import SplitReveal from "@/components/SplitReveal";
import { fadeIn } from "@/app/variants";

const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
});

const roles = [
  "React & Next.js Product Engineer",
  "Node.js API & Integration Builder",
  "Startup-Focused UI Engineer",
];

const stats = [
  { value: 5, suffix: "+", label: "Years experience" },
  { value: 20, suffix: "+", label: "Clients" },
  { value: 15, suffix: "+", label: "Projects" },
];

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [ready, setReady] = useState(false);

  // The loading curtain is gone: the hero copy paints from the first byte,
  // and the typing loop plus stat counters start the moment we mount.
  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    let timeout: NodeJS.Timeout;
    let currentIndex = 0;
    let currentText = "";

    const type = () => {
      const fullText = roles[currentIndex];

      if (currentText.length < fullText.length) {
        currentText = fullText.slice(0, currentText.length + 1);
        setDisplayedText(currentText);
        timeout = setTimeout(type, 75);
      } else {
        timeout = setTimeout(() => {
          currentText = fullText.slice(0, Math.max(0, currentText.length - 1));
          setDisplayedText(currentText);

          if (currentText.length === 0) {
            currentIndex = (currentIndex + 1) % roles.length;
            timeout = setTimeout(type, 220);
          } else {
            timeout = setTimeout(type, 40);
          }
        }, 1600);
      }
    };

    timeout = setTimeout(type, 450);
    return () => clearTimeout(timeout);
  }, [ready]);

  return (
    <section
      id="home"
      className="relative min-h-screen scroll-mt-20 overflow-hidden pb-20 pt-36"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 xl:grid-cols-[1.1fr_0.9fr] xl:gap-10">
          <div className="mx-auto max-w-2xl text-center xl:mx-0 xl:text-left">
            <motion.p
              variants={fadeIn("down", 0.05)}
              initial="show"
              animate="show"
              className="mb-4 text-sm uppercase tracking-[0.2em] text-muted"
            >
              Portfolio 2026
            </motion.p>

            <SplitReveal
              as="h1"
              trigger="load"
              stagger={0.06}
              className="mb-4 text-4xl font-semibold leading-tight sm:text-5xl xl:text-6xl"
            >
              Full-Stack{" "}
              <span className="text-accent">React &amp; Node.js</span>
              <br /> engineer for high-growth startups.
            </SplitReveal>

            <motion.p
              variants={fadeIn("down", 0.1)}
              initial="show"
              animate="show"
              className="mb-6 min-h-[1.75rem] font-heading text-lg text-accent"
            >
              {displayedText}
              <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-accent align-middle" style={{ height: "1.1em" }} />
            </motion.p>

            <motion.p
              variants={fadeIn("down", 0.12)}
              initial="show"
              animate="show"
              className="mx-auto mb-8 max-w-2xl text-base text-muted sm:text-lg xl:mx-0"
            >
              Hello, I’m Ahmad Hassan. I help startups and product teams turn
              clean architecture, thoughtful UI, and rapid iteration into React,
              Next.js, and Node.js products that ship on schedule and hold up in
              production.
            </motion.p>

            <motion.div
              variants={fadeIn("down", 0.15)}
              initial="show"
              animate="show"
              className="mb-10 flex flex-col items-center gap-4 sm:flex-row xl:items-start"
            >
              <Magnetic strength={0.3} className="w-full sm:w-auto">
                <BookCallButton
                  variant="primary"
                  className="w-full justify-center sm:w-auto"
                />
              </Magnetic>
              <motion.a
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.03 }}
                href="#work"
                className="btn-secondary w-full justify-center sm:w-auto"
              >
                View projects
                <HiArrowRight />
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeIn("down", 0.18)}
              initial="show"
              animate="show"
              className="glass-card mx-auto grid max-w-lg grid-cols-3 divide-x divide-overlay/10 xl:mx-0"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="px-4 py-4 text-center xl:text-left"
                >
                  <div className="text-2xl font-semibold text-accent sm:text-3xl">
                    {ready ? (
                      <CountUp start={0} end={stat.value} duration={1.6} />
                    ) : (
                      stat.value
                    )}
                    {stat.suffix}
                  </div>
                  <div className="mt-1 text-xs text-muted">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="show"
            animate="show"
            className="relative mx-auto flex flex-col items-center gap-4 xl:mx-0"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-muted">
              React · Next.js · Node.js
            </p>
            <div className="relative flex h-[280px] w-full max-w-[280px] items-center justify-center sm:h-[320px] sm:max-w-[320px] xl:h-[420px] xl:max-w-[360px]">
              <div className="pointer-events-none absolute -inset-16 -z-10">
                <HeroScene />
              </div>
              <Avatar />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 xl:flex">
        <span className="text-[10px] uppercase tracking-[0.35em] text-muted">
          Scroll
        </span>
        <span className="scroll-cue" />
      </div>
    </section>
  );
};

export default Hero;

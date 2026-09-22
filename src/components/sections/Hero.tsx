"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";
import Avatar from "@/components/Avatar";
// import TechMarquee from "@/components/TechMarquee";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import CountUp from "react-countup";

const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
});

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

const Hero = () => {
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
    <section id="home" className="relative min-h-screen scroll-mt-20 pb-20 pt-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 xl:grid-cols-[1.1fr_0.9fr] xl:gap-10">
          <div className="mx-auto max-w-2xl text-center xl:mx-0 xl:text-left">
            <motion.p
              variants={fadeIn("down", 0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="mb-4 text-sm uppercase tracking-[0.2em] text-muted"
            >
              Portfolio — 2026
            </motion.p>

            <motion.h1
              variants={fadeIn("down", 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="mb-4 text-4xl font-semibold leading-tight sm:text-5xl xl:text-6xl"
            >
              Building <span className="text-accent">future-ready</span>
              <br /> digital products.
            </motion.h1>

            <motion.p
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="mb-6 min-h-[1.75rem] font-heading text-lg text-text"
            >
              {displayedText}
            </motion.p>

            <motion.p
              variants={fadeIn("down", 0.12)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="mx-auto mb-8 max-w-2xl text-base text-muted sm:text-lg xl:mx-0"
            >
              Hello, I’m Ahmad Hassan — a full-stack developer who turns clean
              architecture, thoughtful UI, and rapid iteration into products
              that feel effortless.
            </motion.p>

            <motion.div
              variants={fadeIn("down", 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="mb-10 flex flex-col items-center gap-4 sm:flex-row xl:items-start"
            >
              <motion.a
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.03 }}
                href="#work"
                className="group btn-primary"
              >
                View Projects
                <span className="btn-primary-icon">
                  <HiArrowRight />
                </span>
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.03 }}
                href="#contact"
                className="btn-secondary"
              >
                <HiChatBubbleBottomCenterText />
                Let’s talk
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeIn("down", 0.18)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="glass-card mx-auto grid max-w-lg grid-cols-3 divide-x divide-overlay/10 xl:mx-0"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="px-4 py-4 text-center xl:text-left"
                >
                  <div className="text-2xl font-semibold text-accent sm:text-3xl">
                    <CountUp start={0} end={stat.value} duration={1.5} />
                    {stat.suffix}
                  </div>
                  <div className="mt-1 text-xs text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("left", 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative mx-auto flex flex-col items-center gap-4 xl:mx-0"
          >
            <p className="text-sm text-muted">React · Next.js · Node.js</p>
            <div className="relative flex h-[280px] w-full max-w-[280px] items-center justify-center sm:h-[320px] sm:max-w-[320px] xl:h-[420px] xl:max-w-[360px]">
              <div className="pointer-events-none absolute -inset-16 -z-10">
                <HeroScene />
              </div>
              <Avatar />
            </div>
          </motion.div>
        </div>

        {/* <motion.div
          variants={fadeIn("up", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="glass-card mt-14 overflow-hidden p-6 sm:p-8"
        >
          <div className="mb-6 text-center xl:text-left">
            <h3 className="font-heading text-base font-semibold text-text">
              Core toolkit
            </h3>
            <p className="mt-1 max-w-md text-sm text-muted xl:mx-0">
              The stack I reach for most when shipping clean, fast, and
              maintainable web products.
            </p>
          </div>
          <TechMarquee />
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;

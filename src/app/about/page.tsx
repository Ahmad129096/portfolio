"use client";
import { useState } from "react";
import Circles from "@/components/Circles";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaNode,
} from "react-icons/fa";
import { SiNextdotjs, SiFramer } from "react-icons/si";
import { fadeIn } from "../variants";

const aboutData: any = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="10" />,
          <FaCss3 key="9" />,
          <FaJs key="8" />,
          <FaReact key="7" />,
          <SiNextdotjs key="6" />,
          <SiFramer key="5" />,
          <FaWordpress key="4" />,
          <FaNode key="11" />,
        ],
      },
      {
        title: "Mobile app development",
        icons: [<FaReact key="3" />],
      },
    ],
  },
  {
    title: "awards",
    info: [{ title: "In progress", stage: "" }],
  },
  {
    title: "experience",
    info: [
      { title: "Software engineer — Seebiz Pvt Ltd", stage: "2022 — present" },
      { title: "Node.js Intern — Bizzclan", stage: "2022" },
    ],
  },
  {
    title: "credentials",
    info: [
      { title: "Computer Science — COMSATS University", stage: "2018 — 2022" },
    ],
  },
];

export default function About() {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative min-h-[calc(100vh-16rem)] py-32 text-center xl:text-left">
      <Circles />
      <div className="container mx-auto mt-5 flex flex-col items-center gap-8 xl:flex-row xl:gap-12">
        <motion.div
          exit="hidden"
          animate="show"
          initial="hidden"
          variants={fadeIn("right", 0.2)}
          className="flex-1"
        >
          <div className="glass-panel p-8 sm:p-10 xl:p-12">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-accent/60">
              About
            </p>
            <h2 className="h2 mb-6">
              Crafting <span className="text-accent">high-impact</span> digital
              experiences.
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-left text-base text-slate-300 xl:mx-0">
              Five years ago, I began freelancing as a developer. Since then,
              I’ve built products for startups, agencies, and businesses that
              need fast-moving, reliable, and polished web experiences.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { value: 4, label: "years of experience" },
                { value: 20, label: "satisfied clients" },
                { value: 15, label: "finished projects" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-left"
                >
                  <div className="mb-2 text-3xl font-semibold text-accent">
                    <CountUp start={0} end={stat.value} duration={4} />+
                  </div>
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          exit="hidden"
          animate="show"
          initial="hidden"
          variants={fadeIn("left", 0.3)}
          className="w-full xl:max-w-[45%]"
        >
          <div className="glass-panel p-6 sm:p-8">
            <div className="mb-6 flex flex-wrap gap-3">
              {aboutData.map((item: any, itemIndex: number) => (
                <button
                  key={itemIndex}
                  className={`rounded-full px-4 py-2 text-sm capitalize transition ${
                    index === itemIndex
                      ? "bg-accent/15 text-accent shadow-[0_0_20px_rgba(0,240,255,0.16)]"
                      : "bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="space-y-3">
              {aboutData[index].info.map((item: any, itemIndex: number) => (
                <div
                  key={itemIndex}
                  className="rounded-2xl border border-white/10 bg-slate-900/50 p-4"
                >
                  <div className="mb-2 text-sm font-medium text-white">
                    {item.title}
                  </div>
                  {item.stage ? (
                    <div className="text-sm text-slate-400">{item.stage}</div>
                  ) : null}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.icons?.map((icon: any, iconIndex: number) => (
                      <div
                        key={iconIndex}
                        className="rounded-full bg-white/10 p-2 text-xl text-accent"
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

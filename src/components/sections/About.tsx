"use client";
import { useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaNode,
  FaTrophy,
} from "react-icons/fa";
import { SiNextdotjs, SiFramer, SiTailwindcss } from "react-icons/si";
import {
  HiArrowRight,
  HiRectangleGroup,
  HiBriefcase,
  HiAcademicCap,
} from "react-icons/hi2";
import { fadeIn } from "@/app/variants";

const tabs = [
  { key: "skills", label: "Skills", icon: <HiRectangleGroup /> },
  { key: "experience", label: "Experience", icon: <HiBriefcase /> },
  { key: "awards", label: "Awards", icon: <FaTrophy /> },
  { key: "credentials", label: "Credentials", icon: <HiAcademicCap /> },
];

const skillGroups = [
  {
    title: "Web Development",
    icons: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3 />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiFramer />, name: "Framer Motion" },
      { icon: <FaWordpress />, name: "WordPress" },
      { icon: <FaNode />, name: "Node.js" },
    ],
  },
  {
    title: "Mobile App Development",
    icons: [{ icon: <FaReact />, name: "React Native" }],
  },
];

const experience = [
  { title: "Software Engineer — ByteForge", stage: "Dec 2025 — present" },
  { title: "Software Engineer — Seebiz Pvt Ltd", stage: "2022 — Nov 2025" },
  { title: "Node.js Intern — Bizzclan", stage: "2022" },
];

const credentials = [
  { title: "Computer Science — COMSATS University", stage: "2018 — 2022" },
];

const stats = [
  { value: 5, suffix: "+", label: "Years experience" },
  { value: 20, suffix: "+", label: "Clients" },
  { value: 15, suffix: "+", label: "Projects" },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="about" className="relative min-h-screen scroll-mt-20 pb-20 pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-sm uppercase tracking-[0.2em] text-muted">
          About
        </p>

        <div className="grid gap-6 xl:grid-cols-2">
          <motion.div
            variants={fadeIn("right", 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="glass-panel relative overflow-hidden p-8 sm:p-10"
          >
            <span
              aria-hidden
              className="ghost-name -bottom-6 -left-2 text-[6rem] sm:text-[8rem]"
            >
              HASSAN
            </span>

            <div className="relative mb-6 flex items-center gap-4 text-left">
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-overlay/10">
                <Image
                  src="/portfolio-image.png"
                  width={64}
                  height={64}
                  alt="Ahmad Hassan"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="font-heading text-lg font-semibold text-text">
                  Ahmad Hassan
                </div>
                <div className="text-sm text-accent">
                  Full-Stack Developer &amp; UI Systems Builder
                </div>
              </div>
            </div>

            <h2 className="h2 relative mb-4 text-left">
              Crafting <span className="text-accent">high-impact</span> digital
              experiences.
            </h2>
            <p className="relative mb-6 text-left text-base text-muted">
              I&apos;ve been building for the web for over four years,
              partnering with startups, agencies, and growing businesses that
              need fast-moving, reliable, and polished digital products.
            </p>

            <div className="relative mb-8 border-l-2 border-accent/40 py-1 pl-4 text-left">
              <p className="italic text-muted">
                &quot;Great software should feel invisible — fast, clear, and
                built to last.&quot;
              </p>
            </div>

            <div className="relative mb-8 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-left">
                  <div className="text-2xl font-semibold text-accent sm:text-3xl">
                    <CountUp start={0} end={stat.value} duration={1.5} />
                    {stat.suffix}
                  </div>
                  <div className="mt-1 text-xs text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <motion.a
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.03 }}
              href="#contact"
              className="group btn-primary relative"
            >
              Get in touch
              <span className="btn-primary-icon">
                <HiArrowRight />
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="glass-panel p-6 sm:p-8"
          >
            <div className="mb-6 flex flex-wrap gap-1 border-b border-overlay/10">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`inline-flex items-center gap-2 border-b-2 px-3 py-3 text-sm transition ${
                    activeTab === tab.key
                      ? "border-accent text-accent"
                      : "border-transparent text-muted hover:text-text"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === "skills" && (
              <div className="space-y-5">
                {skillGroups.map((group) => (
                  <div key={group.title} className="text-left">
                    <div className="mb-3 text-sm font-medium text-text">
                      {group.title}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {group.icons.map((item) => (
                        <div
                          key={item.name}
                          title={item.name}
                          className="text-xl text-muted"
                        >
                          {item.icon}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "experience" && (
              <div className="space-y-4">
                {experience.map((item) => (
                  <div key={item.title} className="text-left">
                    <div className="text-sm font-medium text-text">
                      {item.title}
                    </div>
                    <div className="mt-1 text-xs text-muted">
                      {item.stage}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "awards" && (
              <div className="text-left text-sm font-medium text-text">
                In progress
              </div>
            )}

            {activeTab === "credentials" && (
              <div className="space-y-4">
                {credentials.map((item) => (
                  <div key={item.title} className="text-left">
                    <div className="text-sm font-medium text-text">
                      {item.title}
                    </div>
                    <div className="mt-1 text-xs text-muted">
                      {item.stage}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <p className="mt-8 border-t border-overlay/10 pt-5 text-left text-sm text-muted">
              Currently building this portfolio&apos;s redesign.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

"use client";
import { useState } from "react";
import Circles from "@/components/Circles";
import CountUp from "react-countup";
import { motion } from "framer-motion";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaNode,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import { fadeIn } from "../variants";
import Avatar from "@/components/Avatar";

//  data
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
    info: [
      {
        title: "In progress",
        stage: "",
      },
      // {
      //   title: "Adobe Design Achievement Awards - Finalist",
      //   stage: "2009 - 2010",
      // },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Software enginner - Seebiz Pvt Ltd",
        stage: "2022 - present",
      },
      {
        title: "Node js Intern - Bizzclan",
        stage: "2022",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Computer Science - Comsats University",
        stage: "2018-2022",
      },
    ],
  },
];

export default function About() {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <div
        className="container mx-auto h-full flex flex-col items-center
      xl:flex-row gap-x-6 mt-5"
      >
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            exit="hidden"
            animate="show"
            initial="hidden"
            variants={fadeIn("right", 0.2)}
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs
          </motion.h2>
          <motion.p
            exit="hidden"
            animate="show"
            initial="hidden"
            variants={fadeIn("right", 0.4)}
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            5 years ago, I began freelancing as a developer. Since then, i have
            done remote work for agencies, consulted for startups and
            collaborated on digital products for business and consumer use.
          </motion.p>
          <motion.div
            exit="hidden"
            animate="show"
            initial="hidden"
            variants={fadeIn("right", 0.6)}
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto
          xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div
                className="relative flex-1 after:w-[1px] after:h-full after:absolute after:bg-white/10 
                  after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  years of experience
                </div>
              </div>
              <div
                className="relative flex-1 after:w-[1px] after:h-full after:absolute after:bg-white/10 
                  after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  satisfied clients
                </div>
              </div>
              <div
                className="relative flex-1 after:w-[1px] after:h-full after:absolute after:bg-white/10 
                  after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          exit="hidden"
          animate="show"
          initial="hidden"
          variants={fadeIn("left", 0.4)}
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item: any, itemIndex: number) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                }
                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
                after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div
            className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
          items-center xl:items-start"
          >
            {aboutData[index].info.map((item: any, itemIndex: number) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row
              max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-2">
                  {item.icons?.map((icon: any, iconIndex: number) => (
                    <div key={iconIndex} className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

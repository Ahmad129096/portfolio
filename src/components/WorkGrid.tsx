"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUpRight, HiLockClosed } from "react-icons/hi2";

type Category = "Internal Tools" | "Client Work" | "Personal";

type Project = {
  title: string;
  image: string;
  link: string | null;
  status?: string;
  category: Category;
};

const projects: Project[] = [
  {
    title: "Accounts Management System",
    image: "/thumb1.png",
    link: "https://books.seebiz.com",
    category: "Internal Tools",
  },
  {
    title: "Reilitics",
    image: "/reilitics2.png",
    link: "https://www.reilitics.com/",
    category: "Client Work",
  },
  {
    title: "Krub.ai",
    image: "/krubai.png",
    link: "https://krub.ai",
    category: "Client Work",
  },
  {
    title: "Inflink",
    image: "/inflink.png",
    link: "https://inflink.ae",
    category: "Client Work",
  },
  {
    title: "Following",
    image: "/following.png",
    link: "https://following.ae",
    category: "Client Work",
  },
  {
    title: "Inventory Management System",
    image: "/thumb1.png",
    link: "https://inventory.seebiz.com",
    category: "Internal Tools",
  },
  {
    title: "Islam's Final Prophet",
    image: "/final-prophet.png",
    link: "https://islamsfinalprophet.com",
    category: "Personal",
  },
  {
    title: "Parking & Event POS",
    image: "/pos-1.png",
    link: null,
    status: "Live · Internal tool",
    category: "Internal Tools",
  },
];

const filters: Array<"All" | Category> = [
  "All",
  "Internal Tools",
  "Client Work",
  "Personal",
];

const WorkGrid = () => {
  const [active, setActive] = useState<"All" | Category>("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              active === filter
                ? "bg-accent text-background"
                : "border border-white/15 text-stone-400 hover:border-white/30 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="glass-card group overflow-hidden"
            >
              <div className="relative h-[180px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 text-left">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h3 className="font-heading text-base font-semibold text-white">
                    {project.title}
                  </h3>
                  {project.link ? (
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.link}
                      aria-label={`View ${project.title}`}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-stone-400 transition group-hover:border-accent/40 group-hover:text-accent"
                    >
                      <HiArrowUpRight />
                    </Link>
                  ) : (
                    <span
                      title="Private"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-stone-600"
                    >
                      <HiLockClosed className="text-sm" />
                    </span>
                  )}
                </div>
                <p className="text-sm text-stone-500">
                  {project.status ?? "Live & deployed"}
                </p>
                <p className="mt-1 text-xs text-stone-600">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default WorkGrid;

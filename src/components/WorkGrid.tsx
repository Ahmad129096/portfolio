"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowUpRight, HiLockClosed } from "react-icons/hi2";
import ProjectModal, { type ModalProject } from "@/components/ProjectModal";

type Category = "Internal Tools" | "Client Work" | "Personal";

type Project = ModalProject & {
  category: Category;
};

const projects: Project[] = [
  {
    title: "Accounts Management System",
    images: ["/thumb1.png"],
    link: "https://books.seebiz.com",
    category: "Internal Tools",
  },
  {
    title: "Reilitics",
    images: ["/reilitics2.png"],
    link: "https://www.reilitics.com/",
    category: "Client Work",
  },
  {
    title: "Krub.ai",
    images: ["/krubai.png"],
    link: "https://krub.ai",
    category: "Client Work",
  },
  {
    title: "Inflink",
    images: ["/inflink.png"],
    link: "https://inflink.ae",
    category: "Client Work",
  },
  {
    title: "Following",
    images: ["/following.png"],
    link: "https://following.ae",
    category: "Client Work",
  },
  {
    title: "Inventory Management System",
    images: ["/thumb1.png"],
    link: "https://inventory.seebiz.com",
    category: "Internal Tools",
  },
  {
    title: "Islam's Final Prophet",
    images: ["/final-prophet.png"],
    link: "https://islamsfinalprophet.com",
    category: "Personal",
  },
  {
    title: "Parking & Event POS",
    images: ["/pos-1.png"],
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
  const [selected, setSelected] = useState<Project | null>(null);

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
                ? "bg-accent text-ink"
                : "border border-overlay/15 text-muted hover:border-overlay/30 hover:text-text"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="relative">
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => {
            const isLast = index === visible.length - 1;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className={isLast ? "relative" : "relative h-[160vh]"}
                style={{ zIndex: index + 1 }}
              >
                <button
                  onClick={() => setSelected(project)}
                  className="glass-card group sticky top-20 h-[68vh] w-full overflow-hidden text-left sm:top-24 sm:h-[72vh]"
                >
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} project screenshot`}
                    fill
                    sizes="100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  <div className="absolute left-6 top-6 flex items-center gap-2 text-xs text-white/70">
                    <span className="font-heading">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>/</span>
                    <span>{String(visible.length).padStart(2, "0")}</span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
                    <div>
                      <div className="mb-2 inline-flex rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">
                        {project.category}
                      </div>
                      <h3 className="font-heading text-2xl font-semibold text-white sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/70">
                        {project.status ?? "Live & deployed"}
                      </p>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-sm transition group-hover:border-accent/60 group-hover:text-accent">
                      {project.link ? (
                        <HiArrowUpRight />
                      ) : (
                        <HiLockClosed className="text-sm" />
                      )}
                    </span>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default WorkGrid;

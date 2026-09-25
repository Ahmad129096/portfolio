"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowUpRight, HiLockClosed } from "react-icons/hi2";
import ProjectModal, { type ModalProject } from "@/components/ProjectModal";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useIsoLayoutEffect, usePrefersReducedMotion } from "@/lib/motion";

type Category = "Internal Tools" | "Client Work" | "Personal";

type Project = ModalProject & {
  category: Category;
};

/**
 * Case-study copy. `problem`, `stack` and `outcome` are DRAFTS: verify every
 * number in `outcome` against the real project before publishing.
 */
const projects: Project[] = [
  {
    title: "Accounts Management System",
    images: ["/thumb1.png"],
    link: "https://books.seebiz.com",
    category: "Internal Tools",
    problem:
      "Finance and support staff reconciled customer accounts across spreadsheets, so month-end close stalled on manual lookups.",
    stack: ["React", "Node.js", "PostgreSQL"],
    outcome:
      "Consolidated account history in one live view cut month-end reconciliation from three days to a single afternoon.",
  },
  {
    title: "Reilitics",
    images: ["/reilitics2.png"],
    link: "https://www.reilitics.com/",
    category: "Client Work",
    problem:
      "Real-estate investors had comparable-property data scattered across public sources with no single place to compare it.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    outcome:
      "A data-dense dashboard that renders 100+ property comparables in under two seconds, replacing manual researcher work.",
  },
  {
    title: "Krub.ai",
    images: ["/krubai.png"],
    link: "https://krub.ai",
    category: "Client Work",
    problem:
      "An AI consultancy's site could not explain the offering clearly or capture qualified demo requests.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    outcome:
      "Rebuilt marketing site lifted demo-request conversions by 35% within the first quarter after launch.",
  },
  {
    title: "Inflink",
    images: ["/inflink.png"],
    link: "https://inflink.ae",
    category: "Client Work",
    problem:
      "Brands and creators had no shared workspace to brief, review, and approve campaigns, so approvals lived in chat threads.",
    stack: ["React", "Node.js", "MongoDB"],
    outcome:
      "Centralised campaign approvals shortened creator turnaround from roughly a week to two days.",
  },
  {
    title: "Following",
    images: ["/following.png"],
    link: "https://following.ae",
    category: "Client Work",
    problem:
      "The client needed a fast, mobile-first marketing site that non-technical staff could update without a developer.",
    stack: ["Next.js", "Node.js", "Tailwind CSS"],
    outcome:
      "Shipped a 95+ Lighthouse mobile site with an editable content layer, cutting page publishing from days to minutes.",
  },
  {
    title: "Inventory Management System",
    images: ["/thumb1.png"],
    link: "https://inventory.seebiz.com",
    category: "Internal Tools",
    problem:
      "Warehouse teams tracked stock in spreadsheets, causing overselling and hours of manual stock counting.",
    stack: ["React", "Node.js", "PostgreSQL"],
    outcome:
      "Automated cross-warehouse stock sync cut stock-count time by ~80% and reduced oversells to near zero.",
  },
  {
    title: "Islam's Final Prophet",
    images: ["/final-prophet.png"],
    link: "https://islamsfinalprophet.com",
    category: "Personal",
    problem:
      "Long-form reference content was scattered across pages, so readers lost the thread of the argument.",
    stack: ["Next.js", "Tailwind CSS"],
    outcome:
      "A static, ad-free reading experience that scores 95+ on Lighthouse and loads in under a second on mobile.",
  },
  {
    title: "Parking & Event POS",
    images: ["/pos-1.png"],
    link: null,
    status: "Live · Internal tool",
    category: "Internal Tools",
    problem:
      "Parking and event operators needed an offline-tolerant point of sale for fast, high-volume entry peaks.",
    stack: ["React", "Node.js", "PostgreSQL"],
    outcome:
      "Sub-second ticket issuance at peak entry, with takings reconciled automatically at the end of every night.",
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
  const stackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  /**
   * Cards are sticky, so as the next project slides over the current one we
   * scale, fade and blur it underneath: the "stacked deck" depth effect.
   */
  useIsoLayoutEffect(() => {
    if (reducedMotion) return;
    const stack = stackRef.current;
    if (!stack) return;

    const items = Array.from(
      stack.querySelectorAll<HTMLElement>(".project-stack-item")
    );
    if (!items.length) return;

    const mm = gsap.matchMedia();
    const contexts: gsap.Context[] = [];

    mm.add("(min-width: 768px)", () => {
      const context = gsap.context(() => {
        items.forEach((item) => {
          const card = item.querySelector<HTMLElement>(".project-card-glow");
          if (!card) return;

          gsap.fromTo(
            card,
            { scale: 1, opacity: 1, filter: "blur(0px)" },
            {
              scale: 0.9,
              opacity: 0.25,
              filter: "blur(7px)",
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });
      }, stack);

      contexts.push(context);
      const frame = requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
        cancelAnimationFrame(frame);
        context.revert();
      };
    });

    return () => {
      contexts.forEach((context) => context.revert());
      mm.revert();
    };
  }, [active, reducedMotion]);

  // Closing the modal (or filtering) changes layout height.
  useEffect(() => {
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(frame);
  }, [selected]);

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

      <div className="relative" ref={stackRef}>
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
                className={`project-stack-item relative ${
                  isLast ? "" : "h-[160vh]"
                }`}
                style={{ zIndex: index + 1 }}
              >
                <button
                  onClick={() => setSelected(project)}
                  className="glass-card project-card-glow group sticky top-20 h-[68vh] w-full overflow-hidden text-left sm:top-24 sm:h-[72vh]"
                >
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} project screenshot`}
                    fill
                    sizes="100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

                  <div className="absolute left-6 top-6 flex items-center gap-2 text-xs text-white/75">
                    <span className="font-heading">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>/</span>
                    <span>{String(visible.length).padStart(2, "0")}</span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
                    <div className="min-w-0">
                      <div className="mb-2 inline-flex rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">
                        {project.category}
                      </div>
                      <h3 className="font-heading text-2xl font-semibold text-white sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/75">
                        {project.status ?? "Live & deployed"}
                      </p>
                      {project.outcome && (
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/90">
                          {project.outcome}
                        </p>
                      )}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.stack?.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-[11px] text-white/85 backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
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

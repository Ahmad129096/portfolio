"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import {
  HiArrowUpRight,
  HiChevronLeft,
  HiChevronRight,
  HiLockClosed,
} from "react-icons/hi2";
import ProjectModal, { type ModalProject } from "@/components/ProjectModal";
import { ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/lib/motion";

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

type CardLayout = "split" | "overlay";

/**
 * Card layout switch, kept for easy revert: "split" shows the image on the
 * left and the text on the right; flip it to "overlay" to restore the old
 * full-bleed card with the text block sitting over the image.
 *
 * (The `as CardLayout` keeps TypeScript from narrowing this const to a single
 * literal, which would make the layout comparisons below error out.)
 */
const CARD_LAYOUT = "overlay" as CardLayout;

const WorkCarousel = () => {
  const [active, setActive] = useState<"All" | Category>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [index, setIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const swiperRef = useRef<SwiperClass | null>(null);
  const pointerStartX = useRef(0);
  const dragged = useRef(false);
  const reducedMotion = usePrefersReducedMotion();

  const sync = (swiper: SwiperClass) => {
    setIndex(swiper.activeIndex);
    setAtStart(swiper.isBeginning);
    setAtEnd(swiper.isEnd);
  };

  // Closing the modal restores the page scrollbar, which changes layout width.
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      swiperRef.current?.update();
    });
    return () => cancelAnimationFrame(frame);
  }, [selected]);

  const visible =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  const arrowClass = (disabled: boolean) =>
    `flex h-10 w-10 items-center justify-center rounded-full border text-muted transition hover:border-accent/50 hover:text-accent disabled:pointer-events-none disabled:opacity-30 ${
      disabled ? "border-overlay/10" : "border-overlay/20"
    }`;

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

      {/* Remounts on filter change, so the carousel always restarts at 0. */}
      <motion.div
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            sync(swiper);
            swiper.on("resize", () => sync(swiper));
            swiper.on("breakpoint", () => sync(swiper));
          }}
          onSlideChange={(swiper) => sync(swiper)}
          effect="cards"
          modules={[EffectCards]}
          slidesPerView={1}
          grabCursor
          speed={reducedMotion ? 0 : 500}
          /* The cards effect fans stacked cards past the right edge, so the
             deck sits in a centered column with room for the fan. */
          className="w-[88%] sm:w-[78%] lg:w-[68%]"
        >
          {visible.map((project, i) => {
            const badge = (
              <div className="absolute left-6 top-6 flex items-center gap-2 text-xs text-white/75">
                <span className="font-heading">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>/</span>
                <span>{String(visible.length).padStart(2, "0")}</span>
              </div>
            );

            return (
              <SwiperSlide key={project.title}>
                <button
                  onPointerDown={(e) => {
                    pointerStartX.current = e.clientX;
                    dragged.current = false;
                  }}
                  onPointerMove={(e) => {
                    // Ignore the click that ends a drag/swipe gesture.
                    if (Math.abs(e.clientX - pointerStartX.current) > 8) {
                      dragged.current = true;
                    }
                  }}
                  onClick={() => {
                    if (dragged.current) return;
                    setSelected(project);
                  }}
                  className={`glass-card project-card-glow group overflow-hidden text-left ${
                    CARD_LAYOUT === "split"
                      ? "flex h-[60vh] min-h-[460px] w-full flex-col sm:h-[540px] sm:flex-row lg:h-[600px]"
                      : "relative h-[60vh] min-h-[460px] w-full sm:h-[66vh]"
                  }`}
                >
                  {CARD_LAYOUT === "split" ? (
                    <>
                      {/* Image: left column on desktop, top block on mobile */}
                      <div className="relative h-[42%] w-full shrink-0 overflow-hidden sm:h-full sm:w-[46%]">
                        <Image
                          src={project.images[0]}
                          alt={`${project.title} project screenshot`}
                          fill
                          sizes="(min-width: 640px) 40vw, 88vw"
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/15" />
                        {badge}
                      </div>

                      {/* Text: right column on desktop, bottom block on mobile */}
                      <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <div className="mb-2 inline-flex rounded-full border border-accent/30 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-accent">
                              {project.category}
                            </div>
                            <h3 className="font-heading text-2xl font-semibold text-text sm:text-3xl">
                              {project.title}
                            </h3>
                            <p className="mt-1 text-sm text-muted">
                              {project.status ?? "Live & deployed"}
                            </p>
                          </div>
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-overlay/15 text-muted transition group-hover:border-accent/60 group-hover:text-accent">
                            {project.link ? (
                              <HiArrowUpRight />
                            ) : (
                              <HiLockClosed className="text-sm" />
                            )}
                          </span>
                        </div>
                        {project.outcome && (
                          <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
                            {project.outcome}
                          </p>
                        )}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.stack?.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-overlay/15 bg-overlay/[0.04] px-2.5 py-1 text-[11px] text-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <Image
                        src={project.images[0]}
                        alt={`${project.title} project screenshot`}
                        fill
                        sizes="(min-width: 1280px) 1200px, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

                      {badge}

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
                    </>
                  )}
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div
            className="flex items-center gap-2"
            role="group"
            aria-label="Choose a project"
          >
            {visible.map((project, i) => (
              <button
                key={project.title}
                onClick={() => swiperRef.current?.slideTo(i)}
                aria-label={`Show ${project.title}`}
                aria-pressed={i === index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-6 bg-accent"
                    : "w-1.5 bg-overlay/40 hover:bg-overlay/70"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={atStart}
              aria-label="Previous project"
              className={arrowClass(atStart)}
            >
              <HiChevronLeft />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              disabled={atEnd}
              aria-label="Next project"
              className={arrowClass(atEnd)}
            >
              <HiChevronRight />
            </button>
          </div>
        </div>
      </motion.div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default WorkCarousel;

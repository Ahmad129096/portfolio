"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiXMark,
  HiChevronLeft,
  HiChevronRight,
  HiArrowUpRight,
  HiLockClosed,
} from "react-icons/hi2";

export type ModalProject = {
  title: string;
  images: string[];
  link: string | null;
  status?: string;
  category: string;
  problem?: string;
  stack?: string[];
  outcome?: string;
};

const ProjectModal = ({
  project,
  onClose,
}: {
  project: ModalProject | null;
  onClose: () => void;
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [project]);

  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-panel relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-sm transition hover:border-white/30"
            >
              <HiXMark />
            </button>

            <div className="min-h-0 flex-1 overflow-y-auto" data-lenis-prevent>
              <div className="relative h-[300px] bg-surface sm:h-[400px]">
                <Image
                  src={project.images[index]}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  sizes="(min-width: 640px) 768px, 100vw"
                  className="object-cover"
                />

                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setIndex(
                          (i) =>
                            (i - 1 + project.images.length) %
                            project.images.length
                        )
                      }
                      aria-label="Previous image"
                      className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-sm transition hover:border-white/30"
                    >
                      <HiChevronLeft />
                    </button>
                    <button
                      onClick={() =>
                        setIndex((i) => (i + 1) % project.images.length)
                      }
                      aria-label="Next image"
                      className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-sm transition hover:border-white/30"
                    >
                      <HiChevronRight />
                    </button>
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
                      {project.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setIndex(i)}
                          aria-label={`Show image ${i + 1}`}
                          className={`h-1.5 rounded-full transition-all ${
                            i === index ? "w-5 bg-accent" : "w-1.5 bg-white/30"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="p-6 sm:p-8">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-heading text-xl font-semibold text-text">
                    {project.title}
                  </h3>
                  {project.link ? (
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.link}
                      className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-ink transition hover:bg-accent/90"
                    >
                      Visit live site
                      <HiArrowUpRight />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-md border border-overlay/10 px-4 py-2 text-sm text-muted">
                      <HiLockClosed />
                      Private project
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted">
                  {project.status ?? "Live & deployed"} · {project.category}
                </p>

                {(project.problem || project.outcome) && (
                  <div className="mt-6 grid gap-6 border-t border-overlay/10 pt-6 sm:grid-cols-2">
                    {project.problem && (
                      <div className="text-left">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                          Problem
                        </p>
                        <p className="text-sm leading-7 text-muted">
                          {project.problem}
                        </p>
                      </div>
                    )}
                    {project.outcome && (
                      <div className="text-left">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                          Outcome
                        </p>
                        <p className="text-sm leading-7 text-muted">
                          {project.outcome}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {project.stack && project.stack.length > 0 && (
                  <div className="mt-6 text-left">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-overlay/15 px-3 py-1 text-xs text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

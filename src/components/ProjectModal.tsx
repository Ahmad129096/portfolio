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
            className="glass-panel w-full max-w-3xl overflow-hidden"
          >
            <div className="relative h-[300px] bg-surface sm:h-[400px]">
              <Image
                src={project.images[index]}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                className="object-cover"
              />

              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-background/70 text-white transition hover:border-white/30"
              >
                <HiXMark />
              </button>

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setIndex(
                        (i) => (i - 1 + project.images.length) % project.images.length
                      )
                    }
                    aria-label="Previous image"
                    className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-background/70 text-white transition hover:border-white/30"
                  >
                    <HiChevronLeft />
                  </button>
                  <button
                    onClick={() => setIndex((i) => (i + 1) % project.images.length)}
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-background/70 text-white transition hover:border-white/30"
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
                <h3 className="font-heading text-xl font-semibold text-white">
                  {project.title}
                </h3>
                {project.link ? (
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                    className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background transition hover:bg-accent/90"
                  >
                    Visit live site
                    <HiArrowUpRight />
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-sm text-stone-500">
                    <HiLockClosed />
                    Private project
                  </span>
                )}
              </div>
              <p className="text-sm text-stone-500">
                {project.status ?? "Live & deployed"} · {project.category}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;

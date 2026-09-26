import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import type { CaseStudy } from "@/content/case-studies";

/**
 * Card for one case study. Shared by the homepage section and the
 * /case-studies index so both always show identical content. Pure markup,
 * so it renders in both server and client trees.
 */
const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="glass-card card-glow group flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={study.cover}
          alt={study.coverAlt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-[11px] text-white/85 backdrop-blur-sm">
          {study.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-heading text-xl font-semibold text-text transition group-hover:text-accent">
          {study.title}
        </h3>
        <p className="text-sm leading-7 text-muted line-clamp-3">
          {study.summary}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {study.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-overlay/15 px-2.5 py-1 text-[11px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-accent">
          Read the case study
          <HiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
};

export default CaseStudyCard;

import Link from "next/link";
import {
  HiCommandLine,
  HiRectangleGroup,
  HiBolt,
  HiArrowUpRight,
} from "react-icons/hi2";
import { FaWordpress } from "react-icons/fa";

const serviceData = [
  {
    icon: <HiCommandLine />,
    title: "Web App Development",
    description:
      "End-to-end engineering of fast, reliable web applications with React and Next.js — from architecture through deployment.",
    tags: ["Next.js", "React", "Node.js"],
  },
  {
    icon: <HiRectangleGroup />,
    title: "UI Systems & Interactions",
    description:
      "Turning designs into clean, reusable component systems with smooth, purposeful motion and consistent styling.",
    tags: ["Tailwind CSS", "Framer Motion", "Responsive Design"],
  },
  {
    icon: <HiBolt />,
    title: "Performance Optimization",
    description:
      "Auditing and tightening the front end for faster loads, smaller bundles, and smoother interactions.",
    tags: ["Core Web Vitals", "Asset Optimization", "Bundle Size"],
  },
  {
    icon: <FaWordpress />,
    title: "WordPress & CMS Development",
    description:
      "Building and customizing WordPress sites for businesses that need a reliable, content-driven web presence.",
    tags: ["WordPress", "Custom Themes", "Content Migration"],
  },
];

/**
 * The horizontal card track. `Services` wraps this in a ref'd container and
 * scrubs it sideways with ScrollTrigger on desktop; below `md` (or under a
 * reduced-motion preference) it falls back to native horizontal swiping.
 */
const ServiceSlider = () => (
  <>
    {serviceData.map((item, index) => (
      <article
        key={item.title}
        className="glass-card card-glow group flex w-[78vw] max-w-[340px] shrink-0 flex-col p-5 sm:w-[380px] sm:p-6 md:w-[430px]"
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-xl text-accent transition duration-300 group-hover:bg-accent group-hover:text-ink">
            {item.icon}
          </span>
          <span className="font-heading text-sm text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mb-2 font-heading text-lg font-semibold text-text">
          {item.title}
        </h3>

        <p className="mb-4 text-sm leading-7 text-muted">{item.description}</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-overlay/10 px-3 py-1 text-[11px] text-muted transition group-hover:border-overlay/25"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href="#contact"
          className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-accent transition group-hover:gap-2"
        >
          Explore scope
          <HiArrowUpRight />
        </Link>
      </article>
    ))}
  </>
);

export default ServiceSlider;

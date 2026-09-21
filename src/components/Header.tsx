"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RiGithubLine, RiLinkedinBoxLine } from "react-icons/ri";

const navData = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Work", id: "work" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Contact", id: "contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = navData
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <a
            href="#home"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 text-sm font-semibold text-accent"
          >
            A
          </a>
          <a
            href="#home"
            className="text-sm font-semibold tracking-[0.2em] text-stone-100"
          >
            AHMAD HASSAN
          </a>
        </div>

        <nav className="hidden items-center gap-8 xl:flex">
          {navData.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative px-1 py-1 text-sm transition ${
                  isActive
                    ? "text-accent"
                    : "text-stone-400 hover:text-stone-100"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ahmad129096"
            className="text-lg text-stone-400 transition hover:text-stone-100"
          >
            <RiGithubLine />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ahmad-hassan-792619140/"
            className="text-lg text-stone-400 transition hover:text-stone-100"
          >
            <RiLinkedinBoxLine />
          </a>
          <a
            href="#about"
            className="hidden h-8 w-8 overflow-hidden rounded-full border border-white/10 sm:block"
          >
            <Image
              src="/portfolio-image.png"
              width={32}
              height={32}
              alt="Ahmad Hassan"
              className="h-full w-full object-cover"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

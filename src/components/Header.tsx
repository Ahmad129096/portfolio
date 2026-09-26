"use client";
// Image removed, avatar moved to footer
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BookCallButton from "@/components/BookCallButton";
import { socialLinks } from "@/components/Socials";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center">
      <div
        className={`w-full transition-all duration-300 ease-out ${
          scrolled
            ? "mx-3 mt-3 max-w-[1200px] rounded-full border border-overlay/10 bg-surface/95 shadow-soft"
            : "max-w-full rounded-none border-b border-overlay/[0.08] bg-background/95"
        }`}
      >
        <div className="mx-auto flex container items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex shrink-0 items-center gap-3">
            <a
              href="#home"
              className={
                scrolled
                  ? "hidden"
                  : `flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 text-sm font-semibold text-accent`
              }
            >
              A
            </a>
            <a
              href="#home"
              className="whitespace-nowrap text-sm font-semibold tracking-[0.2em] text-text"
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
                    isActive ? "text-accent" : "text-muted hover:text-text"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-underline"
                      className="absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-accent"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <div className="hidden items-center gap-1 sm:flex">
              {socialLinks.slice(0, 2).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  title={link.name}
                  className="icon-link"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <BookCallButton
              variant="compact"
              className="hidden whitespace-nowrap sm:inline-flex"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

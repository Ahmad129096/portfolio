"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiGithubLine, RiLinkedinBoxLine } from "react-icons/ri";

const navData = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/work" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 text-sm font-semibold text-accent"
          >
            A
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.2em] text-stone-100"
          >
            AHMAD HASSAN
          </Link>
        </div>

        <nav className="hidden items-center gap-8 xl:flex">
          {navData.map((link) => {
            const isActive = link.path === pathname;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm transition ${
                  isActive
                    ? "text-accent"
                    : "text-stone-400 hover:text-stone-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ahmad129096"
            className="text-lg text-stone-400 transition hover:text-stone-100"
          >
            <RiGithubLine />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ahmad-hassan-792619140/"
            className="text-lg text-stone-400 transition hover:text-stone-100"
          >
            <RiLinkedinBoxLine />
          </Link>
          <Link
            href="/about"
            className="hidden h-8 w-8 overflow-hidden rounded-full border border-white/10 sm:block"
          >
            <Image
              src="/portfolio-image.png"
              width={32}
              height={32}
              alt="Ahmad Hassan"
              className="h-full w-full object-cover"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

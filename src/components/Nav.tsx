"use client";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  // {
  //   name: "testimonials",
  //   path: "/testimonials",
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-[28rem] -translate-x-1/2 px-0 xl:bottom-auto xl:left-auto xl:right-4 xl:top-1/2 xl:w-auto xl:max-w-none xl:-translate-y-1/2">
      <div className="flex items-center justify-between gap-2 rounded-full border border-white/10 bg-slate-950/80 px-3 py-2.5 text-xl backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.45)] xl:flex-col xl:gap-2 xl:px-2 xl:py-3 xl:text-lg">
        {navData.map((link, index) => {
          const isActive = link.path === pathname;

          return (
            <Link
              title={link.name}
              className={`relative flex items-center rounded-full p-2.5 transition-all duration-300 sm:p-3 ${
                isActive
                  ? "bg-accent/12 text-accent shadow-[0_8px_20px_rgba(0,0,0,0.45)]"
                  : "text-slate-300 hover:bg-white/10 hover:text-accent"
              }`}
              key={index}
              href={link.path}
            >
              {link.icon}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;

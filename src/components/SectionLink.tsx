"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type Props = {
  id: string;
  className?: string;
  children: ReactNode;
};

/**
 * In-page section anchor that also works from other routes.
 *
 * On the homepage it renders a plain `#section` link so SmoothScroll's
 * Lenis handler can ease to it. From any other route (`/case-studies/...`)
 * a bare hash would dead-end on an element that does not exist there, so
 * it links to `/#section` and the router navigates home first.
 */
const SectionLink = ({ id, className = "", children }: Props) => {
  const onHome = usePathname() === "/";

  if (onHome) {
    return (
      <a href={`#${id}`} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={`/#${id}`} className={className}>
      {children}
    </Link>
  );
};

export default SectionLink;

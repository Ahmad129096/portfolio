"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/lib/motion";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/**
 * Momentum scrolling driven by Lenis and fed into GSAP's ScrollTrigger.
 *
 * ScrollTrigger still reads the real window scroll position (Lenis animates
 * natively), so sticky positioning and the fixed header keep working.
 */
const SmoothScroll = () => {
  const reducedMotion = usePrefersReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });
    window.__lenis = lenis;

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // In-page anchors should ease, not jump.
    const onAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const element = document.querySelector(hash);
      if (!element) return;

      event.preventDefault();
      lenis.scrollTo(element as HTMLElement, {
        offset: -88,
        duration: 1.15,
      });
    };

    document.addEventListener("click", onAnchorClick);
    const refresh = () => ScrollTrigger.refresh();
    const onLoad = () => refresh();
    window.addEventListener("load", onLoad);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      window.removeEventListener("load", onLoad);
      gsap.ticker.remove(raf);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.__lenis?.scrollTo(0, { immediate: true });
    ScrollTrigger.refresh();
  }, [pathname]);

  return null;
};

export default SmoothScroll;

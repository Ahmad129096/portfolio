"use client";
import { useEffect, useLayoutEffect, useState } from "react";

/** useLayoutEffect that is silent during SSR. */
export const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** Read the OS reduced-motion preference once, then keep it in sync. */
export const usePrefersReducedMotion = () => {
  const [prefers, setPrefers] = useState(false);

  useIsoLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefers(query.matches);
    const onChange = (event: MediaQueryListEvent) => setPrefers(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return prefers;
};

/** True only for real pointing devices — used to gate the custom cursor. */
export const useFinePointer = () => {
  const [fine, setFine] = useState(false);

  useIsoLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    setFine(query.matches);
    const onChange = (event: MediaQueryListEvent) => setFine(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return fine;
};

/** Narrow viewports get the light-weight 3D fallbacks. */
export const useIsCompact = (breakpoint = 900) => {
  const [compact, setCompact] = useState(false);

  useIsoLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const query = window.matchMedia(`(max-width: ${breakpoint}px)`);
    setCompact(query.matches);
    const onChange = (event: MediaQueryListEvent) => setCompact(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [breakpoint]);

  return compact;
};

/** Fired once the intro curtain has finished revealing the page. */
export const INTRO_DONE_EVENT = "intro:done";

export const emitIntroDone = () => {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(INTRO_DONE_EVENT));
};

export const onIntroDone = (handler: () => void) => {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(INTRO_DONE_EVENT, handler);
  return () => window.removeEventListener(INTRO_DONE_EVENT, handler);
};

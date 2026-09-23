"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { useFinePointer, usePrefersReducedMotion } from "@/lib/motion";

const INTERACTIVE = "a, button, [role='button'], input, textarea, select";

/**
 * Gold trailing ring + centre dot. Only mounts on fine-pointer devices, and
 * never under a reduced-motion preference.
 */
const CustomCursor = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const finePointer = useFinePointer();
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(false);

  const enabled = finePointer && !reducedMotion;

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("has-custom-cursor");
    setActive(true);

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { ...pos };
    let hovering = 0;
    let frame = 0;

    const onMove = (event: MouseEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      gsap.set(dot, { x: target.x, y: target.y, opacity: 1 });

      const interactive = (event.target as HTMLElement | null)?.closest?.(
        INTERACTIVE
      );
      const next = interactive ? 1 : 0;
      if (next !== hovering) {
        hovering = next;
        gsap.to(ring, {
          scale: hovering ? 1.75 : 1,
          opacity: hovering ? 0.9 : 0.5,
          duration: 0.35,
          ease: "power3.out",
        });
      }
    };

    const onLeave = () => {
      gsap.to([ring, dot], { opacity: 0, duration: 0.25 });
    };

    const onEnter = () => {
      gsap.to(ring, { opacity: 0.5, duration: 0.25 });
      gsap.to(dot, { opacity: 1, duration: 0.25 });
    };

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.16;
      pos.y += (target.y - pos.y) * 0.16;
      gsap.set(ring, { x: pos.x, y: pos.y });
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[110]">
      <div
        ref={ringRef}
        className="absolute left-0 top-0 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent opacity-0"
        style={{ marginLeft: -18, marginTop: -18 }}
      />
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent opacity-0"
        style={{ marginLeft: -3, marginTop: -3 }}
      />
    </div>
  );
};

export default CustomCursor;

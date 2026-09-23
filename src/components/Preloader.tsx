"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { emitIntroDone, usePrefersReducedMotion } from "@/lib/motion";

const PANELS = [0, 1, 2, 3];

/**
 * Four-column curtain with a 0–100 counter. It locks scrolling while it is
 * up, then hands off to `intro:done` so the hero can start its reveal.
 */
const Preloader = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    if (!mounted) return;

    // Safety net: never leave the page locked, whatever happens.
    const failsafe = window.setTimeout(() => {
      emitIntroDone();
      setMounted(false);
    }, 6000);

    const unlock = () => {
      document.documentElement.classList.remove("is-locked");
      window.__lenis?.start();
    };

    if (reducedMotion) {
      window.clearTimeout(failsafe);
      unlock();
      emitIntroDone();
      setMounted(false);
      return;
    }

    document.documentElement.classList.add("is-locked");
    window.__lenis?.stop();

    const progress = { value: 0 };
    const write = (value: number) => {
      const rounded = Math.round(value);
      if (counterRef.current) counterRef.current.textContent = String(rounded);
      if (barRef.current) barRef.current.style.transform = `scaleX(${rounded / 100})`;
    };
    write(0);

    const timeline = gsap.timeline({
      onComplete: () => {
        window.clearTimeout(failsafe);
        unlock();
        emitIntroDone();
        setMounted(false);
      },
    });

    timeline
      .to(progress, {
        value: 100,
        duration: 1.7,
        ease: "power2.inOut",
        onUpdate: () => write(progress.value),
      })
      .to(
        innerRef.current,
        { opacity: 0, y: -24, duration: 0.5, ease: "power3.in" },
        "-=0.25"
      )
      .to(
        rootRef.current?.querySelectorAll(".preloader-panel") ?? [],
        {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
          stagger: 0.07,
        },
        "-=0.1"
      );

    return () => {
      window.clearTimeout(failsafe);
      timeline.kill();
      unlock();
    };
  }, [mounted, reducedMotion]);

  if (!mounted) return null;

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="fixed inset-0 z-[100] overflow-hidden"
    >
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4">
        {PANELS.map((panel) => (
          <div
            key={panel}
            className="preloader-panel h-full w-full border-r border-overlay/[0.06] bg-background"
          />
        ))}
      </div>

      <div
        ref={innerRef}
        className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center"
      >
        <p className="text-[11px] uppercase tracking-[0.42em] text-muted">
          Ahmad Hassan — Portfolio 2026
        </p>

        <span
          ref={counterRef}
          className="font-heading text-[clamp(4.5rem,20vw,13rem)] font-semibold leading-none tracking-tighter text-accent tabular-nums"
        >
          0
        </span>

        <div className="h-px w-56 max-w-[70vw] overflow-hidden bg-overlay/15">
          <span
            ref={barRef}
            className="block h-full w-full origin-left scale-x-0 bg-accent"
          />
        </div>

        <p className="text-xs uppercase tracking-[0.3em] text-muted">
          Loading experience
        </p>
      </div>
    </div>
  );
};

export default Preloader;

"use client";
import { useRef } from "react";
import ServiceSlider from "@/components/ServiceSlider";
import SplitReveal from "@/components/SplitReveal";
import { HiClock } from "react-icons/hi2";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useIsoLayoutEffect, usePrefersReducedMotion } from "@/lib/motion";

const collaborationModes = [
  { number: "01", label: "Freelance Contracts" },
  { number: "02", label: "Full Project Builds" },
  { number: "03", label: "Ongoing Support & Maintenance" },
];

/*
 * These three queries partition every desktop viewport and mirror the media
 * queries in globals.css exactly, so the layout classes the JS adds always
 * agree with the CSS that consumes them.
 *
 *   ≥1024w × ≥760h  → pinned: fills 100vh, scrolls the track sideways
 *   ≥1024w × <760h  → driven: natural height, track moves with page scroll
 *   768–1023w       → driven: same, but the header stacks above the cards
 *   <768w           → untouched: native horizontal swipe
 */
const PIN_QUERY = "(min-width: 1024px) and (min-height: 760px)";
const DRIVE_QUERIES = [
  "(min-width: 768px) and (max-width: 1023px)",
  "(min-width: 1024px) and (max-height: 759px)",
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useIsoLayoutEffect(() => {
    // Reduced motion: no classes, no tweens — plain horizontal swiping.
    if (reducedMotion) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    const setProgress = (value: number) => {
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${value})`;
      }
    };

    // When pinned, the track bleeds past the container to the viewport edge,
    // so it has more room than the container itself.
    const distance = (fullBleed: boolean) => {
      const viewport = track.parentElement;
      if (!viewport) return 1;
      const available = fullBleed
        ? window.innerWidth - viewport.getBoundingClientRect().left
        : viewport.clientWidth;
      return Math.max(track.scrollWidth - available, 1);
    };

    const mount = (mode: "pinned" | "driven") => {
      const fullBleed = mode === "pinned";
      let tween: gsap.core.Tween | undefined;

      try {
        const scrollTrigger: ScrollTrigger.Vars = fullBleed
          ? {
              trigger: section,
              start: "top top",
              end: () => `+=${distance(true) + 1}`,
              pin: true,
              anticipatePin: 1,
              scrub: 0.7,
              invalidateOnRefresh: true,
              onUpdate: (self) => setProgress(self.progress),
            }
          : {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.7,
              invalidateOnRefresh: true,
              onUpdate: (self) => setProgress(self.progress),
            };

        tween = gsap.to(track, {
          x: () => -distance(fullBleed),
          ease: "none",
          scrollTrigger,
        });
      } catch {
        tween = undefined;
      }

      // Only claim the viewport-filling layout once the tween actually
      // exists — otherwise the cards would be clipped with nothing to move
      // them into view.
      if (!tween) return undefined;

      section.classList.add(
        mode === "pinned" ? "is-pinned" : "is-driven"
      );

      const frame = requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
        cancelAnimationFrame(frame);
        tween?.scrollTrigger?.kill();
        tween?.kill();
        section.classList.remove("is-pinned", "is-driven");
        gsap.set(track, { x: 0 });
        setProgress(0);
      };
    };

    mm.add(PIN_QUERY, () => mount("pinned"));
    DRIVE_QUERIES.forEach((query) =>
      mm.add(query, () => mount("driven"))
    );

    return () => mm.revert();
  }, [reducedMotion]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="services-stage relative scroll-mt-20 py-24"
    >
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted">
              Services
            </p>

            <SplitReveal
              as="h2"
              delay={0.05}
              className="mb-3 font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl xl:text-[2.5rem]"
            >
              <span className="text-accent">Focused support</span> for startup
              and product teams.
            </SplitReveal>

            <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">
              Partnering with startups, agencies, and product teams to build
              resilient React, Next.js, and Node.js applications, clean
              component systems, and interfaces that hold up under real use.
            </p>
          </div>

          <div className="shrink-0 md:max-w-[320px] lg:max-w-none">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted">
              Modes of collaboration
            </p>
            <div className="flex flex-wrap gap-2">
              {collaborationModes.map((mode) => (
                <span
                  key={mode.number}
                  className="inline-flex items-center gap-2 rounded-full border border-overlay/15 px-3.5 py-2 text-xs"
                >
                  <span className="text-accent">{mode.number}</span>
                  <span className="font-medium text-text">{mode.label}</span>
                </span>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted">
              <span className="inline-flex items-center gap-1.5">
                <HiClock className="text-sm" />
                Typical sprint: 2–6 weeks · Fixed-scope or ongoing
              </span>
              <span className="text-accent">
                Availability: Open for projects
              </span>
            </div>
          </div>
        </div>

        <div className="services-viewport -mx-4 overflow-x-auto px-4 pb-3">
          <div ref={trackRef} className="flex w-max gap-5">
            <ServiceSlider />
          </div>
        </div>

        <div className="mt-5 h-px w-full overflow-hidden bg-overlay/10">
          <span
            ref={progressRef}
            className="block h-full w-full origin-left scale-x-0 bg-accent"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

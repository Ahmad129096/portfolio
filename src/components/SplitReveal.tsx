"use client";
import {
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import {
  useIsoLayoutEffect,
  usePrefersReducedMotion,
} from "@/lib/motion";

type Tag = "h1" | "h2" | "h3" | "p" | "span" | "div";

type Token = { type: "unit" | "space"; value: string };

type Props = {
  children: ReactNode;
  as?: Tag;
  className?: string;
  /** `load` reveals on mount, `scroll` waits for ScrollTrigger. */
  trigger?: "load" | "scroll";
  delay?: number;
  stagger?: number;
  /** Split into characters instead of words. */
  granular?: boolean;
};

const tokenize = (text: string, granular: boolean): Token[] => {
  if (granular) {
    return Array.from(text).map((char) => ({
      type: /^\s$/.test(char) ? ("space" as const) : ("unit" as const),
      value: char,
    }));
  }
  return text
    .split(/(\s+)/)
    .filter((chunk) => chunk !== "")
    .map((chunk) => ({
      type: /^\s+$/.test(chunk) ? ("space" as const) : ("unit" as const),
      value: chunk,
    }));
};

/**
 * Splits text into masked words (or characters) while preserving inline
 * markup, so `<span className="text-accent">` keeps its colour.
 *
 * Nothing is hidden unless we are certain we can animate it back in, so the
 * copy always stays readable if GSAP fails to load.
 */
const SplitReveal = ({
  children,
  as = "h2",
  className = "",
  trigger = "scroll",
  delay = 0,
  stagger = 0.055,
  granular = false,
}: Props) => {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const armed = useRef(false);

  const splitNode = (node: ReactNode, keyBase: string): ReactNode => {
    if (typeof node === "string") {
      return tokenize(node, granular).map((token, index) => {
        const key = `${keyBase}-${index}`;
        if (token.type === "space") return token.value;
        return (
          <span key={key} className="split-mask">
            <span className="split-unit">{token.value}</span>
          </span>
        );
      });
    }

    if (Array.isArray(node)) {
      return node.map((child, index) => splitNode(child, `${keyBase}-${index}`));
    }

    if (isValidElement(node)) {
      const element = node as ReactElement<{ children?: ReactNode }>;
      if (element.props.children === undefined) return node;
      return cloneElement(element, {
        key: element.key ?? keyBase,
        children: splitNode(element.props.children, `${keyBase}-el`),
      });
    }

    return node;
  };

  const markup = splitNode(children, "root");

  // Runs once on mount: hide the units only when we know we can reveal them.
  useIsoLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const units = element.querySelectorAll<HTMLElement>(".split-unit");
    if (!units.length) return;

    gsap.set(units, { yPercent: 135 });
    armed.current = true;
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element || reducedMotion || !armed.current) return;

    const units = element.querySelectorAll<HTMLElement>(".split-unit");
    if (!units.length) return;

    const play = (extraDelay = 0) => {
      gsap.to(units, {
        yPercent: 0,
        duration: 1.05,
        ease: "power4.out",
        stagger,
        delay: delay + extraDelay,
        overwrite: true,
      });
    };

    if (trigger === "load") {
      // No intro curtain anymore: reveal as soon as the section mounts.
      play();
      return;
    }

    const context = gsap.context(() => {
      ScrollTrigger.create({
        trigger: element,
        start: "top 88%",
        once: true,
        onEnter: () => play(),
      });
    }, element);

    return () => context.revert();
  }, [delay, reducedMotion, stagger, trigger]);

  const Tag = as as ElementType;

  return (
    <Tag ref={ref} className={`split-root ${className}`}>
      {markup}
    </Tag>
  );
};

export default SplitReveal;

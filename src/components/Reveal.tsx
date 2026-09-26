"use client";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/variants";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/**
 * Scroll-in fade-up wrapper matching the site's motion language, for pages
 * that are server components and only need the reveal (no variants of
 * their own).
 */
const Reveal = ({ children, delay = 0, className = "" }: Props) => (
  <motion.div
    variants={fadeIn("up", delay)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    className={className}
  >
    {children}
  </motion.div>
);

export default Reveal;

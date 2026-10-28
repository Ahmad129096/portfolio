"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SplitReveal from "@/components/SplitReveal";
import { fadeIn } from "@/app/variants";

const nodes = [
  {
    id: "react",
    title: "React Patterns",
    summary: "Composition, memoization, and state boundaries that avoid re-renders at scale.",
    details: "Prefers derived state, memoized selectors, and virtualization for data-dense tables. Keeps effects minimal and side effects isolated.",
  },
  {
    id: "next",
    title: "Next.js Delivery",
    summary: "Server-first rendering with strict caching for fast, predictable loads.",
    details: "Uses App Router with route handlers where it makes sense, sensible caching, and progressive enhancement for real users.",
  },
  {
    id: "node",
    title: "Node.js API Structure",
    summary: "Thin controllers, explicit validation, and predictable error shapes.",
    details: "Services hold business rules, data access stays isolated, and auth/roles are enforced at the boundary.",
  },
  {
    id: "db",
    title: "PostgreSQL Optimization",
    summary: "Indexes, joins, and query plans that keep reports fast as data grows.",
    details: "Looks at EXPLAIN (ANALYZE), narrows result sets server-side, and avoids N+1s with joins or batched queries.",
  },
  {
    id: "data",
    title: "Data Modeling",
    summary: "Correctness first: invariants, constraints, and auditability for ledgers.",
    details: "Treats money and history as facts. Enforces checks in the schema where cheap, and in code where necessary.",
  },
  {
    id: "perf",
    title: "Performance Mindset",
    summary: "Measure, fix the bottleneck, verify with numbers.",
    details: "Targets the query or payload, not animation. 100+ rows under 2s is a constraint, not a goal.",
  },
];

const EngineeringEngine = () => {
  const [active, setActive] = useState(nodes[0]);

  return (
    <section id="engineering" className="relative scroll-mt-20 pb-24 pt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn("up", 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted">
            Engineering Engine
          </p>
          <SplitReveal as="h2" className="h2 mb-4" delay={0.05}>
            Depth you can <span className="text-accent">inspect.</span>
          </SplitReveal>
          <p className="text-base text-muted sm:text-lg">
            Instead of a badge wall, here are the areas I reach for when latency,
            correctness, or messy data starts getting in the way.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            variants={fadeIn("up", 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 p-6 sm:p-8"
          >
            <div className="pointer-events-none absolute -left-20 top-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 bottom-0 h-44 w-44 rounded-full bg-accent/5 blur-3xl" />
            <div className="relative grid gap-3 sm:grid-cols-2">
              {nodes.map((node) => {
                const isActive = active.id === node.id;
                return (
                  <button
                    key={node.id}
                    onMouseEnter={() => setActive(node)}
                    onFocus={() => setActive(node)}
                    onClick={() => setActive(node)}
                    className={`group relative flex flex-col gap-2 rounded-xl border px-4 py-4 text-left transition ${
                      isActive
                        ? "border-accent/60 bg-accent/10"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-medium">{node.title}</p>
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition ${
                          isActive ? "bg-accent shadow-[0_0_0_6px_rgba(94,234,212,0.08)]" : "bg-muted/60"
                        }`}
                      />
                    </div>
                    <p className="text-sm text-muted">{node.summary}</p>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="glass-card relative overflow-hidden p-6 sm:p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.25em] text-muted">
                Focus
              </p>
              <span className="rounded-full border border-accent/40 px-3 py-1 text-xs uppercase tracking-[0.25em] text-accent">
                {active.title}
              </span>
            </div>
            <h3 className="mb-3 text-2xl font-semibold sm:text-3xl">
              {active.title}
            </h3>
            <p className="mb-6 text-lg text-muted">{active.summary}</p>
            <div className="rounded-xl border border-white/10 bg-black/40 p-5">
              <p className="text-sm leading-relaxed text-foreground/90">
                {active.details}
              </p>
            </div>
            <p className="mt-6 text-sm text-muted">
              Measure first. Fix the bottleneck. Prove it with a number.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringEngine;

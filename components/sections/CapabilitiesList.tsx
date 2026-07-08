"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const capabilities = [
  {
    tag: "Module 01",
    category: "Ingestion",
    name: "Fan-Out",
    color: "#B794FF",
    body: "Parallel drafting across Tier-1 neural nodes. Every model answers independently, with no visibility into the others' output.",
  },
  {
    tag: "Module 02",
    category: "Cross-Verification",
    name: "Orchestrate",
    color: "#22D3EE",
    body: "Multi-vector dimensional cross-verification. Drafts are laid across the same axes so disagreement becomes visible instead of hidden.",
  },
  {
    tag: "Module 03",
    category: "Synthesis",
    name: "Judge",
    color: "#F472B6",
    body: "Surgical consensus stitching via a proprietary node. The strongest passages from each draft are merged into one coherent answer.",
  },
  {
    tag: "Module 04",
    category: "Validation",
    name: "Verify",
    color: "#FBBF24",
    body: "Sandboxed execution and self-healing repair. Generated code is run, not just reviewed, before it reaches you.",
  },
  {
    tag: "Module 05",
    category: "Delivery",
    name: "Scale",
    color: "#60A5FA",
    body: "Optimized delivery to global endpoints, triaged by request complexity so simple queries stay fast and complex ones stay thorough.",
  },
];

export default function CapabilitiesList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="capabilities" className="relative px-6 py-32 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-6">
          <h2 className="font-display text-4xl font-medium tracking-tight sm:text-6xl">
            Featured <span className="text-gradient-swarm">Capabilities</span>
          </h2>
          <span className="hidden font-mono text-xs uppercase tracking-widest text-white/30 sm:block">
            The Swarm Intelligence Pipeline
          </span>
        </div>

        <div className="flex flex-col">
          {capabilities.map((cap, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.button
                key={cap.name}
                data-cursor="View"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group w-full border-b border-white/10 py-8 text-left"
              >
                <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                  <span className="font-mono text-xs uppercase tracking-widest text-white/30 sm:w-32">
                    {cap.tag}
                  </span>
                  <h3
                    className="font-display text-3xl font-medium tracking-tight transition-colors sm:flex-1 sm:text-5xl"
                    style={{ color: isOpen ? cap.color : undefined }}
                  >
                    {cap.name}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-widest text-white/30">
                    {cap.category}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="text-2xl text-white/40"
                  >
                    +
                  </motion.span>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pt-6 font-body text-base leading-relaxed text-white/60 sm:pl-32">
                    {cap.body}
                  </p>
                </motion.div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

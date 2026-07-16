"use client";

import { motion } from "framer-motion";

const segments = [
  { label: "Reasoning Core (GPT-4o)", value: 30, color: "#B794FF" },
  { label: "Linguistic Context (Claude 3.5)", value: 28, color: "#8B5CF6" },
  { label: "Semantic Breadth (Gemini 1.5)", value: 24, color: "#5B3FA0" },
  { label: "Synthesis Node (Proprietary)", value: 18, color: "#334155" },
];

const RADIUS = 70;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function Diversity() {
  let cumulative = 0;

  return (
    <section className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div>
          <h2 className="mb-10 font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Orchestration <span className="text-gradient-nodebeta">Diversity</span>
          </h2>

          <ul className="flex flex-col gap-4">
            {segments.map((seg, i) => (
              <motion.li
                key={seg.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <span
                  className="h-3 w-3 flex-shrink-0 rounded-sm"
                  style={{ backgroundColor: seg.color }}
                />
                <span className="font-body text-sm text-white/70">
                  {seg.label}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative h-64 w-64">
            <svg viewBox="0 0 180 180" className="h-full w-full -rotate-90">
              <circle
                cx={90}
                cy={90}
                r={RADIUS}
                fill="none"
                stroke="#161619"
                strokeWidth={20}
              />
              {segments.map((seg, i) => {
                const dash = (seg.value / 100) * CIRCUMFERENCE;
                const offset = (cumulative / 100) * CIRCUMFERENCE;
                cumulative += seg.value;
                return (
                  <motion.circle
                    key={seg.label}
                    cx={90}
                    cy={90}
                    r={RADIUS}
                    fill="none"
                    stroke={seg.color}
                    strokeWidth={20}
                    strokeDasharray={`${dash} ${CIRCUMFERENCE - dash}`}
                    initial={{ strokeDashoffset: CIRCUMFERENCE }}
                    whileInView={{ strokeDashoffset: -offset }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  />
                );
              })}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-3xl font-bold">N=3+1</span>
              <span className="coord-label mt-1">NodeBeta Nodes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

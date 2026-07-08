"use client";

import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section
      id="founder"
      className="relative border-t border-void-line px-6 py-32 sm:py-44"
    >
      <div className="mx-auto flex max-w-6xl flex-col">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="module-band coord-label inline-block w-fit"
        >
          Founder &amp; Sole Architect
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-display text-[13vw] font-medium uppercase leading-[0.9] tracking-tighter text-white sm:text-[8vw] lg:text-[6.5vw]"
        >
          Mike Ronald
          <br />
          Lakra
        </motion.h2>

        <p className="mt-4 font-body text-lg text-swarm-bright">
          Forging the Democracy of Algorithms
        </p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-10 h-px w-full origin-left bg-white/15"
        />

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <p className="font-body text-lg text-white/70 sm:col-span-2">
            From architectural blueprint to production-grade deployment, Mike
            engineered NexusForge to solve the inherent flaws of monolithic
            intelligence. Every line of backend routing logic and
            consensus-stitching protocol has been forged with raw technical
            discipline.
          </p>
          <div className="flex flex-col gap-1 font-mono text-xs uppercase tracking-widest text-white/40 sm:items-end sm:text-right">
            <span>Founder &amp; Sole Architect</span>
            <span>NexusForge</span>
          </div>
        </div>
      </div>
    </section>
  );
}

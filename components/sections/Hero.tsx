"use client";

import { motion } from "framer-motion";

const headline = ["Architecting the", "Future of", "Intelligence."];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const line = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 text-center">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />

      <motion.span
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="module-band coord-label relative z-10 mb-6"
      >
        Proprietary Architecture Briefing
      </motion.span>

      <motion.h1
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
      >
        {headline.map((text) => (
          <span key={text} className="block overflow-hidden">
            <motion.span variants={line} className="block text-gradient-swarm">
              {text}
            </motion.span>
          </span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mt-8 max-w-xl text-balance font-body text-lg text-white/60"
      >
        NexusForge — Swarm AI Engine
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="relative z-10 mt-16 flex flex-col items-center gap-2"
      >
        <span className="coord-label">Scroll to explore</span>
        <div className="h-10 w-px bg-gradient-to-b from-swarm-core to-transparent" />
      </motion.div>
    </section>
  );
}

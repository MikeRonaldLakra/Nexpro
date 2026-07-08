"use client";

import { motion } from "framer-motion";

export default function Closing() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center border-t border-void-line px-6 text-center">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="coord-label mb-6"
      >
        Phase One Deployment Complete
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-6xl font-bold tracking-tight text-gradient-swarm sm:text-8xl"
      >
        Questions?
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="my-8 h-px w-40 bg-white/20"
      />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="font-body text-lg font-medium text-swarm-bright"
      >
        Architecting the Future of Intelligence.
      </motion.p>

      <p className="mt-10 font-mono text-xs uppercase tracking-widest text-white/30">
        NexusForge © {new Date().getFullYear()} // Swarm AI Engine
      </p>
    </section>
  );
}

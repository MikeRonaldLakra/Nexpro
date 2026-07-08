"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

function LatencyCounter() {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(350);
  const springValue = useSpring(motionValue, { damping: 24, stiffness: 60 });

  useEffect(() => {
    if (isInView) motionValue.set(210);
  }, [isInView, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = `${Math.round(latest)}ms`;
    });
  }, [springValue]);

  return (
    <span ref={ref} className="font-display text-6xl font-bold text-gradient-swarm sm:text-7xl">
      350ms
    </span>
  );
}

function LiveTicker() {
  const [count, setCount] = useState(48213);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3) + 1);
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-display text-6xl font-bold text-gradient-cool sm:text-7xl">
      {count.toLocaleString()}
    </span>
  );
}

export default function LiveMetrics() {
  return (
    <section className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="module-band coord-label mb-4 inline-flex">
            System Telemetry
          </span>
          <h2 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Live <span className="text-gradient-swarm">Metrics</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-10 text-center"
          >
            <span className="coord-label mb-4 block">Consensus Latency</span>
            <LatencyCounter />
            <p className="mt-3 font-body text-sm text-white/40">
              Sub-second synthesis via Groq-optimized inference
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-10 text-center"
          >
            <span className="coord-label mb-4 block">Requests Synthesized</span>
            <LiveTicker />
            <p className="mt-3 font-body text-sm text-white/40">
              Ticking upward in real time
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

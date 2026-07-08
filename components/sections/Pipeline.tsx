"use client";

import { useLayoutEffect, useRef, useState } from "react";

const steps = [
  { n: "01", name: "Fan-Out", body: "Parallel drafting across Tier-1 neural nodes." },
  { n: "02", name: "Orchestrate", body: "Multi-vector dimensional cross-verification." },
  { n: "03", name: "Judge", body: "Surgical consensus stitching via proprietary node." },
  { n: "04", name: "Verify", body: "Sandboxed execution and self-healing repair." },
  { n: "05", name: "Scale", body: "Optimized delivery to global endpoints." },
];

export default function Pipeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useLayoutEffect(() => {
    let ctx: { revert: () => void } | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const gsapCtx = gsap.context(() => {
        if (!sectionRef.current || !trackRef.current) return;

        gsap.fromTo(
          trackRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=150%",
              scrub: 0.5,
              pin: true,
              onUpdate: (self) => {
                const step = Math.min(
                  steps.length - 1,
                  Math.floor(self.progress * steps.length)
                );
                setActiveStep(step);
              },
            },
          }
        );
      }, sectionRef);

      ctx = gsapCtx;
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6"
    >
      <span className="module-band coord-label mb-6">The Swarm Intelligence Pipeline</span>
      <h2 className="mb-20 text-center font-display text-3xl font-medium tracking-tight sm:text-5xl">
        Five stages. <span className="text-gradient-swarm">One synthesis.</span>
      </h2>

      <div className="relative w-full max-w-5xl">
        <div className="absolute left-0 top-6 h-px w-full bg-white/10" />
        <div
          ref={trackRef}
          className="absolute left-0 top-6 h-px w-full bg-gradient-to-r from-swarm-dim via-swarm-core to-swarm-bright"
          style={{ transform: "scaleX(0)" }}
        />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-5">
          {steps.map((step, i) => {
            const isActive = i <= activeStep;
            return (
              <div key={step.n} className="flex flex-col items-center text-center">
                <div
                  className={`relative z-10 mb-5 h-3 w-3 rounded-full transition-all duration-500 ${
                    isActive
                      ? "scale-125 bg-swarm-bright shadow-[0_0_18px_4px_rgba(139,92,246,0.7)]"
                      : "bg-white/20"
                  }`}
                />
                <span className="coord-label mb-2">Step {step.n}</span>
                <h3
                  className={`font-display text-lg font-medium transition-colors duration-500 sm:text-xl ${
                    isActive ? "text-gradient-swarm" : "text-white/40"
                  }`}
                >
                  {step.name}
                </h3>
                <p
                  className={`mt-2 max-w-[16ch] text-sm transition-colors duration-500 ${
                    isActive ? "text-white/60" : "text-white/25"
                  }`}
                >
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

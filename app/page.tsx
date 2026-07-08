"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, motionValue } from "framer-motion";
import dynamic from "next/dynamic";

const Background = dynamic(() => import("@/components/Background"), { ssr: false });
const Cursor = dynamic(() => import("@/components/Cursor"), { ssr: false });
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Immersive Scroll Tracking for Pinned Storytelling
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Active Theory Style Spatial Transformations
  const monolithScale = useTransform(smoothProgress, [0, 0.25], [1, 15]);
  const monolithOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const textXLeft = useTransform(smoothProgress, [0.15, 0.4], ["0%", "-150%"]);
  const textXRight = useTransform(smoothProgress, [0.15, 0.4], ["0%", "150%"]);
  
  // Pipeline Step Activations (Dogstudio-inspired layout switches)
  const pipelineY = useTransform(smoothProgress, [0.35, 0.6], ["100vh", "0vh"]);
  const pipelineStickyY = useTransform(smoothProgress, [0.6, 0.8], ["0vh", "-100vh"]);
  
  // Benchmarks Interactive Matrix Tracking
  const chartHeight1 = useTransform(smoothProgress, [0.65, 0.75], ["0%", "98%"]);
  const chartHeight2 = useTransform(smoothProgress, [0.65, 0.75], ["0%", "85%"]);
  const chartHeight3 = useTransform(smoothProgress, [0.65, 0.75], ["0%", "82%"]);

  // Interactive Mouse Coordinates Tracking (Active Theory UI Element)
  const mouseX = motionValue(0);
  const mouseY = motionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  return (
    <div 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="relative bg-[#040306] text-white selection:bg-swarm-core overflow-hidden min-h-[500vh]"
    >
      <Cursor />
      <Background />
      <Navbar />

      {/* ACTIVE THEORY STYLE: Floating HUD (Heads-Up Display) Meta Metrics */}
      <div className="fixed top-28 left-8 z-40 hidden lg:block font-mono text-[10px] tracking-[0.25em] text-white/30 uppercase pointer-events-none">
        <div>SYS_STATUS // ACTIVE</div>
        <div className="mt-1">MATRIX_CORE // VER_15.0_R19</div>
      </div>
      <div className="fixed bottom-8 right-8 z-40 hidden lg:block font-mono text-[10px] tracking-[0.25em] text-white/30 uppercase pointer-events-none">
        <div>LOC_COORD // 22.1998° N</div>
        <div className="mt-1">ENGINE // SWARM_INIT</div>
      </div>

      /* ========================================================
         ACT I: THE MONOLITH BREAKDOWN (0% - 25% Scroll)
         ======================================================== */
      <section className="sticky top-0 h-screen w-full flex items-center justify-center z-20 overflow-hidden">
        <motion.div 
          style={{ scale: monolithScale, opacity: monolithOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          {/* Massive brutalist layout mask element mimicking Dogstudio core portals */}
          <div className="w-[40vw] h-[40vw] rounded-full border border-white/5 bg-gradient-to-b from-swarm-core/10 to-transparent blur-xl" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-30 text-center">
          <motion.div style={{ x: textXLeft }} className="overflow-hidden">
            <h1 className="font-display text-[9vw] font-bold uppercase tracking-tighter leading-[0.85] mb-2 text-white/90">
              Architecting
            </h1>
          </motion.div>
          
          <motion.div style={{ scale: useTransform(smoothProgress, [0, 0.2], [1, 0.8]) }}>
            <h1 className="font-display text-[11vw] font-bold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-swarm-bright to-swarm-dim leading-none">
              The Future
            </h1>
          </motion.div>

          <motion.div style={{ x: textXRight }} className="overflow-hidden mt-2">
            <h1 className="font-display text-[9vw] font-bold uppercase tracking-tighter leading-[0.85] text-white/90">
              Of Intelligence
            </h1>
          </motion.div>

          <motion.div 
            style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
            className="mt-16 flex justify-center gap-4 text-xs font-mono uppercase tracking-[0.3em] text-white/40"
          >
            <span>Scroll to Initialize Engine</span>
          </motion.div>
        </div>
      </section>

      /* ========================================================
         ACT II: THE RELIABILITY CRISIS MATRICES (25% - 45% Scroll)
         ======================================================== */
      <section className="sticky top-0 h-screen w-full flex items-center z-20 bg-[#040306]/95 backdrop-blur-md border-t border-white/5">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs text-red-500 tracking-[0.4em] uppercase block mb-4">// Systemic Crisis</span>
            <h2 className="font-display text-5xl lg:text-7xl uppercase font-bold tracking-tight mb-8 leading-none">
              Monolithic <br /><span className="text-white/40">Fragility.</span>
            </h2>
            <p className="text-white/50 text-lg font-light leading-relaxed max-w-md">
              Single frontier models suffer from systematic bias, brittle hallucination vectors, and uncalibrated confidence. Relying on one model is an architectural vulnerability in production environments.
            </p>
          </div>

          <div className="lg:col-span-2 flex justify-center text-white/10 font-display text-8xl font-black">
            VS
          </div>

          <div className="lg:col-span-5 border-l border-swarm-core/20 pl-8 lg:pl-16 relative">
            <div className="absolute left-0 top-0 h-16 w-px bg-swarm-bright shadow-[0_0_15px_#B794FF]" />
            <span className="font-mono text-xs text-swarm-bright tracking-[0.4em] uppercase block mb-4">// Paradigm Shift</span>
            <h2 className="font-display text-5xl lg:text-7xl uppercase font-bold tracking-tight mb-8 leading-none text-swarm-bright">
              Swarm <br /><span className="text-white">Orchestration.</span>
            </h2>
            <p className="text-white/80 text-lg font-light leading-relaxed max-w-md">
              NexusForge forces algorithmic democracy. By orchestrating parallel neural pathways, we treat disagreement as a signal and consensus as a mandate for factual truth.
            </p>
          </div>
        </div>
      </section>

      /* ========================================================
         ACT III: THE FIVE-PHASE SWARM RUNTIME (45% - 65% Scroll)
         ======================================================== */
      <motion.section 
        style={{ y: pipelineY }} 
        className="sticky top-0 h-screen w-full bg-[#09070f] z-30 flex items-center overflow-hidden border-t border-white/10"
      >
        <div className="container mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-6">
            <div>
              <span className="font-mono text-xs text-swarm-bright tracking-[0.4em] uppercase block mb-2">Module 01 // Pipeline</span>
              <h2 className="font-display text-5xl lg:text-8xl font-bold uppercase tracking-tighter leading-none">
                The Swarm Runtime
              </h2>
            </div>
            <div className="font-mono text-[11px] text-white/40 uppercase tracking-widest text-left lg:text-right">
              Arbitration over simple generation. <br />Served over specialized real-time nodes.
            </div>
          </div>

          {/* Active Theory Style Instrument Control Interface Layout */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { phase: "01", name: "Fan-Out", detail: "Parallel drafting across Tier-1 neural nodes." },
              { phase: "02", name: "Orchestrate", detail: "Multi-vector dimensional cross-verification." },
              { phase: "03", name: "Judge", detail: "Surgical consensus stitching via proprietary node." },
              { phase: "04", name: "Verify", desc: "Sandboxed Paths", detail: "Sandboxed execution and self-healing repair." },
              { phase: "05", name: "Scale", detail: "Optimized delivery to global endpoints." }
            ].map((p, idx) => (
              <div key={idx} className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl relative overflow-hidden group hover:bg-white/[0.04] hover:border-swarm-core/40 transition-all duration-500">
                <div className="absolute top-0 left-0 w-12 h-px bg-swarm-bright opacity-40" />
                <div className="font-mono text-xs text-swarm-bright mb-6">{p.phase} // LAYER</div>
                <h3 className="font-display text-2xl uppercase font-bold text-white mb-3 tracking-tight">{p.name}</h3>
                <p className="text-white/40 text-xs font-light leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      /* ========================================================
         ACT IV: THE DRACO CRITICAL MATRIX (65% - 85% Scroll)
         ======================================================== */
      <section className="sticky top-0 h-screen w-full bg-[#020203] z-30 flex items-center border-t border-white/5">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center w-full">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs text-swarm-bright tracking-[0.4em] uppercase block mb-4">Empirical Validation</span>
            <h2 className="font-display text-5xl lg:text-7xl font-bold uppercase tracking-tight mb-6 leading-none">
              Factual <br /><span className="gradient-text italic">Integrity</span>
            </h2>
            <p className="text-white/50 text-sm font-light leading-relaxed mb-8">
              Benchmarks based on modified DRACO (Deep Research Accuracy, Completeness, and Objectivity) metrics. Swarm architecture outperforms single-model monolithic baselines by ~13.8%.
            </p>
            <div className="p-4 bg-white/[0.02] border border-white/5 font-mono text-[11px] text-white/40 rounded-lg">
              CORE METRIC // PARALLEL REASONING OVERRULE
            </div>
          </div>

          {/* Dogstudio Premium Data Dashboard Visualizers */}
          <div className="lg:col-span-8 grid grid-cols-3 gap-6 h-[50vh] items-end relative border-b border-white/10 pb-4">
            {/* NexusForge Column */}
            <div className="flex flex-col items-center h-full justify-end group">
              <motion.div 
                style={{ height: chartHeight1 }}
                className="w-full bg-gradient-to-t from-swarm-dim via-swarm-core to-swarm-bright rounded-t-xl relative shadow-[0_0_40px_rgba(139,92,246,0.2)]"
              >
                <span className="absolute top-4 left-1/2 -translate-x-1/2 font-display text-2xl lg:text-4xl font-black text-white">98%</span>
              </motion.div>
              <span className="font-mono text-xs uppercase tracking-wider text-swarm-bright mt-4 text-center font-bold">NexusForge Swarm</span>
            </div>

            {/* Claude Column */}
            <div className="flex flex-col items-center h-full justify-end opacity-40 hover:opacity-70 transition-opacity">
              <motion.div 
                style={{ height: chartHeight2 }}
                className="w-full bg-white/10 rounded-t-xl relative"
              >
                <span className="absolute top-4 left-1/2 -translate-x-1/2 font-display text-xl lg:text-2xl font-bold text-white/70">85%</span>
              </motion.div>
              <span className="font-mono text-xs uppercase tracking-wider text-white/60 mt-4 text-center">Claude 3.5</span>
            </div>

            {/* GPT Column */}
            <div className="flex flex-col items-center h-full justify-end opacity-40 hover:opacity-70 transition-opacity">
              <motion.div 
                style={{ height: chartHeight3 }}
                className="w-full bg-white/10 rounded-t-xl relative"
              >
                <span className="absolute top-4 left-1/2 -translate-x-1/2 font-display text-xl lg:text-2xl font-bold text-white/70">82%</span>
              </motion.div>
              <span className="font-mono text-xs uppercase tracking-wider text-white/60 mt-4 text-center">GPT-4o</span>
            </div>
          </div>
        </div>
      </section>

      /* ========================================================
         ACT V: THE ARCHITECT'S LAB (85% - 100% Scroll)
         ======================================================== */
      <section className="sticky top-0 h-screen w-full bg-black z-30 flex items-center border-t border-white/10 overflow-hidden">
        {/* Active Theory Epic Typography Matrix Behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] font-display text-[22vw] font-black tracking-tighter uppercase whitespace-nowrap">
          SOLE ARCHITECT
        </div>

        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-40 w-full">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs text-swarm-bright tracking-[0.4em] uppercase block mb-4">Phase One Deployment Complete</span>
            <h1 className="font-display text-6xl lg:text-[7.5rem] font-black uppercase tracking-tighter leading-[0.85] text-white">
              Mike Ronald <br /><span className="gradient-text">Lakra</span>
            </h1>
            <div className="h-px w-24 bg-swarm-core my-8" />
            <h4 className="font-mono text-sm uppercase tracking-widest text-white/70 mb-4">Founder & Sole Architect</h4>
            <p className="text-white/50 text-lg font-light leading-relaxed max-w-2xl">
              From architectural blueprint to production-grade deployment, Mike engineered NexusForge to solve the inherent flaws of monolithic intelligence. Every line of backend routing logic and consensus-stitching protocol has been forged with raw technical discipline.
            </p>
          </div>
          
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-6 text-left lg:text-right font-mono text-xs text-white/30 uppercase tracking-[0.2em]">
            <div>DESIGNED FOR RUNTIME RESOLUTION</div>
            <div>STITCHED VIA MULTI-VECTOR CONSENSUS</div>
            <div className="mt-8">
              <a href="#home" className="inline-flex items-center gap-3 border border-white/10 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all font-mono tracking-widest text-[11px]">
                RECONVERGE CORE <i className="fa-solid fa-arrow-up text-[10px]"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

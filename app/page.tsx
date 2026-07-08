"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { useLenis } from "@/lib/useLenis";

// Global UI Elements
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import AuroraBackground from "@/components/AuroraBackground";

// Sections
import Hero from "@/components/sections/Hero";
import ReliabilityCrisis from "@/components/sections/ReliabilityCrisis";
import Benchmarks from "@/components/sections/Benchmarks";
import ModuleDivider from "@/components/sections/ModuleDivider";
import Pipeline from "@/components/sections/Pipeline";
import JudgeNode from "@/components/sections/JudgeNode";
import FidelityChart from "@/components/sections/FidelityChart";
import Diversity from "@/components/sections/Diversity";
import Pillars from "@/components/sections/Pillars";
import ComparisonTable from "@/components/sections/ComparisonTable";
import Founder from "@/components/sections/Founder";
import Closing from "@/components/sections/Closing";

// The R3F canvas touches window/WebGL — keep it out of the server bundle.
const SwarmCanvas = dynamic(() => import("@/components/SwarmCanvas"), {
  ssr: false,
});

export default function Home() {
  // Initialize Smooth Scrolling
  useLenis();
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Framer Motion Scroll Physics
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Hero section cinematic fade & scale
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.15], [1, 1.05]);

  // 2. Active Theory Style Interactive Mouse Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent) {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }

  // Dynamic Spotlight that follows the mouse (Subtle premium WebGL feel)
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(139,92,246,0.08), transparent 80%)`;

  return (
    <main 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="relative bg-[#050505] min-h-[300vh] overflow-hidden text-white selection:bg-[#8b5cf6]/30"
    >
      {/* Dynamic Mouse Spotlight Overlay */}
      <motion.div 
        className="pointer-events-none fixed inset-0 z-10"
        style={{ background: spotlight }}
      />
      
      <ScrollProgress />
      <CustomCursor />

      {/* Persistent 3D Swarm Background & Aurora */}
      <SwarmCanvas fixed />
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <AuroraBackground />
      </div>

      {/* ACTIVE THEORY STYLE: Floating HUD (Heads-Up Display) */}
      <div className="fixed top-8 left-8 z-[100] mix-blend-difference hidden lg:block pointer-events-none">
        <div className="font-mono text-[10px] tracking-widest text-[#b794ff]">SYS.CORE // ACTIVE</div>
        <div className="font-mono text-[10px] tracking-widest text-white/40 mt-1">MATRIX_VER_15.0_R19</div>
      </div>
      <div className="fixed bottom-8 right-8 z-[100] mix-blend-difference hidden lg:block pointer-events-none text-right">
        <div className="font-mono text-[10px] tracking-widest text-[#b794ff]">LOC_COORD // 22.1998° N</div>
        <div className="font-mono text-[10px] tracking-widest text-white/40 mt-1">ENG // SWARM_INIT</div>
      </div>

      {/* MAIN NARRATIVE FLOW */}
      <div className="relative w-full">
        
        {/* ACT I: The Hook (Sticky & Fading) */}
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="sticky top-0 w-full h-screen flex items-center justify-center -z-10"
        >
          <Hero />
        </motion.div>

        {/* ACT II: The Deep Dive (Glass Overlap Effect) */}
        <div className="relative z-20 w-full bg-[#050505]/85 backdrop-blur-3xl border-t border-white/10 shadow-[0_-30px_90px_rgba(139,92,246,0.15)] rounded-t-[3rem] pt-12 pb-32 mt-[-15vh]">
          <ReliabilityCrisis />
          
          <div className="mt-24">
            <Benchmarks />
          </div>
          
          <div className="my-32">
            <ModuleDivider
              moduleLabel="Module 01"
              title="Consensus as the Catalyst"
              subtitle='Building a production-ready intelligence engine requires shifting from "Generation" to "Arbitration".'
            />
          </div>

          <Pipeline />
          
          <div className="mt-40">
            <JudgeNode />
          </div>

          <div className="mt-32">
            <FidelityChart />
          </div>
        </div>

        {/* ACT III: The Architecture Engine */}
        <div className="relative z-20 w-full bg-[#020202] py-32 border-t border-white/5">
          <Diversity />
          
          <div className="mt-40">
            <Pillars />
          </div>
          
          <div className="mt-40">
            <ComparisonTable />
          </div>
        </div>

        {/* ACT IV: Legacy & CTA */}
        <div className="relative z-20 w-full bg-[#030204] pt-32 border-t border-[#8b5cf6]/20 shadow-[0_-20px_50px_rgba(139,92,246,0.05)]">
          <Founder />
          
          <div className="mt-20"> 
            <Closing />
          </div>
        </div>

      </div>
    </main>
  );
}

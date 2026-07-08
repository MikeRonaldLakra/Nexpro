"use client";

import dynamic from "next/dynamic";
import { useLenis } from "@/lib/useLenis";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
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
  useLenis();

  return (
    <main className="relative bg-void">
      <ScrollProgress />
      <CustomCursor />

      {/* Persistent 3D swarm background, visible through the whole scroll */}
      <SwarmCanvas fixed />

      <div className="relative z-10">
        <Hero />
        <ReliabilityCrisis />
        <Benchmarks />
        <ModuleDivider
          moduleLabel="Module 01"
          title="Consensus as the Catalyst"
          subtitle='Building a production-ready intelligence engine requires shifting from "Generation" to "Arbitration".'
        />
        <Pipeline />
        <JudgeNode />
        <FidelityChart />
        <Diversity />
        <Pillars />
        <ComparisonTable />
        <Founder />
        <Closing />
      </div>
    </main>
  );
}

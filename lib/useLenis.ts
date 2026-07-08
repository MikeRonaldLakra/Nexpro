"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Wires up Lenis smooth scrolling and syncs it with GSAP's ScrollTrigger
 * (if present) so pinned/scrubbed animations stay perfectly in step with
 * the eased scroll position instead of the raw, jumpy native scroll.
 */
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Lazily sync with GSAP ScrollTrigger only if it's been loaded by a
    // section on the page — keeps this hook usable even without GSAP.
    (async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      } catch {
        // GSAP not needed on this page — Lenis still works standalone.
      }
    })();

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}

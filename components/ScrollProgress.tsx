"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const progress = height > 0 ? scrollTop / height : 0;
      if (fillRef.current) {
        fillRef.current.style.transform = `scaleX(${progress})`;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-progress-track">
      <div ref={fillRef} className="scroll-progress-fill" />
    </div>
  );
}

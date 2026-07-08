"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e: PointerEvent) {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    }
    window.addEventListener("pointermove", handleMove);

    let rafId: number;
    function tick() {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x - 5}px, ${
          pos.current.y - 5
        }px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />;
}

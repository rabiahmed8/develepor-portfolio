"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// Three.js is only downloaded in the browser, after the page text has painted,
// so the 3D scene never slows down the first load.
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <Placeholder />,
});

function Placeholder() {
  return (
    <div className="h-full w-full grid place-items-center">
      <div className="h-40 w-64 rounded-xl bg-white/70 shadow-xl animate-pulse" />
    </div>
  );
}

/** Mounts the 3D scene only once it is on screen and the browser is idle. */
export default function SceneLoader() {
  const box = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const start = () => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(() => setReady(true), { timeout: 2000 });
      } else {
        timeoutId = setTimeout(() => setReady(true), 1200);
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          start();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div ref={box} className="h-full w-full">
      {ready ? <HeroScene /> : <Placeholder />}
    </div>
  );
}

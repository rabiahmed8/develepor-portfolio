"use client";

import dynamic from "next/dynamic";

// Three.js is only downloaded in the browser, after the page text has painted,
// so the 3D scene never slows down the first load.
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full grid place-items-center">
      <div className="h-40 w-64 rounded-xl bg-white/70 shadow-xl animate-pulse" />
    </div>
  ),
});

export default function SceneLoader() {
  return <HeroScene />;
}

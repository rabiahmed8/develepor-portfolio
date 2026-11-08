"use client";

import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import { Image, RoundedBox, Sparkles } from "@react-three/drei";
import { Suspense, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import * as THREE from "three";
import { studioProjects } from "./studioData";

const RADIUS = 4.4;
const CARD_W = 3.2;
const CARD_H = 2.2;
const AUTO_SPEED = 0.18; // radians per second when nobody is touching it
const FOV = 36;
const DRAG_FACTOR = 0.008; // radians per pixel dragged

/** Shared, mutable drag state (refs, so dragging never re-renders React). */
interface Spin {
  dragging: boolean;
  lastX: number;
  pending: number; // radians dragged since the last frame
  velocity: number; // current spin speed, radians per second
  movedPx: number; // distance moved in this press, to tell a drag from a click
  hovering: number;
}

// One hero per page, so the drag state lives at module level (mutated only in events and frames).
const spin: Spin = { dragging: false, lastX: 0, pending: 0, velocity: AUTO_SPEED, movedPx: 0, hovering: 0 };

const FRAME = new THREE.Color("#ffffff");
const FRAME_HOVER = new THREE.Color("#10b981");

function BrowserCard({
  url,
  angle,
  onSelect,
}: {
  url: string;
  angle: number;
  onSelect: () => void;
}) {
  const lift = useRef<THREE.Group>(null);
  const frame = useRef<THREE.MeshStandardMaterial>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, dt) => {
    if (!lift.current || !frame.current) return;
    const s = THREE.MathUtils.damp(lift.current.scale.x, hovered ? 1.07 : 1, 8, dt);
    lift.current.scale.setScalar(s);
    // pop the hovered card out of the ring towards the viewer
    lift.current.position.z = THREE.MathUtils.damp(lift.current.position.z, hovered ? 0.45 : 0, 8, dt);
    frame.current.color.lerp(hovered ? FRAME_HOVER : FRAME, 1 - Math.exp(-10 * dt));
  });

  const over = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    if (spin.dragging) return;
    setHovered(true);
    spin.hovering += 1;
    document.body.style.cursor = "pointer";
  };
  const out = () => {
    if (!hovered) return;
    setHovered(false);
    spin.hovering = Math.max(0, spin.hovering - 1);
    document.body.style.cursor = "";
  };
  const click = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (spin.movedPx > 6) return; // it was a drag, not a click
    onSelect();
  };

  return (
    <group position={[Math.sin(angle) * RADIUS, 0, Math.cos(angle) * RADIUS]} rotation={[0, angle, 0]}>
      <group ref={lift} onPointerOver={over} onPointerOut={out} onClick={click}>
        <RoundedBox args={[CARD_W, CARD_H, 0.06]} radius={0.08} smoothness={4}>
          <meshStandardMaterial ref={frame} color="#ffffff" roughness={0.3} metalness={0.1} />
        </RoundedBox>
        {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
          <mesh key={c} position={[-CARD_W / 2 + 0.16 + i * 0.12, CARD_H / 2 - 0.1, 0.035]}>
            <circleGeometry args={[0.035, 16]} />
            <meshBasicMaterial color={c} />
          </mesh>
        ))}
        {/* eslint-disable-next-line jsx-a11y/alt-text -- drei 3D image, not an <img> */}
        <Image url={url} scale={[CARD_W - 0.12, (CARD_W - 0.12) * 0.625]} position={[0, -0.08, 0.035]} radius={0.05} />
        {/* same screenshot on the back, so cards behind the ring aren't blank */}
        {/* eslint-disable-next-line jsx-a11y/alt-text -- drei 3D image, not an <img> */}
        <Image
          url={url}
          scale={[CARD_W - 0.12, (CARD_W - 0.12) * 0.625]}
          position={[0, -0.08, -0.035]}
          rotation={[0, Math.PI, 0]}
          radius={0.05}
        />
      </group>
    </group>
  );
}

function Carousel({ reducedMotion }: { reducedMotion: boolean }) {
  const ring = useRef<THREE.Group>(null);
  const tilt = useRef<THREE.Group>(null);
  const step = (Math.PI * 2) / studioProjects.length;

  useFrame((state, dt) => {
    if (!ring.current || !tilt.current) return;
    const s = spin;
    const delta = Math.min(dt, 0.05);

    if (s.dragging) {
      // follow the finger exactly, and remember how fast it was moving for the throw
      ring.current.rotation.y += s.pending;
      s.velocity = THREE.MathUtils.lerp(s.velocity, s.pending / Math.max(delta, 1e-3), 0.5);
      s.pending = 0;
    } else {
      // after a throw, ease back to a slow drift (or stop while a card is hovered)
      const rest = reducedMotion || s.hovering > 0 ? 0 : AUTO_SPEED;
      s.velocity = THREE.MathUtils.damp(s.velocity, rest, 1.6, delta);
      ring.current.rotation.y += s.velocity * delta;
    }

    // Fit the whole ring in view at any width: back the camera off on narrow canvases.
    const { camera, size } = state;
    const aspect = size.width / Math.max(size.height, 1);
    const halfFov = THREE.MathUtils.degToRad(FOV / 2);
    const halfWidth = Math.sin(Math.PI / 3) * RADIUS + (CARD_W / 2) * 0.5 + 0.9;
    const fitZ = halfWidth / (Math.tan(halfFov) * aspect) + 1.2;
    const z = Math.max(10, fitZ);
    camera.position.z = THREE.MathUtils.damp(camera.position.z, z, 6, delta);
    camera.position.y = camera.position.z * 0.12;
    camera.lookAt(0, -0.2, 0);

    tilt.current.rotation.x = THREE.MathUtils.damp(tilt.current.rotation.x, -state.pointer.y * 0.15 + 0.08, 3, delta);
    tilt.current.rotation.z = THREE.MathUtils.damp(tilt.current.rotation.z, state.pointer.x * 0.05, 3, delta);
  });

  const select = (id: string) => {
    document.getElementById(`work-${id}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <group ref={tilt}>
      <group ref={ring}>
        {studioProjects.map((p, i) => (
          <BrowserCard key={p.id} url={p.image} angle={i * step} onSelect={() => select(p.id)} />
        ))}
      </group>
    </group>
  );
}

export default function HeroScene() {
  const reducedMotion = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );
  const [grabbing, setGrabbing] = useState(false);

  const down = (e: ReactPointerEvent<HTMLDivElement>) => {
    const s = spin;
    s.dragging = true;
    s.lastX = e.clientX;
    s.movedPx = 0;
    s.pending = 0;
    setGrabbing(true);
  };
  const move = (e: ReactPointerEvent<HTMLDivElement>) => {
    const s = spin;
    if (!s.dragging) return;
    const dx = e.clientX - s.lastX;
    s.lastX = e.clientX;
    s.movedPx += Math.abs(dx);
    s.pending += dx * DRAG_FACTOR;
  };
  const up = () => {
    spin.dragging = false;
    setGrabbing(false);
  };

  return (
    <div
      className={`h-full w-full select-none ${grabbing ? "cursor-grabbing" : "cursor-grab"}`}
      // vertical swipes still scroll the page on phones; horizontal swipes spin the ring
      style={{ touchAction: "pan-y" }}
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={up}
      onPointerLeave={up}
      onPointerCancel={up}
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 1.6, 13], fov: FOV }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        aria-label="3D carousel of websites Rabi has built. Drag to spin it."
        role="img"
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[4, 6, 8]} intensity={1.5} />
        <pointLight position={[0, -2, 4]} intensity={8} color="#34d399" distance={12} />
        <Sparkles count={70} scale={[16, 7, 12]} size={2.5} speed={0.35} opacity={0.7} color="#10b981" />
        <Suspense fallback={null}>
          <Carousel reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
}

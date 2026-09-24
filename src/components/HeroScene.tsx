"use client";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer, Sparkles } from "@react-three/drei";
import { MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useIsoLayoutEffect, usePrefersReducedMotion } from "@/lib/motion";

const GOLD = "#c9a24d";

type JewelProps = { simple: boolean };

/**
 * Glass shell around a solid gold core, wrapped in a thin wireframe cage.
 * The whole group reacts to the pointer and to scroll position.
 */
const Jewel = ({ simple }: JewelProps) => {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const cage = useRef<THREE.Mesh>(null);
  const entered = useRef(0);
  // Tracked globally: the canvas sits under a `pointer-events-none` wrapper,
  // so R3F's own `state.pointer` never receives events.
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((_, delta) => {
    const root = group.current;
    if (!root) return;

    const d = Math.min(delta, 0.05);
    entered.current = THREE.MathUtils.damp(entered.current, 1, 2.4, d);

    const scrollProgress = THREE.MathUtils.clamp(
      (typeof window !== "undefined" ? window.scrollY : 0) /
        (typeof window !== "undefined" ? window.innerHeight : 1),
      0,
      1
    );

    const targetY = pointer.current.x * 0.5;
    const targetX = -pointer.current.y * 0.32;
    root.rotation.y = THREE.MathUtils.damp(root.rotation.y, targetY, 3, d);
    root.rotation.x = THREE.MathUtils.damp(root.rotation.x, targetX, 3, d);

    const entry = 0.55 + 0.45 * entered.current;
    root.scale.setScalar(entry * (1 - scrollProgress * 0.28));
    root.position.y = (1 - entered.current) * -0.9 + scrollProgress * 1.1;
    root.position.z = -scrollProgress * 1.6;

    if (core.current) {
      core.current.rotation.y += d * 0.24;
      core.current.rotation.x += d * 0.06;
    }
    if (cage.current) {
      cage.current.rotation.y -= d * 0.1;
      cage.current.rotation.z += d * 0.05;
    }
  });

  return (
    <group ref={group} scale={0.55}>
      <Float speed={1.5} rotationIntensity={0.55} floatIntensity={1.1}>
        <mesh ref={core}>
          <icosahedronGeometry args={[0.95, 0]} />
          <meshStandardMaterial
            color={GOLD}
            metalness={1}
            roughness={0.16}
            envMapIntensity={2.4}
          />
        </mesh>

        <mesh scale={1.34}>
          <icosahedronGeometry args={[0.95, 1]} />
          {simple ? (
            <meshStandardMaterial
              color="#f6e7c8"
              metalness={0.1}
              roughness={0.15}
              transparent
              opacity={0.16}
              side={THREE.DoubleSide}
            />
          ) : (
            <MeshTransmissionMaterial
              samples={1}
              resolution={128}
              transmission={1}
              thickness={0.55}
              roughness={0.04}
              ior={1.45}
              chromaticAberration={0.32}
              distortion={0.25}
              distortionScale={0.4}
              temporalDistortion={0.08}
              color="#ffffff"
              attenuationDistance={2.5}
              attenuationColor="#f4dfae"
            />
          )}
        </mesh>

        <mesh ref={cage} scale={1.85}>
          <icosahedronGeometry args={[0.95, 0]} />
          <meshBasicMaterial
            color={GOLD}
            wireframe
            transparent
            opacity={0.22}
          />
        </mesh>
      </Float>
    </group>
  );
};

const Scene = ({ simple }: JewelProps) => {
  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 5, 5]} intensity={1.4} color="#fff4e0" />
      <pointLight position={[-3, -1.5, -2.5]} intensity={14} color={GOLD} />
      <pointLight position={[2.5, 2, -3]} intensity={8} color="#ffe4b0" />

      <Environment resolution={64} frames={1}>
        <Lightformer
          intensity={3}
          color={GOLD}
          position={[3, 3, 2]}
          scale={[5, 5, 1]}
        />
        <Lightformer
          intensity={2.4}
          color="#ffffff"
          position={[-4, 1, 2]}
          scale={[4, 8, 1]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <Lightformer
          intensity={1.4}
          color="#ffe9c2"
          position={[0, -4, 1]}
          scale={[8, 4, 1]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </Environment>

      <Jewel simple={simple} />

      <Sparkles
        count={36}
        scale={11}
        size={2.6}
        speed={0.25}
        color="#e8c47a"
        opacity={0.55}
      />
    </>
  );
};

const HeroScene = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  const [simple, setSimple] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useIsoLayoutEffect(() => {
    const compact =
      window.matchMedia("(max-width: 900px)").matches ||
      (navigator.hardwareConcurrency ?? 8) <= 4;
    setSimple(compact);
  }, []);

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "80px" }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 5.4], fov: 42 }}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.75]}
        frameloop={inView && !reducedMotion ? "always" : "never"}
      >
        <Scene simple={simple} />
      </Canvas>
    </div>
  );
};

export default HeroScene;

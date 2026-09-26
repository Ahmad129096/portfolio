"use client";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";
import FrameThrottle from "@/components/FrameThrottle";
import { useIsoLayoutEffect, usePrefersReducedMotion } from "@/lib/motion";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform float uAspect;
  uniform float uDark;
  uniform vec2 uPointer;

  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 3; i++) {
      value += amplitude * noise(p);
      p *= 2.02;
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0) * 2.4;
    float t = uTime * 0.035;

    float primary = fbm(p * 1.05 + vec2(t, -t * 0.65) + uPointer * 0.4);
    float secondary = fbm(p * 2.1 - vec2(t * 0.7, t * 0.95));
    float field = smoothstep(0.32, 0.95, primary * 0.68 + secondary * 0.42);

    vec3 deep = vec3(0.62, 0.45, 0.16);
    vec3 light = vec3(0.95, 0.82, 0.55);
    vec3 colour = mix(deep, light, field);

    float vignette = smoothstep(1.75, 0.1, length(p));
    float alpha = field * vignette * mix(0.07, 0.2, uDark);

    gl_FragColor = vec4(colour, alpha);
  }
`;

const Aurora = ({ dark }: { dark: boolean }) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { size } = useThree();
  const pointer = useRef({ x: 0, y: 0 });

  // Created once and mutated per frame, never recreated on re-render.
  const uniforms = useRef({
    uTime: { value: 0 },
    uAspect: { value: 1 },
    uDark: { value: dark ? 1 : 0 },
    uPointer: { value: new THREE.Vector2(0, 0) },
  });

  useIsoLayoutEffect(() => {
    uniforms.current.uAspect.value = size.width / Math.max(size.height, 1);
  }, [size.width, size.height]);

  useEffect(() => {
    uniforms.current.uDark.value = dark ? 1 : 0;
  }, [dark]);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((_, delta) => {
    const material = materialRef.current;
    if (!material) return;
    material.uniforms.uTime.value += Math.min(delta, 0.05);

    const target = pointer.current;
    const current = material.uniforms.uPointer.value as THREE.Vector2;
    // Frame-rate independent lerp (~1.8/s ≈ the old 0.03 @ 60 fps), so the
    // aurora still tracks the pointer at the throttled 30 fps below.
    const k = 1 - Math.exp(-1.8 * Math.min(delta, 0.05));
    current.x += (target.x - current.x) * k;
    current.y += (target.y - current.y) * k;
  });

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
        transparent
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
};

/**
 * Full-viewport gold aurora painted with a small fbm shader, plus drifting
 * gold dust. Cheap enough to run behind the whole page in both themes.
 */
const PageBackground = () => {
  const [dark, setDark] = useState(true);
  const reducedMotion = usePrefersReducedMotion();

  useIsoLayoutEffect(() => {
    const root = document.documentElement;
    const sync = () => setDark(root.classList.contains("dark"));
    sync();

    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-90">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={1}
        gl={{ alpha: true, antialias: false }}
        frameloop="demand"
      >
        {!reducedMotion && <FrameThrottle fps={30} />}
        <Aurora dark={dark} />
        <Sparkles
          count={24}
          scale={[14, 10, 2]}
          size={1.8}
          speed={reducedMotion ? 0 : 0.18}
          color="#e8c47a"
          opacity={0.4}
        />
      </Canvas>
    </div>
  );
};

export default PageBackground;

"use client";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const PageBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-40">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars
          radius={60}
          depth={40}
          count={1200}
          factor={2}
          saturation={0}
          fade
          speed={0.4}
        />
      </Canvas>
    </div>
  );
};

export default PageBackground;

"use client";
import { Canvas } from "@react-three/fiber";
import { Float, Icosahedron } from "@react-three/drei";

const RotatingShape = () => {
  return (
    <Float speed={1.4} rotationIntensity={0.7} floatIntensity={1}>
      <Icosahedron args={[1.5, 1]}>
        <meshBasicMaterial color="#c9a24d" wireframe transparent opacity={0.55} />
      </Icosahedron>
    </Float>
  );
};

const HeroScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.8} />
      <RotatingShape />
    </Canvas>
  );
};

export default HeroScene;

"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} color="#FFC402" />
      <directionalLight position={[-3, -2, 2]} intensity={0.4} color="#FFF7EF" />
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh>
          <icosahedronGeometry args={[1.4, 6]} />
          <MeshDistortMaterial
            color="#6A483C"
            distort={0.35}
            speed={1.8}
            roughness={0.2}
            metalness={0.1}
          />
        </mesh>
      </Float>
    </Canvas>
  );
}

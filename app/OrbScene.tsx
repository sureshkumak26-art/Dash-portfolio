"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Core() {
  const core = useRef<THREE.Mesh>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (core.current) {
      core.current.rotation.y += delta * 0.16;
      core.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.12;
    }
    if (ringA.current) ringA.current.rotation.z += delta * 0.12;
    if (ringB.current) ringB.current.rotation.x -= delta * 0.1;
  });
  return (
    <group>
      <Float speed={1.2} rotationIntensity={0.16} floatIntensity={0.25}>
        <mesh ref={core}>
          <icosahedronGeometry args={[1.12, 5]} />
          <MeshDistortMaterial color="#78e9ad" emissive="#174d32" emissiveIntensity={0.65} roughness={0.2} metalness={0.62} distort={0.22} speed={1.6} />
        </mesh>
      </Float>
      <mesh ref={ringA} rotation={[1.12, 0.25, 0.35]}>
        <torusGeometry args={[1.48, 0.009, 12, 180]} />
        <meshBasicMaterial color="#b9ffda" transparent opacity={0.72} />
      </mesh>
      <mesh ref={ringB} rotation={[0.4, 1.1, 0.8]}>
        <torusGeometry args={[1.68, 0.006, 12, 180]} />
        <meshBasicMaterial color="#83eeb5" transparent opacity={0.34} />
      </mesh>
      <pointLight position={[2, 2, 2]} intensity={24} color="#a4ffd2" />
    </group>
  );
}

export default function OrbScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4.1], fov: 42 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.75} />
      <directionalLight position={[-3, 4, 4]} intensity={2.2} color="#e4fff0" />
      <Stars radius={8} depth={3} count={110} factor={1.5} saturation={0} fade speed={0.3} />
      <Core />
    </Canvas>
  );
}

"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Core() {
  const core = useRef<THREE.Mesh>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);
  const satelliteGroup = useRef<THREE.Group>(null);
  const sceneGroup = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    // Follow mouse or touch position with a smooth, subtle 3D tilt.
    if (sceneGroup.current) {
      const targetX = -state.pointer.y * 0.24;
      const targetY = state.pointer.x * 0.32;
      sceneGroup.current.rotation.x = THREE.MathUtils.damp(sceneGroup.current.rotation.x, targetX, 3.5, delta);
      sceneGroup.current.rotation.y = THREE.MathUtils.damp(sceneGroup.current.rotation.y, targetY, 3.5, delta);
    }
    if (core.current) {
      core.current.rotation.y += delta * 0.16;
      core.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.12;
    }
    if (ringA.current) ringA.current.rotation.z += delta * 0.12;
    if (ringB.current) ringB.current.rotation.x -= delta * 0.1;
    if (satelliteGroup.current) {
      satelliteGroup.current.rotation.y += delta * 0.075;
      satelliteGroup.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
    }
  });

  return (
    <group>
      <Float speed={1.2} rotationIntensity={0.16} floatIntensity={0.25}>
        <mesh ref={core}>
          <icosahedronGeometry args={[1.12, 5]} />
          <MeshDistortMaterial color="#78e9ad" emissive="#174d32" emissiveIntensity={0.65} roughness={0.2} metalness={0.62} distort={0.22} speed={1.6} />
        </mesh>
      </Float>

      {/* Layered orbital rings create depth around the central crystal. */}
      <mesh ref={ringA} rotation={[1.12, 0.25, 0.35]}>
        <torusGeometry args={[1.48, 0.009, 12, 180]} />
        <meshBasicMaterial color="#b9ffda" transparent opacity={0.72} />
      </mesh>
      <mesh ref={ringB} rotation={[0.4, 1.1, 0.8]}>
        <torusGeometry args={[1.68, 0.006, 12, 180]} />
        <meshBasicMaterial color="#83eeb5" transparent opacity={0.34} />
      </mesh>

      {/* Small 3D satellites slowly orbit the core at different depths. */}
      <group ref={satelliteGroup}>
        <Float speed={1.7} rotationIntensity={0.7} floatIntensity={0.35}>
          <mesh position={[1.72, 0.42, 0.15]} rotation={[0.4, 0.3, 0.2]}>
            <octahedronGeometry args={[0.16, 0]} />
            <meshStandardMaterial color="#c5ffe0" emissive="#4edc9b" emissiveIntensity={0.8} metalness={0.75} roughness={0.2} />
          </mesh>
        </Float>
        <Float speed={1.35} rotationIntensity={0.8} floatIntensity={0.3}>
          <mesh position={[-1.55, -0.55, 0.35]} rotation={[0.2, 0.7, 0.1]}>
            <icosahedronGeometry args={[0.13, 0]} />
            <meshStandardMaterial color="#9affca" emissive="#2d9d6c" emissiveIntensity={0.65} metalness={0.7} roughness={0.24} />
          </mesh>
        </Float>
        <Float speed={1.9} rotationIntensity={0.9} floatIntensity={0.25}>
          <mesh position={[0.55, -1.58, -0.3]} rotation={[0.5, 0.2, 0.6]}>
            <tetrahedronGeometry args={[0.14, 0]} />
            <meshStandardMaterial color="#e0fff0" emissive="#61d99e" emissiveIntensity={0.55} metalness={0.65} roughness={0.25} />
          </mesh>
        </Float>
      </group>
      <pointLight position={[2, 2, 2]} intensity={24} color="#a4ffd2" />
      <pointLight position={[-2, -1, -2]} intensity={7} color="#4fbd8c" />
    </group>
  );
}

export default function OrbScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4.1], fov: 42 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }} style={{ touchAction: "pan-y" }}>
      <ambientLight intensity={0.75} />
      <directionalLight position={[-3, 4, 4]} intensity={2.2} color="#e4fff0" />
      <Stars radius={8} depth={3} count={110} factor={1.5} saturation={0} fade speed={0.3} />
      <Core />
    </Canvas>
  );
}

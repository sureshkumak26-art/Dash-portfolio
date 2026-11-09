"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimeMascot() {
  const mascot = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!mascot.current) return;
    mascot.current.position.y = -0.82 + Math.sin(state.clock.elapsedTime * 1.5) * 0.055;
    mascot.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.65) * 0.16;
    mascot.current.rotation.z = THREE.MathUtils.damp(
      mascot.current.rotation.z,
      -state.pointer.x * 0.08,
      3,
      delta
    );
  });

  return (
    <group ref={mascot} position={[1.12, -0.82, 0.48]} scale={0.43}>
      {/* Original chibi anime-inspired creator mascot */}
      <group position={[0, 0.5, 0]}>
        <mesh>
          <sphereGeometry args={[0.58, 32, 32]} />
          <meshStandardMaterial color="#f4c6a5" roughness={0.48} />
        </mesh>
        {/* Layered dark hair and signature spikes */}
        <mesh position={[0, 0.29, -0.06]} scale={[1.04, 0.72, 0.98]}>
          <sphereGeometry args={[0.59, 32, 24]} />
          <meshStandardMaterial color="#18252a" roughness={0.32} metalness={0.18} />
        </mesh>
        <mesh position={[-0.38, 0.36, 0.05]} rotation={[0, 0, -0.45]}>
          <coneGeometry args={[0.2, 0.55, 5]} />
          <meshStandardMaterial color="#243a3b" roughness={0.3} />
        </mesh>
        <mesh position={[0.02, 0.53, -0.02]} rotation={[0, 0, 0.08]}>
          <coneGeometry args={[0.19, 0.48, 5]} />
          <meshStandardMaterial color="#243a3b" roughness={0.3} />
        </mesh>
        <mesh position={[0.39, 0.34, 0.03]} rotation={[0, 0, 0.5]}>
          <coneGeometry args={[0.19, 0.5, 5]} />
          <meshStandardMaterial color="#243a3b" roughness={0.3} />
        </mesh>
        {/* Large glossy eyes */}
        {[-0.22, 0.22].map((x) => (
          <group key={x} position={[x, -0.02, 0.51]}>
            <mesh scale={[0.105, 0.16, 0.055]}>
              <sphereGeometry args={[1, 20, 20]} />
              <meshStandardMaterial color="#102b2c" roughness={0.12} />
            </mesh>
            <mesh position={[0.025, 0.055, 0.047]} scale={0.035}>
              <sphereGeometry args={[1, 16, 16]} />
              <meshBasicMaterial color="#ffffff" />
            </mesh>
            <mesh position={[-0.035, -0.045, 0.045]} scale={0.018}>
              <sphereGeometry args={[1, 12, 12]} />
              <meshBasicMaterial color="#79f4c0" />
            </mesh>
          </group>
        ))}
        <mesh position={[0, -0.2, 0.535]} scale={[0.07, 0.018, 0.025]}>
          <sphereGeometry args={[1, 16, 12]} />
          <meshStandardMaterial color="#b96f72" roughness={0.6} />
        </mesh>
        {/* Soft cheek highlights */}
        {[-0.39, 0.39].map((x) => (
          <mesh key={x} position={[x, -0.14, 0.46]} scale={[0.09, 0.035, 0.018]}>
            <sphereGeometry args={[1, 16, 12]} />
            <meshBasicMaterial color="#f49a9b" transparent opacity={0.55} />
          </mesh>
        ))}
      </group>

      {/* Mint-accent hoodie body */}
      <mesh position={[0, -0.42, 0]} scale={[0.42, 0.5, 0.32]}>
        <capsuleGeometry args={[0.55, 0.5, 8, 16]} />
        <meshStandardMaterial color="#183c36" roughness={0.62} />
      </mesh>
      <mesh position={[0, -0.35, 0.29]} scale={[0.18, 0.2, 0.035]}>
        <sphereGeometry args={[1, 20, 16]} />
        <meshStandardMaterial color="#79efbd" emissive="#287c5a" emissiveIntensity={0.5} />
      </mesh>
      {/* Sleeves, hands and shoes */}
      {[-1, 1].map((side) => (
        <group key={side}>
          <mesh position={[side * 0.43, -0.39, 0]} rotation={[0, 0, side * -0.35]}>
            <capsuleGeometry args={[0.13, 0.36, 6, 12]} />
            <meshStandardMaterial color="#214d43" roughness={0.55} />
          </mesh>
          <mesh position={[side * 0.5, -0.65, 0.04]} scale={0.13}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#f4c6a5" roughness={0.5} />
          </mesh>
          <mesh position={[side * 0.2, -0.98, 0.03]} scale={[0.19, 0.12, 0.28]}>
            <sphereGeometry args={[1, 20, 16]} />
            <meshStandardMaterial color="#111e20" roughness={0.4} />
          </mesh>
        </group>
      ))}
      <pointLight position={[0, 0.5, 1.1]} intensity={1.2} distance={2.8} color="#8dffd0" />
    </group>
  );
}

function Core() {
  const core = useRef<THREE.Mesh>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);
  const satelliteGroup = useRef<THREE.Group>(null);
  const sceneGroup = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
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
      <group ref={sceneGroup}>
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
        <AnimeMascot />
        <pointLight position={[2, 2, 2]} intensity={24} color="#a4ffd2" />
        <pointLight position={[-2, -1, -2]} intensity={7} color="#4fbd8c" />
      </group>
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

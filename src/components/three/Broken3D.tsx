"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGesture } from "@use-gesture/react";
import * as THREE from "three";

function BrokenPanel() {
  const groupRef = useRef<THREE.Group>(null);
  const [rotation, setRotation] = useState<[number, number]>([0.2, 0.3]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, rotation[0], 0.1);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, rotation[1], 0.1);
    }
  });

  return (
    <group ref={groupRef} rotation={[0.2, 0.3, 0]}>
      {/* Main panel */}
      <mesh>
        <boxGeometry args={[3, 2, 0.08]} />
        <meshStandardMaterial color="#1B3A36" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Cracked glass overlay */}
      <mesh position={[0, 0, 0.05]}>
        <planeGeometry args={[3, 2]} />
        <meshStandardMaterial
          color="#4ADE80"
          transparent
          opacity={0.15}
          metalness={0.8}
          roughness={0.1}
        />
      </mesh>
      {/* Crack lines */}
      {[[0, 0, 0.06], [0.5, -0.3, 0.06], [-0.8, 0.4, 0.06]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} rotation={[0, 0, Math.PI / (3 + i)]}>
          <planeGeometry args={[0.02, 1.2 - i * 0.3]} />
          <meshStandardMaterial color="#F0F4F2" opacity={0.4} transparent />
        </mesh>
      ))}
      {/* Solar cells grid */}
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh
          key={i}
          position={[(i % 4) * 0.7 - 1.05, Math.floor(i / 4) * 0.6 - 0.6, 0.06]}
        >
          <planeGeometry args={[0.6, 0.5]} />
          <meshStandardMaterial
            color={i === 5 || i === 8 ? "#0A1F1C" : "#1B3A36"}
            metalness={0.4}
            roughness={0.6}
          />
        </mesh>
      ))}
      {/* Broken piece hanging */}
      <mesh position={[1.2, -0.8, 0.1]} rotation={[0.2, 0.1, 0.4]}>
        <boxGeometry args={[0.8, 0.5, 0.08]} />
        <meshStandardMaterial color="#1B3A36" metalness={0.6} roughness={0.4} />
      </mesh>

      <pointLight color="#4ADE80" intensity={1} distance={5} position={[0, 0, 2]} />
    </group>
  );
}

export function Broken3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]} gl={{ alpha: true }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} intensity={1} />
      <BrokenPanel />
    </Canvas>
  );
}

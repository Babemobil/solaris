"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function SolarOrb({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!meshRef.current || !ringsRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.y = t * 0.15;
    meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    ringsRef.current.rotation.z = t * 0.08;
    ringsRef.current.rotation.x = 0.4 + mouse.current[1] * 0.15;
    ringsRef.current.rotation.y = mouse.current[0] * 0.15;
  });

  return (
    <group>
      {/* Core sun sphere */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.2, 4]} />
        <meshStandardMaterial
          color="#4ADE80"
          emissive="#1B3A36"
          emissiveIntensity={0.4}
          wireframe={false}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Energy rings */}
      <group ref={ringsRef}>
        {[1.8, 2.3, 2.9].map((r, i) => (
          <mesh key={r} rotation={[Math.PI / 2 + i * 0.3, 0, i * 0.5]}>
            <torusGeometry args={[r, 0.015, 16, 120]} />
            <meshStandardMaterial
              color={i === 0 ? "#4ADE80" : i === 1 ? "#FCD34D" : "#86EFAC"}
              emissive={i === 0 ? "#4ADE80" : "#FCD34D"}
              emissiveIntensity={0.6}
              transparent
              opacity={0.8 - i * 0.2}
            />
          </mesh>
        ))}
      </group>

      {/* Ambient glow */}
      <pointLight color="#4ADE80" intensity={2} distance={8} />
      <pointLight color="#FCD34D" intensity={0.5} distance={6} position={[2, 1, 0]} />
    </group>
  );
}

function ParticleField() {
  const count = 300;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={positions}>
      <PointMaterial size={0.03} color="#4ADE80" transparent opacity={0.6} sizeAttenuation />
    </Points>
  );
}

function Scene({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const { viewport } = useThree();
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouse.current[0] * 0.3, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, mouse.current[1] * 0.2, 0.05);
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#F0F4F2" />
      <SolarOrb mouse={mouse} />
      <ParticleField />
    </>
  );
}

export function SolarHero3D({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Scene mouse={mouse} />
    </Canvas>
  );
}

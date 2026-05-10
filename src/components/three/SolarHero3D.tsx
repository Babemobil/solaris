"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function SolarOrb({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const coreRef = useRef<THREE.Mesh>(null);
  const raysLongRef = useRef<THREE.Group>(null);
  const raysShortRef = useRef<THREE.Group>(null);
  const glowLightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.1;
      coreRef.current.rotation.x = Math.sin(t * 0.07) * 0.04;
    }

    if (raysLongRef.current) {
      raysLongRef.current.rotation.z = t * 0.035;
      raysLongRef.current.rotation.x = mouse.current[1] * 0.08;
      raysLongRef.current.rotation.y = mouse.current[0] * 0.08;
    }

    if (raysShortRef.current) {
      raysShortRef.current.rotation.z = -t * 0.07;
    }

    if (glowLightRef.current) {
      glowLightRef.current.intensity = 2.8 + Math.sin(t * 1.1) * 1.0;
    }
  });

  const startDist = 1.28;

  const longRays = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        angle: (i / 8) * Math.PI * 2,
        length: 1.1,
      })),
    []
  );

  const shortRays = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        angle: (i / 8) * Math.PI * 2 + Math.PI / 8,
        length: 0.55,
      })),
    []
  );

  return (
    <group>
      {/* Sun core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.15, 5]} />
        <meshStandardMaterial
          color="#FDE68A"
          emissive="#FCD34D"
          emissiveIntensity={1.4}
          roughness={0.05}
          metalness={0.0}
        />
      </mesh>

      {/* Long rays — slow clockwise */}
      <group ref={raysLongRef}>
        {longRays.map(({ angle, length }, i) => (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * (startDist + length / 2),
              Math.sin(angle) * (startDist + length / 2),
              0,
            ]}
            rotation={[0, 0, angle]}
          >
            <boxGeometry args={[0.055, length, 0.055]} />
            <meshStandardMaterial
              color="#FCD34D"
              emissive="#FCD34D"
              emissiveIntensity={1.2}
              transparent
              opacity={0.9}
            />
          </mesh>
        ))}
      </group>

      {/* Short rays — faster counter-clockwise */}
      <group ref={raysShortRef}>
        {shortRays.map(({ angle, length }, i) => (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * (startDist + length / 2),
              Math.sin(angle) * (startDist + length / 2),
              0,
            ]}
            rotation={[0, 0, angle]}
          >
            <boxGeometry args={[0.032, length, 0.032]} />
            <meshStandardMaterial
              color="#86EFAC"
              emissive="#4ADE80"
              emissiveIntensity={1.0}
              transparent
              opacity={0.75}
            />
          </mesh>
        ))}
      </group>

      {/* Pulsating core glow */}
      <pointLight ref={glowLightRef} color="#FCD34D" intensity={2.8} distance={10} />
      {/* Green accent fill light */}
      <pointLight color="#4ADE80" intensity={1.0} distance={7} position={[2.5, 1.5, 1]} />
      {/* Warm back light for depth */}
      <pointLight color="#F97316" intensity={0.5} distance={5} position={[-1.5, -1, 0.5]} />
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
      <PointMaterial size={0.03} color="#FCD34D" transparent opacity={0.4} sizeAttenuation />
    </Points>
  );
}

function Scene({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouse.current[0] * 0.3, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, mouse.current[1] * 0.2, 0.05);
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#FDE68A" />
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

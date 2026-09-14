"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars } from "@react-three/drei";
import * as THREE from "three";

function FloatingSphere({ position, scale, speed, distort, color }: {
  position: [number, number, number];
  scale: number;
  speed: number;
  distort: number;
  color: string;
}) {
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.15}
        />
      </Sphere>
    </Float>
  );
}

function ParticleField() {
  const mesh = useRef<THREE.Points>(null);
  const count = 400;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.02;
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#6090ff" transparent opacity={0.6} />
    </points>
  );
}

function RotatingRing({ radius, tube, color, rotationSpeed }: {
  radius: number;
  tube: number;
  color: string;
  rotationSpeed: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * rotationSpeed;
      mesh.current.rotation.z = state.clock.getElapsedTime() * rotationSpeed * 0.5;
    }
  });

  return (
    <mesh ref={mesh}>
      <torusGeometry args={[radius, tube, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.4}
        wireframe
      />
    </mesh>
  );
}

function GlowingPlatform() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (mesh.current) {
      const mat = mesh.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 0.5 + Math.sin(state.clock.getElapsedTime() * 2) * 0.3;
    }
  });

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
      <cylinderGeometry args={[2.5, 2.5, 0.05, 64]} />
      <meshStandardMaterial
        color="#4080ff"
        emissive="#2060ff"
        emissiveIntensity={0.5}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ background: "transparent" }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#4080ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8040ff" />
      <pointLight position={[0, 5, 0]} intensity={0.8} color="#ffffff" />

      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />

      <ParticleField />

      <FloatingSphere position={[-4, 2, -3]} scale={2} speed={1.5} distort={0.5} color="#2040a0" />
      <FloatingSphere position={[4, -1, -4]} scale={1.5} speed={2} distort={0.4} color="#4020a0" />
      <FloatingSphere position={[0, 3, -5]} scale={3} speed={1} distort={0.3} color="#102060" />

      <RotatingRing radius={3} tube={0.005} color="#4080ff" rotationSpeed={0.1} />
      <RotatingRing radius={4.5} tube={0.003} color="#6040ff" rotationSpeed={-0.07} />

      <GlowingPlatform />
    </Canvas>
  );
}

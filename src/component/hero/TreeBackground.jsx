import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Sphere,
  MeshDistortMaterial,
  Float,
  Sparkles,
} from "@react-three/drei";
import AnimatedSphere from "./geometry/AnimatedSphere";
import GeometricParticle from "./geometry/GeometricParticle";
import FloatingRing from "./geometry/FloatingRing";
import MorphingBlob from "./geometry/MorphingBlob";

const ThreeBackground = () => {
  // const spheres = useMemo(
  //   () =>
  //     Array.from({ length: 12 }, (_, i) => ({
  //       position: [
  //         (Math.random() - 0.5) * 20,
  //         Math.random() * 7 + 10,
  //         (Math.random() - 0.5) * 12,
  //       ],
  //       color: [
  //         "#00d4ff",
  //         "#ff006e",
  //         "#8338ec",
  //         "#3a86ff",
  //         "#06ffa5",
  //         "#ffbe0b",
  //       ][i % 6],
  //       size: Math.random() * 0.35 + 0.2,
  //       speed: Math.random() * 0.008 + 0.003,
  //       distortionIntensity: Math.random() * 0.4 + 0.2,
  //     })),
  //   []
  // );

  // const returnGeometricParticles = (geometries) => {
  //   return {
  //     position: [
  //       (Math.random() - 0.5) * 25,
  //       Math.random() * 8 + 25,
  //       (Math.random() - 0.5) * 15,
  //     ],
  //     geometry: geometries[i % 4],
  //     color: ["#ff006e", "#8338ec", "#00d4ff", "#06ffa5"][i % 4],
  //     speed: Math.random() * 0.006 + 0.002,
  //   };
  // };

  // const geometricParticles = useMemo(
  //   () =>
  //     Array.from({ length: 15 }, (_, i) => {
  //       const geometries = [
  //         <boxGeometry args={[0.15, 0.15, 0.15]} />,
  //         <tetrahedronGeometry args={[0.11]} />,
  //         <octahedronGeometry args={[0.11]} />,
  //         <dodecahedronGeometry args={[0.09]} />,
  //         <coneGeometry args={[0.09, 0.3, 2]} />,
  //         <cylinderGeometry args={[0.1, 0.1, 0.3, 2]} />,
  //       ];
  //       return returnGeometricParticles(geometries);
  //     }),
  //   []
  // );

  // const rings = useMemo(
  //   () =>
  //     Array.from({ length: 8 }, (_, i) => ({
  //       position: [
  //         (Math.random() - 0.5) * 18,
  //         Math.random() * 8 + 25,
  //         (Math.random() - 0.5) * 10,
  //       ],
  //       color: ["#8338ec", "#3a86ff", "#ff006e", "#ffbe0b"][i % 4],
  //       size: Math.random() * 0.3 + 0.15,
  //       speed: Math.random() * 0.005 + 0.002,
  //     })),
  //   []
  // );

  // const blobs = useMemo(
  //   () =>
  //     Array.from({ length: 6 }, (_, i) => ({
  //       position: [
  //         (Math.random() - 0.5) * 16,
  //         Math.random() * 8 + 20,
  //         (Math.random() - 0.5) * 8,
  //       ],
  //       color: ["#00d4ff", "#ff006e", "#06ffa5"][i % 3],
  //       speed: Math.random() * 0.003 + 0.001,
  //     })),
  //   []
  // );

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      <Canvas
        camera={{ position: [0, 2, 8], fov: 65 }}
        style={{ background: "transparent" }}
        dpr={Math.min(window.devicePixelRatio, 2)}
        performance={{ min: 0.5 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "low-power",
        }}
      >
        <ambientLight intensity={0.4} color="#1e1b4b" />
        <directionalLight
          position={[10, 10, 8]}
          intensity={1.0}
          color="#ffffff"
        />
        <pointLight
          position={[-10, 8, 6]}
          color="#00d4ff"
          intensity={1.5}
          distance={30}
        />
        <pointLight
          position={[10, 8, -6]}
          color="#ff006e"
          intensity={1.5}
          distance={30}
        />
        <pointLight
          position={[0, 12, 0]}
          color="#8338ec"
          intensity={1.0}
          distance={25}
        />

        <Sparkles
          count={500}
          scale={[35, 35, 35]}
          size={4}
          speed={0.6}
          color="#00d4ff"
        />

        {/* Distorted Spheres */}
        {/* {spheres.map((sphere, index) => (
          <AnimatedSphere
            key={`sphere-${index}`}
            position={sphere.position}
            color={sphere.color}
            size={sphere.size}
            speed={sphere.speed}
            distortionIntensity={sphere.distortionIntensity}
          />
        ))} */}

        {/* Geometric Particles */}
        {/* {geometricParticles.map((particle, index) => (
          <GeometricParticle
            key={`particle-${index}`}
            position={particle.position}
            geometry={particle.geometry}
            color={particle.color}
            speed={particle.speed}
          />
        ))} */}

        {/* Floating Rings */}
        {/* {rings.map((ring, index) => (
          <FloatingRing
            key={`ring-${index}`}
            position={ring.position}
            color={ring.color}
            size={ring.size}
            speed={ring.speed}
          />
        ))} */}

        {/* Morphing Blobs */}
        {/* {blobs.map((blob, index) => (
          <MorphingBlob
            key={`blob-${index}`}
            position={blob.position}
            color={blob.color}
            speed={blob.speed}
          />
        ))} */}

        <fog attach="fog" args={["#0f0f23", 30, 30]} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;

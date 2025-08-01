import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

const FloatingRing = ({ position, color, size, speed }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y -= speed;
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.z += 0.02;
      meshRef.current.position.x += Math.sin(state.clock.elapsedTime * 2) * 0.003;
      if (meshRef.current.position.y < -10) {
        meshRef.current.position.y = Math.random() * 6 + 20;
        meshRef.current.position.x = (Math.random() - 0.5) * 20;
      }
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.15}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[size, size * 0.3, 16, 32]} />
        <meshStandardMaterial
          color={color}
          metalness={1}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.4}
          wireframe={Math.random() > 0.5}
        />
      </mesh>
    </Float>
  );
};

export default FloatingRing;
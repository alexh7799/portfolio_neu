import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

const GeometricParticle = ({ position, geometry, color, speed }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y -= speed;
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.015;
      meshRef.current.rotation.z += 0.01;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.2;
      meshRef.current.scale.setScalar(scale);
      
      if (meshRef.current.position.y < -12) {
        meshRef.current.position.y = Math.random() * 8 + 18;
        meshRef.current.position.x = (Math.random() - 0.5) * 30;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshPhysicalMaterial
        color={color}
        metalness={0.9}
        roughness={0.1}
        clearcoat={1}
        clearcoatRoughness={0.1}
        transmission={0.1}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

export default GeometricParticle;
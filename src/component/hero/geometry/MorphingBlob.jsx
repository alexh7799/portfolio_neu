import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

/**
 * MorphingBlob is a component that renders a morphing icosahedron shape.
 * It will float up and down, and will change its color over time.
 * The user can specify the starting position, color, and speed of the morphing.
 * @param {{position: [number, number, number], color: string, speed: number}} props
 * @returns {JSX.Element}
 */
const MorphingBlob = ({ position, color, speed }) => {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y -= speed;
      
      if (meshRef.current.position.y < -8) {
        meshRef.current.position.y = Math.random() * 5 + 25;
        meshRef.current.position.x = (Math.random() - 0.5) * 18;
      }
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.6} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position}>
        <IcosahedronGeometry args={[0.3, 1]} />
        <MeshDistortMaterial
          color={color}
          distort={0.6}
          speed={1}
          roughness={0.1}
          metalness={0.7}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
};

export default MorphingBlob;

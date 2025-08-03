import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

/**
 * A Three.js mesh sphere that moves and rotates in a way that is supposed to
 * evoke the feeling of a floating, glowing sphere. The sphere is given a
 * distortion material that makes it appear to be underwater.
 *
 * @param {number[]} position The position of the sphere in 3D space.
 * @param {string} color The color of the sphere. Can be a hex color string or
 *   an array of 3 numbers representing the red, green, and blue components of
 *   the color.
 * @param {number} size The size of the sphere.
 * @param {number} speed The speed at which the sphere falls.
 * @param {number} distortionIntensity The intensity of the distortion effect.
 *   Higher numbers create a stronger distortion effect.
 */
const AnimatedSphere = ({ position, color, size, speed, distortionIntensity }) => {
  const meshRef = useRef();
  const fallSpeed = useRef(speed);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y -= fallSpeed.current;
      meshRef.current.position.x += Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.005;
      meshRef.current.position.z += Math.cos(state.clock.elapsedTime * 1.5 + position[2]) * 0.003;
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.015;
      if (meshRef.current.position.y < -15) {
        meshRef.current.position.y = Math.random() * 10 + 15;
        meshRef.current.position.x = (Math.random() - 0.5) * 25;
        meshRef.current.position.z = (Math.random() - 0.5) * 15;
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.2}>
      <Sphere ref={meshRef} args={[size, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distortionIntensity}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </Sphere>
    </Float>
  );
};

export default AnimatedSphere;
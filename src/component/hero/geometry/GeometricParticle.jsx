import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

/**
 * A 3D particle that moves vertically and rotates in a circular motion.
 * 
 * @param {array} position The initial position of the particle.
 * @param {object} geometry The three.js geometry object to use for the particle.
 * @param {string} color The color of the particle.
 * @param {number} speed The speed at which the particle moves.
 * @returns A React component that renders the particle.
 */
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
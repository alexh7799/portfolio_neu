import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";

/**
 * A canvas that renders a 3D background with ambient light, directional light,
 * point lights, and sparkles. The background is transparent and has a low power
 * preference for better performance.
 * @returns {React.ReactElement}
 */
const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      <Canvas
        camera={{ position: [0, 2, 10], fov: 65 }}
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
          count={200}
          scale={[35, 30, 6]}
          size={4.5}
          speed={0.6}
          color="#a1efff"
        />
        <fog attach="fog" args={["#0f0f23", 35, 30]} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;

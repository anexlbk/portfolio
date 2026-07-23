// @ts-nocheck
import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";
import * as maath from "maath";

const StarsInner = () => {
  const ref = useRef<THREE.Points>(null!);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  const [positions] = React.useState(() => {
    const pos = new Float32Array(5001 * 3);
    maath.random.inSphere(pos, { radius: 1.2 });
    return pos;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="absolute inset-0 z-[-1]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarsInner />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default StarsCanvas;

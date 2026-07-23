// @ts-nocheck
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, useTexture, Preload } from "@react-three/drei";
import CanvasLoader from "../layout/Loader";

interface Props {
  icon: string;
}

const Ball = ({ icon }: Props) => {
  const [decal] = useTexture([icon]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

export const BallCanvas = ({ icon }: Props) => (
  <Canvas frameloop="demand" dpr={[1, 2]}>
    <Suspense fallback={<CanvasLoader />}>
      <Ball icon={icon} />
    </Suspense>
    <Preload all />
  </Canvas>
);

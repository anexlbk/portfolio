import React from "react";
import { useProgress, Html } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <div className="canvas-loader">
        <div className="flex flex-col items-center gap-3">
          <div className="spinner" />
          <p className="text-secondary text-xs font-manrope">
            {progress.toFixed(0)}%
          </p>
        </div>
      </div>
    </Html>
  );
};

export default CanvasLoader;

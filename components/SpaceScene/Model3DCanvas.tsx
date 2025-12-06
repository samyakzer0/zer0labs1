import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Model3D } from './Model3D';

interface Model3DCanvasProps {
  modelPath?: string;
  enableControls?: boolean;
  autoRotate?: boolean;
  rotationSpeed?: number;
  cameraPosition?: [number, number, number];
  modelScale?: number;
  modelPosition?: [number, number, number];
  ambientIntensity?: number;
  enableLighting?: boolean;
}

export const Model3DCanvas: React.FC<Model3DCanvasProps> = ({
  modelPath = '/models/model.gltf',
  enableControls = true,
  autoRotate = true,
  rotationSpeed = 0.005,
  cameraPosition = [0, 0, 5],
  modelScale = 1,
  modelPosition = [0, 0, 0],
  ambientIntensity = 0.5,
  enableLighting = true,
}) => {
  return (
    <div className="absolute inset-0 pointer-events-auto">
      <Canvas
        className="w-full h-full"
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={cameraPosition} fov={45} />
        
        {/* Lighting */}
        {enableLighting && (
          <>
            <ambientLight intensity={ambientIntensity} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <directionalLight position={[-10, -10, -5]} intensity={0.5} />
            <pointLight position={[0, 5, 0]} intensity={0.5} color="#00ffff" />
          </>
        )}

        {/* 3D Model */}
        <Suspense fallback={null}>
          <Model3D
            modelPath={modelPath}
            position={modelPosition}
            scale={modelScale}
            autoRotate={autoRotate}
            rotationSpeed={rotationSpeed}
          />
        </Suspense>

        {/* Environment for reflections */}
        <Environment preset="city" />

        {/* Controls */}
        {enableControls && (
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minDistance={2}
            maxDistance={10}
            autoRotate={false}
          />
        )}
      </Canvas>
    </div>
  );
};

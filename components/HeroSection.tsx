import React from 'react';
import { Model3DCanvas } from './SpaceScene/Model3DCanvas';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-screen flex flex-col justify-center snap-start overflow-hidden bg-black">
      {/* 3D GLTF Model */}
      <div className="absolute inset-0 z-10">
        <Model3DCanvas
          modelPath="/models/model.gltf"
          enableControls={false}
          autoRotate={true}
          rotationSpeed={0.001}
          cameraPosition={[5, 5, 5]}
          modelScale={0.6}
          modelPosition={[0, 0, 0]}
          ambientIntensity={0.6}
          enableLighting={true}
        />
      </div>
    </section>
  );
};
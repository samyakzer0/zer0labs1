import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';
import { BlackHole } from './BlackHole';
import { OrbitPaths } from './OrbitPaths';
import { EffectComposer, Bloom, Vignette, Noise, ToneMapping } from '@react-three/postprocessing';

export const Scene: React.FC = () => {
  return (
    <Canvas 
      gl={{ antialias: true, alpha: false, stencil: false, depth: true }}
      dpr={[1, 1.5]} 
      shadows
    >
      <color attach="background" args={['#000000']} />
      
      {/* Cinematic Camera Angle - Adjusted closer since Station is gone */}
      <PerspectiveCamera makeDefault position={[20, 3, 22]} fov={35} />
      
      <OrbitControls 
        enablePan={true} 
        enableZoom={true} 
        maxDistance={100} 
        minDistance={10} 
        autoRotate={true}
        autoRotateSpeed={0.2}
        target={[0, 0, 0]}
      />

      <Suspense fallback={null}>
        <group>
            <BlackHole />
            <OrbitPaths />
        </group>
        
        {/* Environment - Deep Space */}
        <Stars 
          radius={300} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1} 
        />
        
        {/* Lighting Setup - MONOCHROME */}
        {/* The Black Hole Accretion Disk is the main light source - Pure White */}
        <pointLight 
          position={[0, 0, 0]} 
          intensity={80} 
          color="#ffffff" 
          distance={200} 
          decay={2} 
        />
        
        {/* Rim light/Fill light for the dark side of objects - Dark Gray */}
        <ambientLight intensity={0.05} color="#222222" />
        
        {/* Distant star light - Cool White/Gray */}
        <directionalLight 
            position={[100, 50, -50]} 
            intensity={0.5} 
            color="#eeeeee" 
        />
      </Suspense>

      {/* Post Processing for Realism */}
      <EffectComposer disableNormalPass>
        <Bloom 
          luminanceThreshold={1.0} 
          mipmapBlur 
          intensity={1.2} 
          radius={0.5}
        />
        <Noise opacity={0.05} />
        <Vignette eskil={false} offset={0.1} darkness={1.0} />
        <ToneMapping adaptive={true} resolution={256} middleGrey={0.5} maxLuminance={16.0} averageLuminance={1.0} adaptationRate={1.0} />
      </EffectComposer>
    </Canvas>
  );
};
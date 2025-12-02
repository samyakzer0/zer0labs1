import React from 'react';
import * as THREE from 'three';
import { ThreeElements } from '@react-three/fiber';

export const BlackHole: React.FC = () => {
  // Removed useFrame rotation logic for a static black hole as requested

  return (
    <group>
      {/* === Event Horizon (The Void) === */}
      <mesh>
        <sphereGeometry args={[4, 64, 64]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* === Photon Ring (The bright edge) === */}
      {/* Thin bright ring facing camera or spherical glow edge */}
      <mesh>
        <sphereGeometry args={[4.05, 64, 64]} />
        <meshBasicMaterial 
            color="#ffffff" 
            transparent 
            opacity={0.8} 
            side={THREE.BackSide}
            blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      {/* A sharp ring geometry for the distinct photon circle */}
      <mesh rotation={[Math.PI/2, 0, 0]}> 
         <ringGeometry args={[4.1, 4.3, 128]} />
         <meshBasicMaterial color="#ffffff" side={THREE.DoubleSide} transparent opacity={0.9} blending={THREE.AdditiveBlending} toneMapped={false} />
      </mesh>


      {/* === Accretion Disk (Monochrome) === */}
      <group rotation={[Math.PI / 8, 0, 0]}>
        
        {/* Inner Volumetric Glow */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[4.2, 10, 128]} />
            <meshBasicMaterial 
                color="#ffffff" 
                transparent 
                opacity={0.3} 
                side={THREE.DoubleSide}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </mesh>

        {/* Main Disk - High Density - Bright White/Grey */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[5, 14, 128]} />
          <meshBasicMaterial 
            color="#cccccc" 
            transparent 
            opacity={0.5} 
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
        
        {/* Outer Dust / Gas - Darker Grey */}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
          <ringGeometry args={[6, 18, 128]} />
          <meshBasicMaterial 
            color="#444444" 
            transparent 
            opacity={0.15} 
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* Debris Lines for detail - Light Grey */}
         <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
          <ringGeometry args={[7, 7.1, 128]} />
          <meshBasicMaterial color="#aaaaaa" transparent opacity={0.3} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
        </mesh>
         <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
          <ringGeometry args={[9, 9.2, 128]} />
          <meshBasicMaterial color="#888888" transparent opacity={0.2} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
        </mesh>
      </group>
    </group>
  );
};
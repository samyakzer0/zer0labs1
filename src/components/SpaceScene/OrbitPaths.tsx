import React from 'react';
import * as THREE from 'three';
import { ThreeElements } from '@react-three/fiber';

export const OrbitPaths: React.FC = () => {
  return (
    <group rotation={[0.1, 0, 0]}> {/* Slight tilt to match general scene composition */}
      
      {/* Path 1: Inner Danger Zone (Dark Gray) */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[12, 12.05, 128]} />
        <meshBasicMaterial color="#666666" opacity={0.4} transparent side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
      </mesh>

      {/* Path 2: Traffic Lane (Faint White) */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[20, 20.03, 128]} />
        <meshBasicMaterial color="#ffffff" opacity={0.1} transparent side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
      </mesh>

      {/* Path 3: Station Orbit (Highlighted White) */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[28, 28.08, 128]} />
        <meshBasicMaterial color="#ffffff" opacity={0.3} transparent side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
      </mesh>
      
      {/* Path 4: Outer Perimeter (Very Faint) */}
       <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[38, 38.03, 128]} />
        <meshBasicMaterial color="#ffffff" opacity={0.05} transparent side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
};
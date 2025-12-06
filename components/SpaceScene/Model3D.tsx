import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Model3DProps {
  modelPath?: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  autoRotate?: boolean;
  rotationSpeed?: number;
}

export const Model3D: React.FC<Model3DProps> = ({
  modelPath = '/models/model.gltf',
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  autoRotate = true,
  rotationSpeed = 0.005,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Load GLTF model
  const { scene } = useGLTF(modelPath);

  // Auto-rotate animation
  useFrame(() => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      <primitive object={scene} />
    </group>
  );
};

// Preload the model
useGLTF.preload('/models/model.gltf');

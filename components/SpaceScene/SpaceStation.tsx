import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const SpaceStation: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const rotorRef = useRef<THREE.Group>(null);

  // Realistic Materials - MONOCHROME
  const hullMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#a0a0aa', 
    roughness: 0.3,
    metalness: 0.8,
  }), []);

  const darkTechMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#222222',
    roughness: 0.6,
    metalness: 0.6,
  }), []);

  const solarPanelMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#111111', // Pure black panels
    roughness: 0.1,
    metalness: 0.9,
    emissive: '#000000',
    emissiveIntensity: 0,
  }), []);

  const windowMaterial = useMemo(() => new THREE.MeshBasicMaterial({
    color: '#ffffff', // White lights
    toneMapped: false, 
  }), []);

  const engineGlow = useMemo(() => new THREE.MeshBasicMaterial({
    color: '#ffffff', // White engine glow
    transparent: true,
    opacity: 0.8,
    toneMapped: false,
  }), []);

  const blinkerA = useMemo(() => new THREE.MeshBasicMaterial({ color: '#ffffff', toneMapped: false }), []);
  const blinkerB = useMemo(() => new THREE.MeshBasicMaterial({ color: '#aaaaaa', toneMapped: false }), []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Orbital Motion along the 3rd path (Radius ~28)
    if (groupRef.current) {
        const radius = 28;
        const speed = 0.08;
        // Orbit logic
        groupRef.current.position.x = Math.sin(t * speed) * radius;
        groupRef.current.position.z = Math.cos(t * speed) * radius;
        
        // Orientation: Tangent to the orbit
        groupRef.current.rotation.y = t * speed + Math.PI / 2;
        // Slight bank angle for cinematic effect
        groupRef.current.rotation.z = Math.PI / 16; 
        // Slight pitch
        groupRef.current.rotation.x = Math.PI / 32;
    }

    // Artificial Gravity Rotation
    if (rotorRef.current) {
      rotorRef.current.rotation.z += 0.1; 
    }
  });

  return (
    <group ref={groupRef}>
      {/* Station Scale - adjusted to look massive relative to orbit lines */}
      <group scale={[0.5, 0.5, 0.5]}>
        
        {/* === CENTRAL SPINE (Non-Rotating) === */}
        <group rotation={[0, 0, Math.PI / 2]}>
            {/* Main Fuselage */}
            <mesh material={hullMaterial} castShadow receiveShadow>
                <cylinderGeometry args={[0.8, 0.8, 14, 32]} />
            </mesh>
            
            {/* Forward Command Module */}
            <group position={[0, 7.5, 0]}>
                 <mesh material={hullMaterial} castShadow receiveShadow>
                    <cylinderGeometry args={[1.2, 0.8, 2, 32]} />
                </mesh>
                 <mesh material={hullMaterial} position={[0, 1.2, 0]}>
                    <sphereGeometry args={[0.9, 32, 16]} />
                </mesh>
                {/* Bridge Windows */}
                <mesh position={[0, 1.4, 0.5]} material={windowMaterial}>
                    <boxGeometry args={[0.6, 0.3, 0.6]} />
                </mesh>
                 {/* Forward Sensor Spire */}
                 <mesh position={[0, 2.5, 0]} material={darkTechMaterial}>
                     <cylinderGeometry args={[0.05, 0.2, 4, 8]} />
                 </mesh>
            </group>

             {/* Rear Engineering Section */}
             <group position={[0, -6, 0]}>
                 <mesh material={darkTechMaterial} castShadow>
                    <cylinderGeometry args={[1.5, 1.2, 3, 32]} />
                </mesh>
                {/* Engine Nozzles */}
                <group position={[0, -2, 0]}>
                  <mesh position={[0.6, 0, 0]}>
                    <cylinderGeometry args={[0.4, 0.2, 1, 16]} />
                    <meshBasicMaterial color="#333" />
                  </mesh>
                  <mesh position={[0.6, -0.6, 0]}>
                     <cylinderGeometry args={[0.3, 0.05, 0.8, 16]} />
                     <primitive object={engineGlow} />
                  </mesh>

                  <mesh position={[-0.6, 0, 0]}>
                    <cylinderGeometry args={[0.4, 0.2, 1, 16]} />
                    <meshBasicMaterial color="#333" />
                  </mesh>
                  <mesh position={[-0.6, -0.6, 0]}>
                     <cylinderGeometry args={[0.3, 0.05, 0.8, 16]} />
                     <primitive object={engineGlow} />
                  </mesh>
                </group>
            </group>
        </group>

        {/* === ROTATING HABITATION RING === */}
        <group ref={rotorRef} rotation={[0, 0, 0]}>
            
            {/* Primary Torus */}
            <mesh material={hullMaterial} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
                <torusGeometry args={[7, 1.2, 32, 64]} />
            </mesh>

            {/* Structural Reinforcement Ring (Inner) */}
             <mesh material={darkTechMaterial} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[5.5, 0.3, 16, 64]} />
            </mesh>

            {/* Habitation Modules (Greebles on the ring) */}
            {Array.from({ length: 16 }).map((_, i) => {
                const angle = (i / 16) * Math.PI * 2;
                return (
                    <group key={i} rotation={[0, 0, angle]}>
                        <mesh position={[0, 7, 0]} material={hullMaterial} castShadow>
                            <boxGeometry args={[1.5, 2, 1.8]} />
                        </mesh>
                        {/* Lit Windows */}
                        <mesh position={[0, 7, 0.91]} material={windowMaterial}>
                             <planeGeometry args={[0.8, 0.6]} />
                        </mesh>
                         <mesh position={[0, 7, -0.91]} rotation={[0, Math.PI, 0]} material={windowMaterial}>
                             <planeGeometry args={[0.8, 0.6]} />
                        </mesh>
                    </group>
                );
            })}

            {/* Spokes */}
            {Array.from({ length: 4 }).map((_, i) => (
                <group key={i} rotation={[0, 0, (Math.PI / 2) * i]}>
                    <mesh material={hullMaterial} position={[0, 3.5, 0]}>
                        <cylinderGeometry args={[0.4, 0.4, 7, 16]} />
                    </mesh>
                </group>
            ))}
        </group>

        {/* === SOLAR ARRAYS & RADIATORS === */}
        {/* Attached near the rear, non-rotating */}
        <group position={[0, 0, -3]} rotation={[0, 0, Math.PI/4]}> 
             {/* Cross beam */}
             <mesh material={darkTechMaterial} rotation={[0, 0, Math.PI/2]}>
                 <cylinderGeometry args={[0.2, 0.2, 16, 8]} />
             </mesh>

             {/* Panels Left */}
             <mesh position={[-5, 0, 0]} rotation={[0, Math.PI/6, 0]} material={solarPanelMaterial}>
                 <boxGeometry args={[6, 3, 0.1]} />
             </mesh>
             {/* Panels Right */}
             <mesh position={[5, 0, 0]} rotation={[0, -Math.PI/6, 0]} material={solarPanelMaterial}>
                 <boxGeometry args={[6, 3, 0.1]} />
             </mesh>
        </group>

        {/* === NAVIGATION BEACONS === */}
        <mesh position={[7.8, 0, 0]} material={blinkerA}>
            <sphereGeometry args={[0.15]} />
        </mesh>
         <mesh position={[-7.8, 0, 0]} material={blinkerB}>
            <sphereGeometry args={[0.15]} />
        </mesh>

      </group>
    </group>
  );
};
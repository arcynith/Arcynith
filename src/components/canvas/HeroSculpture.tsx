"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Preload } from "@react-three/drei";
import * as THREE from "three";

function Sculpture() {
  const groupRef = useRef<THREE.Group>(null);
  const orbit1Ref = useRef<THREE.Group>(null);
  const orbit2Ref = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Very slow, elegant overall rotation
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x += delta * 0.02;
    }
    if (orbit1Ref.current) {
      // Orbiting dot 1
      orbit1Ref.current.rotation.z += delta * 0.15;
    }
    if (orbit2Ref.current) {
      // Orbiting dot 2
      orbit2Ref.current.rotation.z -= delta * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef}>
        
        {/* Solid inner core to hide backfacing wireframe lines and give it mass */}
        <mesh scale={0.99}>
          <torusKnotGeometry args={[1, 0.3, 100, 16]} />
          <meshStandardMaterial 
            color="#050505" 
            roughness={0.8}
          />
        </mesh>
        
        {/* Architectural Wireframe outer shell */}
        <mesh>
          <torusKnotGeometry args={[1, 0.3, 100, 16]} />
          <meshStandardMaterial 
            color="#ffffff" 
            wireframe={true}
            transparent={true}
            opacity={0.2}
          />
        </mesh>

        {/* Orbit Ring 1 */}
        <group rotation={[Math.PI / 3, 0, 0]}>
          <mesh>
            <torusGeometry args={[2.4, 0.003, 8, 64]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
          </mesh>
          <group ref={orbit1Ref}>
            <mesh position={[2.4, 0, 0]}>
              <sphereGeometry args={[0.04, 16, 16]} />
              <meshBasicMaterial color="#ffffff" />
            </mesh>
          </group>
        </group>

        {/* Orbit Ring 2 */}
        <group rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
          <mesh>
            <torusGeometry args={[3, 0.003, 8, 64]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
          </mesh>
          <group ref={orbit2Ref}>
            <mesh position={[3, 0, 0]}>
              <sphereGeometry args={[0.03, 16, 16]} />
              <meshBasicMaterial color="#a3a3a3" />
            </mesh>
          </group>
        </group>

      </group>
    </Float>
  );
}

export default function HeroSculpture() {
  return (
    <div className="absolute inset-0 z-0 opacity-70 mix-blend-screen pointer-events-none flex items-center justify-center">
      {/* Capped pixel ratio to 1.5 max to keep performance high */}
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Environment preset="city" resolution={256} />
        <Sculpture />
        <Preload all />
      </Canvas>
    </div>
  );
}

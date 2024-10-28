import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';  // Import THREE
// Alternatively, you could also import just the Color class: 
// import { Color } from 'three'; 

export function CodingDesk(props) {
  const { nodes } = useGLTF('models/Coding_Chair.glb');
  
  // Create a new material with a color
  const deskMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0x8B4513), // Change to desired color
    roughness: 0.5,
    metalness: 0.1,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={deskMaterial}
      />
    </group>
  );
}

useGLTF.preload('models/Coding_Chair.glb');

export default CodingDesk;

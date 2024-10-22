import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';  // Import THREE
// Alternatively, you could also import just the Color class: 
// import { Color } from 'three'; 

export function CodingDesk(props) {
  const { nodes } = useGLTF('models/wooden_laptop_table.glb');
  
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
        material={deskMaterial}  // Apply new material
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={deskMaterial}  // Apply new material
      />
    </group>
  );
}

useGLTF.preload('models/wooden_laptop_table.glb');

export default CodingDesk;

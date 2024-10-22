import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function GamingChair(props) {
  const { nodes, materials } = useGLTF('models/gaming_chair.glb');

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.526, 0.045]} scale={[0.154, 0.202, 0.255]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.black_skin} // Make sure this material exists
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.outline} // Ensure this material is defined and has the right properties
        />
      </group>
      <group position={[0.168, 0.359, -0.064]} rotation={[-0.12, 0.051, -0.401]} scale={0.255}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.black_skin} // Use the appropriate material
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.outline}
        />
      </group>
      {/* Additional parts of the chair */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.black_skin} // Make sure this is the right material
        position={[-0.008, 0.571, -0.129]}
        rotation={[-0.208, 0, 0]}
        scale={[0.119, 0.115, 0.093]}
      />
      {/* Add more mesh objects as needed */}
      {/* Ensure that all materials used are defined and loaded properly */}
    </group>
  );
}

useGLTF.preload('models/gaming_chair.glb');

export default GamingChair;

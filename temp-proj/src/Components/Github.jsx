import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Github = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/models/Github.glb')
  return (
    <group ref={ref} {...props} dispose={null}>
      <group position={[1, 0.005, -1]} rotation={[5, 4, -0.5]} scale={15}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.glossy_putih}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.github}
        />
      </group>
    </group>
  )
})

useGLTF.preload('/models/Github.glb');

export default Github;

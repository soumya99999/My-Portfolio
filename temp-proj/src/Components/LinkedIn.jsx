import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

const LinkedIn = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/models/LinkedIn.glb')
  return (
    <group ref={ref} {...props} dispose={null}>
      <group position={[0, -0.2, 3]} scale={0.128}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['Material.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials['Material.006']}
        />
      </group>
    </group>
  )
})

useGLTF.preload('/models/linkdin_logo.glb');

export default LinkedIn;

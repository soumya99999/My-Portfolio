/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Amdyoussef (https://sketchfab.com/Amdyoussef)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/book-2d6812b8d9c2439aa5e647b38ed9c047
Title: BOOK
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Book = (props) => {
  const { nodes, materials } = useGLTF('/models/book.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.997, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.paper}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.SIDES}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Material.004']}
        scale={0.298}
      />
    </group>
  )
}

useGLTF.preload('/models/book.glb')

export default Book;
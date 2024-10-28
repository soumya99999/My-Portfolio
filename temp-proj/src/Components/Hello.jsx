import React, { useEffect, useRef } from 'react';
import { useFBX, useGLTF } from '@react-three/drei';
import { AnimationMixer } from 'three';
import { useFrame } from '@react-three/fiber';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

export function Hello({ onLoadComplete, ...props }) {
  // Use GLTF loader with Draco compression
  const { nodes, materials } = useGLTF('models/Hello_new.glb', true, {
    draco: { decode: new DRACOLoader() }
  });

  // Load the specific FBX animation
  const animation = useFBX('models/animations/Throwing Dice.fbx');
  const groupRef = useRef();
  const mixer = useRef();

  useEffect(() => {
    if (groupRef.current && animation) {
      // Initialize AnimationMixer with the loaded group
      mixer.current = new AnimationMixer(groupRef.current);
      if (animation.animations.length > 0) {
        const action = mixer.current.clipAction(animation.animations[0]);
        action.play();
      }

      // Trigger onLoadComplete callback if provided
      if (onLoadComplete) {
        onLoadComplete();
      }

      return () => mixer.current.stopAllAction();  // Clean up animations on unmount
    }
  }, [animation, onLoadComplete]);

  // Use useFrame to handle animation updates, avoiding multiple animation loops
  useFrame((state, delta) => {
    if (mixer.current) mixer.current.update(delta);
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      {/* Render the 3D model's components such as eyes, head, body, etc. */}
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
    </group>
  );
}

// Preload the GLTF and FBX files to optimize loading
useGLTF.preload('models/Hello_new.glb');
useFBX.preload('models/animations/Standing Greeting.fbx');

export default Hello;

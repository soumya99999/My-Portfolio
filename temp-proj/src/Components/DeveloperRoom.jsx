import React, { useEffect, useRef } from 'react';
import { useFBX, useGLTF } from '@react-three/drei';
import { AnimationMixer, Clock } from 'three';  // Import THREE.js modules

const DeveloperRoom = (props) => {
    const { nodes, materials } = useGLTF('models/myself.glb');
    const animation = useFBX('/models/animations/mySelf.fbx');
    const groupRef = useRef();
    const mixer = useRef();

    useEffect(() => {
        if (groupRef.current && animation) {
            mixer.current = new AnimationMixer(groupRef.current);

            // Assuming your fbx animation has one or more actions
            if (animation.animations.length > 0) {
                const action = mixer.current.clipAction(animation.animations[0]);
                action.play();
            } else {
                console.warn("No animations found in the FBX file.");
            }

            const clock = new Clock();  // Use Clock from THREE.js
            
            const animate = () => {
                requestAnimationFrame(animate);
                const delta = clock.getDelta();
                mixer.current.update(delta);
            };
            
            animate();

            return () => {
                mixer.current.stopAllAction();
            };
        }
    }, [animation]);

    return (
        <group ref={groupRef} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <primitive object={nodes.Hips} />
                {/* Ensure all nodes are properly named and exist */}
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
                {/* Add remaining skinned meshes */}
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
                    geometry={nodes.Wolf3D_Outfit_Top.geometry}
                    material={materials.Wolf3D_Outfit_Top}
                    skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
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
                    geometry={nodes.Wolf3D_Body.geometry}
                    material={materials.Wolf3D_Body}
                    skeleton={nodes.Wolf3D_Body.skeleton}
                />
            </group>
        </group>
    );
};

useGLTF.preload('models/myself.glb');
useFBX.preload('/models/animations/mySelf.fbx');

export default DeveloperRoom;

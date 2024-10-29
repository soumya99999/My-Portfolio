import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';

const Three = ({ position = [0, 0, 0], scale = 5, rotation = [0, 0, 0] }) => {
    const { nodes, materials } = useGLTF('models/Three.glb');
    const threeRef = useRef();
    const [hovered, setHovered] = useState(false);

    // Use GSAP to rotate the model continuously
    useEffect(() => {
        if (threeRef.current) {
            gsap.timeline({ repeat: -1, repeatDelay: 0.5 })
                .to(threeRef.current.rotation, {
                    y: hovered ? '+=2' : `+=${Math.PI * 2}`,
                    x: hovered ? '+=2' : `-=${Math.PI * 2}`,
                    duration: 5, // Increase duration to slow down the animation
                    stagger: {
                        each: 0.15,
                    },
                });
        }
    }, [hovered]);

    return (
        <group
            ref={threeRef}
            position={position}
            scale={scale}
            rotation={rotation}
            dispose={null}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_3.geometry}
                material={materials.initialShadingGroup}
                position={[-0.284, -0.483, -0.408]}
            />
        </group>
    );
};

useGLTF.preload('models/Three.glb');

export default Three;

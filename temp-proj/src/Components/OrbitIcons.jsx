import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Instagram from '../Components/Instagram';
import Github from '../Components/Github';
import LinkedIn from '../Components/LinkedIn';

const OrbitingIcons = ({ centerX, centerZ, semiMajorAxis, semiMinorAxis }) => {
    const instagramRef = useRef();
    const githubRef = useRef();
    const linkedInRef = useRef();

    const speed = 0.5; // Adjust this value to control the speed of rotation
    const yOscillationSpeed = 2; // Speed of y-axis oscillation

    const handleClick = (url) => {
        console.log(`Clicked on: ${url}`); // Debugging statement
        window.open(url, '_blank'); // Open link in a new tab
    };

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * speed;

        // Instagram
        if (instagramRef.current) {
            instagramRef.current.position.x = centerX + semiMajorAxis * Math.cos(t);
            instagramRef.current.position.z = centerZ + semiMinorAxis * Math.sin(t);
            instagramRef.current.position.y = 1.15 + Math.sin(t * yOscillationSpeed) * 0.1;
        }

        // GitHub
        if (githubRef.current) {
            const githubOffset = 0.5; // Adjust this to space it further away from Instagram
            githubRef.current.position.x = centerX + (semiMajorAxis + githubOffset) * Math.cos(t + (2 * Math.PI) / 3);
            githubRef.current.position.z = centerZ + (semiMinorAxis + githubOffset) * Math.sin(t + (2 * Math.PI) / 3);
            githubRef.current.position.y = 1.15 + Math.sin(t * yOscillationSpeed) * 0.1;
        }

        // LinkedIn
        if (linkedInRef.current) {
            const linkedInOffset = 0.5; // Adjust this to space it further away from Instagram
            linkedInRef.current.position.x = centerX + (semiMajorAxis + linkedInOffset) * Math.cos(t + (4 * Math.PI) / 3);
            linkedInRef.current.position.z = centerZ + (semiMinorAxis + linkedInOffset) * Math.sin(t + (4 * Math.PI) / 3);
            linkedInRef.current.position.y = 1.15 + Math.sin(t * yOscillationSpeed) * 0.1; // Set to 1.15 for consistency
        }
    });

    return (
        <>
            <mesh
                onClick={() => handleClick('https://www.instagram.com/soumyaranjanbarik995?utm_source=qr&igsh=MWo2dzgzbzZoNzNiMw==')}
                ref={instagramRef}
                className="cursor-pointer"
            >
                <Instagram scale={0.1} rotation={[1.33, 1.38, 0.21]} />
            </mesh>
            <mesh
                onClick={() => handleClick('https://github.com/soumya99999')}
                ref={githubRef}
                className="cursor-pointer "
            >
                <Github scale={0.2} rotation={[1.33, 3, 0.21]} />
            </mesh>
            <mesh
                onClick={() => handleClick('https://www.linkedin.com/in/soumya160')}
                ref={linkedInRef}
                className="cursor-pointer "
            >
                <LinkedIn scale={0.1} rotation={[1.5, 0.3, 0.3]} />
            </mesh>
        </>
    );
};

export default OrbitingIcons;

import React, { useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import Instagram from './Instagram';
import Github from './Github';
import LinkedIn from './LinkedIn';

const AnimatedSocials = ({ positions }) => {
  const [movingIndex, setMovingIndex] = useState(0);
  const components = [Instagram, LinkedIn, Github];
  const radiusX = 1.5; // Horizontal radius of the ellipse
  const radiusZ = 1; // Vertical radius of the ellipse
  const speed = 0.02; // Speed of rotation

  useEffect(() => {
    const timer = setInterval(() => {
      setMovingIndex((prevIndex) => (prevIndex + 1) % components.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();
    const angle = elapsedTime * speed; // Calculate the angle based on elapsed time

    // Calculate the position for the current moving component
    const currentComponentIndex = movingIndex;
    const x = radiusX * Math.cos(angle + (currentComponentIndex * (Math.PI / 2))); // Offset angle for each component
    const z = radiusZ * Math.sin(angle + (currentComponentIndex * (Math.PI / 2))); // Offset angle for each component

    // Update the position of the current component
    const currentComponent = components[currentComponentIndex];
    currentComponent.position = [x, 0, z]; // Set the position for the currently moving component
  });

  return (
    <>
      {components.map((Component, index) => {
        return (
          index === movingIndex && (
            <Component key={index} position={[0, 0, 0]} /> // Position will be updated in useFrame
          )
        );
      })}
    </>
  );
};

export default AnimatedSocials;
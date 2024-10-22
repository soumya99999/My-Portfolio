import React from 'react';
import { Canvas } from '@react-three/fiber';
import Instagram from './Instagram';
import LinkedIn from './LinkedIn';
import Github from './Github';
import { OrbitControls } from '@react-three/drei';

const EllipticalOrbits = () => {
  return (
    <Canvas style={{ height: '100vh' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />

      {/* Instagram and LinkedIn move along the first elliptical path (diagonal 1) */}
      <Instagram />
      <LinkedIn />

      {/* GitHub moves along the second elliptical path (diagonal 2, rotated by 90 degrees) */}
      <Github />
    </Canvas>
  );
};

export default EllipticalOrbits;

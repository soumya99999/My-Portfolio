// HeroCamera.jsx
import React from 'react';
import { useFrame } from '@react-three/fiber';

const HeroCamera = (props) => {
  // Here, you can use props to customize the camera behavior if needed
  const { position, rotation } = props;

  // Optional: Update the camera position or rotation on every frame
  useFrame(({ camera }) => {
    camera.position.set(...position);
    camera.rotation.set(...rotation);
  });

  return null; // This component does not render anything itself
};

export default HeroCamera;

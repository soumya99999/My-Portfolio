import React, { useEffect, useRef, Suspense } from 'react';
import Typed from 'typed.js';
import { Canvas } from '@react-three/fiber';
import { Leva,useControls } from 'leva';
import DeveloperRoom from '../Components/DeveloperRoom';
import CodingDesk from '../Components/Desk';
import GamingChair from '../Components/GamingChair';
import Laptop from '../Components/Laptop';
import CanvasLoader from './CanvasLoader';
import ReactLogo from '../Components/ReactLogo';
import Java from '../Components/Java';
import Rings from '../Components/Rings';
import { useMediaQuery } from "react-responsive";
import Button from '../Components/Button';
import { calculateSizes } from '../constant';
import Target from '../Components/Target';

export const Hero = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Full Stack Web Developer', 'ML Engineer'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      showCursor: false,
      cursorChar: '|',
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const { position, scale, rotation } = useControls('Target',{
    position: { value: [0.4, -0.7, 2.5], step: 0.01 },
    scale: { value: 0.03, min: 0, max: 3, step: 0.01 },
    rotation: { value: [0, 0, 0], step: 0.01 },
  });

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <>
    <Leva hidden/>
    <section className="min-h-screen w-full flex flex-col justify-center items-center relative  text-white">
      <div className="mt-8 text-center">
        <h1 className="text-xl md:text-3xl text-gray-500">Hello, I am Soumya</h1>
      </div>

      <div className="flex-grow flex justify-center items-start pt-10">
        <p className="text-xl md:text-3xl">
          I am a{' '}
          <span ref={typedElement} className="highlight font-bold text-blue-700"></span>
          <span className="waving-hand">👋</span>
        </p>
      </div>

      {/* Canvas for 3D scene */}
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* Use the HeroCamera component with position and rotation */}
              <ambientLight intensity={0.4} />
              <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
              <spotLight position={[-10, 20, 10]} angle={0.15} penumbra={1} intensity={1.5} />
              
              {/* Place the ReactLogo and Java models 2.01 {"position":[2.01,-1.1900000000000002,2.8299999999999965]} */}
              <group>
              <Rings position={sizes.RingsPosition} scale={sizes.RingsScale} />
              <ReactLogo position={sizes.ReactLogoPosition} scale={sizes.ReactLogoScale} rotation={sizes.ReactLogoRotation} />
              <Java position={sizes.JavaPosition} scale={sizes.JavaScale} rotation={sizes.JavaRotation} />
              <Target position = {sizes.TargetPosition} scale ={sizes.TargetScale} />
              </group>
              


              {/* Existing models */}
              <Laptop position={sizes.LaptopPosition} scale={sizes.Laptop} rotation={sizes.LaptopRotation} />
              <CodingDesk position={sizes.CodingDeskPosition} scale={sizes.CodingDeskScale} />
              <GamingChair position={sizes.GamingChairPosition} scale={sizes.CodingDeskScale} />
              <DeveloperRoom scale={sizes.developerRoomScale} position={sizes.developerRoomPosition} rotation={sizes.developerRoomRotation} />
          </Suspense>
        </Canvas>
      </div>

      {/* Button rendered outside the 3D Canvas */}
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 flex justify-center">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
    </>
  );
};

export default Hero;

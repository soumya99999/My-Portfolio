import React, { useEffect, useRef, Suspense, lazy } from 'react';
import Typed from 'typed.js';
import { Canvas } from '@react-three/fiber';
// import { Leva, useControls } from 'leva';
import CanvasLoader from './CanvasLoader';
import { useMediaQuery } from 'react-responsive';
import Button from '../Components/Button';
import { calculateSizes } from '../constant';
import Rings from '../Components/Rings.jsx'
import CodeSnippet from './CodeSnippet.jsx';

const DeveloperRoom = lazy(() => import("../Components/DeveloperRoom.jsx"));
const Laptop = lazy(() => import("../Components/Laptop.jsx"));
const GamingChair = lazy(() => import("../Components/GamingChair.jsx"));
const CodingDesk = lazy(() => import('../Components/Desk.jsx'));
const Target = lazy(() => import("../Components/Target.jsx"));

const Hero = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Full Stack Web Developer', 'ML Engineer', 'Coder in Java'],
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

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <>
      <section className="min-h-screen w-full flex flex-col justify-center items-center relative text-white">

        {/* Hero Content */}
        <div className="mt-8 text-center">
          <h1 className="text-xl md:text-3xl text-gray-500">Hello, I am Soumya</h1>
        </div>

        <div className="flex-grow flex justify-center items-start pt-10">
          <p className="text-xl md:text-3xl">
            I am a{' '}
            <span ref={typedElement} className="font-bold text-blue-700"></span>
            <span className="waving-hand">👋</span>
          </p>
        </div>

        {/* Code Snippets on Left and Right */}
        <div className="absolute left-2 top-1/4 w-1/4 hidden sm:flex flex-col items-center space-y-2">
            <CodeSnippet
              code={`// JavaScript Example\nconst add = (a, b) => a + b;`}
              styleClass="glow-yellow"
              width="min-w-1"
              height="min-h-1" 
            />
          <CodeSnippet
            code={`// React Hook Example\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}`}
            styleClass="glow-purple"
            width="min-w-1"
            height="min-h-1" 
          />
        </div>

        <div className="absolute right-10 top-1/4 w-1/4 hidden sm:flex flex-col items-center space-y-2">
          <CodeSnippet
            code={`// Tailwind CSS\n<button className="bg-blue-500 hover:bg-blue-700">Button</button>`}
            styleClass="glow-blue"
            width="min-w-1"
            height="min-h-1" 
          />
          <CodeSnippet
            code={`// ML Model Prediction\nimport tensorflow as tf\n\nmodel = tf.keras.models.load_model('my_model')\ninput_data = tf.constant([[1.2, 0.7, 0.3]])\nprediction = model(input_data)\nprint(prediction)`}
            styleClass="glow-green"
            width="min-w-1"
            height="min-h-1" 
          />
        </div>


        {/* Canvas for 3D scene */}
        <div className="w-full h-full absolute inset-0">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <ambientLight intensity={0.4} />
              <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
              <spotLight position={[-10, 20, 10]} angle={0.15} penumbra={1} intensity={1.5} />

              {/* 3D Models */}
              <group>
                <Rings position={sizes.RingsPosition} scale={sizes.RingsScale} rotation={sizes.RingsRotation} />
                <Target position={sizes.TargetPosition} scale={sizes.TargetScale} />
              </group>

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

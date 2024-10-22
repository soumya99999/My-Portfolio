import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Leva, useControls } from 'leva';
import { useMediaQuery } from 'react-responsive';
import Hello from '../Components/Hello';
import Book from '../Components/Book';
import AboutChair from '../Components/AboutChair';
import FloatingGlobe from '../Components/FloatingGlobe';
import OrbitingIcons from '../Components/OrbitIcons';
import { calculateSizes } from '../constant';

const About = () => {
  const isLaptopScreen = window.innerWidth >= 600;
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const { position, scale, rotation } = useControls('Instagram', {
    position: { value: [0.71, 1.15, 2.50], step: 0.01 },
    scale: { value: 0.1, min: 0, max: 5, step: 0.01 },
    rotation: { value: [1.33, 1.38, 0.21], step: 0.01 },
  });

  // Elliptical motion parameters
  const semiMajorAxis = 1; // Adjust this for size of the ellipse
  const semiMinorAxis = 0.5; // Adjust this for size of the ellipse
  const centerX = 0; // Center x position
  const centerZ = 2.5; // Center z position

  return (
    <>
      <Leva hidden />
      <section className="c-space my-20 relative" id="about">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5 h-full">

          {/* 3D Model Section - Left Side on laptop screens */}
          <div className={`col-span-1 relative z-[3] h-full min-h-[500px] order-2 ${isLaptopScreen ? 'order-1' : 'order-2'} flex`}>
            <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[0, 10, 5]} intensity={1} />
              <Hello position={sizes.HelloPosition} scale={sizes.HelloScale} rotation={sizes.HelloRotation} />
              <Book position={sizes.BookPosition} scale={sizes.BookScale} rotation={sizes.BookRotation} />
              <AboutChair position={sizes.AboutChairPosition} scale={sizes.AboutChairScale} rotation={sizes.AboutChairRotation} />
              <OrbitingIcons
                centerX={centerX}
                centerZ={centerZ}
                semiMajorAxis={semiMajorAxis}
                semiMinorAxis={semiMinorAxis}
              />
            </Canvas>
          </div>

          {/* Text Section - Right Side on laptop screens */}
          <div className={`col-span-1 xl:row-span-1 relative h-full flex flex-col justify-center order-1 ${isLaptopScreen ? 'order-2' : 'order-1'}`}>
            <div className="grid-container z-[2] relative border-l-4 border-gray-400">
              <div className="bg-black text-gray-300 p-8 rounded-md shadow-lg font-mono border-l-4 border-gray-400">
                <h1 className="text-3xl md:text-5xl font-bold text-blue-400 tracking-wide mb-4">
                  Hi, I'm Soumya Ranjan Barik
                </h1>
                <p className="text-lg md:text-xl leading-relaxed mb-6">
                  🌆 Based in Bhubaneswar (BBSR), a city that blends culture with modern tech, I'm a passionate 3rd-year B.Tech student in Computer Science specializing in <span className="text-green-400">AI & Machine Learning</span>.
                  <br /><br />
                  💻 My journey revolves around developing dynamic <span className="text-blue-400">full-stack web applications</span> and building intelligent <span className="text-yellow-300">ML models</span>. Whether it's crafting seamless UIs, handling backend logic, or applying cutting-edge machine learning techniques, I thrive in creating impactful solutions.
                  <br /><br />
                  🎨 I believe in the power of creativity and innovation to drive tech forward. Currently, I lead Web Development initiatives while contributing to AI research, and I aim to push the boundaries of what's possible. When not coding, you'll find me exploring new places, engaging with the tech community, or getting lost in a great book 📚.
                </p>
              </div>
            </div>

            {/* Floating Globe */}
            <div className={`${isLaptopScreen ? 'absolute top-[-50px] right-0 w-full h-full z-[4] mr-16' : 'absolute top-0 right-0 w-full h-full z-[4] mr-28'}`}>
              <FloatingGlobe />
            </div>
          </div>

        </div>
      </section>

    </>
  );
};

export default About;
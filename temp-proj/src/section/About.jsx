import React, { Suspense, useMemo, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import FloatingGlobe from '../Components/FloatingGlobe';
import { calculateSizes } from '../constant';
import CanvasLoader from './CanvasLoader';

const Hello = lazy(() => import('../Components/Hello'));
const Book = lazy(() => import('../Components/Book'));
const AboutChair = lazy(() => import('../Components/AboutChair'));

const About = () => {
  // Media queries for responsive design
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // Memoized size calculations
  const sizes = useMemo(() => calculateSizes(isSmall, isMobile, isTablet), [isSmall, isMobile, isTablet]);

  return (
    <>
      <section className="c-space my-20 relative" id="about">
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5 h-full">
          
          {/* 3D Model Section - Left Side on Laptop Screens */}
          <div className={`col-span-1 relative z-[3] h-full min-h-[500px] order-2 ${isMobile ? 'order-1' : 'order-2'} flex`}>
            <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
              <ambientLight intensity={0.4} />
              <directionalLight position={[0, 10, 5]} intensity={0.8} />
              <Suspense fallback={<CanvasLoader />}>
                <Hello position={sizes.HelloPosition} scale={sizes.HelloScale} rotation={sizes.HelloRotation} />
                <Book position={sizes.BookPosition} scale={sizes.BookScale} rotation={sizes.BookRotation} />
                <AboutChair position={sizes.AboutChairPosition} scale={sizes.AboutChairScale} rotation={sizes.AboutChairRotation} />
              </Suspense>
            </Canvas>

            {/* External Links with Optimized Image Sizes */}
            <div className="absolute top-0 left-0 p-4">
              <a href="https://www.instagram.com/soumyaranjanbarik995?utm_source=qr&igsh=MWo2dzgzbzZoNzNiMw==" target="_blank" rel="noopener noreferrer">
                <img src="../assets/instagram.webp" alt="Instagram"  loading="lazy" className="w-12 h-12" />
              </a>
            </div>
            <div className="absolute top-0 right-0 p-4">
              <a href="https://www.linkedin.com/in/soumya160?" target="_blank" rel="noopener noreferrer">
                <img src="../assets/linkedin.webp" alt="LinkedIn" loading="lazy" className="w-12 h-12" />
              </a>
            </div>
            <div className="absolute bottom-0 left-0 p-4">
              <a href="https://github.com/soumya99999" target="_blank" rel="noopener noreferrer">
                <img src="../assets/Git.webp" alt="GitHub" loading="lazy" className="w-16 h-16" />
              </a>
            </div>
            <div className="absolute bottom-5 right-0 p-4">
              <a href="../assets/YourResume.pdf" download>
                <img src="../assets/resume.webp" alt="Resume" loading="lazy" className="w-10 h-10" />
              </a>
            </div>
          </div>

          {/* Text Section - Right Side on Laptop Screens */}
          <div className={`col-span-1 xl:row-span-1 relative h-full flex flex-col justify-center order-1 ${isMobile ? 'order-1' : 'order-2'}`}>
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

            {/* Conditionally Render Floating Globe for Larger Screens */}
            <div className={`${isMobile ? 'absolute top-0 right-0 w-full h-full z-[4] mr-44' : 'absolute top-[-50px] right-0 w-full h-full z-[4] mr-16'}`}>
              <FloatingGlobe />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

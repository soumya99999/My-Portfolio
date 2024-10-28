import React, { Suspense, lazy } from 'react';
import Navbar from "./section/Navbar";
import StarsCanvas from "./Components/Stars";
import Loading from './Components/PreLoader'; // Import your loading component


// Lazy load components
const Hero = lazy(() => import("./section/Hero"));
const About = lazy(() => import("./section/About"));
const SkillSection = lazy(() => import("./section/SkillSection"));
const Projects = lazy(() => import("./section/Projects"));
const Contact = lazy(() => import("./section/Contact"));

const App = () => {
  return (
    <main className="max-w-7xl mx-auto bg-gradient-to-r from-gray-900 to-black overflow-hidden">
      <Navbar />
        <Suspense fallback={<Loading />}>
          <Hero />
        </Suspense>
        <div className="relative z-0">
        <Suspense fallback={<Loading />}>
          <About />
          <StarsCanvas />
        </Suspense>
      </div>
      <Suspense fallback={<Loading />}>
        <SkillSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Contact />
      </Suspense>
    </main>
  );
};

export default App;

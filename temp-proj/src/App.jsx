
import Navbar from "./section/Navbar";
import Hero from  "./section/Hero";
import About from "./section/About";
import SkillSection from "./section/SkillSection";
import Projects from "./section/Projects"
import Contact from "./section/Contact";
import StarsCanvas from "./Components/Stars";

import EllipticalCross from "./Components/EllipticalOrbit";


const App = () => {
  return (
    <main className="max-w-7xl mx-auto bg-gradient-to-r from-gray-900 to-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative z-0">
      <About />
      <StarsCanvas />
      </div>
      <SkillSection />
      <Projects />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      {/* <EllipticalCross /> */}
    </main>
  );
};

export default App;



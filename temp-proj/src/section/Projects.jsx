import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { myProjects } from '../constant/index.js';
import CanvasLoader from '../Components/Loading';


const DemoComputer = lazy(()=> import("../Components/DemoComputer.jsx"))

const projectCount = myProjects.length;

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    useGSAP(() => {
        gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
    }, [selectedProjectIndex]);

    const currentProject = myProjects[selectedProjectIndex];

    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <section className="c-space">
    <h2 className="text-white text-3xl text-center font-bold mb-8">My Projects</h2>
    <div className="grid md:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        {/* Left side: Project info */}
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 bg-black-300 rounded-lg h-full">
            <div className="absolute top-0 right-0">
                <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
            </div>

            <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
            </div>

            <div className="flex flex-col gap-5 text-white-600 my-5">
                <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
                <p className="animatedText text-white">{currentProject.desc}</p>
                <p className="animatedText text-white">{currentProject.subdesc}</p>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-5">
                <div className="flex items-center gap-3">
                    {currentProject.tags.map((tag, index) => (
                        <div key={index} className="tech-logo">
                            <img src={tag.path} alt={tag.name} />
                        </div>
                    ))}
                </div>

                <a
                    className="flex items-center gap-2 cursor-pointer text-white-600"
                    href={currentProject.href}
                    target="_blank"
                    rel="noreferrer">
                    <img src="/assets/Github.png" alt="arrow" className="w-10 h-10" />
                </a>
            </div>

            <div className="flex justify-between items-center mt-7 ">
                <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                    <img src="/assets/left-arrow.png" alt="left arrow" />
                </button>

                <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                    <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                </button>
            </div>
        </div>

        {/* Right side: 3D Canvas */}
        <div className="border border-black-300 bg-black-200 rounded-lg h-full flex items-center justify-center">
            <Canvas>
                <ambientLight intensity={Math.PI} />
                <directionalLight position={[10, 10, 5]} />
                <Center>
                    <Suspense fallback={<CanvasLoader />}>
                        <group scale={`${isMobile? 1.4:1.7}`} position={[0, -2, 0]} rotation={[0, -0.1, 0]}>
                            <DemoComputer texture={currentProject.texture} />
                        </group>
                    </Suspense>
                </Center>
            </Canvas>
        </div>
    </div>
</section>

    );
};

export default Projects;
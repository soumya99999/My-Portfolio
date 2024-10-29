import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faNodeJs, faPython, faJava, faGit } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCube } from '@fortawesome/free-solid-svg-icons';

const skillsData = [
    { skill: 'JavaScript', level: 90, icon: faJs, color: '#F7DF1E' },
    { skill: 'React', level: 85, icon: faReact, color: '#61DAFB' },
    { skill: 'Node.js', level: 80, icon: faNodeJs, color: '#339933' },
    { skill: 'Python', level: 85, icon: faPython, color: '#3776AB' },
    { skill: 'Java', level: 80, icon: faJava, color: '#007396' },
    { skill: 'Git', level: 90, icon: faGit, color: '#F05032' },
    { skill: 'Databases', level: 75, icon: faDatabase, color: '#4479A1' },
    { skill: '3D Animations', level: 70, icon: faCube, color: '#FF69B4' },
];

const SkillCard = ({ skill, isActive, onClick }) => (
    <div 
        className={`bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 cursor-pointer ${isActive ? 'ring-2 ring-blue-400 transform scale-105' : 'hover:bg-gray-700'}`}
        onClick={onClick}
    >
        <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={skill.icon} className="mr-3 text-3xl" style={{ color: skill.color }} />
            <h3 className="text-xl font-semibold text-white">{skill.skill}</h3>
        </div>
        <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-300 bg-blue-900">
                    Proficiency
                </span>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
                <div 
                    style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transition-all duration-500"
                />
            </div>
        </div>
    </div>
);

const SkillSection = () => {
    const [activeSkill, setActiveSkill] = useState(null);

    return (
        <section className="py-16 bg-gradient-to-r from-gray-900 to-black" id="skills">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl text-center font-bold mb-12 text-white">My Expertise</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillsData.map((skill) => (
                        <SkillCard 
                            key={skill.skill}
                            skill={skill}
                            isActive={activeSkill === skill.skill}
                            onClick={() => setActiveSkill(skill.skill === activeSkill ? null : skill.skill)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillSection;

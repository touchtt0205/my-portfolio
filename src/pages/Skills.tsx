import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaDocker,  
  FaPython, 
  FaJava, 
  FaJsSquare, 
  FaPhp, 
  FaLaravel, 
  FaGitAlt, 
  
} from 'react-icons/fa'; 
import { 
  SiTypescript, 
  SiArduino, 
  SiNestjs, 
  SiKubernetes 
} from "react-icons/si";

import { 
  RiTailwindCssFill 
} from "react-icons/ri";

import { 
  DiMysql, 
  DiMongodb 
} from "react-icons/di";

import { 
  BiLogoPostgresql 
} from "react-icons/bi";


import { 
  FaUsers, 
  FaBox, 
  FaServer, 
  FaCode 
} from 'react-icons/fa'; // Soft Skills Icons from react-icons

type IconType = React.ComponentType<{ size?: number; className?: string }>;

// Define the structure of technical skills
interface SkillItem {
  name: string;
  Icon: IconType;
}

const Skills: React.FC = () => {
  // Technical skills array
  const technicalSkills: SkillItem[] = [
    // Languages
    { name: 'Python', Icon: FaPython },
    { name: 'Java', Icon: FaJava },
    { name: 'JavaScript', Icon: FaJsSquare },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'PHP', Icon: FaPhp },

    // Frameworks
    { name: 'Laravel', Icon: FaLaravel },
    { name: 'NestJS', Icon: SiNestjs },

    // Database
    { name: 'MySQL', Icon: DiMysql },
    { name: 'PostgreSQL', Icon: BiLogoPostgresql },
    { name: 'MongoDB', Icon: DiMongodb },

    // Web Development
    { name: 'ReactJS', Icon: FaReact },
    { name: 'Tailwind CSS', Icon: RiTailwindCssFill },

    // DevOps
    { name: 'Docker', Icon: FaDocker },
    { name: 'Kubernetes', Icon: SiKubernetes },

    // IoT
    { name: 'Arduino', Icon: SiArduino },
  ];

  // Soft skills array
  const softSkills: { name: string; Icon: IconType }[] = [
    { name: 'Team Collaboration', Icon: FaUsers },
    { name: 'Problem Solving', Icon: FaGitAlt },
    { name: 'Communication', Icon: FaBox },
    { name: 'Agile Methodology', Icon: FaServer },
    { name: 'Quick Learning', Icon: FaCode }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center text-primary">Technical Skills</h3>

            {/* Languages */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-center text-gray-700">Languages</h4>
                <div className="grid grid-cols-5 gap-6 justify-items-center">
                  {technicalSkills.filter(skill => 
                    ['Python', 'Java', 'JavaScript', 'TypeScript', 'PHP'].includes(skill.name)
                  ).map((skill, index) => (
                    <motion.div 
                      key={index} 
                      whileHover={{ scale: 1.1 }}
                      className="flex flex-col items-center"
                    >
                      <skill.Icon size={35} className="text-primary mb-2 hover:scale-110 transition-transform" />
                      <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>


            {/* Frameworks */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-center text-gray-700">Frameworks</h4>
              <div className="grid grid-cols-3 gap-6 justify-items-center">
                {technicalSkills.filter(skill => 
                  ['Laravel', 'NestJS'].includes(skill.name)
                ).map((skill, index) => (
                  <motion.div 
                    key={index} 
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <skill.Icon size={30} className="text-primary mb-2 hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-center text-gray-700">Databases</h4>
              <div className="grid grid-cols-3 gap-6 justify-items-center">
                {technicalSkills.filter(skill => 
                  ['MySQL', 'PostgreSQL', 'MongoDB'].includes(skill.name)
                ).map((skill, index) => (
                  <motion.div 
                    key={index} 
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <skill.Icon size={30} className="text-primary mb-2 hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Web Development */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-center text-gray-700">Web Development</h4>
              <div className="grid grid-cols-3 gap-6 justify-items-center">
                {technicalSkills.filter(skill => 
                  ['ReactJS', 'Tailwind CSS'].includes(skill.name)
                ).map((skill, index) => (
                  <motion.div 
                    key={index} 
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <skill.Icon size={30} className="text-primary mb-2 hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-center text-gray-700">DevOps</h4>
              <div className="grid grid-cols-3 gap-6 justify-items-center">
                {technicalSkills.filter(skill => 
                  ['Docker', 'Kubernetes'].includes(skill.name)
                ).map((skill, index) => (
                  <motion.div 
                    key={index} 
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <skill.Icon size={30} className="text-primary mb-2 hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* IoT */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-center text-gray-700">IoT</h4>
              <div className="grid grid-cols-3 gap-6 justify-items-center">
                {technicalSkills.filter(skill => 
                  ['Arduino', 'ESP32'].includes(skill.name)
                ).map((skill, index) => (
                  <motion.div 
                    key={index} 
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <skill.Icon size={30} className="text-primary mb-2 hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center text-primary">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white shadow-md rounded-lg p-4 text-center"
                >
                  <skill.Icon className="mx-auto text-primary mb-2" size={24} />
                  <p className="text-gray-700">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

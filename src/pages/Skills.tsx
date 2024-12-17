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
} from 'react-icons/fa';

type IconType = React.ComponentType<{ size?: number; className?: string }>;

interface SkillItem {
  name: string;
  Icon: IconType;
}

const Skills: React.FC = () => {
  const technicalSkills: SkillItem[] = [
    { name: 'Python', Icon: FaPython },
    { name: 'Java', Icon: FaJava },
    { name: 'JavaScript', Icon: FaJsSquare },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'PHP', Icon: FaPhp },
    { name: 'Laravel', Icon: FaLaravel },
    { name: 'NestJS', Icon: SiNestjs },
    { name: 'MySQL', Icon: DiMysql },
    { name: 'PostgreSQL', Icon: BiLogoPostgresql },
    { name: 'MongoDB', Icon: DiMongodb },
    { name: 'ReactJS', Icon: FaReact },
    { name: 'Tailwind', Icon: RiTailwindCssFill },
    { name: 'Docker', Icon: FaDocker },
    { name: 'Kubernetes', Icon: SiKubernetes },
    { name: 'Arduino', Icon: SiArduino },
  ];

  const softSkills: { name: string; Icon: IconType }[] = [
    { name: 'Team Collaboration', Icon: FaUsers },
    { name: 'Problem Solving', Icon: FaGitAlt },
    { name: 'Communication', Icon: FaBox },
    { name: 'Agile Methodology', Icon: FaServer },
    { name: 'Quick Learning', Icon: FaCode }
  ];

  const SkillCategory = ({ title, skills }: { title: string, skills: string[] }) => {
    return (
      <div className="mb-8">
        <h4 className="text-xl font-semibold mb-4 text-center text-gray-600 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-0.5  ">
          {title}
        </h4>
        <div className="grid grid-cols-3 gap-6 justify-items-center">
          {technicalSkills
            .filter(skill => skills.includes(skill.name))
            .map((skill, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center group"
              >
                <div className="p-3 bg-white rounded-full shadow-md group-hover:shadow-lg transition-all duration-300">
                  <skill.Icon 
                    size={35} 
                    className="text-navy group-hover:text-blue-600 transition-colors" 
                  />
                </div>
                <span className="text-gray-700 font-medium text-sm mt-2 group-hover:text-blue-600 transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
        </div>
      </div>
    );
  };

  return (
    <section 
      id="skills" 
      className="min-h-screen flex items-center justify-center py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 relative"
        >
          Skills
          {/* <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></span> */}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Technical Skills</h3>

            <SkillCategory title="Languages" skills={['Python', 'Java', 'JavaScript', 'TypeScript', 'PHP']} />
            <SkillCategory title="Frameworks" skills={['Laravel', 'NestJS']} />
            <SkillCategory title="Databases" skills={['MySQL', 'PostgreSQL', 'MongoDB']} />
            <SkillCategory title="Web Development" skills={['ReactJS', 'Tailwind']} />
            <SkillCategory title="DevOps" skills={['Docker', 'Kubernetes']} />
            <SkillCategory title="IoT" skills={['Arduino']} />
          </motion.div>

          {/* Soft Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 border border-gray-100 rounded-lg p-4 text-center group hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="p-3 bg-white rounded-full inline-block mb-2 shadow-md group-hover:shadow-lg transition-all">
                    <skill.Icon className="text-navy group-hover:text-blue-600 transition-colors" size={24} />
                  </div>
                  <p className="text-gray-700 group-hover:text-blue-800 transition-colors">{skill.name}</p>
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
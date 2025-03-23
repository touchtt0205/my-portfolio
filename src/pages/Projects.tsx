import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects'; // นำเข้า projects จากไฟล์ projects.ts

// Define a type for your project
interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubLink: string;
  status: string;
  timeframe?: string; // Optional property we'll add
  fullDetails: {
    background: string;
    challenges: string[];
    solutions: string[];
    lessons: string[];
    features: any[]; // You can define a more specific type here if needed
  };
}

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [activeTimeframe, setActiveTimeframe] = useState('all');

  // จัดกลุ่มโปรเจคตามช่วงเวลา
  const timeframes = [
    { id: 'all', label: 'All Projects' },
    { id: 'y2s1', label: 'Year 2 Semester 1' },
    { id: 'y2s2', label: 'Year 2 Semester 2' },
    { id: 'y3s1', label: 'Year 3 Semester 1' },
    { id: 'y3s2', label: 'Year 3 Semester 2' },
  ];
  
  // Map projects to their respective timeframes
  const getProjectTimeframe = (title: string): string => {
    if (title.includes('Rock-Paper-Scissors')) return 'y2s1';
    if (title.includes('Game Upbeat')) return 'y2s2';
    if (title.includes('Art and Community')) return 'y3s1';
    if (title.includes('E-commerce Store')) return 'y3s1';
    if (title.includes('Computer Architecture')) return 'y3s1';
    if (title.includes('Nuclues')) return 'y3s2';
    return 'all';
  };

  // Map the original projects array to include timeframe
  const projectsWithTimeframe: Project[] = projects.map(project => ({
    ...project,
    timeframe: getProjectTimeframe(project.title)
  }));

  // Sort projects chronologically by timeframe
  const sortedProjects = [...projectsWithTimeframe].sort((a, b) => {
    const timeframeOrder = { y2s1: 1, y2s2: 2, y3s1: 3, y3s2: 4 };
    return timeframeOrder[a.timeframe as keyof typeof timeframeOrder] - 
           timeframeOrder[b.timeframe as keyof typeof timeframeOrder];
  });

  // กรองโปรเจคตาม timeframe ที่เลือก
  const filteredProjects = activeTimeframe === 'all' 
    ? sortedProjects 
    : sortedProjects.filter(project => project.timeframe === activeTimeframe);

  // ฟังก์ชั่นในการไปยังหน้ารายละเอียดของโปรเจค
  const navigateToProjectDetail = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section 
      id="projects" 
      className="min-h-screen flex items-center justify-center py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8 text-gray-800"
        >
          Projects
        </motion.h2>

        {/* Timeline Component */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Timeline Bar */}
            <div className="hidden md:block absolute left-0 right-0 h-1 bg-gray-200 top-1/2 transform -translate-y-1/2 rounded-full"></div>
            
            {/* Timeline Points */}
            <div className="flex flex-wrap md:flex-nowrap justify-between">
              {timeframes.map((timeframe, index) => (
                <div 
                  key={timeframe.id} 
                  className={`relative flex flex-col items-center cursor-pointer transition-all duration-300 ${
                    index === 0 ? 'md:hidden' : ''
                  }`}
                  onClick={() => setActiveTimeframe(timeframe.id)}
                >
                  <div 
                    className={`w-6 h-6 rounded-full z-10 mb-2 transition-all duration-300 flex items-center justify-center ${
                      activeTimeframe === timeframe.id ? 'bg-[#b22222] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  >
                    {activeTimeframe === timeframe.id && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <p 
                    className={`text-sm font-medium ${
                      activeTimeframe === timeframe.id ? 'text-[#b22222] font-bold' : 'text-gray-600'
                    }`}
                  >
                    {timeframe.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Filter Pills - For Mobile */}
        <div className="flex flex-wrap gap-2 mb-8 md:hidden">
          {timeframes.map(timeframe => (
            <button
              key={timeframe.id}
              onClick={() => setActiveTimeframe(timeframe.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeTimeframe === timeframe.id 
                  ? 'bg-[#b22222] text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {timeframe.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full"
            >
              <div className="relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                {/* Timeframe Badge */}
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full">
                  {timeframes.find(t => t.id === project.timeframe)?.label}
                </div>
              </div>
              
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 bg-gray-100 inline-block px-2 py-0.5 rounded-full">{project.role}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
            
                {/* Status Section */}
                <p 
                  className={`text-gray-600 inline-block px-2 py-0.5 rounded-full
                    ${project.status === 'Completed' ? 'text-green-500' : ''}
                    ${project.status === 'In Progress' ? 'text-yellow-500' : ''}
                  `}
                >
                  ● {project.status}
                </p>
              </div>
            
              {/* Button Section */}
              <div className="p-6">
                <button
                  onClick={() => navigateToProjectDetail(project.id)}
                  className="w-full bg-[#333333] text-white py-2 rounded-lg hover:bg-[#b22222] transition"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found for this timeframe.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
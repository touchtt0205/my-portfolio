import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects'; // นำเข้า projects จากไฟล์ projects.ts

const Projects: React.FC = () => {
  const navigate = useNavigate();

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
          className="text-4xl font-bold text-center mb-12 text-gray"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full"
          >
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-48 object-cover"
            />
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
          
            {/* Ensure that the button is always at the bottom */}
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
      </div>
    </section>
  );
};

export default Projects;

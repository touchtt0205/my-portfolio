import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Code } from 'lucide-react';

interface WorkExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

const WorkExperience: React.FC = () => {
  const experiences: WorkExperienceItem[] = [
    {
      company: 'Chiang Mai University Faculty of Engineering',
      position: 'Backend Developer',
      duration: 'Nov 2022 - Present',
      description: [
        'Developed and maintained backend APIs for scholarship website, status checking and data management.', 
        'Collaboration with Frontend Team: Worked closely with the frontend development team to ensure seamless integration between the backend and the frontend components of the website.'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'GraphQL']
    }
  ];

  return (
    <section 
      id="work" 
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
          Work Experience
          {/* <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></span> */}
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row p-6">
                {/* Company Info */}
                <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-8">
                  <div className="flex items-center mb-3">
                    <Briefcase className="mr-3 text-blue-600" size={24} />
                    <h3 className="text-2xl font-semibold text-gray-800">{experience.company}</h3>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Code className="mr-3 text-blue-500" size={20} />
                    <p>{experience.position}</p>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="mr-3 text-blue-400" size={20} />
                    <p>{experience.duration}</p>
                  </div>
                </div>

                {/* Experience Details */}
                <div className="w-full md:w-2/3 border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-8">
                  <ul className="space-y-3 text-gray-700">
                    {experience.description.map((desc, idx) => (
                      <li 
                        key={idx} 
                        className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-500 before:rounded-full"
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>
                  
                  {experience.technologies.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIdx) => (
                          <span 
                            key={techIdx} 
                            className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
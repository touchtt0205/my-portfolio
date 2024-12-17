import React from 'react';
import { motion } from 'framer-motion';

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
      company: 'Tech Innovations Inc.',
      position: 'Senior Frontend Developer',
      duration: 'Jan 2022 - Present',
      description: [
        'Led development of responsive web applications',
        'Implemented modern React and TypeScript best practices',
        'Mentored junior developers in frontend technologies'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'GraphQL']
    },
    {
      company: 'Digital Solutions Corp',
      position: 'Frontend Developer',
      duration: 'Jun 2019 - Dec 2021',
      description: [
        'Developed and maintained multiple client-side projects',
        'Improved application performance and user experience',
        'Collaborated with cross-functional teams'
      ],
      technologies: ['React', 'Redux', 'Webpack', 'Jest']
    }
  ];

  return (
    <section 
      id="work" 
      className="min-h-screen flex items-center justify-center py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`
                flex flex-col md:flex-row items-start 
                ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                bg-white shadow-lg rounded-lg p-6
              `}
            >
              <div className={`
                w-full md:w-1/3 mb-4 md:mb-0
                ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}
              `}>
                <h3 className="text-2xl font-semibold text-primary">{experience.company}</h3>
                <p className="text-gray-600 mb-2">{experience.position}</p>
                <p className="text-gray-500 text-sm">{experience.duration}</p>
              </div>
              <div className="w-full md:w-2/3">
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  {experience.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIdx) => (
                    <span 
                      key={techIdx} 
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
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
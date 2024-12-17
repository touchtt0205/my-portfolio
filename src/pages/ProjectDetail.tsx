import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, GithubIcon, ExternalLinkIcon } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === parseInt(projectId || '0'));

  if (!project) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-red-500">Project not found</h1>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-primary mb-6"
          >
            <ArrowLeftIcon className="mr-2" /> Back to Projects
          </button>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={project.imageUrl}
              alt={`${project.title} preview`}
              className="w-full h-96 object-cover"
            />

            <div className="p-8">
              <h1 className="text-4xl font-bold mb-4 text-primary">{project.title}</h1>
              <p className="text-gray-700 mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mb-4 text-gray-700">{project.fullDetails.background}</p>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Project Links</h2>
                <div className="flex space-x-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                    >
                      <GithubIcon className="mr-2" /> GitHub
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                      <ExternalLinkIcon className="mr-2" /> Live Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import { VscArrowDown } from "react-icons/vsc";


interface SubFeature {
  title: string;
  description: string;
  imageUrl: string;
}

interface Feature {
  title: string;
  description: string;
  startTitle: string;
  imageUrl: string;
  subFeatures?: SubFeature[]; // Optional sub-features array
}

interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubLink?: string; // Optional GitHub link
  fullDetails: {
    // background: string;
    features: Feature[];
  };
}

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === parseInt(projectId || '0')) as Project | undefined;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-red-500">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2" /> Back
          </button>

          <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
            {/* Main Project Image */}
            <img
              src={project.imageUrl}
              alt={`${project.title} preview`}
              className="w-full h-auto object-cover sm:h-96 md:h-96 lg:h-96"
            />

            <div className="p-6 md:p-10 space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-primary">{project.title}</h1>
                <p className="text-gray-600 text-lg">Role: {project.role}</p>
                <p className="text-gray-600">{project.description}</p>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Background */}
              {/* <div className="prose max-w-none text-gray-700">{project.fullDetails.background}</div> */}

              {/* Features Section */}
              <section className="space-y-8">
                <h2 className="text-2xl font-semibold text-gray-900">Features</h2>
                {project.fullDetails.features.map((feature, index) => (
                  <FeatureAccordion key={index} feature={feature} />
                ))}
              </section>

              {/* Project Links */}
              {project.githubLink && (
                <div className="pt-6 border-t border-gray-200">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
                  >
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

/* FeatureAccordion Component */
const FeatureAccordion: React.FC<{ feature: Feature }> = ({ feature }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between w-full p-4 text-left bg-gray-100 hover:bg-gray-200 rounded-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
        <span className={`mt-2 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}><VscArrowDown />
        </span>
      </button>
      {isOpen && (
        <div className="p-4 space-y-4 text-gray-600">
          <p>{feature.description}</p>
          <h4 className="text-md font-semibold text-gray-700">{feature.startTitle}</h4>
          <img
            src={feature.imageUrl}
            alt={feature.title}
            className="w-full rounded-xl shadow-md mt-4"
          />
          {feature.subFeatures && (
            <div className="pl-4 border-l-2 border-gray-300 space-y-4">
              {feature.subFeatures.map((subFeature: SubFeature, index: number) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-md font-semibold text-gray-700">{subFeature.title}</h4>
                  <p className="text-gray-600">{subFeature.description}</p>
                  <img
                    src={subFeature.imageUrl}
                    alt={subFeature.title}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;

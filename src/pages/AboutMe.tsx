import React from 'react';
import { motion } from 'framer-motion';
import propic from '../assets/profilepic.jpg';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen flex flex-col items-center justify-center py-16 px-6 bg-gray-50"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl w-full"
      >
        {/* Profile Picture */}
        <img 
          src={propic}
          alt="Profile" 
          className="w-40 h-40 rounded-full mx-auto mb-6 object-cover md:w-56 md:h-56 shadow-lg"
        />

        {/* Name and Introduction */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Sippakon Khammisawang</h1>
        <p className="text-lg text-gray-600 mb-8">
          I’m a passionate software developer focused on creating impactful digital experiences. 
          Always learning and exploring new technologies to solve real-world problems.
        </p>

        {/* Education Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
          <ul className="text-gray-600">
            <li><strong>University Name</strong> - Bachelor's in Computer Science (2018 - 2022)</li>
            <li><strong>High School Name</strong> - Science Stream (2014 - 2018)</li>
          </ul>
        </div>

        {/* About Me Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600">
            I believe in the power of technology to transform lives. My focus is on building efficient, user-friendly software that addresses real-world challenges. 
            I have experience in both front-end and back-end development, and I enjoy building full-stack solutions. 
            Outside of work, I’m passionate about reading, outdoor adventures, and continuous self-improvement.
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-center space-x-6">
          <a 
            href="../../public/sippakon-cv.pdf" 
            target="_blank" 
            className="bg-primary text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
          >
            Download CV
          </a>
          <a 
            href="#contact" 
            className="border-2 border-primary text-primary px-6 py-3 rounded-full text-lg hover:bg-primary hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

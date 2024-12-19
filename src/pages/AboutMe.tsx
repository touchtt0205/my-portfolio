import React from 'react';
import { motion } from 'framer-motion';
import { Download, Send } from 'lucide-react';
import propic from '../assets/profilepic.jpg';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen flex flex-col items-center justify-center py-16 px-6 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-200 rounded-full blur-3xl"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl w-full relative z-10"
      >
        {/* Profile Picture with Hover Effect */}
        <div className="relative inline-block group mb-6">
          <img 
            src={propic}
            alt="Profile" 
            className="w-40 h-40 rounded-full mx-auto object-cover md:w-56 md:h-56 shadow-lg 
            transform transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
          />
          <div className="absolute inset-0 rounded-full border-4 border-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Name and Introduction */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
          Sippakon Khammisawang
          <span className="block text-base font-medium text-gray-600 mt-2">Software Developer</span>
        </h1>
        
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          I'm a passionate software developer focused on creating impactful digital experiences. 
          Always learning and exploring new technologies to solve real-world problems with creativity and precision.
        </p>

        {/* Education and About Me Sections */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Education</h2>
            <ul className="text-gray-600 text-sm space-y-4">
              <li className="flex flex-wrap justify-between">
                <span className="font-bold">University:</span>
                <span>Chiang Mai University , Thailand</span>
              </li>
              <li className="flex flex-wrap justify-between">
                <span className="font-bold">Degree:</span>
                <span className='text-xs mt-1'>B.Eng in Computer Engineering, 3<sup>rd</sup> year</span>
              </li>
              <li className="flex flex-wrap justify-between">
                <span className="font-bold">Duration:</span>
                <span>2022 - Present</span>
              </li>
            </ul>
          </div>


          {/* About Me Section */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">About Me</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              I believe in the power of technology to transform lives. My focus is on building efficient, 
              user-friendly software that addresses real-world challenges. 
              I'm experienced in full-stack development and passionate about continuous learning.
            </p>
          </div>
        </div>



        {/* Actions with Icons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full">
        <a 
          href={`/sippakon-cv.pdf`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center bg-[#333333] text-white px-6 py-3 rounded-full text-lg sm:text-base hover:bg-[#b22222] transition transform hover:scale-105 group"
        >
          <Download className="mr-2 group-hover:animate-bounce-slow" size={20} />
          Download CV
        </a>

          <a 
            href="#contact" 
            className="w-full sm:w-auto flex items-center justify-center border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-full text-lg sm:text-base hover:bg-[#333333] hover:text-white transition transform hover:scale-105 group"
          >
            <Send className="mr-2 group-hover:rotate-45 transition-transform" size={20} />
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
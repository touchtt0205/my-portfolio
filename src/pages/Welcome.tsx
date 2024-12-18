import React from 'react';
import { ChevronDownIcon } from 'lucide-react';

const Welcome: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="welcome" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#333333] to-[#1a1a1a] text-white py-16 px-6 relative overflow-hidden"
    >
      {/* Subtle background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Geometric overlay lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>
      </div>

      <div className="text-center max-w-3xl animate-fade-in-up relative z-10">
        <div className="relative inline-block mb-4">
          <h1 className="text-5xl font-extrabold animate-scale-up relative z-10">
            Welcome to My Portfolio
          </h1>
          <div className="absolute -bottom-2 left-0 w-full h-2 bg-white/30 -rotate-1 z-0"></div>
        </div>
        
        <p className="text-xl mb-8 animate-slide-in opacity-90 max-w-2xl mx-auto">
          I'm Sippakon Khammisawang, a passionate developer, ready to bring ideas to life with creativity and precision.
        </p>
        
        <div className="flex justify-center items-center space-x-4">
          <button 
            onClick={scrollToAbout} 
            className="bg-white text-[#000000] px-6 py-3 rounded-lg hover:bg-[#b22222] hover:text-white transition transform hover:scale-105 inline-block relative 
            before:absolute before:inset-0 before:scale-0 before:opacity-0 before:rounded-lg
            hover:before:scale-100 hover:before:opacity-100 before:transition-all before:duration-300 group"
          >
            <span className="relative z-10">Learn More About Me</span>
          </button>

          {/* Animated scroll down indicator */}
          <div className="animate-bounce-slow opacity-70 flex items-center justify-center">
            <ChevronDownIcon 
              className="text-white w-8 h-8 animate-pulse-slow" 
              strokeWidth={1.5} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

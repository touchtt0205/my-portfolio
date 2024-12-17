import React, { useEffect } from 'react';

const Welcome: React.FC = () => {
  useEffect(() => {
    // Scroll to About section after 3 seconds
    const timer = setTimeout(() => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 3000); // Scroll after 3 seconds

    return () => clearTimeout(timer); // Cleanup timer if component is unmounted
  }, []);

  return (
    <section 
      id="welcome" 
      className="min-h-screen flex items-center justify-center bg-[#333333] text-white py-16 px-6"
    >
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl mb-8">
          I'm Sippakon Khammisawang, a passionate developer, ready to bring ideas to life.
        </p>
        <a 
          href="#about" 
          className="bg-white text-blue-500 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Learn More About Me
        </a>
      </div>
    </section>
  );
};

export default Welcome;

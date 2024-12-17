import React from 'react';
import Welcome from './Welcome'; // Import the Welcome component
import About from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import WorkExperience from './WorkExperience';
import Extracurricular from './ExtracurricularActivities';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <div className="scroll-smooth">
      {/* Welcome Section */}
      <Welcome />

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Work Experience Section */}
      <section id="work-experience">
        <WorkExperience />
      </section>

      {/* Extracurricular Activities Section */}
      <section id="extracurricular">
        <Extracurricular />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Back to Top Button */}
      <div className="fixed bottom-4 right-4">
        <a href="#welcome">
          <button 
            className="bg-primary text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            ↑ Back to Top
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;

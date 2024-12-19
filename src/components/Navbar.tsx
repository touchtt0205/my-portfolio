import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { id: 'about', label: 'About Me', path: '/' },
    { id: 'skills', label: 'Skills', path: '/' },
    { id: 'projects', label: 'Projects', path: '/' },
    { id: 'work', label: 'Work Experience', path: '/' },
    { id: 'extra', label: 'Extracurricular', path: '/' },
    { id: 'contact', label: 'Contact', path: '/' }
  ];

  const scrollToSection = (sectionId: string, path: string) => {
    // Change route to the appropriate path
    navigate(path);
    
    // Scroll to the specific section
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      x: '100%',
      transition: {
        type: 'tween'
      }
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween'
      }
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#333333] text-white backdrop-blur-md z-50 shadow-md hidden md:block">
        <div className="container mx-auto flex justify-center items-center py-4">
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id, item.path)}
                className={`
                  text-sm font-medium transition-colors duration-300
                  ${activeSection === item.id 
                    ? 'text-primary' 
                    : 'text-gray-400 hover:text-white'}
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#333333] text-white backdrop-blur-md z-50 shadow-md md:hidden">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <h1 className="text-xl font-bold text-primary">Portfolio</h1>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="fixed top-16 right-0 w-64 bg-[#333333] shadow-lg rounded-lg overflow-hidden"
            >
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id, item.path)}
                    className={`
                      text-left px-6 py-3 border-b last:border-b-0
                      transition-colors duration-300
                      ${activeSection === item.id 
                        ? 'text-gray bg-gray-600'  // More noticeable active color
                        : 'text-gray-400 hover:bg-gray-700'}
                    `}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;

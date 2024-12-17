import React from 'react';
import { motion } from 'framer-motion';
import { PiCertificateLight } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BookOpen, MapPin } from 'lucide-react';

interface Activity {
  title: string;
  organization: string;
  description: string;
  icon: React.ElementType;
  date?: string;
}

const Extracurricular: React.FC = () => {
  const activities: Activity[] = [
    {
      title: 'Instructor for Huawei Cloud HCCDA - Tech Essentials Workshops',
      organization: 'Tech Community Meetup',
      description: 'Conducted weekly workshops teaching cloud computing and machine learning concepts. Developed curriculum covering foundational to advanced topics in cloud technologies and AI. Led hands-on labs and assisted participants in gaining practical skills.',
      icon: PiCertificateLight,
      date: '2022 - Present'
    },
    {
      title: 'Teacher Assistance - 261212 LOGIC & DIGITAL CIRCUITS LAB',
      organization: 'National Tech Challenge',
      description: 'Assisted in the teaching of logic design and digital circuits. Supported students in lab exercises and provided guidance on circuit simulations and debugging.',
      icon: FaChalkboardTeacher,
      date: 'August 2022'
    },
    {
      title: 'Teacher Assistance - 261200 OBJECT-ORIENTED PROGRAMMING',
      organization: 'National Tech Challenge',
      description: 'Helped students understand key concepts of object-oriented programming. Assisted with coding assignments, debugging, and conducting review sessions.',
      icon: FaChalkboardTeacher,
      date: 'Spring 2023'
    },
    {
      title: 'Teacher Assistance - 259201 COMP PROG FOR ENGINEERS',
      organization: 'National Tech Challenge',
      description: 'Provided support in teaching C programming for engineering students. Guided students through programming assignments and problem-solving techniques.',
      icon: FaChalkboardTeacher,
      date: 'Fall 2023'
    }
  ];

  return (
    <section 
      id="extra" 
      className="min-h-screen py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
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
          Extracurricular Activities
          {/* <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></span> */}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-50 rounded-full mr-4 group-hover:bg-blue-100 transition-colors">
                    <activity.icon className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-800 transition-colors">
                      {activity.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <BookOpen className="mr-2 w-4 h-4 text-blue-500" />
                      {activity.date}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {activity.description}
                </p>
                
                <div className="flex items-center text-sm font-medium text-gray-600">
                  <MapPin className="mr-2 w-4 h-4 text-blue-500" />
                  {activity.organization}
                </div>
              </div>
              
              {/* Subtle hover effect */}
              <div className="h-1 w-full bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
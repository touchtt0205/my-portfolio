import React from 'react';
import { motion } from 'framer-motion';
import { 
  AwardIcon, 
  UsersIcon, 
  BookOpenIcon, 
  CodeIcon, 
  GlobeIcon 
} from 'lucide-react';

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
      title: 'Machine Learning Workshop Facilitator',
      organization: 'Tech Community Meetup',
      description: 'Led weekly workshops teaching machine learning concepts to aspiring developers. Developed comprehensive curriculum covering fundamentals to advanced topics.',
      icon: BookOpenIcon,
      date: '2022 - Present'
    },
    {
      title: 'Hackathon Winner',
      organization: 'National Tech Challenge',
      description: 'First place winner for innovative AI-driven solution in healthcare track. Developed a machine learning model for early disease detection.',
      icon: AwardIcon,
      date: 'August 2022'
    },
    {
      title: 'Open Source Contributor',
      organization: 'GitHub Community',
      description: 'Active contributor to multiple open-source projects in web development and AI. Implemented features and fixed critical bugs in popular repositories.',
      icon: CodeIcon,
      date: '2021 - Present'
    },
    {
      title: 'International Tech Conference Speaker',
      organization: 'Global Tech Summit',
      description: 'Delivered keynote on emerging trends in AI and machine learning. Presented research findings to an international audience of tech professionals.',
      icon: GlobeIcon,
      date: 'October 2023'
    },
    {
      title: 'Volunteer Tech Mentor',
      organization: 'Code for Community',
      description: 'Mentored underprivileged students in coding and technology. Helped develop programming skills and guided career development.',
      icon: UsersIcon,
      date: '2020 - 2022'
    }
  ];

  return (
    <section 
      id="extra" 
      className="min-h-screen py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          Extracurricular Activities
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
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <activity.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {activity.date}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                {activity.description}
              </p>
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-600">
                  {activity.organization}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
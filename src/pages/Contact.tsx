import React from 'react';
import { motion } from 'framer-motion';
import { 
  MailIcon, 
  PhoneIcon, 
  MapPinIcon 
} from 'lucide-react';
import { 
  FaFacebookSquare, 
  FaGithubSquare 
} from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: MailIcon,
      title: 'Email',
      content: 'tttouch1122@gmail.com',
      mailto: 'mailto:tttouch1122@gmail.com?subject=Hello&body=I%20want%20to%20get%20in%20touch%20with%20you.'
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      content: '+66 864064203'
    },
    {
      icon: MapPinIcon,
      title: 'Location',
      content: 'Chiang Mai, Thailand'
    }
  ];

  const socialPlatforms = [
    { 
      name: 'LinkedIn', 
      icon: IoLogoLinkedin, 
      url: 'https://www.linkedin.com/in/%E0%B8%AA%E0%B8%B4%E0%B8%9B%E0%B8%9B%E0%B8%81%E0%B8%A3-%E0%B8%84%E0%B9%8D%E0%B8%B2%E0%B8%A1%E0%B8%B5%E0%B8%AA%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%87-b4a385319/' 
    },
    { 
      name: 'GitHub', 
      icon: FaGithubSquare, 
      url: 'https://github.com/touchtt0205' 
    },
    { 
      name: 'Facebook', 
      icon: FaFacebookSquare, 
      url: 'https://www.facebook.com/sippakon.khammisawang.2024' 
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12 max-w-4xl"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Me</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Get in Touch: I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
        </p>
      </div>

      {/* Contact Information */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-all"
          >
            <div className="mb-4 flex justify-center text-blue-600">
              <info.icon size={48} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{info.title}</h3>
            {info.mailto ? (
              <a 
                href={info.mailto} 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {info.content}
              </a>
            ) : (
              <p className="text-gray-600">{info.content}</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6">
        {socialPlatforms.map((platform, index) => (
          <motion.a
            key={index}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            <platform.icon size={40} />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Contact;
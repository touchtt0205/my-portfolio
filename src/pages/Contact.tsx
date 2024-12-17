import React from 'react';
import { motion } from 'framer-motion';
import { 
  MailIcon, 
  PhoneIcon, 
  MapPinIcon,
} from 'lucide-react';
import { FaFacebookSquare , FaGithubSquare   } from "react-icons/fa";
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

  return (
    <section 
      id="contact" 
      className="min-h-screen flex items-center justify-center py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-1 gap-12 justify-center items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary text-center">Get in Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-center space-x-4 text-gray-700">
                  <info.icon className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-medium text-lg">{info.title}</p>
                    {info.mailto ? (
                      <a
                        href={info.mailto}
                        className="text-sm text-primary hover:underline"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-sm">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center space-x-8"
        >
          {[
            { name: 'LinkedIn', icon: IoLogoLinkedin, url: 'https://www.linkedin.com/in/%E0%B8%AA%E0%B8%B4%E0%B8%9B%E0%B8%9B%E0%B8%81%E0%B8%A3-%E0%B8%84%E0%B9%8D%E0%B8%B2%E0%B8%A1%E0%B8%B5%E0%B8%AA%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%87-b4a385319/' },
            { name: 'GitHub', icon: FaGithubSquare , url: 'https://github.com/touchtt0205' },
            { name: 'Facebook', icon: FaFacebookSquare, url: 'https://www.facebook.com/sippakon.khammisawang.2024' }
          ].map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors text-lg font-medium flex items-center space-x-2"
            >
              <platform.icon className="w-6 h-6" />
              <span>{platform.name}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

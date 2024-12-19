import project2Img from './images/Project2/userdashboard.png';
import usertopup from './images/Project2/usertopup2.png';
import adminmanagetopup from './images/Project2/adminmanagetopup.png';
import userdashboard from './images/Project2/userdashboard.png';
import admindashboard from './images/Project2/admindashboard.png';
import usermembership from './images/Project2/usermembership.png';
import adminmanagemember from './images/Project2/adminmanagemember.png';
import discount from './images/Project2/discountformember.png';

export const project2 = {
  id: 2,
  title: 'E-commerce Store',
  role: 'Frontend and Backend Developer',
  description: 'Built an e-commerce platform with features including shopping carts, top-up systems, payment processing, and standard store functionalities.',
  technologies: ['PHP', 'Laravel', 'MySQL'],
  imageUrl: project2Img,
  githubLink: 'https://github.com/touchtt0205/E-commerce-Laravel.git',
  fullDetails: {
    background: 'Developed a platform to provide a full shopping experience with user-friendly features and secure transactions.',
    challenges: ['Implementing payment processing', 'Managing user accounts and orders', 'Ensuring security and data privacy'],
    solutions: ['Used Laravel for backend development', 'Implemented MySQL for database management', 'Integrated payment systems for secure transactions'],
    lessons: ['Improved skills in PHP and Laravel development', 'Learned about payment gateway integration', 'Enhanced understanding of e-commerce architecture and security'],
    features: [
      {
        title: 'Payment System',
        description: 'The top-up system will require the admin to verify that the user has actually made the payment by checking the attached receipt provided by the user.',
        startTitle: 'User Top-up',
        imageUrl: usertopup,
        subFeatures: [
          {
            title: 'Admin manage top-up',
            imageUrl: adminmanagetopup,
          },
        ],
        },
        {
          title: 'Dashboard',
          description: 'Created a user-friendly dashboard for managing artwork uploads, purchases, and sales.',
          startTitle: 'User Dashboard',
          imageUrl: userdashboard,
          subFeatures: [
            {
              title: 'Admin Dashboard',
              imageUrl: admindashboard,
            }
          ]
        },
        {
          title: 'Membership',
          description: 'There is a membership system that requires users to purchase a membership in order to receive discounts on purchases.',
          startTitle: 'Member subscription',
          imageUrl: usermembership,
          subFeatures: [
            {
              title: 'Discount for subscription',
              imageUrl: discount,
            },
            {
              title: 'Admin manage membership',
              imageUrl: adminmanagemember,
            },
            
          ]
        }
      ],
      
      
    
  },
  status: 'Completed', 
};

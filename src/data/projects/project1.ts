// project1.ts
import project1Img from './images/Project1/messageImage_1734514804502.jpg';
import usertopup from './images/Project1/user-topup.png'; 
import subFeatureImg1 from './images/Project1/admin-manage-topup.png';
import subFeatureImg2 from './images/Project1/user-withdraw.png';
import subFeatureImg3 from './images/Project1/admin-manage-withdraw.png';
import userdashboard from './images/Project1/home.png';
import admindashboard from './images/Project1/admin-dashboard.png';
import uploadimage from './images/Project1/upload.png';
import uploadslip from './images/Project1/upload-slip.png';
import managetag from './images/Project1/admin-manage-tag.png';
import searchbytags from './images/Project1/searchfortag1.png';
import loginregisterlocal from './images/Project1/register-local.png';
import loginOauth from './images/Project1/oauth-login.png';
import loginOauth2 from './images/Project1/oauth-google2.png';

export const project1 = {
  id: 1,
  title: 'Art and Community',
  role: 'Fullstack Developer',
  description: 'Developed a platform for showcasing art where users can upload, buy, and sell artworks with features like payment systems, shopping carts, and ownership rights management.',
  technologies: ['TypeScript', 'PostgREST', 'React', 'Tailwind'],
  imageUrl: project1Img,
  githubLink: 'https://github.com/SUPATKN/Art-and-Community.git',
  fullDetails: {
    background: 'A platform designed to connect artists and buyers, allowing seamless transactions and artwork management.',
    challenges: ['Implementing payment systems', 'Designing an intuitive user interface', 'Managing artwork ownership rights'],
    solutions: ['Used PostgREST for backend API integration', 'Tailwind CSS for responsive and sleek UI design', 'React for dynamic and interactive frontend'],
    lessons: ['Enhanced full-stack development skills', 'Learned about payment gateway integration', 'Improved understanding of user rights management in applications'],
    features: [
      {
        title: 'Payment System',
        description: 'Implemented a secure payment system allowing users to buy and sell artwork directly on the platform.',
        startTitle: 'User Top-up',
        imageUrl: usertopup,
        subFeatures: [
          {
            title: 'Admin manage top-up',
            description: 'All payments are encrypted using Stripe API.',
            imageUrl: subFeatureImg1,
          },
          {
            title: 'User Withdraw',
            description: 'Support for PayPal, credit cards, and bank transfers.',
            imageUrl: subFeatureImg2,
          },
          {
            title: 'Admin manage withdraw',
            description: 'Support for PayPal, credit cards, and bank transfers.',
            imageUrl: subFeatureImg3,
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
            description: 'All tags are encrypted using AWS S3.',
            imageUrl: admindashboard,
          }],
      },
      {
        title: 'Upload System',
        description: 'Created a user-friendly dashboard for managing artwork uploads, purchases, and sales.',
        startTitle:'Upload Image',
        imageUrl: uploadimage,
        subFeatures: [{
          title: 'Upload Slip',
          description: 'All slips are encrypted using AWS S3.',
          imageUrl: uploadslip,
        }],
      },
      {
        title: 'Tags',
        description: 'Created a user-friendly dashboard for managing artwork uploads, purchases, and sales.',
        startTitle:'Search by Tag',
        imageUrl: searchbytags,
        subFeatures: [{
          title: 'Admin manage tags',
          description: 'All tags are encrypted using AWS S3.',
          imageUrl: managetag,
        }],
      },
      {
        title: 'Login/Register',
        description: 'Created a user-friendly dashboard for managing artwork uploads, purchases, and sales.',
        startTitle:'Register Local',
        imageUrl: loginregisterlocal,
        subFeatures: [
          {
          title: 'Login Oauth and Local',
          description: 'All users are encrypted using AWS Cognito.',
          imageUrl: loginOauth,
        },{
          title: 'OAuth Login',
          description: 'All users are encrypted using AWS Cognito.',
          imageUrl: loginOauth2,
        }
      ],
      },
    ],
  },
  status: 'Completed', 
};

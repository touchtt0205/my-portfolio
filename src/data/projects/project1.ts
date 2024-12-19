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
  technologies: ['TypeScript', 'PostgREST', 'React', 'Tailwind' ,'Docker','Cypress'],
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
        description: 'The top-up system will require the admin to verify that the user has actually made the payment by checking the attached receipt provided by the user.',
        startTitle: 'User Top-up',
        imageUrl: usertopup,
        subFeatures: [
          {
            title: 'Admin manage top-up',
            imageUrl: subFeatureImg1,
          },
          {
            title: 'User Withdraw',
            description: 'The withdrawal system works similarly, where users are required to upload a receipt or provide the payment transfer details for the admin to process the transaction.',
            imageUrl: subFeatureImg2,
          },
          {
            title: 'Admin manage withdraw',
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
            description: 'The admin dashboard will be a page that manages everything related to users.',
            imageUrl: admindashboard,
          }],
      },
      {
        title: 'Upload System',
        description: 'Created a user-friendly Upload for managing artwork uploads',
        startTitle:'Upload Image',
        imageUrl: uploadimage,
        subFeatures: [{
          title: 'Upload Slip',
          imageUrl: uploadslip,
        }],
      },
      {
        title: 'Tags',
        description: 'We created tags to make it easier for users to search for or filter images they are interested in.',
        startTitle:'Search by Tag',
        imageUrl: searchbytags,
        subFeatures: [{
          title: 'Admin manage tags',
          imageUrl: managetag,
        }],
      },
      {
        title: 'Login/Register',
        description: 'There is a login/register system that allows users to sign up traditionally and also log in via Google.',
        startTitle:'Register Local',
        imageUrl: loginregisterlocal,
        subFeatures: [
          {
          title: 'Login Oauth and Local',
          imageUrl: loginOauth,
        },{
          title: 'OAuth Login',
          imageUrl: loginOauth2,
        }
      ],
      },
    ],
  },
  status: 'Completed', 
};

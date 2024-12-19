import project7Img from '../../assets/p7.jpg';
import swagger from './images/Project6/swgger.png';
import er from './images/Project6/er-lhc.png';
import figma1 from './images/Project6/figma-mobile.png';
import figma2 from './images/Project6/figna-com.png';

export const project6 = {
  id: 7,
  title: 'Nuclues Projects',
  role: 'Fullstack Developer',
  description: 'A system designed to enhance the tourism experience for the Holng Him Khaw community, with features like workshop booking, secure user authentication, and payment integration.',
  technologies: ['NestJS', 'MySQL', 'React', 'Tailwind', 'Docker'],
  imageUrl: project7Img,
  githubLink: '', 
  liveLink: '',  
  fullDetails: {
    background: 'This project focuses on improving the tourism experience of the Holng Him Khaw community by providing a platform for users to book workshops. It includes secure user authentication, workshop booking, and payment integration to streamline the user experience.',
    challenges: [
      'Building a scalable backend and database system to handle increasing user traffic.',
      'Implementing secure user authentication and protecting sensitive data.',
      'Designing a simple, intuitive workshop booking and payment flow.'
    ],
    solutions: [
      'Developed a scalable backend using **NestJS** for efficient API management.',
      'Used **MySQL** for reliable data storage with optimized queries.',
      'Built a modern, responsive front-end with **React** and **Tailwind CSS**.',
      'Deployed the application with **Docker** to ensure consistency across all environments and simplify scaling.'
    ],
    lessons: [
      'Enhanced skills in designing scalable APIs and databases.',
      'Gained practical experience implementing secure user authentication with JWT.',
      'Learned how to build maintainable and modular full-stack applications using **React** and **NestJS**.'
    ],
    features: [
      {
        title: 'Swagger Documentation',
        description: 'The API is documented using Swagger, offering easy-to-follow documentation for the backend.',
        imageUrl: swagger,
      },
      {
        title: 'ER Diagram',  
        description: 'A detailed ER Diagram illustrating the relationships between users, workshops, reservation, and payments.',
        imageUrl: er,
      },
      {
        title: 'Figma Design',
        description: 'Visual designs created in Figma to represent both mobile and desktop views, ensuring a user-friendly interface.',
        startTitle: 'Mobile',
        imageUrl: figma1,
        subFeatures: [
          {
            title: 'Desktop',
            imageUrl: figma2,
          }
        ]
      },
    ],
  },
  status: 'In Progress', 
};

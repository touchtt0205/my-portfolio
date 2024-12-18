import sub from './images/Project4/Sub.png';
import mul from './images/Project4/mul.png';
import comb from './images/Project4/comb.png';

export const project4 = {
  id: 4,
  title: 'Computer Architecture Project',
  role: 'Assembly Developer',
  description: 'Designed custom assembly instructions as part of a computer architecture project to support further system development.',
  technologies: ['Java'],
  imageUrl: sub,
  githubLink: 'https://github.com/PP2546/Proj_1_Com_Arch.git',
  fullDetails: {
    background: 'Focused on developing custom assembly instructions to enhance a computer system’s architecture for future improvements.',
    challenges: ['Designing efficient assembly instructions', 'Ensuring compatibility with existing system architecture', 'Optimizing performance of the custom instructions'],
    solutions: ['Used Java for implementing and testing custom instructions', 'Optimized instruction design for efficient execution', 'Ensured system compatibility and future scalability'],
    lessons: ['Improved understanding of computer architecture', 'Gained experience in assembly-level programming', 'Enhanced system optimization and performance skills'],
    features:[
      {
        title: 'Assembly Subtraction Optimization',
        description: 'Designed and implemented efficient assembly instructions for subtraction, reducing execution time and improving system performance.',
        startTitle: 'Assembly Subtraction Optimization',
        imageUrl: sub,
      },
      {
        title: 'Assembly Multiplication Implementation',
        description: 'Developed custom assembly instructions for multiplication, ensuring accurate and high-performance calculations within system constraints.',
        startTitle: 'Assembly Multiplication Implementation',
        imageUrl: mul,
      },
      {
        title: 'Assembly Combination Instructions',
        description: 'Created optimized combination instructions in assembly language, enabling seamless integration of operations while maintaining high efficiency.',
        startTitle: 'Assembly Combination Instructions',
        imageUrl: comb,
      }
      
  ]
  },
  status: 'Completed', 
};

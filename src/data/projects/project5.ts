import project5Img from './images/Project5/IMG_1637.jpg';
import circuit1 from './images/Project5/circuit.jpg';
import circuit2 from './images/Project5/circuit2.jpg';
import design from './images/Project5/design.jpg';
import logicgate from './images/Project5/logicgate.jpg';

export const project5 = {
  id: 5,
  title: 'Rock-Paper-Scissors Game',
  role: 'Developer',
  description: 'Designed a logic process to create a rock-paper-scissors game using basic logic gates like AND, OR, NOR, and NAND.',
  technologies: ['Digital Logic', 'Logic Gates'],
  imageUrl: project5Img,
  githubLink: '',
  fullDetails: {
    background: 'Developed a rock-paper-scissors game by utilizing basic logic gates to simulate the decision-making process in the game.',
    challenges: ['Simulating game logic with AND, OR, NOR, and NAND gates', 'Creating a functioning digital logic model', 'Debugging and optimizing the logic circuit'],
    solutions: ['Used AND, OR, NOR, and NAND gates to design the decision-making process', 'Optimized the logic gates for efficiency', 'Built a simple interface to display results'],
    lessons: ['Gained deeper understanding of digital logic and circuit design', 'Improved problem-solving skills using logic gates', 'Enhanced skills in translating game logic into hardware-level operations'],
    features: [
      {
        title: 'Game Design',
        description: 'Conceptualized and structured the game logic to translate rock-paper-scissors rules into digital logic.',
        imageUrl: design,
      },
      {
        title: 'Circuit Implementation',
        description: 'Implemented a digital logic circuit to simulate the game’s decision-making process.',
        startTitle: 'Circuit Implementation',
        imageUrl: circuit1,
        subFeatures: [
          {
            title: 'Circuit Optimization',
            description: 'Enhanced the circuit layout by reducing redundant logic gates, improving performance and minimizing latency.',
            imageUrl: circuit2,
          },
        ],
      },
      {
        title: 'Logic Gate Utilization',
        description: 'Used AND, OR, NOR, and NAND gates to create an efficient and functional representation of the game logic.',
        imageUrl: logicgate,
      },
    ],
  },
  status: 'Completed', 
};

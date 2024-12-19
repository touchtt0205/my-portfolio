import project3Img from './images/Project3/main.png';
import plan from './images/Project3/plan.jpg';
import map1 from './images/Project3/map1.jpg';
import map2 from './images/Project3/map2.jpg';
import lobby from './images/Project3/lobby.jpg';
import name from './images/Project3/name.png';
export const project3 = {
  id: 3,
  title: 'Game Upbeat',
  role: 'Frontend and Backend Developer',
  description: 'Designed and developed a strategy game where players input plans to conquer opposing cities, and the game executes based on the pre-defined strategies.',
  technologies: ['Java', 'Spring', 'React'],
  imageUrl: project3Img,
  githubLink: 'https://github.com/SUPATKN/UPBEATProject_29.git',
  fullDetails: {
    background: 'A strategy-based game allowing players to plan and execute actions to conquer cities, with a backend that processes the strategy and a dynamic frontend for player interaction.',
    challenges: ['Implementing game logic for city conquest', 'Managing real-time strategy execution', 'Designing an engaging and intuitive game UI'],
    solutions: ['Used Java and Spring for backend game logic', 'React for frontend to handle dynamic user interactions', 'Optimized real-time strategy processing on the backend'],
    lessons: ['Enhanced skills in backend development with Spring', 'Gained experience in game logic and strategy execution', 'Improved React skills for building dynamic game UIs'],
    features: [
      {
        title: 'City Conquest',
        description: 'A real-time strategy game where players can conquer cities and build infrastructure to expand their territory.',
        startTitle: 'City Conquest',
        imageUrl: project3Img,
        subFeatures: [
          {
            title: 'Join the game',
            description: 'The game allows for multiple player accounts and provides features like leaderboards and achievements.',
            imageUrl:name,
          },
          {
            title: 'Player Management',
            imageUrl:lobby,
          },
          {
            title: 'Real-time Strategy Execution',
            description: 'The game dynamically updates the game state based on player actions, providing a smooth and responsive experience.',
            imageUrl:plan,
          },
          {
            title: 'City Building',
            description: 'Players can build roads, factories, and other infrastructure to improve their territory and expand their economy.',
            imageUrl:map1,
          },
          {
            title: 'Another person building.',
            imageUrl:map2,
          },
          
        ],
      }
    ],
  },
  status: 'Completed', 
};

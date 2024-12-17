import project3Img from '../../assets/p3.jpg';

export const project3 = {
  id: 3,
  title: 'Chat Application',
  description: 'Real-time chat app with WebSocket integration.',
  technologies: ['React', 'Socket.IO', 'Express', 'Tailwind'],
  imageUrl: project3Img,
  githubLink: 'https://github.com/yourusername/chat-app',
  liveLink: 'https://realtimechat.com',
  fullDetails: {
    background: 'Built for real-time communication with instant message delivery.',
    challenges: ['Handling message latency', 'Building a scalable chat server', 'Creating a smooth UI'],
    solutions: ['Used Socket.IO for WebSocket communication', 'Implemented lazy loading for messages', 'Designed intuitive chat UI'],
    lessons: ['Mastered WebSocket and real-time messaging', 'Enhanced server-side optimization skills', 'Improved UX/UI design for chat apps'],
  },
};

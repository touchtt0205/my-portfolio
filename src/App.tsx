import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Change BrowserRouter to HashRouter
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-background text-text min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

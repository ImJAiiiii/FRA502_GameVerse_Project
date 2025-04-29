import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Community from './pages/Community';
import Navbar from './components/Navbar';
import ReviewDetail from './pages/ReviewDetail';

function App() {
  return (
    <Router>
      <Navbar /> {/* วาง Navbar ไว้ข้างนอก Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/review/:id" element={<ReviewDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

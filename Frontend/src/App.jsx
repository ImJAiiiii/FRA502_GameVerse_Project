import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Community from './pages/Community';
import Navbar from './components/Navbar';
import ReviewDetail from './pages/ReviewDetail';
import GuideCreatePage from './pages/GuideCreatePage';
import GuidePreviewPage from './pages/GuidePreviewPage';
import GuideDetailPage from './pages/GuideDetailPage';
import CreateReviewPage from './pages/CreateReviewPage';
import SetUsernameModal from './components/SetUsernameModal'; // ✅ import modal

function App() {
  return (
    <Router>
      <Navbar />
      <SetUsernameModal /> {/* ✅ แสดง modal ดักชื่อก่อนเข้าสู่ Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/review/:id" element={<ReviewDetail />} />
        <Route path="/create-guide" element={<GuideCreatePage />} />
        <Route path="/guide-preview" element={<GuidePreviewPage />} />
        <Route path="/guide-detail" element={<GuideDetailPage />} />
        <Route path="/create-review" element={<CreateReviewPage />} />
      </Routes>
    </Router>
  );
}

export default App;

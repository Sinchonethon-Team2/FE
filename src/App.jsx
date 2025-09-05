// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudyHome from "./pages/Homepage";
import MyPage from "./pages/MyPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<StudyHome />} />
        <Route path="/mypage" element={<MyPage/>} />
      </Routes>
    </Router>
  );
};

export default App;

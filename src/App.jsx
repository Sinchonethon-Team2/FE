// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import Challenge from "./pages/study_subject";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 홈 */}
        <Route path="/" element={<Home />} />

        {/* 스터디 생성 */}
        <Route path="/study/new/subject" element={<Challenge />} />
      </Routes>
    </Router>
  );
};

export default App;

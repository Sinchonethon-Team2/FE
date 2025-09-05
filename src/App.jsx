// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudyHome from "./pages/Homepage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<StudyHome />} />
      </Routes>
    </Router>
  );
};

export default App;

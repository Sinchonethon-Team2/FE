// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import Challenge from "./pages/study_subject";
import Money from "./pages/study_money"
import Duration from "./pages/study_duration"
import How from "./pages/study_how"
import Pass from "./pages/study_pass"
import Notice from "./pages/study_notice"
import Finish from "./pages/study_final"

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 홈 */}
        <Route path="/" element={<Home />} />

        {/* 스터디 생성 - 과목 */}
        <Route path="/study/new/subject" element={<Challenge />} />
        {/* 스터디 생성 - 금액과 인원 */}
        <Route path="/study/new/money" element={<Money />} />
        {/* 스터디 생성 - 기간 */}
        <Route path="/study/new/duration" element={<Duration />} />
        {/* 스터디 생성 - 계획/방법(how) */}
        <Route path="/study/new/how" element={<How />} />
        {/* 스터디 생성 - 기준 설정(pass) */}
        <Route path="/study/new/pass" element={<Pass />} />
        {/* 스터디 생성 - 공지사항(notice) */}
        <Route path="/study/new/notice" element={<Notice />} />
        {/* 스터디 생성 - 최종(final) */}
        <Route path="/study/new/final" element={<Finish />} />
      </Routes>
    </Router>
  );
};

export default App;

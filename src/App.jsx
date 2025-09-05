import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// 레이아웃 & 메인 네비
import MainLayout from "./layout/Mainlayout";
import StudyHome from "./pages/Homepage";
import MyPage from "./pages/MyPage";
import Study from "./pages/Study";

// 스터디 생성
import Challenge from "./pages/study_subject";
import Money from "./pages/study_money";
import Duration from "./pages/study_duration";
import How from "./pages/study_how";
import Pass from "./pages/study_pass";
import Notice from "./pages/study_notice";
import Finish from "./pages/study_final";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 공통 레이아웃이 필요한 화면 */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<StudyHome />} />
          <Route path="/study" element={<Study />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>

        {/* 스터디 생성 (레이아웃 없이) */}
        <Route path="/study/new/subject" element={<Challenge />} />
        <Route path="/study/new/money" element={<Money />} />
        <Route path="/study/new/duration" element={<Duration />} />
        <Route path="/study/new/how" element={<How />} />
        <Route path="/study/new/pass" element={<Pass />} />
        <Route path="/study/new/notice" element={<Notice />} />
        <Route path="/study/new/final" element={<Finish />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

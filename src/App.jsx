import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/Mainlayout";
import NoNav from "./layout/NoNav";
import StudyHome from "./pages/Homepage";
import MyPage from "./pages/MyPage";
import Study from "./pages/Study";
import StudyPeriod from "./pages/study_duration";
import StudyDone from "./pages/study_final";
import StudyOperate from "./pages/study_how";
import StudyMoney from "./pages/study_money";
import StudyAnnounce from "./pages/study_notice";
import StudySuccess from "./pages/study_pass";
import StudySubject from "./pages/study_subject";
import StudyDetail from "./pages/StudyDetail";
import SmallChallenge from "./pages/SmallChallenge";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<StudyHome />} />
          <Route path="/study" element={<Study />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/study-detail" element={<StudyDetail />} />
        </Route>
        <Route element={<NoNav />}>
          <Route path="/" element={<SmallChallenge />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/study/new/subject" element={<StudySubject />} />
          <Route path="/study/new/money" element={<StudyMoney />} />
          <Route path="/study/new/duration" element={<StudyPeriod />} />
          <Route path="/study/new/how" element={<StudyOperate />} />
          <Route path="/study/new/pass" element={<StudySuccess />} />
          <Route path="/study/new/notice" element={<StudyAnnounce />} />
          <Route path="/study/new/final" element={<StudyDone />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

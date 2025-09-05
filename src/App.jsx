import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layout/Mainlayout";
import NoNav from "./layout/NoNav";

// 탭 레이아웃 페이지
import StudyHome from "./pages/Homepage";
import MyPage from "./pages/MyPage";
import Study from "./pages/Study";
import StudyDetail from "./pages/StudyDetail";

// 온보딩/단독 페이지
import SmallChallenge from "./pages/SmallChallenge";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Food from "./pages/Food";

// 스터디 생성 플로우
import StudySubject from "./pages/study_subject";
import StudyMoney from "./pages/study_money";
import StudyPeriod from "./pages/study_duration";
import StudyOperate from "./pages/study_how";
import StudySuccess from "./pages/study_pass";
import StudyAnnounce from "./pages/study_notice";
import StudyDone from "./pages/study_final";

// 상세 퀘스트 페이지
import QuestDetail from "./pages/quest_detail";
import QuestDetailDone from "./pages/quest_detail_done";

// 퀘스트 신청
import StudyApply from "./pages/studyapply";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 공통 탭 레이아웃 */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<StudyHome />} />
          <Route path="/study" element={<Study />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/study-detail" element={<StudyDetail />} />
        </Route>

        {/* 네비게이션 없는 화면 */}
        <Route element={<NoNav />}>
          <Route path="/" element={<SmallChallenge />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/food" element={<Food />} />

          {/* 스터디 생성 */}
          <Route path="/study/new/subject" element={<StudySubject />} />
          <Route path="/study/new/money" element={<StudyMoney />} />
          <Route path="/study/new/duration" element={<StudyPeriod />} />
          <Route path="/study/new/how" element={<StudyOperate />} />
          <Route path="/study/new/pass" element={<StudySuccess />} />
          <Route path="/study/new/notice" element={<StudyAnnounce />} />
          <Route path="/study/new/final" element={<StudyDone />} />

          {/* 상세 퀘스트 */}
          <Route path="/study/detail/:id" element={<QuestDetail />} />
          <Route path="/study/detail/:id/done" element={<QuestDetailDone />} />

          {/* 퀘스트 신청 */}
          <Route path="/study/apply" element={<StudyApply />} />

          {/* 404 -> 홈 */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
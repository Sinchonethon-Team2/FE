import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/Mainlayout";
import StudyHome from "./pages/Homepage";

const HomePage = () => <div style={{padding: 20}}>Home</div>;
const StudyPage = () => <div style={{padding: 20}}>Study</div>;


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 공통 레이아웃 */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/study" element={<StudyPage />} />
          <Route path="/shome" element={<StudyHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

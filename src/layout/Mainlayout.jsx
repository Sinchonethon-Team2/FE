import React from "react";
import { Outlet } from "react-router-dom";
import NavbarBottom from "./BottomNav";
import "./MainLayout.css"

export default function MainLayout() {
  return (
    <div className="app-shell">
      {/* 가운데 390px 캔버스 */}
      <div className="main-wrap">
        {/* 하단바 공간만큼 내용이 가려지지 않도록 */}
        <div className="content">
          <Outlet />
        </div>
      </div>

      {/* 뷰포트 하단에 고정되지만, 폭은 390px로 가운데 정렬 */}
      <NavbarBottom />
    </div>
  );
}
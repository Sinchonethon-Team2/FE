import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/BottomNav.css";

import homeIcon from "../assets/home.png";
import studyIcon from "../assets/mypage.png"; // 파일명 매칭 확인!
import myIcon    from "../assets/study.png";  // 파일명 매칭 확인!

export default function NavbarBottom() {
  const { pathname } = useLocation();

  const items = [
    { to: "/home",       icon: homeIcon },
    { to: "/study",   icon: studyIcon },
    { to: "/mypage", icon: myIcon },
  ];

  return (
    <>
      <div className="nb__spacer" />
      <nav className="nb">
        {items.map(({ to, label, icon }) => (
          <Link
            key={to}
            to={to}
            className={`nb__item ${pathname === to ? "is-active" : ""}`}
          >
            {/* 아이콘이 꽉 차는 영역 */}
            <div className="nb__icon-wrap">
              <img className="nb__icon" src={icon} alt={label} />
            </div>
            {/* 텍스트는 아이콘 박스 바깥(아래) 고정 */}
            <span className="nb__label">{label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
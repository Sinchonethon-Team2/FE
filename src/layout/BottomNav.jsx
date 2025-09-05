import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/BottomNav.css";

// 아이콘 import
import homeIcon from "../assets/home.png";
import homeIconActive from "../assets/home1.png";

import studyIcon from "../assets/study.png";
import studyIconActive from "../assets/study1.png";

import myIcon from "../assets/mypage.png";
import myIconActive from "../assets/mypage1.png";

export default function NavbarBottom() {
  // 기본값: "home"
  const [activeTab, setActiveTab] = useState("home");

  const items = [
    { to: "/home", key: "home", label: "홈", icon: homeIcon, iconActive: homeIconActive },
    { to: "/study", key: "study", label: "스터디", icon: studyIcon, iconActive: studyIconActive },
    { to: "/mypage", key: "mypage", label: "마이페이지", icon: myIcon, iconActive: myIconActive },
  ];

  return (
    <>
      <div className="nb__spacer" />
      <nav className="nb">
        {items.map(({ to, key, label, icon, iconActive }) => (
          <Link
            key={to}
            to={to}
            className="nb__item"
            onClick={() => setActiveTab(key)}
          >
            <div className="nb__icon-wrap">
              <img
                className="nb__icon"
                src={activeTab === key ? iconActive : icon}
                alt={label}
              />
            </div>
            <span className="nb__label">{label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
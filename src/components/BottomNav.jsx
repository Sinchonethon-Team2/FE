import React from "react";
import "../styles/home.css";

const BottomNav = ({ active = "home" }) => {
  return (
    <nav className="bn__wrap" role="navigation" aria-label="하단 메뉴">
      <a
        href="/"
        className={`bn__item ${active === "home" ? "is-active" : ""}`}
      >
        <img src="/assets/icons/home.svg" alt="" />
        <span>홈</span>
      </a>
      <a
        href="/study"
        className={`bn__item ${active === "study" ? "is-active" : ""}`}
      >
        <img src="/assets/icons/study.svg" alt="" />
        <span>스터디</span>
      </a>
      <a
        href="/mypage"
        className={`bn__item ${active === "mypage" ? "is-active" : ""}`}
      >
        <img src="/assets/icons/mypage.svg" alt="" />
        <span>마이페이지</span>
      </a>
    </nav>
  );
};

export default BottomNav;

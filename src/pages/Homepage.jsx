// src/pages/Homepage.jsx
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import studies from "../data/studiesmock.json";
import "../styles/Homepage.css";

import logoBlack   from "../assets/icons/logo.svg";
import profileDemo from "../assets/icons/profile_demo.png";
import searchIcon  from "../assets/icons/Search.png";
import moreIcon    from "../assets/icons/more.svg";

const StudyHome = () => {
  const studyList = useMemo(() => studies, []);
  const navigate = useNavigate();

  return (
    <div className="sh__page">
      <header className="sh__header">
        <div className="sh__logo">
          <img src={logoBlack} alt="스챌 로고" />
        </div>
        <button className="sh__profile" type="button" onClick={() => navigate("/mypage")}>
          <img src={profileDemo} alt="프로필" />
        </button>
      </header>

      {/* 검색바 전체 클릭 → /study-detail */}
      <section className="sh__search">
        <div
          className="sh__searchbox sh__searchbox--elev sh__searchbox--chunky"
          onClick={() => navigate("/study-detail")}
        >
          <input
            className="sh__searchinput"
            type="text"
            placeholder="과목명을 입력해주세요"
            readOnly   /* 홈에서는 입력 막고, 상세에서 필터링 */
          />
          <button className="sh__searchbtn" type="button" aria-label="검색">
            <img src={searchIcon} alt="" />
          </button>
        </div>
      </section>

      <section className="sh__section">
        <div className="sh__section-head">
          <h2 className="sh__section-title">스터디</h2>
          <button className="sh__more" type="button" onClick={() => navigate("/study")}>
            전체보기
            <img src={moreIcon} alt="" />
          </button>
        </div>

        <ul className="sh__list">
          {studyList.map((s) => (
            <li
              key={s.id}
              className="sh__card sh__card--flat"
              onClick={() => navigate(`/study/${s.id}`)}
            >
              <div className="sh__thumbwrap">
                {s.thumbnailUrl ? (
                  <img className="sh__thumbimg" src={s.thumbnailUrl} alt={`${s.title} 썸네일`} loading="lazy" />
                ) : (
                  <div className="sh__thumbplaceholder" aria-hidden />
                )}
              </div>

              <div className="sh__cardbody">
                <h3 className="sh__title">{s.title}</h3>
                <p className="sh__meta sh__meta--tight"><span className="sh__meta-val">{s.period}</span></p>
                <p className="sh__meta sh__meta--tight"><span className="sh__meta-key">목표 인원:</span><span className="sh__meta-val">{s.target}명</span></p>
                <p className="sh__meta sh__meta--tight"><span className="sh__meta-key">챌린지 개수:</span><span className="sh__meta-val">{s.challengeCount}개</span></p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default StudyHome;
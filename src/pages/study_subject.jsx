import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/study_subject.css";
import NextButton from "../components/CTAButton";

import searchIcon from "../assets/icons/Search.png";

const StudySubject = () => {
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");

  const goNext = () => {
    navigate("/study/new/details", { state: { subject } });
  };

  return (
    <div className="sp__page">
      <header className="sp__header">
        <button
          type="button"
          className="sp__backbtn"
          aria-label="뒤로가기"
          onClick={() => navigate(-1)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="sp__headertitle">스터디 개설</h1>
        <div className="sp__headerright" />
      </header>

      <section className="sp__titlewrap">
        <p className="sp__title">
          스터디를 개설할
          <br />
          과목을 입력해주세요
        </p>
      </section>

      <section className="sp__search">
        <div className="sp__searchbox sp__searchbox--elev">
          <input
            className="sp__searchinput"
            type="text"
            placeholder="과목명을 입력해주세요"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <button
            className="sp__searchbtn"
            type="button"
            aria-label="검색"
            onClick={() => {/* TODO: 검색 페이지/자동완성 열기 */}}
          >
            <img src={searchIcon} alt="" />
          </button>
        </div>
      </section>

      <div className="sp__footer">
  <NextButton
    label="다음"
    onClick={goNext}
    disabled={!subject.trim()}
  />
</div>
    </div>
  );
};

export default StudySubject;

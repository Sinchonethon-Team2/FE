import React, { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/study_how.css";
import CTAButton from "../components/CTAButton"; 

const StudyOperate = () => {
  const navigate = useNavigate();

  const { state: prevState } = useLocation();

  const [title, setTitle] = useState("");
  const [challengeCnt, setChallengeCnt] = useState("");

  const isValid = useMemo(() => {
    const n = Number(challengeCnt);
    return title.trim().length > 0 && Number.isInteger(n) && n >= 4 && n <= 15;
  }, [title, challengeCnt]);

  const goNext = () => {
    navigate("/study/new/pass", {
      state: {
        ...prevState,
        title: title.trim(),
        challengeCount: Number(challengeCnt),
      },
    });
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
        <p className="sp__title">어떻게 스터디를 운영할까요?</p>
      </section>


      <section className="op__form">
        <label className="op__label">스터디명</label>
        <input
          className="op__input"
          type="text"
          placeholder="EX: 자료구조 정복반 5명 구함"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={40}
        />

        <label className="op__label">스터디 내 챌린지 수 설정</label>
        <input
          className="op__input"
          type="number"
          inputMode="numeric"
          placeholder="최소 4개, 최대 15개까지 설정할 수 있어요"
          value={challengeCnt}
          onChange={(e) => setChallengeCnt(e.target.value)}
          min={4}
          max={15}
        />

        {!isValid && (title || challengeCnt) && (
          <p className="op__hint">챌린지는 4~15개로 설정해 주세요.</p>
        )}
      </section>

      <div className="sp__footer">
        <CTAButton label="다음" onClick={goNext} disabled={!isValid} />
      </div>
    </div>
  );
};

export default StudyOperate;

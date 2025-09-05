import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/study_money.css";
import CTAButton from "../components/CTAButton";

const StudyMoney = () => {
  const navigate = useNavigate();
  const [headcount, setHeadcount] = useState("");
  const [deposit, setDeposit] = useState("");

  const goNext = () => {
    navigate("/study/new/duration", { state: { headcount, deposit } });
  };

  const canNext = String(headcount).trim() !== "" && String(deposit).trim() !== "";

  return (
    <div className="sp__page">
      {/* 헤더 */}
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

      {/* 타이틀 */}
      <section className="sp__titlewrap">
        <p className="sp__title">
          스터디 인원과 인당 보증금을
          <br />
          입력해주세요
        </p>
      </section>

      {/* 폼 */}
      <section className="sp__form">
        <label className="sp__label">스터디 인원</label>
        <div className="sp__inputbox sp__inputbox--elev">
          <input
            className="sp__input"
            type="number"
            inputMode="numeric"
            placeholder="최소 4명, 최대 10명까지 설정할 수 있어요"
            value={headcount}
            onChange={(e) => setHeadcount(e.target.value)}
          />
        </div>

        <label className="sp__label">인당 보증금</label>
        <div className="sp__inputbox sp__inputbox--elev">
          <input
            className="sp__input"
            type="text"
            inputMode="numeric"
            placeholder="25,000원"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
          />
        </div>
      </section>
      <div className="sp__footer">
        <CTAButton label="다음" onClick={goNext} disabled={!canNext} />
      </div>
    </div>
  );
};

export default StudyMoney;

import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/study_pass.css";
import CTAButton from "../components/CTAButton";

const StudySuccess = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const totalChallenges = state?.challengeCount ?? 5;


  const [minSuccess, setMinSuccess] = useState("");

  const normalized = Number(minSuccess);
  const isValid = useMemo(() => {
    return (
      Number.isInteger(normalized) &&
      normalized >= 1 &&
      normalized <= totalChallenges
    );
  }, [normalized, totalChallenges]);

  const goNext = () => {
    // TODO: 다음 단계로 상태 전달
    navigate("/study/new/confirm", {
      state: {
        ...state,
        successThreshold: normalized,
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
        <p className="sp__title">스터디 성공 기준을 설정해주세요</p>
      </section>

      <section className="ss__row">
        <span>총 챌린지&nbsp;</span>
        <strong className="ss__number">{totalChallenges}</strong>
        <span>&nbsp;번 중에&nbsp;</span>

        <input
          className="ss__input"
          type="number"
          inputMode="numeric"
          min={1}
          max={totalChallenges}
          value={minSuccess}
          onChange={(e) => setMinSuccess(e.target.value)}
        />

        <span>&nbsp;번 이상</span>
      </section>

      <p className="ss__subtext">챌린지를 성공해야 스터디가 성공해요!</p>

      <div className="sp__footer">
        <CTAButton label="다음" onClick={goNext} disabled={!isValid} />
      </div>
    </div>
  );
};

export default StudySuccess;

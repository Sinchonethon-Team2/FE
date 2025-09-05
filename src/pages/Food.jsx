import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Food.css";

import leftIcon from "../assets/icons/left.png";
import redBar from "../assets/icons/Redbar.png";
import foodImg from "../assets/icons/food.png";

export default function Food() {
  const navigate = useNavigate();

  // 예시 데이터 (필요시 props/상태로 교체)
  const successRate = 100;         // 챌린지 성공률 %
  const lunchTitle = "컴퓨터 프로그래밍";
  const achievedCount = 5;
  const totalCount = 5;

  return (
    <div className="fd__page">
      {/* 헤더 */}
      <header className="fd__header">
        <button
          type="button"
          className="fd__back"
          aria-label="뒤로가기"
          onClick={() => navigate(-1)}
        >
          <img src={leftIcon} alt="" />
        </button>
        <div className="fd__head-title">내 달성률·도시락</div>
        <div className="fd__head-spacer" />
      </header>

      {/* 섹션: 내 달성률 */}
      <section className="fd__section">
        <h2 className="fd__section-title">내 달성률</h2>

        <div className="fd__status">
          <span className="fd__status-label">
            챌린지 성공률 {successRate}%
          </span>
        </div>

        {/* 빨간 진행바 이미지 */}
        <div className="fd__bar">
          <img className="fd__bar-img" src={redBar} alt="진행바" />
        </div>
      </section>

      {/* 섹션: 획득한 도시락 */}
      <section className="fd__section">
        <h2 className="fd__section-title">획득한 도시락</h2>

        <div className="fd__card">
          <img className="fd__food" src={foodImg} alt="도시락" />
          <div className="fd__card-text">
            <p className="fd__lunch-title">{lunchTitle}</p>
            <p className="fd__lunch-count">
              <strong>{achievedCount}/{totalCount}</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
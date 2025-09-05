import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Study.css";

import logoBlack from "../assets/icons/logo.svg";
import profileDemo from "../assets/icons/profile_demo.png";

// 카드 내 이미지
import imgComputer from "../assets/icons/computer.png";
import imgBooks    from "../assets/icons/books.png";
import imgFind     from "../assets/icons/find.png";
import imgPeople   from "../assets/icons/people.png";

const Study = () => {
  const navigate = useNavigate();

  return (
    <div className="st__page">
      {/* 헤더 (Home과 동일 구조) */}
      <header className="st__header">
        <div className="st__logo" onClick={() => navigate("/home")}>
          <img src={logoBlack} alt="스챌 로고" />
        </div>
        <button
          className="st__profile"
          type="button"
          onClick={() => navigate("/mypage")}
        >
          <img src={profileDemo} alt="프로필" />
        </button>
      </header>

      {/* 섹션: 모집 중인 스터디 */}
      <section className="st__section">
        <h2 className="st__section-title">모집 중인 스터디</h2>

        {/* 342 x 109 카드 - 빈 상태 */}
        <div className="st__card st__card--empty">
          <div className="st__card-body">
            <p className="st__empty-text">해당하는 스터디가 없습니다!</p>
          </div>
          <div className="st__thumb">
            <img src={imgComputer} alt="" />
          </div>
        </div>
      </section>

      {/* 섹션: 진행 중인 스터디 */}
      <section className="st__section">
        <h2 className="st__section-title">진행 중인 스터디</h2>

        {/* 342 x 109 카드 - 진행 중 (그라데이션) */}
        <div className="st__card st__card--running">
          <div
          className="st__card-body"
          onClick={()=>navigate("/study/detail/:id")}
          >
            <div className="st__pill">스터디장: 김멋사</div>
            <p className="st__desc">자료구조: 알고리즘 쑤시자</p>
            <h3 className="st__title">자료구조</h3>
          </div>
          <div className="st__thumb">
            <img src={imgBooks} alt="" />
          </div>
        </div>

        {/* 간단한 프롬프트 */}
        <p className="st__prompt">또 다른 스터디가 하고 싶다면?</p>

        {/* 액션 카드들 */}
        <button
          className="st__action"
          type="button"
          onClick={() => navigate("/search")}
        >
          <div className="st__action-text">
            <p>어떤 스터디가 있을까요?</p>
            <h4>스터디 검색하기</h4>
          </div>
          <div className="st__action-thumb">
            <img src={imgFind} alt="" />
          </div>
        </button>

        <button
          className="st__action"
          type="button"
          onClick={() => navigate("/study/new/subject")}
        >
          <div className="st__action-text">
            <p>함께 해야 시너지가 나니까</p>
            <h4>스터디 개설하기</h4>
          </div>
          <div className="st__action-thumb">
            <img src={imgPeople} alt="" />
          </div>
        </button>
      </section>
    </div>
  );
};

export default Study;
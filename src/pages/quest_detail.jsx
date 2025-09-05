import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/quest_detail.css";

import iconBack from "../assets/icons/arrow.png";
import iconPencil from "../assets/icons/pencil.png";
import arrowRight from "../assets/icons/arrow_right.svg";

const StudyDetail = () => {
  const nav = useNavigate();

  return (
    <div className="sd2__page">
      <header className="sd2__header">
        <button
          type="button"
          className="sd2__backbtn"
          aria-label="뒤로가기"
          onClick={() => nav(-1)}
        >
          <img src={iconBack} alt="" className="sd2__iconImg" />
        </button>
      </header>

      <section className="sd2__hero">
        <div className="sd2__heroTop">
          <h1 className="sd2__title">자료구조</h1>
          <button type="button" className="sd2__edit" aria-label="편집">
            <img src={iconPencil} alt="" className="sd2__iconImg" />
          </button>
        </div>
        <p className="sd2__subtitle">자료구조·알고리즘 뿌시자</p>
        <p className="sd2__progress">챌린지 전체 성공 2/7  |  팀원 5명</p>
        <p className="sd2__deposit">
          보증금: <strong>125,000원</strong>
        </p>
      </section>

      <section className="sd2__section sd2__section--done">
        <div className="sd2__sectionHead">마감된 챌린지</div>
        <ul className="sd2__list">
          <li className="sd2__item">
            <span className="sd2__itemTitle">Arrays</span>
            <span className="sd2__badge">챌린지 성공</span>
            <img src={arrowRight} alt="" className="sd2__chevronImg" />
          </li>
          <li className="sd2__item">
            <span className="sd2__itemTitle">Stacks and Queues</span>
            <span className="sd2__badge">챌린지 성공</span>
            <img src={arrowRight} alt="" className="sd2__chevronImg" />
          </li>
        </ul>
      </section>

      <section className="sd2__section sd2__section--upcoming">
        <div className="sd2__sectionHead">예정된 챌린지</div>
        <ul className="sd2__list">
          <li className="sd2__item">
            <span className="sd2__itemTitle">Stack 이용(maze, postfix 변환)</span>
            <img src={arrowRight} alt="" className="sd2__chevronImg" />
          </li>
          <li className="sd2__item">
            <span className="sd2__itemTitle">eval 루틴</span>
            <img src={arrowRight} alt="" className="sd2__chevronImg" />
          </li>
          <li className="sd2__item">
            <span className="sd2__itemTitle">미정</span>
            <img src={arrowRight} alt="" className="sd2__chevronImg" />
          </li>
          <li className="sd2__item">
            <span className="sd2__itemTitle">미정</span>
            <img src={arrowRight} alt="" className="sd2__chevronImg" />
          </li>
          <li className="sd2__item">
            <span className="sd2__itemTitle">미정</span>
            <img src={arrowRight} alt="" className="sd2__chevronImg" />
          </li>
        </ul>
      </section>

      <div className="sd2__bottomBar" />
    </div>
  );
};

export default StudyDetail;

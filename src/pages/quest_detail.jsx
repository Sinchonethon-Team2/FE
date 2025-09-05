import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/quest_detail.css";

const mock = {
  title: "자료구조",
  subtitle: "자료구조·알고리즘 뿌시자",
  progressText: "챌린지 전체 성공 2/7  |  팀원 5명",
  deposit: "125,000원",
  done: [
    { id: 1, title: "Arrays" },
    { id: 2, title: "Stacks and Queues" },
  ],
  upcoming: [
    { id: 3, title: "Stack 이용(maze, postfix 변환)" },
    { id: 4, title: "eval 루틴" },
    { id: 5, title: "미정" },
    { id: 6, title: "미정" },
    { id: 7, title: "미정" },
  ],
};

const StudyDetail = () => {
  const nav = useNavigate();

  return (
    <div className="sd2__page">
      {/* 상단 헤더(뒤로) */}
      <header className="sd2__header">
        <button
          type="button"
          className="sd2__backbtn"
          aria-label="뒤로가기"
          onClick={() => nav(-1)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </header>

      {/* 히어로 영역 */}
      <section className="sd2__hero">
        <div className="sd2__heroTop">
          <h1 className="sd2__title">{mock.title}</h1>
          <button className="sd2__edit" aria-label="편집">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" fill="#fff"/>
            </svg>
          </button>
        </div>
        <p className="sd2__subtitle">{mock.subtitle}</p>
        <p className="sd2__progress">{mock.progressText}</p>
        <p className="sd2__deposit">보증금: <strong>{mock.deposit}</strong></p>
      </section>

      {/* 마감된 챌린지 */}
      <section className="sd2__card">
        <div className="sd2__cardHead">마감된 챌린지</div>
        <ul className="sd2__list">
          {mock.done.map((it) => (
            <li key={it.id} className="sd2__item">
              <span className="sd2__itemTitle">{it.title}</span>
              <span className="sd2__badge sd2__badge--success">챌린지 성공</span>
              <span className="sd2__chevron">›</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 예정된 챌린지 */}
      <section className="sd2__card sd2__card--upcoming">
        <div className="sd2__cardHead">예정된 챌린지</div>
        <ul className="sd2__list">
          {mock.upcoming.map((it) => (
            <li key={it.id} className="sd2__item">
              <span className="sd2__itemTitle">{it.title}</span>
              <span className="sd2__chevron">›</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="sd2__bottomBar" />
    </div>
  );
};

export default StudyDetail;
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/quest_detail_done.css";

import iconBack from "../assets/icons/arrow.png";       
import iconPencil from "../assets/icons/pencil.png";     
import iconCheck from "../assets/icons/selection.svg";   

const StackDetail = () => {
  const nav = useNavigate();

  const members = ["김멋사", "최멋사", "이멋사", "박멋사", "한멋사"];

  return (
    <div className="sq__page">
      <header className="sq__header">
        <button
          type="button"
          className="sq__backbtn"
          aria-label="뒤로가기"
          onClick={() => nav(-1)}
        >
          <img src={iconBack} alt="" className="sq__icon" />
        </button>
      </header>

      <section className="sq__hero">
        <div className="sq__heroTop">
          <h1 className="sq__title">Stacks and Queues</h1>
          <button type="button" className="sq__edit" aria-label="편집">
            <img src={iconPencil} alt="" className="sq__icon" />
          </button>
        </div>

        <p className="sq__sub">2번째 챌린지</p>
        <p className="sq__sub">상태: 전체 성공</p>
        <p className="sq__sub">챌린지 조건: 프로그래밍 과제 제출</p>
      </section>

      <section className="sq__panel">
        <div className="sq__panelHead">챌린지 성공한 팀원</div>
        <ul className="sq__list">
          {members.map((name) => (
            <li key={name} className="sq__item">
              <span className="sq__name">{name}</span>
              <img src={iconCheck} alt="" className="sq__check" />
            </li>
          ))}
        </ul>
      </section>

      <div className="sq__bottomPad" />
    </div>
  );
};

export default StackDetail;

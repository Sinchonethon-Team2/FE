import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/studyapply.css";
import NextButton from "../components/CTAButton"; // = NextButton

import iconBack from "../assets/icons/arrow.png";   // ← 아이콘은 png/svg 아무거나

const StudyApplyDetail = () => {
  const nav = useNavigate();

  // 하드코딩 목데이터
  const data = {
    title: "이산구조",
    subtitle: "수포자도 환영합니다",
    total: "총 챌린지 10회  팀원 6명",
    deposit: "인당 보증금: 30,000원",
    notice:
      "스터디장인 저도 수포자입니다. 그런데 수업은 들어야 하니 제대로 공부해보자는 마음으로 스터디를 개설하였습니다. 열심히 하실 분이면 누구나 환영합니다.",
    chatLink:  "https://open.kakao.com/o/gpvSWwQh",
    period: "2025년 9월 6일 ~ 2025년 12월 20일",
    successRule: "총 챌린지 10번 중 8번 이상 챌린지 성공",
  };

  const apply = () => {
    // TODO: 신청 액션 연결
    alert("신청 완료 (목데이터)");
  };

  return (
    <div className="sa__page">
      <header className="sa__header">
        <button
          type="button"
          className="sa__backbtn"
          aria-label="뒤로가기"
          onClick={() => nav(-1)}
        >
          <img src={iconBack} alt="" className="sa__icon" />
        </button>
      </header>

      <section className="sa__hero">
        <h1 className="sa__title">{data.title}</h1>
        <p className="sa__meta">{data.subtitle}</p>
        <p className="sa__meta">{data.total}</p>
        <p className="sa__deposit">{data.deposit}</p>
      </section>

      <section className="sa__card">
        <div className="sa__block">
          <div className="sa__caption">공지사항</div>
          <p className="sa__text">{data.notice}</p>
          <p className="sa__text sa__link">{data.chatLink}</p>
        </div>

        <div className="sa__block">
          <div className="sa__caption">스터디 운영기간</div>
          <p className="sa__text">{data.period}</p>
        </div>

        <div className="sa__block">
          <div className="sa__caption">스터디 성공 기준</div>
          <p className="sa__text">{data.successRule}</p>
        </div>
      </section>

      <div className="sa__footer">
        <NextButton label="스터디 신청하기" onClick={apply} disabled={false} />
      </div>
    </div>
  );
};

export default StudyApplyDetail;

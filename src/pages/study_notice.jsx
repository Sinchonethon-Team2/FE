import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/study_notice.css";
import NextButton from "../components/CTAButton";

const MAX_TEXTAREA_H = 360;

const StudyAnnounce = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [intro, setIntro] = useState("");
  const taRef = useRef(null);

  useEffect(() => {
    const el = taRef.current;
    if (!el) return;
    el.style.height = "auto";
    const h = Math.min(el.scrollHeight, MAX_TEXTAREA_H);
    el.style.height = `${h}px`;
  }, [intro]);

  const goNext = () => {
    navigate("/study/new/final", {
      state: {
        ...(state ?? {}),
        intro: intro.trim(),
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
            <path
              d="M15 18l-6-6 6-6"
              stroke="#111"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1 className="sp__headertitle">스터디 개설</h1>
        <div className="sp__headerright" />
      </header>

      <section className="sp__titlewrap">
        <p className="sp__title">스터디 공지사항을 입력해주세요</p>
      </section>

      <section className="sn__form">
        <label className="sn__label">
          소개
          <span className="sn__hint"> (채팅방 링크는 필수 입력입니다)</span>
        </label>

        <div className="sn__textareaWrap">
          <textarea
            ref={taRef}
            className="sn__textarea"
            placeholder={
              "객체지향프로그래밍 과목 공부를 위한 스터디입니다. 수업에서 받은 퀴즈를 함께 풀면서 실력 키워봐요.\n\n아래는 채팅방 링크입니다.\nhttps://open.kakao.com/o/gnSe3vQh"
            }
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
            rows={3}
          />
        </div>
      </section>

      <div className="sp__footer">
        <NextButton label="스터디 개설하기" onClick={goNext} disabled={false} />
      </div>
    </div>
  );
};

export default StudyAnnounce;

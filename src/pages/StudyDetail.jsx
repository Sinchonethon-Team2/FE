// src/pages/StudyDetail.jsx
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import studies from "../data/studiesmock.json";
import "../styles/StudyDetail.css";

import leftIcon   from "../assets/icons/left.png";
import searchIcon from "../assets/icons/Search.png";

export default function StudyDetail() {
  const navigate = useNavigate();
  const base = useMemo(() => studies, []);
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return base;
    return base.filter((s) => s.title.toLowerCase().includes(t));
  }, [q, base]);

  return (
    <div className="sd__page">
      <header className="sd__header">
        <button className="sd__back" onClick={() => navigate(-1)} aria-label="뒤로가기">
          <img src={leftIcon} alt="" />
        </button>
        <div className="sd__searchbox sd__searchbox--chunky sd__searchbox--elev">
          <input
            className="sd__searchinput"
            type="text"
            placeholder="과목명을 입력해주세요"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            autoFocus
          />
          <img className="sd__searchicon" src={searchIcon} alt="" />
        </div>
      </header>

      <ul className="sd__list">
        {list.map((s) => (
          <li key={s.id} className="sd__card" onClick={() => navigate("/study/apply")}>
            <div className="sd__thumbwrap">
              {s.thumbnailUrl ? (
                <img className="sd__thumbimg" src={s.thumbnailUrl} alt={`${s.title} 썸네일`} />
              ) : (
                <div className="sd__thumbplaceholder" aria-hidden />
              )}
            </div>
            <div className="sd__body">
              <h3 className="sd__title">{s.title}</h3>
              <p className="sd__meta">{s.period}</p>
              <p className="sd__meta"><span className="sd__key">목표 인원:</span> {s.target}명</p>
              <p className="sd__meta"><span className="sd__key">챌린지 개수:</span> {s.challengeCount}개</p>
            </div>
          </li>
        ))}
        {list.length === 0 && (
          <li className="sd__empty">검색 결과가 없습니다.</li>
        )}
      </ul>
    </div>
  );
}
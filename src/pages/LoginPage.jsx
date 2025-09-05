import React, { useState } from "react";
import { SINCHEON_UNIVS } from "../components/univ.js";
import "../styles/LoginPage.css"; 

const LoginPage = () => {
  const [nickname, setNickname] = useState("");
  const [univ, setUniv] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nickname.trim()) return setError("닉네임을 입력해 주세요.");
    if (!univ) return setError("학교를 선택해 주세요.");
    setError("");
  };

  return (
    <div className="wrap">
      <section className="card">
        <div className="logo">스채</div> {/* // TODO: 피그마 로고 이미지로 교체 */}
        <h1 className="title">로그인</h1> {/* // TODO: 폰트/크기 피그마 적용 */}

        <form className="form" onSubmit={handleSubmit}>
          <label className="label" htmlFor="nickname">이름</label>
          <input
            id="nickname"
            className="input"
            type="text"
            placeholder="이름"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />

          <label className="label" htmlFor="univ">학교정보</label>
          <select
            id="univ"
            className="select"
            value={univ}
            onChange={(e) => setUniv(e.target.value)}
          >
            <option value="">선택하세요</option>
            {SINCHEON_UNIVS.map((u) => (
              <option key={u.value} value={u.value}>{u.label}</option>
            ))}
          </select>

          {/* <p className="hint">※ 인증 과정은 생략됩니다.</p> // TODO: 색/간격 피그마 기준 조정 */}

          {error && <p className="errorMsg">{error}</p>}

          <button className="primaryBtn" type="submit">시작하기</button>
        </form>
      </section>
    </div>
  );
};

export default LoginPage;

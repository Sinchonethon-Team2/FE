import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

import leftIcon from "../assets/icons/left.png";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const canSubmit = form.username.trim() && form.password.trim();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    // TODO: API 연동
    alert("로그인 완료!");
    navigate("/home", { replace: true });
  };

  return (
    <div className="lg__page">
      {/* 헤더 */}
      <header className="lg__header">
        <button
          className="lg__back"
          type="button"
          aria-label="뒤로가기"
          onClick={() => navigate(-1)}
        >
          <img src={leftIcon} alt="" />
        </button>
        <div className="lg__head-title">로그인</div>
        <div className="lg__head-spacer" />
      </header>

      {/* 타이틀 */}
      <h1 className="lg__welcome">환영해요!</h1>

      {/* 폼 */}
      <form className="lg__form" onSubmit={onSubmit}>
        <label className="lg__field">
          <input
            type="text"
            name="username"
            placeholder="아이디를 입력해주세요"
            value={form.username}
            onChange={onChange}
            autoComplete="username"
            required
          />
          <span className="lg__underline" />
        </label>

        <label className="lg__field">
          <input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            value={form.password}
            onChange={onChange}
            autoComplete="current-password"
            required
          />
          <span className="lg__underline" />
        </label>

        <button
          className="lg__btn lg__btn--primary"
          type="submit"
          disabled={!canSubmit}
        >
          로그인
        </button>
      </form>

      {/* 회원가입 유도 */}
      <div className="lg__signup-cta">
        <p>혹시 아직 스챌 회원이 아니신가요?</p>
        <Link className="lg__signup-link" to="/signup">
          회원가입
        </Link>
      </div>
    </div>
  );
}
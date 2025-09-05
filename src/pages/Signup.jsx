import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

const SCHOOL_OPTIONS = [
  "홍익대학교",
  "연세대학교",
  "이화여자대학교",
  "서강대학교",
];

export default function Signup() {
  const navigate = useNavigate();
  const schools = useMemo(() => SCHOOL_OPTIONS, []);

  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    nickname: "",
    school: "",
  });

  const allFilled =
    form.username &&
    form.password &&
    form.email &&
    form.nickname &&
    form.school;

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!allFilled) return;
    // TODO: API 연동
    alert("회원가입 완료! 🎉");
    navigate("/login");
  };

  return (
    <div className="su__page">
      <h1 className="su__title">회원가입</h1>
      <h2 className="su__subtitle">정보를 입력해주세요</h2>

      <form className="su__form" onSubmit={onSubmit}>
        <label className="su__field">
          <input
            type="text"
            name="username"
            placeholder="아이디를 입력해주세요"
            value={form.username}
            onChange={onChange}
            required
          />
          <span className="su__underline" />
        </label>

        <label className="su__field">
          <input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            value={form.password}
            onChange={onChange}
            required
          />
          <span className="su__underline" />
        </label>

        <label className="su__field">
          <input
            type="email"
            name="email"
            placeholder="이메일을 입력해주세요"
            value={form.email}
            onChange={onChange}
            required
          />
          <span className="su__underline" />
        </label>

        <label className="su__field">
          <input
            type="text"
            name="nickname"
            placeholder="닉네임을 입력해주세요"
            value={form.nickname}
            onChange={onChange}
            required
          />
          <span className="su__underline" />
        </label>

        <label className="su__select-wrap" aria-label="학교 선택">
          <select
            name="school"
            value={form.school}
            onChange={onChange}
            required
          >
            <option value="" disabled>
              학교를 선택해주세요
            </option>
            {schools.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <span className="su__select-arrow">▾</span>
        </label>

        <div className="su__actions">
          <button
            type="button"
            className="su__btn su__btn--ghost"
            onClick={() => navigate(-1)}
          >
            취소
          </button>
          <button
            type="submit"
            className="su__btn su__btn--primary"
            disabled={!allFilled}
          >
            가입하기
          </button>
        </div>
      </form>
    </div>
  );
}
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/smallChallenge.css";

import SHLogo from "../assets/icons/SHLogo.png";
import SHFont from "../assets/icons/SHFont.png"

const SmallChallenge = () => {
  const navigate = useNavigate();

  return (
    <div className="sc__page">
      <div className="sc__logo">
        <img src={SHLogo} alt="스챌 로고" className="sc__logo-img" />
        <p className="sc__slogan">함께 해낼 수 있도록</p>
        <img src={SHFont} />
      </div>

      <button
        className="sc__btn sc__btn--login"
        type="button"
        onClick={() => navigate("/login")}
      >
        로그인
      </button>

      <button
        className="sc__btn sc__btn--signup"
        type="button"
        onClick={() => navigate("/signup")}
      >
        회원가입
      </button>
    </div>
  );
};

export default SmallChallenge;
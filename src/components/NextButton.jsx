
import React from "react";
import "../styles/study_subject.css";

const NextButton = ({ label, onClick, disabled }) => {
  return (
    <button
      type="button"
      className="sp__cta"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default NextButton;

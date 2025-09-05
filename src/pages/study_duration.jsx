import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/study_duration.css";
import CTAButton from "../components/CTAButton";
import BottomSheetDate from "../components/Bottomdate";

function fmt(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}.${m}.${d}`;
}

const StudyPeriod = () => {
  const navigate = useNavigate();

  const today = useMemo(() => new Date(), []);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);


  const [pickerOpen, setPickerOpen] = useState(false);
  const [target, setTarget] = useState(null); 

  const initialForPicker = useMemo(() => {
    if (target === "start" && startDate) return startDate;
    if (target === "end" && endDate) return endDate;
    return today;
  }, [target, startDate, endDate, today]);

  const openPickerFor = (t) => {
    setTarget(t);
    setPickerOpen(true);
  };
  const closePicker = () => setPickerOpen(false);

  const handleConfirm = (date) => {
    if (target === "start") {
      setStartDate(date);
      if (!endDate || endDate < date) setEndDate(date);
    } else if (target === "end") {
      setEndDate(date);
    }
    setPickerOpen(false);
  };

  const canNext = !!startDate && !!endDate;

  const goNext = () => {
    navigate("/study/new/details", {
      state: { startDate: startDate?.toISOString(), endDate: endDate?.toISOString() },
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
            <path d="M15 18l-6-6 6-6" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h1 className="sp__headertitle">스터디 개설</h1>
        <div className="sp__headerright" />
      </header>

      <section className="sp__titlewrap">
        <p className="sp__title">
          스터디 운영 기간을
          <br />
          정해주세요
        </p>
      </section>

      <section className="sp__form">
        <label className="sp__label">시작 날짜</label>
        <button
          type="button"
          className="sp__pickerField"
          onClick={() => openPickerFor("start")}
        >
          <span className={startDate ? "sp__value" : "sp__placeholder"}>
            {startDate ? fmt(startDate) : "스터디 시작일을 선택해주세요."}
          </span>
          <span className="sp__chev">▾</span>
        </button>

        <label className="sp__label">종료 날짜</label>
        <button
          type="button"
          className="sp__pickerField"
          onClick={() => openPickerFor("end")}
        >
          <span className={endDate ? "sp__value" : "sp__placeholder"}>
            {endDate ? fmt(endDate) : "스터디 종료일을 선택해주세요."}
          </span>
          <span className="sp__chev">▾</span>
        </button>
      </section>

      <div className="sp__footer">
        <CTAButton label="다음" onClick={goNext} disabled={!canNext} />
      </div>

      <BottomSheetDate
        open={pickerOpen}
        initialDate={initialForPicker}
        onCancel={closePicker}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default StudyPeriod;

import React, { useEffect, useMemo, useState } from "react";
import "../styles/study_duration.css";

function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
function clamp(n, min, max) {
  return Math.min(Math.max(n, min), max);
}

const BottomSheetDatePicker = ({
  open,
  initialDate,      
  minYear = new Date().getFullYear() - 1,
  maxYear = new Date().getFullYear() + 2,
  onCancel,
  onConfirm,
}) => {
  const years = useMemo(() => {
    const arr = [];
    for (let y = minYear; y <= maxYear; y++) arr.push(y);
    return arr;
  }, [minYear, maxYear]);

  const months = useMemo(() => Array.from({ length: 12 }, (_, i) => i + 1), []);
  const [y, setY] = useState(initialDate.getFullYear());
  const [m, setM] = useState(initialDate.getMonth() + 1);
  const [d, setD] = useState(initialDate.getDate());

  useEffect(() => {
    if (!open) return;
    const iy = initialDate.getFullYear();
    const im = initialDate.getMonth() + 1;
    const id = initialDate.getDate();
    setY(clamp(iy, years[0], years[years.length - 1]));
    setM(im);
    setD(id);
  }, [open, initialDate, years]);

  const dim = daysInMonth(y, m);
  const days = useMemo(() => Array.from({ length: dim }, (_, i) => i + 1), [dim]);

  useEffect(() => {
    if (d > dim) setD(dim);
  }, [dim]);

  if (!open) return null;

  return (
    <>
      <div className="dp__overlay" onClick={onCancel} />
      <div className="dp__sheet" role="dialog" aria-modal="true">
        <div className="dp__columns">
          <div className="dp__col">
            <div className="dp__header">년</div>
            <select
              className="dp__select"
              value={y}
              onChange={(e) => setY(parseInt(e.target.value, 10))}
            >
              {years.map((yy) => (
                <option key={yy} value={yy}>
                  {yy}
                </option>
              ))}
            </select>
          </div>
          <div className="dp__col">
            <div className="dp__header">월</div>
            <select
              className="dp__select"
              value={m}
              onChange={(e) => setM(parseInt(e.target.value, 10))}
            >
              {months.map((mm) => (
                <option key={mm} value={mm}>
                  {mm}
                </option>
              ))}
            </select>
          </div>
          <div className="dp__col">
            <div className="dp__header">일</div>
            <select
              className="dp__select"
              value={d}
              onChange={(e) => setD(parseInt(e.target.value, 10))}
            >
              {days.map((dd) => (
                <option key={dd} value={dd}>
                  {dd}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="dp__actions">
          <button type="button" className="dp__btn dp__btn--ghost" onClick={onCancel}>
            취소
          </button>
          <button
            type="button"
            className="dp__btn dp__btn--primary"
            onClick={() => onConfirm(new Date(y, m - 1, d))}
          >
            확인
          </button>
        </div>
      </div>
    </>
  );
};

export default BottomSheetDatePicker;

import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import "../styles/study_final.css";
import completeImg from "../assets/icons/study_final.png";

const API_BASE = import.meta.env.VITE_API_BASE ? import.meta.env.VITE_API_BASE : ""; 

const USE_MOCK = true;

const MOCK_STUDY = {
  id: 123,
  subject: "객체지향프로그래밍",
};

const StudyDone = () => {
  const { state } = useLocation();
  const [params] = useSearchParams();
  const navigate = useNavigate();   // ✅ 추가

  const studyId = useMemo(() => {
    const fromState = state?.studyId;
    if (fromState != null) return fromState;             

    const fromQuery = params.get("studyId");
    return fromQuery != null ? Number(fromQuery) : null;
  }, [state, params]);

  const [subject, setSubject] = useState(state?.subject ?? "");
  const [loading, setLoading] = useState(!subject);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;

    (async () => {
      if (subject) {
        setLoading(false);
        return;
      }

      if (USE_MOCK) {
        setLoading(true);
        setError("");
        setTimeout(() => {
          if (!alive) return;
          setSubject(MOCK_STUDY.subject);
          setLoading(false);
        }, 400);
        return;
      }

      if (!API_BASE || !studyId) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");
        const res = await fetch(`${API_BASE}/studies/${studyId}/`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const subj = data.subject ?? data.title ?? data.name ?? "";
        if (alive) setSubject(subj);
      } catch {
        if (alive) setError("과목명을 불러오지 못했습니다.");
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => { alive = false; };
  }, [subject, studyId]);

  // ✅ 3초 뒤 자동 이동
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/study");
    }, 3000);

    return () => clearTimeout(timer); // cleanup
  }, [navigate]);

  return (
    <div className="sd__page">
      <header className="sd__header">
        {/* <h1 className="sd__headertitle">스터디 개설</h1> */}
      </header>

      <main className="sd__main">
        <h2 className="sd__title">
          <span className="sd__subject">
            {loading ? "불러오는 중…" : subject || "과목명"}
          </span>
          <br />
          스터디 개설 완료!
        </h2>

        <div className="sd__imageWrap">
          <img src={completeImg} alt="완료 일러스트" className="sd__image" />
        </div>
      </main>

      {error && <div className="sd__toast">{error}</div>}
    </div>
  );
};

export default StudyDone;
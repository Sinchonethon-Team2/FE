import React, { useState } from "react";
import styled from "styled-components";
import { SINCHEON_UNIVS } from "../components/univ.js"; // 신촌 4개 대학 목록

const LoginPage = () => {
  const [nickname, setNickname] = useState("");
  const [univ, setUniv] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nickname.trim()) return setError("닉네임을 입력해 주세요.");
    if (!univ) return setError("학교를 선택해 주세요.");
    setError("");

    localStorage.setItem("scache_profile", JSON.stringify({ nickname, univ }));
    alert(`${nickname}님 환영합니다!`);
  };

  return (
    <Wrap>
      <Card>
        <Logo>스체</Logo> {/* // TODO: 피그마 로고 이미지로 교체 */}
        <Title>로그인</Title>

        <Form onSubmit={handleSubmit}>
          <Label htmlFor="nickname">이름</Label>
          <Input
            id="nickname"
            type="text"
            placeholder="이름"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />

          <Label htmlFor="univ">학교정보</Label>
          <Select id="univ" value={univ} onChange={(e) => setUniv(e.target.value)}>
            <option value="">선택하세요</option>
            {SINCHEON_UNIVS.map((u) => (
              <option key={u.value} value={u.value}>{u.label}</option>
            ))}
          </Select>

          {/* <Hint>※ 인증 과정은 생략됩니다.</Hint> */}

          {error && <ErrorMsg>{error}</ErrorMsg>}

          <PrimaryBtn type="submit">시작하기</PrimaryBtn>
        </Form>
      </Card>
    </Wrap>
  );
};

export default LoginPage;


const Wrap = styled.div`
  width: 100%;                
  min-height: 100vh;       
  display: flex;              
  align-items: center;       
  justify-content: center;
  padding: 24px;
  background: #fff7f0;
  // TODO: 피그마 배경 색상/그라데이션 반영
`;

const Card = styled.section`
  width: 100%;
  max-width: 440px;
  background: #ffffff;
  border: 1px solid #eee;
  border-radius: 24px;
  padding: 28px 24px;
  box-shadow: 0 6px 24px rgba(0,0,0,0.06);
  // TODO: 그림자, 테두리, radius 값 피그마에 맞게 수정
`;

const Logo = styled.div`
  font-weight: 800;
  font-size: 18px;
  color: #ff7a00; 
  // TODO: 색상 피그마 포인트 컬러로 교체
`;

const Title = styled.h1`
  margin-top: 6px;
  font-size: 24px;
  font-weight: 700;
  // TODO: 폰트 패밀리, 크기 피그마 적용
`;

const Form = styled.form`
  margin-top: 18px;
  display: grid;
  gap: 12px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
  // TODO: 글자 크기/두께/컬러 피그마 반영
`;

const Input = styled.input`
  height: 44px;
  padding: 0 12px;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 15px;
  &:focus { outline: 2px solid #ffb27a; }
  // TODO: border-radius, focus 효과 피그마 확인 후 수정
`;

const Select = styled.select`
  height: 44px;
  padding: 0 12px;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 15px;
  background: #fff;
  // TODO: select 박스 디자인 피그마에 맞게 변경
`;

const Hint = styled.p`
  font-size: 12px;
  color: #888;
  // TODO: 안내문 색상 및 간격 피그마 기준 조정
`;

const CheckRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  input { width: 16px; height: 16px; }
  // TODO: 체크박스 디자인(색, 모양) 피그마에 맞추기
`;

const ErrorMsg = styled.p`
  color: #d91c1c;
  font-size: 13px;
  // TODO: 에러메시지 스타일 피그마 참고
`;

const PrimaryBtn = styled.button`
  margin-top: 4px;
  height: 46px;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  background: #ff7a00;
  color: #fff;
  transition: transform .02s ease;
  &:active { transform: translateY(1px); }
  // TODO: 버튼 컬러, radius, 폰트 피그마에 맞춰 수정
`;
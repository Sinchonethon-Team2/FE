import React from "react";

// 아이콘 경로는 실제 프로젝트 구조에 맞게 확인해주세요.
import awardIcon from "../assets/icons/Badge.png";
import plusCircleIcon from "../assets/icons/mynaui_chat-plus.png";
import chevronRightIcon from "../assets/icons/Chevron Down.png"; // 오른쪽 화살표 아이콘으로 변경 권장


// CSS 파일 import 경로는 실제 프로젝트 구조에 맞게 확인해주세요.
import '../styles/MyPage.css';

const MyPage = () => {
  const profileImageUrl = "https://i.pravatar.cc/150?u=a042581f4e29026704d";

  return (
    <div className="sh__page">
      <header className="sh__header">
        <h1>마이페이지</h1>
      </header>

      {/* 프로필 섹션 */}
      <section className="sh__profile-display">
        <img
          src={profileImageUrl}
          alt="프로필 사진"
          className="sh__profile-picture"
        />
        <p className="sh__profile-name">김멋사</p>
      </section>

      {/* 스터디 현황 섹션 */}
      <section className="sh__section">
        <div className="sh__section-head">
          <h2 className="sh__section-title">스터디 현황</h2>
        </div>
        <div className="sh__grid-2col">
          <div className="sh__card sh__status-card">
            <span className="sh__status-number">2</span>
            <span className="sh__status-label">진행 중</span>
          </div>
          <div className="sh__card sh__status-card">
            <span className="sh__status-number">0</span>
            <span className="sh__status-label">완료</span>
          </div>
        </div>
      </section>

      {/* 메뉴 링크 섹션 */}
      <section className="sh__section">
        <ul className="sh__menu-list">
          <li className="sh__menu-item">
            <img src={awardIcon} alt="달성률 아이콘" className="sh__menu-icon" />
            <span>내 달성률·도시락</span>
            <img src={chevronRightIcon} alt="오른쪽 화살표" className="sh__menu-arrow" />
          </li>
          <li className="sh__menu-item">
            <img src={plusCircleIcon} alt="문의하기 아이콘" className="sh__menu-icon" />
            <span>문의하기</span>
            <img src={chevronRightIcon} alt="오른쪽 화살표" className="sh__menu-arrow" />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default MyPage;
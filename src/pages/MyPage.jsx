import React from "react";

import awardIcon from "../assets/icons/Badge.png";
import plusCircleIcon from "../assets/icons/mynaui_chat-plus.png";
import chevronRightIcon from "../assets/icons/Chevron Down.png";
import '../styles/MyPage.css'

const MyPage = () => {
  //유저 정보
  const profileImageUrl = "https://i.pravatar.cc/150?u=a042581f4e29026704d";

  return (
    <div className="my-page-container">
      <div className="my-page-content">
        {/* 상단 헤더 */}
        <header className="my-page-header">
          <h1>마이페이지</h1>
        </header>

        {/* 프로필 섹션 */}
        <section className="profile-section">
          <img
            src={profileImageUrl}
            alt="프로필 사진"
            className="profile-picture"
          />
          <p className="profile-name">김멋사</p>
        </section>

        {/* 스터디 현황 섹션 */}
        <section className="status-section">
          <h2>스터디 현황</h2>
          <div className="status-cards-container">
            <div className="status-card">
              <span className="status-number">2</span>
              <span className="status-label">진행 중</span>
            </div>
            <div className="status-card">
              <span className="status-number">0</span>
              <span className="status-label">완료</span>
            </div>
          </div>
        </section>

        {/* 메뉴 링크 섹션 */}
        <section className="menu-section">
          <div className="menu-item">
            <img src={awardIcon} alt="달성률 아이콘" className="menu-icon" />
            <span>내 달성률·도시락</span>
            <img
              src={chevronRightIcon}
              alt="오른쪽 화살표"
              className="menu-arrow"
            />
          </div>
          <div className="menu-item">
            <img
              src={plusCircleIcon}
              alt="문의하기 아이콘"
              className="menu-icon"
            />
            <span>문의하기</span>
            <img
              src={chevronRightIcon}
              alt="오른쪽 화살표"
              className="menu-arrow"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyPage;

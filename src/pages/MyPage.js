import React from "react";
import {
  FiAward,
  FiPlusCircle,
  FiChevronRight,
  FiHome,
  FiCalendar,
  FiUser,
} from "react-icons/fi"; // 아이콘 임포트

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
            <FiAward className="menu-icon" />
            <span>내 달성률·도시락</span>
            <FiChevronRight className="menu-arrow" />
          </div>
          <div className="menu-item">
            <FiPlusCircle className="menu-icon" />
            <span>문의하기</span>
            <FiChevronRight className="menu-arrow" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyPage;

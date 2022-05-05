import React from "react";
import '../../css/Survey/SurveyNav.css';

const SurveyNav = () => {
  return (
    <nav className="survey_navbar">
      <ul className="survey_navbar_ul">
        <li data="관심분야">
          <span>관심분야</span>
        </li>
        <li data="분야별 정보">
          <span>분야별 정보</span>
        </li>
        <li data="식습관">
          <span>식습관</span>
        </li>
        <li data="기본정보">
          <span>기본정보</span>
        </li>
      </ul>
    </nav>
  );
};

export default SurveyNav;

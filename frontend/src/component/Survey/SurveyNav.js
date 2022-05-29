import React from "react";
import "../../css/Survey/SurveyNav.css";

const SurveyNav = ({ surveyNum, detailLength, detailNumLength }) => {
  return (
    <div>
      <nav className="survey_navbar">
        <ul className="survey_navbar_ul">
          <li className={surveyNum < 5 ? "now" : undefined}>
            <span>기본정보</span>
            <span>&gt;</span>
          </li>
          <li className={surveyNum === 5 ? "now" : undefined}>
            <span>분야 선택</span>
            <span>&gt;</span>
          </li>
          <li className={detailNumLength > 0 ? "now" : undefined}>
            <span>상세질문</span>
            <span>&gt;</span>
          </li>
          <li className={surveyNum > 5 + detailLength ? "now" : undefined}>
            <span>공통질문</span>
          </li>
        </ul>
      </nav>
      <br />
      <progress
        className="survey_progress"
        max={detailLength > 0 ? 15 - (6 - detailLength) : 15}
        value={surveyNum}
      ></progress>
    </div>
  );
};

export default SurveyNav;

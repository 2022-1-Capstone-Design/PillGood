import React from "react";
import "../../css/Survey/SurveyBar.css";

const SurveyBar = ({ surveyNum, detailLength }) => {
  return (
    <div>
      <nav class="progressbar">
        <div class="progress-step" data-title="기본정보"></div>
        <div class="progress-step" data-title="관심분야"></div>
        <div class="progress-step" data-title="분야별정보"></div>
        <div class="progress-step" data-title="식습관"></div>
      </nav>
      <div>
        <br />
        <progress
          max={detailLength > 0 ? 15 - (6 - detailLength) : 15}
          value={surveyNum}
        ></progress>
      </div>
    </div>
  );
};

export default SurveyBar;

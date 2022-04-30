import React from "react";
import '../../css/Survey/SurveyBar.css';

const SurveyBar = () => {
  return (
<div class="progressbar">
    <div class="progress-step" data-title="기본정보"></div>
    <div class="progress-step" data-title="관심분야"></div>
    <div class="progress-step" data-title="분야별정보"></div>
    <div class="progress-step" data-title="식습관"></div>
</div>
  );
};

export default SurveyBar;


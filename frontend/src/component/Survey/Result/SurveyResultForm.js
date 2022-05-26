import React from "react";
import SurveyResultCategoryForm from "./ResultForm/SurveyResultCategoryForm";
import "../../../css/Survey/Result/SurveyResultForm.css";

const SurveyResultForm = ({ resultData }) => {
  return (
    <div className="result">
      <div className="resultContainer">
        <div className="resultUserInfo">
          <h1>🩺 필굿이 검진한 {resultData[0].user_name}님의 설문결과에요</h1>
          <dl>
            <dt>나이 :</dt>
            <dt>{resultData[0].age}</dt>
            <dt>BMI :</dt>
            <dt>
              {resultData[0].BMI.bmi_figure}({resultData[0].BMI.bmi_result})
            </dt>
            <dt>검사일시</dt>
            <dt>{resultData[0].user_date}</dt>
          </dl>
        </div>
        <SurveyResultCategoryForm resultData={resultData} />
      </div>
    </div>
  );
};

export default SurveyResultForm;

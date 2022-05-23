import React, { useState } from "react";
import SurveyResultCategoryForm from "./SurveyResultCategoryForm";
import "../../../css/Survey/Result/SurveyResultForm.css";
const SurveyResultForm = ({ resultData }) => {
  const [categoryIndex, setCategoryIndex] = useState(1);
  const onClick = (index) => {
    setCategoryIndex(index);
  };
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
        <div className="resultCategory">
          <nav>
            {resultData[0].user_name}님이 선택하신 카테고리{" "}
            <b>{resultData.length - 1}</b>
          </nav>
          <ul>
            {resultData.slice(1).map((item, index) => (
              <li key={index} onClick={() => onClick(index + 1)}>
                {item.category}&nbsp;
              </li>
            ))}
          </ul>
          <span>* 카테고리 별로 클릭하면 결과를 볼 수 있어요.</span>
          <br />
          <SurveyResultCategoryForm
            resultData={resultData}
            categoryIndex={categoryIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default SurveyResultForm;

import React, { useState } from "react";
import SurveyResultCategoryForm from "./SurveyResultCategoryForm";
import "../../../css/Survey/Result/SurveyResultForm.css";

const SurveyResultForm = ({ resultData }) => {
  const [index, setIndex] = useState(1);
  return (
    <div className="result">
      <div>
        <h1>네비바자리</h1>
      </div>
      <div className="resultContainer">
        <div className="resultUserInfo">
          <h2>이름 : {resultData[0].user_name}</h2>
          <h3>나이 : {resultData[0].age}</h3>
          <h4>
            BMI : {resultData[0].BMI.bmi_figure} {resultData[0].BMI.bmi_result}
          </h4>
        </div>
        <div className="resultCategory">
          {resultData.slice(1).map((item, index) => (
            <div>
              <li key={index}>{item.category}</li>
              <SurveyResultCategoryForm resultData={resultData} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SurveyResultForm;

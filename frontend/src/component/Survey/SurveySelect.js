import React from "react";
import "../../css/Survey/SurveySelect.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

const SurveySelect = ({
  userName,
  surveyNum,
  onChange,
  questions,
  showWarn,
}) => {
  return (
    <div className="survey_question_select">
      <div className="number">질문 # {surveyNum}</div>
      <br />
      <div className="para">
        {userName}님이 불편하거나 걱정되는 분야를 선택해주세요
      </div>
      <ul className="survey_question_select_answer">
        {questions[0].sub_category.map((item, index) => (
          <li key={item.name}>
            <input
              className="checkbox"
              type="checkbox"
              name="answer"
              id={index}
              value={index + 1}
              onChange={onChange}
            />
            <label htmlFor={index}>{item.name}</label>
          </li>
        ))}
      </ul>
      {showWarn && (
        <span className="warning">
          <FontAwesomeIcon icon={faWarning} /> 3가지 이상 선택해 주세요
        </span>
      )}
    </div>
  );
};

export default SurveySelect;

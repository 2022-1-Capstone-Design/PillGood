import React from "react";
import "../../css/Survey/SurveyStartForm.css";
const SurveyInfo = ({
  userName,
  setUserName,
  setUserInfo,
  inputRef,
  surveyNum,
  onChange,
}) => {
  const onChangeName = (e) => {
    setUserName(e.target.value);
  };
  const onChangeInfo = (e) => {
    setUserInfo(e.target.value);
  };
  if (surveyNum === 1) {
    return (
      <div className="survey_main_question">
        <div className="number">질문 # {surveyNum}</div>
        <br />
        <div className="para">이름을 입력해 주세요</div>
        <input ref={inputRef} onChange={onChangeName} placeholder="이름" />
      </div>
    );
  } else if (surveyNum === 2) {
    return (
      <div className="survey_main_question">
        <div className="number">질문 # {surveyNum}</div>
        <br />
        <div className="para">{userName}님의 키를 입력해주세요</div>
        <input ref={inputRef} onChange={onChangeInfo} placeholder="키" />
      </div>
    );
  } else if (surveyNum === 3) {
    return (
      <div className="survey_main_question">
        <div className="number">질문 # {surveyNum}</div>
        <br />
        <div className="para">{userName}님의 몸무게를 입력해주세요</div>
        <input ref={inputRef} onChange={onChangeInfo} placeholder="몸무게" />
      </div>
    );
  } else if (surveyNum === 4) {
    return (
      <div className="survey_main_question">
        <div className="number">질문 # {surveyNum}</div>
        <br />
        <div className="para">{userName}님의 나이를 입력해주세요</div>
        <input ref={inputRef} onChange={onChangeInfo} placeholder="나이" />
      </div>
    );
  } else if (surveyNum === 5) {
    return (
      <div className="survey_main_question">
        <div className="number">질문 # {surveyNum}</div>
        <br />
        <div className="para">
          {userName}님이 불편하거나 걱정되는 분야를 선택해주세요
        </div>
        <ul className="survey_main_question_answer">
          <li data="혈관/혈액순환">
            <label>
              <input
                type="checkbox"
                name="answer"
                value="1"
                onChange={onChange}
              />
              혈관/혈액순환
            </label>
          </li>
          <li data="소화/장/위/간">
            <label>
              <input
                type="checkbox"
                name="answer"
                value="2"
                onChange={onChange}
              />
              소화/위/간/장
            </label>
          </li>
          <li data="피로감">
            <label>
              <input
                type="checkbox"
                name="answer"
                value="3"
                onChange={onChange}
              />
              피로감
            </label>
          </li>
          <li data="눈">
            <label>
              <input
                type="checkbox"
                name="answer"
                value="4"
                onChange={onChange}
              />
              눈
            </label>
          </li>
          <li data="뼈와 관절">
            <label>
              <input
                type="checkbox"
                name="answer"
                value="5"
                onChange={onChange}
              />
              뼈와 관절
            </label>
          </li>
          <li data="면역">
            <label>
              <input
                type="checkbox"
                name="answer"
                value="6"
                onChange={onChange}
              />
              면역
            </label>
          </li>
        </ul>
      </div>
    );
  }
};

export default SurveyInfo;

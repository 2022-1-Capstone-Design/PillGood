import React from "react";
import SurveySelect from "./SurveySelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
const SurveyInfo = ({
  userName,
  setUserName,
  setUserInfo,
  inputRef,
  surveyNum,
  onChange,
  showWarn,
  questions,
}) => {
  const onChangeName = (e) => {
    setUserName(e.target.value);
  };
  const onChangeInfo = (e) => {
    //숫자만 입력 가능하게 제한하는 정규식
    const regex = /^[0-9]+$/;
    if (regex.test(e.target.value)) {
      setUserInfo(e.target.value);
    }
  };
  if (surveyNum === 1) {
    return (
      <div className="survey_info_question">
        <div className="number">질문 # {surveyNum}</div>
        <br />
        <div className="para">이름을 입력해 주세요</div>
        <input
          className="input"
          type="text"
          maxLength="7"
          ref={inputRef}
          onChange={onChangeName}
          placeholder="이름"
        />
        <br />
        {showWarn && (
          <span className="warning">
            <FontAwesomeIcon icon={faWarning} /> 이름을 입력해 주세요
          </span>
        )}
      </div>
    );
  } else if (surveyNum === 2) {
    return (
      <div className="survey_info_question">
        <div className="number">질문 # {surveyNum}</div>
        <br />
        <div className="para">{userName}님의 키를 입력해주세요</div>
        <input
          className="input"
          type="text"
          maxLength="3"
          ref={inputRef}
          onChange={onChangeInfo}
          placeholder="키"
        />
        <br />
        {showWarn && (
          <span className="warning">
            <FontAwesomeIcon icon={faWarning} /> 100에서 250사이의 숫자만 입력
            가능합니다
          </span>
        )}
      </div>
    );
  } else if (surveyNum === 3) {
    return (
      <div className="survey_info_question">
        <div className="number">질문 # {surveyNum}</div>
        <br />
        <div className="para">{userName}님의 몸무게를 입력해주세요</div>
        <input
          className="input"
          type="text"
          maxLength="3"
          ref={inputRef}
          onChange={onChangeInfo}
          placeholder="몸무게"
        />
        <br />
        {showWarn && (
          <span className="warning">
            <FontAwesomeIcon icon={faWarning} /> 30에서 190사이의 숫자만 입력
            가능합니다
          </span>
        )}
      </div>
    );
  } else if (surveyNum === 4) {
    return (
      <div className="survey_info_question">
        <div className="number">질문 # {surveyNum}</div>
        <br />
        <div className="para">{userName}님의 나이를 입력해주세요</div>
        <input
          className="input"
          type="text"
          maxLength="3"
          ref={inputRef}
          onChange={onChangeInfo}
          placeholder="나이"
        />
        <br />
        {showWarn && (
          <span className="warning">
            <FontAwesomeIcon icon={faWarning} /> 10에서 110사이의 숫자만 입력
            가능합니다
          </span>
        )}
      </div>
    );
  } else if (surveyNum === 5) {
    return (
      <SurveySelect
        userName={userName}
        surveyNum={surveyNum}
        onChange={onChange}
        questions={questions}
        showWarn={showWarn}
      />
    );
  }
};

export default SurveyInfo;

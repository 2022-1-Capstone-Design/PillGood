import React from "react";
import "../../css/Survey/SurveyStartForm.css";
import SurveySelect from "./SurveySelect";
const SurveyInfo = ({
  userName,
  setUserName,
  setUserInfo,
  inputRef,
  surveyNum,
  onChange,
  showWarn,
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
      <div className="survey_main_question">
        <div className="number">질문 # {surveyNum}</div>
        <br />
        <div className="para">이름을 입력해 주세요</div>
        <input
          type="text"
          maxLength="7"
          ref={inputRef}
          onChange={onChangeName}
          placeholder="이름"
        />
      </div>
    );
  } else if (surveyNum === 2) {
    return (
      <div className="survey_main_question">
        <div className="number">질문 # {surveyNum}</div>
        <br />
        <div className="para">{userName}님의 키를 입력해주세요</div>
        <input
          type="text"
          maxLength="3"
          ref={inputRef}
          onChange={onChangeInfo}
          placeholder="키"
        />
        <br />
        {showWarn && <span>100에서 250사이의 숫자만 입력 가능합니다</span>}
      </div>
    );
  } else if (surveyNum === 3) {
    return (
      <div className="survey_main_question">
        <div className="number">질문 # {surveyNum}</div>
        <br />
        <div className="para">{userName}님의 몸무게를 입력해주세요</div>
        <input
          type="text"
          maxLength="3"
          ref={inputRef}
          onChange={onChangeInfo}
          placeholder="몸무게"
        />
        <br />
        {showWarn && <span>30에서 190사이의 숫자만 입력 가능합니다</span>}
      </div>
    );
  } else if (surveyNum === 4) {
    return (
      <div className="survey_main_question">
        <div className="number">질문 # {surveyNum}</div>
        <br />
        <div className="para">{userName}님의 나이를 입력해주세요</div>
        <input
          type="text"
          maxLength="3"
          ref={inputRef}
          onChange={onChangeInfo}
          placeholder="나이"
        />
        <br />
        {showWarn && <span>10에서 110사이의 숫자만 입력 가능합니다</span>}
      </div>
    );
  } else if (surveyNum === 5) {
    return (
      <SurveySelect
        userName={userName}
        surveyNum={surveyNum}
        onChange={onChange}
      />
    );
  }
};

export default SurveyInfo;

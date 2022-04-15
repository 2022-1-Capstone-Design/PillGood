import React from "react";

const DetailSurvey = ({ detailNum, surveyNum }) => {
  if (detailNum[0] === "1") {
    return (
      <>
        <div className="survey">
          <div className="survey_main">
            <div className="survey_main_question">
              <span>질문 #{surveyNum} (혈관/혈액순환)</span>
              <span>해당되는 문장을 선택해주세요</span>
              <ul className="survey_main_question_answer">
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    상처가 생기면 잘 아물지 않아요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    손끝 또는 발끝이 자주 저려요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    충치가 생기고 잇몸이 자주 붓고 피가 나요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    선택할 것이 없지만 혈관/혈액순환이 걱정돼요
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else if (detailNum[0] === "2") {
    return (
      <>
        <div className="survey">
          <div className="survey_main">
            <div className="survey_main_question">
              <span>질문 #{surveyNum} (내장)</span>
              <span>해당되는 문장을 선택해주세요</span>
              <ul className="survey_main_question_answer">
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    복통이나 속 쓰림이 자주 발생해요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    변비가 있어요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    설사와 같은 묽은 변을 자주 보는 편이에요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    술을 마실 때 얼굴이나 몸이 붉어지고 소화가 안돼요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    선택할 것이 없지만 소화력 개선이 필요해요
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else if (detailNum[0] === "3") {
    return (
      <>
        <div className="survey">
          <div className="survey_main">
            <div className="survey_main_question">
              <span>질문 #{surveyNum} (눈)</span>
              <span>해당되는 문장을 선택해주세요</span>
              <ul className="survey_main_question_answer">
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    눈이 건조하여 뻑뻑하고 가려움을 느껴요.v
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />눈 주변이 떨리는
                    현상이 있어요.v
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    핸드폰이나 컴퓨터를 본 후에 시야가 흐릿하게 느껴져요.v
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    어두워지면 시력이 저하돼요.v
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    선택할 것이 없지만 눈 건강이 걱정돼요.
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else if (detailNum[0] === "4") {
    return (
      <>
        <div className="survey">
          <div className="survey_main">
            <div className="survey_main_question">
              <span>질문 #{surveyNum} (피로감)</span>
              <span>해당되는 문장을 선택해주세요</span>
              <ul className="survey_main_question_answer">
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    무기력하고 식욕이 없어요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    자고 일어나도 아침부터 피곤해요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    신경이 예민하고 잠을 이루기 힘들어요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    잠을 매우 잘 자요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    선택할 것이 없지만 피로감 있어요
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else if (detailNum[0] === "5") {
    return (
      <>
        <div className="survey">
          <div className="survey_main">
            <div className="survey_main_question">
              <span>질문 #{surveyNum} (뼈와 관절)</span>
              <span>해당되는 문장을 선택해주세요</span>
              <ul className="survey_main_question_answer">
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    뼈가 부러져 본 경험이 있어요.v
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    평소 뼈가 약한 느낌이 있어요.v
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    스테로이드를 3개월 이상 섭취한 경험이 있어요.v
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    선택할 것이 없지만 뼈와 관절이 걱정돼요.
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else if (detailNum[0] === "6") {
    return (
      <>
        <div className="survey">
          <div className="survey_main">
            <div className="survey_main_question">
              <span>질문 #{surveyNum} (면역)</span>
              <span>해당되는 문장을 선택해주세요</span>
              <ul className="survey_main_question_answer">
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    스트레스가 매우 많아요.v
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    아토피 또는 비염 등 알레르기 질환이 있어요.v
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    감기와 같은 감염성 질환에 자주 걸려요.v
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    선택할 것이 없지만 면역이 걱정돼요.
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default DetailSurvey;

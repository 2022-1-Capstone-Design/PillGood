import React from "react";

const CommonSurvey = ({ commonNum, surveyNum }) => {
  if (commonNum[0] === "1") {
    return (
      <>
        <div className="survey">
          <div className="survey_main">
            <div className="survey_main_question">
              <span>질문 #{surveyNum} (식습관)</span>
              <span>해당되는 문장을 선택해주세요</span>
              <ul className="survey_main_question_answer">
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    생선을 일주일에 3번 이상 먹어요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    녹황색 채소(시금치, 브로콜리 등)를 거의 매일 먹어요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    일주일 동안 과일(사과 1개 또는 귤 3개 정도)을 4일 이상
                    먹어요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    일주일 동안 4일 이상 고기(삼겹살 등 메인 요리)를 먹어요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />단 음식(빵/과자,
                    초콜릿, 탄산음료 등)을 자주 먹어요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    일주일 동안 식사를 5회 이상 거르고 있어요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    선택할 것이 없어요
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else if (commonNum[0] === "2") {
    return (
      <>
        <div className="survey">
          <div className="survey_main">
            <div className="survey_main_question">
              <span>질문 #{surveyNum} (이외)</span>
              <span>해당되는 문장을 선택해주세요</span>
              <ul className="survey_main_question_answer">
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    하루 12시간 이상의 업무 또는 학업을 일주일에 3일 이상해요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    하루에 6시간 이상 핸드폰 또는 모니터 화면을 집중해서 봐요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    입에 구내염이 자주 생겨요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    4시간 이상 야외활동을 해요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    1시간에서 4시간 이내로 야외활동을 해요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    1시간 이내로 야외활동을 해요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    선택할 것이 없어요
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else if (commonNum[0] === "3") {
    return (
      <>
        <div className="survey">
          <div className="survey_main">
            <div className="survey_main_question">
              <span>질문 #{surveyNum} (유전질환)</span>
              <span>해당되는 문장을 선택해주세요</span>
              <ul className="survey_main_question_answer">
                <li>
                  <label>
                    <input type="checkbox" name="answer" />간 질환을 가지고
                    있어요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    혈관(심근경색, 뇌출혈 등) 질환을 가지고 있어요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    뼈/관절 질환(골다공증, 골감소증 등)을 가지고 있어요
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="answer" />
                    우리 가족은 위와 같은 질환이 없어요
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

export default CommonSurvey;

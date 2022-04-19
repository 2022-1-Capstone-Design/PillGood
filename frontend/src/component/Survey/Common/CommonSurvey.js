import React from "react";

const CommonSurvey = ({
  commonNum,
  surveyNum,
  checkedInputs,
  setCheckedInputs,
}) => {
  const surveyList = [
    [
      { id: "7-1", name: "생선을 일주일에 3번 이상 먹어요" },
      {
        id: "7-2",
        name: "녹황색 채소(시금치, 브로콜리 등)를 거의 매일 먹어요",
      },
      {
        id: "7-3",
        name: "일주일 동안 과일(사과 1개 또는 귤 3개 정도)을 4일 이상 먹어요",
      },
      {
        id: "7-4",
        name: "일주일 동안 4일 이상 고기(삼겹살 등 메인 요리)를 먹어요",
      },
      { id: "7-5", name: "단 음식(빵/과자,초콜릿, 탄산음료 등)을 자주 먹어요" },
      { id: "7-6", name: "일주일 동안 식사를 5회 이상 거르고 있어요" },
      { id: "7-7", name: "선택할 것이 없어요" },
    ],
    [
      {
        id: "8-1",
        name: "하루 12시간 이상의 업무 또는 학업을 일주일에 3일 이상해요",
      },
      {
        id: "8-2",
        name: "하루에 6시간 이상 핸드폰 또는 모니터 화면을 집중해서 봐요",
      },
      { id: "8-3", name: "입에 구내염이 자주 생겨요" },
      { id: "8-4", name: "4시간 이상 야외활동을 해요" },
      { id: "8-5", name: "1시간에서 4시간 이내로 야외활동을 해요" },
      { id: "8-6", name: "1시간 이내로 야외활동을 해요" },
      { id: "8-7", name: "선택할 것이 없어요" },
    ],
    [
      { id: "9-1", name: "간 질환을 가지고 있어요" },
      { id: "9-2", name: "혈관(심근경색, 뇌출혈 등) 질환을 가지고 있어요" },
      {
        id: "9-3",
        name: "뼈/관절 질환(골다공증, 골감소증 등)을 가지고 있어요",
      },
      { id: "9-4", name: "우리 가족은 위와 같은 질환이 없어요" },
    ],
  ];
  const category = ["식습관", "이외", "유전질환"];

  const onChange = (checked, id) => {
    const nullValue =
      surveyList[Number(commonNum[0]) - 1][
        surveyList[Number(commonNum[0]) - 1].length - 1
      ].id;
    if (id === nullValue) {
      if (checkedInputs[0] === nullValue) {
        setCheckedInputs(checkedInputs.filter((el) => el !== id));
      } else {
        setCheckedInputs([nullValue]);
      }
    } else if (checked) {
      if (checkedInputs[0] === nullValue) {
        setCheckedInputs(checkedInputs.pop());
      }
      setCheckedInputs([...checkedInputs, id]);
    } else {
      // 체크 해제
      setCheckedInputs(checkedInputs.filter((el) => el !== id));
    }
  };
  return (
    <>
      <div className="survey">
        <div className="survey_main">
          <div className="survey_main_question">
            <span>
              질문 #{surveyNum} ({category[Number(commonNum[0]) - 1]})
            </span>
            <span>해당되는 문장을 선택해주세요</span>
            <br />
            {surveyList[Number(commonNum[0]) - 1].map((item) => (
              <label key={item.id}>
                <input
                  type="checkbox"
                  value={item.name}
                  onChange={(e) => onChange(e.currentTarget.checked, item.id)}
                  checked={checkedInputs.includes(item.id) ? true : false}
                />
                <div>{item.name}</div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default CommonSurvey;

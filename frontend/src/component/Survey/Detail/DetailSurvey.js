import React from "react";

const DetailSurvey = ({
  detailNum,
  surveyNum,
  checkedInputs,
  setCheckedInputs,
}) => {
  const surveyList = [
    [
      { id: "1-1", name: "상처가 생기면 잘 아물지 않아요" },
      { id: "1-2", name: "손끝 또는 발끝이 자주 저려요" },
      { id: "1-3", name: "충치가 생기고 잇몸이 자주 붓고 피가 나요" },
      { id: "1-4", name: "선택할 것이 없지만 혈관/혈액순환이 걱정돼요" },
    ],
    [
      { id: "2-1", name: "복통이나 속 쓰림이 자주 발생해요" },
      { id: "2-2", name: "변비가 있어요" },
      { id: "2-3", name: "설사와 같은 묽은 변을 자주 보는 편이에요" },
      { id: "2-4", name: "술을 마실 때 얼굴이나 몸이 붉어지고 소화가 안돼요" },
      { id: "2-5", name: "선택할 것이 없지만 소화력 개선이 필요해요" },
    ],
    [
      { id: "3-1", name: "눈이 건조하여 뻑뻑하고 가려움을 느껴요." },
      {
        id: "3-2",
        name: "핸드폰이나 컴퓨터를 본 후에 시야가 흐릿하게 느껴져요.",
      },
      { id: "3-3", name: "눈 주변이 떨리는 현상이 있어요." },
      { id: "3-4", name: "어두워지면 시력이 저하돼요." },
      { id: "3-5", name: "선택할 것이 없지만 눈 건강이 걱정돼요." },
    ],
    [
      { id: "4-1", name: "무기력하고 식욕이 없어요" },
      { id: "4-2", name: "자고 일어나도 아침부터 피곤해요" },
      { id: "4-3", name: "신경이 예민하고 잠을 이루기 힘들어요" },
      { id: "4-4", name: "잠을 매우 잘 자요" },
      { id: "4-5", name: "선택할 것이 없지만 피로감 있어요" },
    ],
    [
      { id: "5-1", name: "뼈가 부러져 본 경험이 있어요." },
      { id: "5-2", name: "평소 뼈가 약한 느낌이 있어요." },
      { id: "5-3", name: "스테로이드를 3개월 이상 섭취한 경험이 있어요." },
      { id: "5-4", name: "선택할 것이 없지만 뼈와 관절이 걱정돼요." },
    ],
    [
      { id: "6-1", name: "스트레스가 매우 많아요." },
      { id: "6-2", name: "아토피 또는 비염 등 알레르기 질환이 있어요." },
      { id: "6-3", name: "감기와 같은 감염성 질환에 자주 걸려요." },
      { id: "6-4", name: "선택할 것이 없지만 면역이 걱정돼요." },
    ],
  ];
  const category = [
    "혈관/혈액순환",
    "소화/위/간/장",
    "눈",
    "피로감",
    "뼈와 관절",
    "면역",
  ];

  const onChange = (checked, id) => {
    const nullValue =
      surveyList[Number(detailNum[0]) - 1][
        surveyList[Number(detailNum[0]) - 1].length - 1
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
              질문 #{surveyNum} {category[Number(detailNum[0]) - 1]}
            </span>
            <span>해당되는 문장을 선택해주세요</span>
            <br />
            {surveyList[Number(detailNum[0]) - 1].map((item) => (
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

export default DetailSurvey;

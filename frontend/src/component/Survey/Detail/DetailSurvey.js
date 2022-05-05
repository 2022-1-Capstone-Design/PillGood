import React from "react";

const DetailSurvey = ({
  detailNum,
  surveyNum,
  checkedInputs,
  setCheckedInputs,
  questions,
}) => {
  const onChange = (checked, id) => {
    const nullValue =
      questions[0].sub_category[Number(detailNum[0]) - 1].question[
        questions[0].sub_category[Number(detailNum[0]) - 1].question.length - 1
      ]._id;
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
        <div className="survey_main_question">
          <div className="survey_main_question_detail">
            <div className="number">
              질문 #{surveyNum}
              {questions[0].sub_category[detailNum[0] - 1].name}
            </div>
            <br />

            <div className="para"> 해당되는 문장을 선택해주세요</div>
            <br />
          </div>

          <div className="survey_main_question_label">
            {questions[0].sub_category[detailNum[0] - 1].question.map(
              (item) => (
                <label key={item._id}>
                  <input
                    type="checkbox"
                    className="checkbox"
                    value={item.name}
                    onChange={(e) =>
                      onChange(e.currentTarget.checked, item._id)
                    }
                    checked={checkedInputs.includes(item._id) ? true : false}
                  />
                  {item.name}
                  <br />
                </label>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailSurvey;

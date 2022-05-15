import React from "react";
import "../../../css/Survey/Form/SurveyForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

const SurveyForm = ({
  detailNum,
  commonNum,
  common,
  surveyNum,
  checkedInputs,
  setCheckedInputs,
  showWarn,
  questions,
}) => {
  const onChange = (checked, id) => {
    const nullValue = !common
      ? questions[0].sub_category[Number(detailNum[0]) - 1].question[
          questions[0].sub_category[Number(detailNum[0]) - 1].question.length -
            1
        ]._id
      : questions[1].sub_category[Number(commonNum[0]) - 1].question[
          questions[1].sub_category[Number(commonNum[0]) - 1].question.length -
            1
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
              질문 #{surveyNum}&nbsp;
              {!common
                ? questions[0].sub_category[detailNum[0] - 1].name
                : questions[1].sub_category[commonNum[0] - 1].name}
            </div>
            <br />
            <div className="para"> 해당되는 문장을 선택해주세요</div>
            <br />
          </div>

          <ul className="survey_main_question_answer">
            {!common
              ? questions[0].sub_category[detailNum[0] - 1].question.map(
                  (item) => (
                    <li key={item._id}>
                      <input
                        type="checkbox"
                        className="checkbox"
                        value={item.name}
                        id={item._id}
                        onChange={(e) =>
                          onChange(e.currentTarget.checked, item._id)
                        }
                        checked={
                          checkedInputs.includes(item._id) ? true : false
                        }
                      />
                      <label htmlFor={item._id}>{item.name}</label>
                    </li>
                  )
                )
              : questions[1].sub_category[commonNum[0] - 1].question.map(
                  (item) => (
                    <li key={item._id}>
                      <input
                        type="checkbox"
                        className="checkbox"
                        value={item.name}
                        id={item._id}
                        onChange={(e) =>
                          onChange(e.currentTarget.checked, item._id)
                        }
                        checked={
                          checkedInputs.includes(item._id) ? true : false
                        }
                      />
                      <label htmlFor={item._id}> {item.name}</label>
                    </li>
                  )
                )}
          </ul>
          {showWarn && (
            <span className="warning">
              <FontAwesomeIcon icon={faWarning} /> 답변을 선택해주세요
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default SurveyForm;

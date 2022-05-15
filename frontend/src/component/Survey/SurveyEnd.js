import "../../css/Survey/SurveyEnd.css";
function Detail_Result({ surveyNum }) {
  return (
    <>
      <div className="survey">
        <div className="survey_main_question">
          <div className="number">질문 #{surveyNum} (결과 공유)</div>
          <br />
          <div className="para">
            설문이 종료 되었어요. 결과 페이지로 이동하시겠어요?
          </div>
          <br />
        </div>
      </div>
    </>
  );
}
export default Detail_Result;

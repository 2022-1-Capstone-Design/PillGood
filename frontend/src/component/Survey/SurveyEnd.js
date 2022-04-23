import { Link } from "react-router-dom";
import '../../css/Survey/SurveyEnd.css';
function Detail_Result({ surveyNum }) {
  return (
    <>
      <div className="survey">
          <div className="survey_main_question">
            <div className="number">질문 #{surveyNum} (결과 공유)</div>
            <br />
            <div className="para">이메일 주소를 적어주세요</div>
            <br />
            <input type="email" placeholder="이메일을 적어주세요" />
          </div>
      </div>
    </>
  );
}
export default Detail_Result;

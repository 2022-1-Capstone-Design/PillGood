import { Link } from "react-router-dom";
import "../css/Form.css";
import logo from "../image/logo.png";

function Form() {
  return (
    <div className="form">
      <div className="form__first">
        <Link to="/">
          <img id="form_logo" src={logo} width="166" height="30" alt="pillgood logo" />
        </Link>
        <p className="intro_one">
          내 몸에 필요한 <span className="highlight">영양제</span>와 <span className="highlight">영양소</span>! 궁금하신가요?
        </p>
        <p className="intro_two">나에게 최적화된 영양제를 지금 바로 <span className="highlight">PillGood</span>과 함께 알아봐요!😀</p>
      </div>
      <Link id="link_to_survey" to="/form/survey">
        <input className="start" value="시작하기" type="submit" />
      </Link>
    </div>
  );
}
export default Form;

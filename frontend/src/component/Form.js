import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Form.css";
import logo from "../image/logo.png";

function Form({ isLoggedIn }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      //비로그인 상태면 해당 페이지 접근 제한
      navigate("/", true);
    }
  });
  return (
    <div className="form_container_all">
    <div className="form">
    <Link to="/"><img id="close_btn" src="images/close.png" alt=""></img></Link>
      <div className="form__first">
      <img
      id="form_logo"
      src={logo}
      width="166"
      height="30"
      alt="pillgood logo"
    />
        <p className="intro_text">
        내 몸에 필요한 <span className="highlight">영양제</span>와{" "}
          <span className="highlight">영양소</span>! 궁금하신가요?
        </p>
        <p className="intro_text">
        나에게 최적화된 영양제를 지금 바로{" "}
          <span className="highlight">PillGood</span>과 함께 알아봐요!😀
        </p>
        <Link id="link_to_survey" to="/form/survey">
          <input className="start" value="시작하기" type="submit" />
        </Link>
      </div>
    </div>
    </div>
  );
}
export default Form;

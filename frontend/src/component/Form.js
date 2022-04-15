import { Link } from "react-router-dom";
import "../css/Form.css";
import logo from "../image/logo.png";
function Form() {
  return (
    <div class="form">
      <div class="form__first">
        <Link to="/">
          <img src={logo} width="166" height="30" alt="pillgood logo" />
        </Link>
        <p>
          필굿 :) <br />
          나에게 필요한 영양제와 영양소 알고싶어 ^_^
        </p>
        <p>설문을 통해 나에게 최적화된 영양제를 알아봐요~</p>
      </div>
      <Link to="/form/survey">
        <input className="start" value="시작하기" type="submit" />
      </Link>
    </div>
  );
}
export default Form;

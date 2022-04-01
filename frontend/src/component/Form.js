import { Link } from "react-router-dom";
import "../css/Form.css";
function Form() {
  return (
    <div className="form">
      <div className="form__first">
        <Link to="/">
          <h2>Pill Good</h2>
        </Link>
        <p>
          필굿 :) <br />
          나에게 필요한 영양제와 영양소 알고싶어 ^_^
        </p>
        <p>설문을 통해 나에게 최적화된 영양제를 알아봐요~</p>
      </div>
      <input value="시작하기" type="submit" />
    </div>
  );
}
export default Form;

import imgLogin from "../image/kakao_login.png";
import "../css/Auth.css";
import { Link, useNavigate } from "react-router-dom";

function Auth({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const onClick = (e) => {
    e.preventDefault();
    setIsLoggedIn((current) => !current);
    navigate("/");
  };
  return (
    <div class="auth">
      <Link to="/">
        <h2>Pill Good</h2>
      </Link>
      <button onClick={onClick}>
        <img src={imgLogin} alt="kakao Login button" />
      </button>
    </div>
  );
}
export default Auth;

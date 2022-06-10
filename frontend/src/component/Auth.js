import imgLogin from "../image/kakao_login.png";
import "../css/Auth.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../image/logo2.png";
import { useEffect } from "react";

function Auth({ isLoggedIn }) {
  const navigate = useNavigate();
  const location = useLocation();
  const cookies = location.state.surveyAnswer;
  useEffect(() => {
    if (isLoggedIn || cookies) {
      //로그인 상태면 해당 페이지 접근 제한
      navigate("/", true);
    }
  });
  return (
    <div className="auth">
      <Link to="/">
        <img src={logo} alt="pillgood logo" />
      </Link>
      <a href={process.env.REACT_APP_KAUTH_URL}>
        <button>
          <img src={imgLogin} alt="kakao Login button" />
        </button>
      </a>
    </div>
  );
}
export default Auth;

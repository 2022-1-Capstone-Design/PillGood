import imgLogin from "../image/kakao_login.png";
import "../css/Auth.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../image/logo2.png";
import { useEffect } from "react";

function Auth({ isLoggedIn }) {
  const navigate = useNavigate();
  const cookies = document.cookie === "";
  useEffect(() => {
    if (!cookies || isLoggedIn) {
      //로그인 상태면 해당 페이지 접근 제한
      navigate(-1, true);
    }
    console.log(cookies);
    console.log(isLoggedIn);
  }, [navigate, cookies, isLoggedIn]);
  return (
    <div className="auth">
      <Link to="/">
        <img src={logo} alt="pillgood logo" />
      </Link>
      <a target="_blank" href={process.env.REACT_APP_KAUTH_URL}>
        <button>
          <img src={imgLogin} alt="kakao Login button" />
        </button>
      </a>
    </div>
  );
}
export default Auth;

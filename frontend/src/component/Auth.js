import imgLogin from "../image/kakao_login.png";
import "../css/Auth.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as AuthVerify from "./AuthVerify";

function Auth({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    AuthVerify.AuthVerify();
    if (token) {
      navigate("/", setIsLoggedIn(true));
      //로그인 상태면 해당 페이지 접근 못하게함
    } else {
      setIsLoggedIn(false);
    }
  });
  return (
    <div className="auth">
      <a href={process.env.REACT_APP_KAUTH_URL}>
        <button>
          <img src={imgLogin} alt="kakao Login button" />
        </button>
      </a>
    </div>
  );
}
export default Auth;

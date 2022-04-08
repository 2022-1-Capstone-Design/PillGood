import imgLogin from "../image/kakao_login.png";
import "../css/Auth.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Auth({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      //로그인 상태면 해당 페이지 접근 제한
      navigate("/", setIsLoggedIn(true));
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

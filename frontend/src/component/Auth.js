import imgLogin from "../image/kakao_login.png";
import "../css/Auth.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../image/logo2.png";
import { useEffect } from "react";

function Auth({ isLoggedIn }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      //로그인 상태면 해당 페이지 접근 제한
      navigate("/", true);
    }
  });
  return (
    <div className="auth">
      <Link to="/">
        <img src={logo} alt="pillgood logo" />
      </Link>
      <a href="https://kauth.kakao.com/oauth/authorize?client_id=326cd91121ead061d9c149f8690d1706&redirect_uri=http://pillgood.ml/auth/kakao/callback&response_type=code">
        <button>
          <img src={imgLogin} alt="kakao Login button" />
        </button>
      </a>
    </div>
  );
}
export default Auth;

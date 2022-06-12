import imgLogin from "../image/kakao_login.png";
import "../css/Auth.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../image/logo2.png";
import { useEffect, useState } from "react";

function Auth({ isLoggedIn }) {
  const navigate = useNavigate();
  const [cookie, setCookie] = useState(isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      setCookie(true);
    } else {
      setCookie(false);
    }
  }, [isLoggedIn]);
  useEffect(() => {
    if (cookie) navigate(-1, true);
  });
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

import imgLogin from "../image/kakao_login.png";
import "../css/Auth.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../image/logo2.png";
import { useEffect, useState } from "react";

function Auth({ isLoggedIn }) {
  const navigate = useNavigate();
  const [cookie, setCookie] = useState(false);
  const cookies = document.cookie !== "";
  useEffect(() => {
    if (cookies) {
      setCookie(true);
    } else {
      setCookie(false);
    }
  }, [cookies]);
  useEffect(() => {
	  console.log(cookie);
    if (cookie) navigate(-1, true);
  });
	console.log(cookie);
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

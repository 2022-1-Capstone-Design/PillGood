import imgLogin from "../image/kakao_login.png";
import "../css/Auth.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../image/logo2.png";
import { useEffect } from "react";

function Auth({ isLoggedIn, prevUrl }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn)
      navigate(`/${window.localStorage.getItem("prevUrl")}`, true);
    else window.localStorage.setItem("prevUrl", prevUrl);
  });
  console.log(prevUrl);
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

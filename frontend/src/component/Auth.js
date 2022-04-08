import imgLogin from "../image/kakao_login.png";
import "../css/Auth.css";
import { Link, useNavigate } from "react-router-dom";
import logo from '../image/logo.png';
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
      <img src={logo} width='166' height='30' alt='pillgood logo'/>
      </Link>
      <button onClick={onClick}>
        <img src={imgLogin} alt="kakao Login button" />
      </button>
    </div>
  );
}
export default Auth;


import imgLogin from "../image/kakao_login.png";
import "../css/Auth.css";
import { useNavigate } from "react-router-dom";

function Auth({ setIsLoggedIn }) {
  const kauthUrl =
    "https://kauth.kakao.com/oauth/authorize?client_id=326cd91121ead061d9c149f8690d1706&redirect_uri=http://localhost:3000/auth/kakao/callback&response_type=code";

  return (
    // <div class="auth">
    //   <Link to="/">
    //     <h2>Pill Good</h2>
    //   </Link>
    //   <button onClick={onClick}>asdf</button>
    //   <Link
    //     to={{
    //       pathname: "/auth/kakao",
    //     }}
    //     target="_parent"
    //   >
    //     <button>
    //       <img src={imgLogin} alt="kakao Login button" />
    //     </button>
    //   </Link>
    //   <Link
    //     to={{
    //       pathname: "/auth/kakao/logout",
    //     }}
    //     target="_parent"
    //   >
    //     <button>로그아웃</button>
    //   </Link>
    // </div>
    <div className="auth">
      <a href={kauthUrl}>
        <button>
          <img src={imgLogin} alt="kakao Login button" />
        </button>
      </a>
    </div>
  );
}
export default Auth;

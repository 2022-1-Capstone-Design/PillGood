import imgLogin from "../image/kakao_login.png";
import "../css/Auth.css";
function Auth({ isLoggedIn }) {
  const kauthUrl =
    "https://kauth.kakao.com/oauth/authorize?client_id=326cd91121ead061d9c149f8690d1706&redirect_uri=http://localhost:3000/auth/kakao/callback&response_type=code";

  return (
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

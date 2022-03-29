import imgLogin from "../image/kakao_login.png";
import "../css/Auth.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import queryString from "query-string";
import request from "request"

function Auth({ setIsLoggedIn }) {
  const kauthUrl = 'https://kauth.kakao.com/oauth/authorize?client_id=326cd91121ead061d9c149f8690d1706&redirect_uri=http://localhost:3000/auth/kakao/callback&response_type=code'
  const query = queryString.parse(window.location.search);
  useEffect(() => {
    if (query.code) {
      getKakaoTokenHandler(query.code.toString());
    }
  }, []);

  const getKakaoTokenHandler = async (code) => {
    const data = {
      grant_type: "authorization_code",
      client_id: "326cd91121ead061d9c149f8690d1706",
      redirect_uri: "http://localhost:3000/auth/kakao/callback",
      code: code,
    };
    console.log(data.code);
    const queryString = Object.keys(data)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
      .join("&");

    //토큰 발급 REST API
    axios
      .post("https://kauth.kakao.com/oauth/token", queryString, {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
      .then((res) => {
        //서버에 토큰 전송
        sendKakaoTokenToServer(res.data.access_token);
        console.log(res);
      });
  };
  const sendKakaoTokenToServer = (token) => {
    axios.post("/auth/kakao", { access_token: token }).then((res) => {
      if (res.status == 201 || res.status == 200) {
        const user = res.data.user;
        window.localStorage.setItem(
          "token",
          JSON.stringify({
            access_token: res.data.jwt,
          })
        );
      } else {
        window.alert("로그인에 실패하였습니다.");
      }
    });
  };
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
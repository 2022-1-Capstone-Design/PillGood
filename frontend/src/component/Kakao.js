import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

const Kakao = () => {
  const navigate = useNavigate();
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
    console.log(data.code); //인가코드
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
        navigate("/");
      });
  };

  const sendKakaoTokenToServer = (token) => {
    axios
      .post("/test/kakao", { access_token: token }, { withCredentials: true }) // localhost:5000/test/kakao로 전송
      .then((res) => {
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

  return <div>Kakao</div>;
};

export default Kakao;

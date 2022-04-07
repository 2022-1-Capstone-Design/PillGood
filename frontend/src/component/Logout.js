import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Main from "./Main";

const Logout = () => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    axios
      .post("/test/kakao/logout", { token: JSON.parse(token) })
      .then((res) => {
        if (res.data.success) {
          window.localStorage.removeItem("token");
          window.localStorage.removeItem("expiresIn");
        }
        navigate("/", true);
      })
      .catch((err) => {
        // jwt 토큰 만료시 삭제
        if (err.response.data.error.message === "jwt expired") {
          window.localStorage.removeItem("token");
          window.localStorage.removeItem("expiresIn");
        }
        navigate("/", true);
      });
  });
  return <></>;
};

export default Logout;

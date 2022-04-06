import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    axios
      .post("/test/kakao/logout", { token: JSON.parse(token) })
      .then((res) => {
        if (res.data.success) window.localStorage.removeItem("token");
        navigate("/", true);
      })
      .catch((err) => navigate("/", true));
  });
  return <></>;
};

export default Logout;

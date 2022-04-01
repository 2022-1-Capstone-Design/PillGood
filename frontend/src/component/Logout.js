import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const token = JSON.parse(window.localStorage.getItem("token"));
  useEffect(() => {
    axios.post("/test/kakao/logout", { token: token.access_token }).then((res) => {
      if (res.data.success) window.localStorage.removeItem("token");
    }).catch(error => console.log(error));
    navigate("/");
  });
  return <div>Logout</div>;
};

export default Logout;
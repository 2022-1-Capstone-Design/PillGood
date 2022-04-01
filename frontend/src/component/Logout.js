import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("/test/kakao/logout").then((res) => {
      if (res.data.success) window.localStorage.removeItem("token");
    });
    navigate("/");
  });
  return <div>Logout</div>;
};

export default Logout;

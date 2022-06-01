import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyPageList from "./MyPageList";

const MyPage = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) navigate("/", true);
  }, []);

  return <MyPageList />;
};

export default MyPage;

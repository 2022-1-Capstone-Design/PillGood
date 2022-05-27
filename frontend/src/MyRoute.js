import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Main from "./component/Main/Main";
import Auth from "./component/Auth";
import Form from "./component/Form";
import { useState } from "react";
import All from "./component/All/All";
import Survey from "./component/Survey/Survey";
import Kakao from "./component/Kakao";
import SurveyLoading from "./component/Survey/SurveyLoading";
import SurveyResult from "./component/Survey/Result/SurveyResult";
import Navigater from "../src/route/Navigate";
import MyPage from "./component/MyPage/MyPage";

function MyRoute() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = window.localStorage.getItem("token");

  //localstorage에 토큰값 유무에 따라 로그인 여부 결정
  useEffect(() => {
    if (token) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, [token]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Navigater isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        >
          <Route
            path="/"
            element={
              <Main isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route path="/all" element={<All token={isLoggedIn} />} />
          <Route path="/form/survey/:id" element={<SurveyResult />} />
        </Route>
        <Route path="/auth" element={<Auth isLoggedIn={isLoggedIn} />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form/survey" element={<Survey />} />
        <Route path="/auth/kakao/callback" element={<Kakao />} />
        <Route path="/survey/loading" element={<SurveyLoading />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default MyRoute;

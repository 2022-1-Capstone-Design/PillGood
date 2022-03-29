import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./component/Main";
import Auth from "./component/Auth";
import Form from "./component/Form";
import { Fragment, useState } from "react";
import Kakao from "./component/Kakao";
function MyRoute() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
        <Route path="/auth" element={<Auth setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/form" element={<Form />} />
        <Route path="/auth/kakao/callback" element={<Kakao />} />
      </Routes>
    </Fragment>
  );
}
export default MyRoute;

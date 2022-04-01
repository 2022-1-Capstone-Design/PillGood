import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./component/Main";
import Auth from "./component/Auth";
import Form from "./component/Form";
import { Fragment, useState } from "react";
import Kakao from "./component/Kakao";
import Logout from "./component/Logout";
function MyRoute() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <Main isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="/auth" element={<Auth isLoggedIn={isLoggedIn} />} />
        <Route path="/form" element={<Form />} />
        <Route path="/auth/kakao/callback" element={<Kakao />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Fragment>
  );
}
export default MyRoute;

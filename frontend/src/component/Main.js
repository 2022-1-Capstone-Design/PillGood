import { faBars } from "@fortawesome/free-solid-svg-icons";
import Navigate from "../route/Navigate";
import "../css/Main.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import * as AuthVerify from "./AuthVerify";

function Main({ isLoggedIn, setIsLoggedIn }) {
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    AuthVerify.AuthVerify();
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn, setIsLoggedIn, token]);

  return (
    <div className="main">
      <div className="main__first">
        <Link to="/">
          <h2>Pill Good</h2>
        </Link>
        <Navigate isLoggedIn={isLoggedIn} />
        <FontAwesomeIcon className="main__first__menu" icon={faBars} />
      </div>
      <div className="main__intro">
        <p>사이트 소개</p>
        <Link to="/form">
          <input type="submit" value="설문 시작하기" />
        </Link>
      </div>
    </div>
  );
}
export default Main;

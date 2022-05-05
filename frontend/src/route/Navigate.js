import { Link } from "react-router-dom";
import "../css/Navigate.css";
import * as Logout from "../component/Logout";
import React, { useEffect, useMemo, useState } from "react";
import { throttle } from "lodash";
import logo from "../image/logo.png";

function Navigate({ isLoggedIn , setIsLoggedIn}) {

  const [isNavOn, setIsNavOn] = useState(true);
  const token = window.localStorage.getItem("token");
  //이전 스크롤 초기값
  let beforeScrollY = 0;

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn, setIsLoggedIn, token]);

  const scrollEvent = useMemo(
    () =>
      throttle(() => {
        if (window.pageYOffset > beforeScrollY) {
          setIsNavOn(false);
          console.log("켜기");
        } else {
          setIsNavOn(true);
          console.log("끄기");
        }
        //이전 스크롤값 저장
        beforeScrollY = window.pageYOffset;
      }, 10000),
    [isNavOn]
  );

  return (
    <div className={isNavOn ? "main__first" : "main__first hidden"}>
      <Link to="/">
        <img src={logo} width="166" height="30" alt="pillgood logo" />
      </Link>
      <ul className={"navbar__element"}>
        <li>
          <Link to="/">홈</Link>
        </li>
        {isLoggedIn ? null : (
        <li>
          <Link to="/auth">로그인</Link>
        </li>
        )}
        <li>
          <Link to={isLoggedIn ? "/form" : "/auth"}>설문시작</Link>
        </li>
        <li>
          <Link to="/all">전체보기</Link>
        </li>
        {isLoggedIn ? (
        <li style={{ cursor: "pointer" }} onClick={Logout.Logout}>
          로그아웃
        </li>
        ) : null}
        {isLoggedIn ? <li style={{ cursor: "pointer" }}>마이페이지</li> : null}

        <li>
         <Link to="/ask">문의하기</Link>
        </li>
      </ul>
      </div>
  );
}
export default Navigate;

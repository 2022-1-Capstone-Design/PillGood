import { Link } from "react-router-dom";
import "../css/Navigate.css";
import * as Logout from "../component/Logout";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { throttle } from "lodash";
import logo from "../image/logo.png";
import { Outlet } from "react-router";

function Navigate({ isLoggedIn }) {
  const [isNavOn, setIsNavOn] = useState(true);

  //이전 스크롤 초기값
  const beforeScrollY = useRef(0);
  const scrollEvent = useMemo(
    () =>
      throttle(() => {
        const currentScrollY = window.scrollY;
        if (beforeScrollY.current < currentScrollY) {
          setIsNavOn(false);
        } else {
          setIsNavOn(true);
        }
        //이전 스크롤값 저장
        beforeScrollY.current = currentScrollY;
      }, 300),
    [beforeScrollY]
  );

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
  }, [scrollEvent]);
  return (
    <>
      <div className={isNavOn ? "main__first" : "main__first hidden"}>
        <Link to="/">
          <img className="main__first_logo" src={logo} alt="pillgood logo" />
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
          {isLoggedIn ? (
            <li style={{ cursor: "pointer" }}><Link to={isLoggedIn ? "/mypage" : "/auth"}>마이페이지</Link></li>
          ) : null}
          <li>
            <Link to="/ask">문의하기</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
export default Navigate;

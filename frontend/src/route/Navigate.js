import { Link } from "react-router-dom";
import "../css/Navigate.css";
import * as Logout from "../component/Logout";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { throttle } from "lodash";
import logo from "../image/logo.png";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router";

function Navigate({ isLoggedIn, setPrevPath }) {
  const [isNavOn, setIsNavOn] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
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
    //모바일 환경에서는 네비바 고정
    if (window.innerWidth > 1023)
      window.addEventListener("scroll", scrollEvent);
    else window.removeEventListener("scroll", scrollEvent);
  }, [scrollEvent]);

  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <>
      <nav className={isNavOn ? "navbar" : "navbar hidden"}>
        <div className="navbar_logo">
          {/* isActive false로 바꿔줌으로서 반응형 상태일때  페이지를 이동하면 네비바를 자동으로 접어줌*/}
          <Link to="/" onClick={() => setIsActive(false)}>
            <img src={logo} alt="pillgood logo" />
          </Link>
        </div>
        <ul className={isActive ? "navbar__element active" : "navbar__element"}>
          <li>
            <Link to="/" onClick={() => setIsActive(false)}>
              홈
            </Link>
          </li>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">로그인</Link>
            </li>
          )}
          <li>
            <Link to={isLoggedIn ? "/form" : "/auth"}>설문시작</Link>
          </li>
          <li>
            <Link to="/all" onClick={() => setIsActive(false)}>
              전체보기
            </Link>
          </li>
          {isLoggedIn && (
            <li style={{ cursor: "pointer" }} onClick={Logout.Logout}>
              로그아웃
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/mypage" onClick={() => setIsActive(false)}>
                마이페이지
              </Link>
            </li>
          )}
          <li>
            <Link to="/ask" onClick={() => setIsActive(false)}>
              문의하기
            </Link>
          </li>
        </ul>
        <button
          onClick={() => setIsActive(!isActive)}
          type="button"
          class={isActive ? "menu active" : "menu"}
        >
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </button>
      </nav>
      <Outlet />
    </>
  );
}
export default Navigate;

import "../../css/Main/Main.css";
import React from "react";
import Cards from "../Cards";
import Footer from "../Footer";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import KakaoChat from "../KakaoChat";
import Dots from "./Dots";
import { useState, useEffect, useRef } from "react";

const DIVIDER_HEIGHT = 5;

function Main({ isLoggedIn }) {
  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; //스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; //화면 세로길이

      if (deltaY > 0) {
        //스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지면 2페이지로 이동
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지면 3페이지로 이동
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          //현재 3페이지면 4페이지로 이동
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          //현재 4페이지면 5페이지로 이동
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(5);
        } else {
          //현재 5페이지면 5페이지로 이동
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(5);
        }
      } else {
        //스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지면 1페이지로 이동
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지면 1페이지로 이동
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          //현재 3페이지면 2페이지로 이동
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          //현재 4페이지면 3페이지로 이동
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else {
          //현재 5페이지면 4페이지로 이동
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  return (
    <div ref={outerDivRef} className="outer">
      <Dots scrollIndex={scrollIndex} />
      <div className="inner bg-yellow">
        <FirstPage isLoggedIn={isLoggedIn}/>
      </div>
      <div className="divider"></div>
      <div className="inner bg-blue">
        <SecondPage />
      </div>
      <div className="divider"></div>
      <div className="inner bg-pink">
        <ThirdPage />
      </div>
      <div className="divider"></div>
      <div className="inner bg-yellow">
        <Cards />
      </div>
      <div className="divider"></div>
      <div className="inner bg-blue">
        <Footer />
      </div>
      <KakaoChat />
    </div>
  );
}

export default Main;

import "../../css/Main/Main.css";
import React from "react";
//import { FullPage, Slide } from "react-full-page";
import ReactFullpage from '@fullpage/react-fullpage';
import Cards from "../Cards";
import Footer from "../Footer";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import KakaoChat from "../KakaoChat";

function Main({ isLoggedIn }) {
  return (
    <div>
      <ReactFullpage.Wrapper controls controlsProps={{ className: "slide-navigation" }}>
        <div className="section-first">
          <FirstPage isLoggedIn={isLoggedIn} />
        </div>

        <div className="section-sectond">
          <SecondPage />
        </div>

        <div className="section-thrid">
          <ThirdPage />
        </div>

        <div className="section-cards">
          <Cards />
        </div>

        <div className="section-footer">
          <Footer />
        </div>
        <KakaoChat />
      </ReactFullpage.Wrapper>
    </div>
  );
}
export default Main;

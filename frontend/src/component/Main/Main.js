import "../../css/Main/Main.css";
import React from "react";
import { FullPage, Slide } from "react-full-page";
import Cards from "../Cards";
import Footer from "../Footer";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import KakaoChat from "../KakaoChat";

function Main({ isLoggedIn }) {
  console.log("test");
  return (
    <div>
      <FullPage controls controlsProps={{ className: "slide-navigation" }}>
        <Slide>
          <FirstPage isLoggedIn={isLoggedIn} />
        </Slide>

        <Slide>
          <SecondPage />
        </Slide>

        <Slide>
          <ThirdPage />
        </Slide>

        <Slide>
          <Cards />
        </Slide>

        <Slide>
          <Footer />
        </Slide>
        <KakaoChat />
      </FullPage>
    </div>
  );
}
export default Main;

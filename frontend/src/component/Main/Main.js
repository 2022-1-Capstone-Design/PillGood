import "../../css/Main.css";
import React, { useEffect } from "react";
import { FullPage, Slide } from "react-full-page";
import Cards from "../Cards";
import Footer from "../Footer";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

function Main({ isLoggedIn, setIsLoggedIn }) {
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn, setIsLoggedIn, token]);

  return (
    <div>
      <FullPage controls controlsProps={{ className: "slide-navigation" }}>
        <Slide>
          <FirstPage isLoggedIn={isLoggedIn}/>
        </Slide>

        <Slide>
          <SecondPage/>
        </Slide>

        <Slide>
          <ThirdPage/>
        </Slide>

        <Slide>
          <Cards />
        </Slide>

        <Slide>
          <Footer />
        </Slide>
      </FullPage>
    </div>
  );
}
export default Main;

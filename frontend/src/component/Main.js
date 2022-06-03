import Navigate from "../route/Navigate";
import "../css/Main.css";
import { Link } from "react-router-dom";
//import { FullPage, Slide } from "react-full-page";
import Fade from "react-reveal/Fade";
import { ReactDOM } from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import Cards from "./Cards";
import Footer from "./Footer";
import React, { useEffect } from "react";
import FirstPage from "./Main/FirstPage";
import SecondPage from './Main/SecondPage';
import ThirdPage from "./Main/ThirdPage";
function Main({ isLoggedIn, setIsLoggedIn }) {
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn, setIsLoggedIn, token]);

<ReactFullpage
  licenseKey={'YOUR_KEY_HERE'}
  
  render={({state, fullpageApi}) =>{

  return (
    <div className="main-page">
      <ReactFullpage.Wrapper controls controlsProps={{ className: "slide-navigation" }}>
        <div className="section-first">
          <FirstPage/>
        </div>

        <div className="section-second">
          <SecondPage/>
        </div>

        <div className="section-third">
          <ThirdPage/>
        </div>

        <div className="section-cards">
          <Cards />
        </div>

        <div className="section-footer">
          <Footer />
        </div>
      </ReactFullpage.Wrapper>
    </div>
  );
}}
/>
}
export default Main;

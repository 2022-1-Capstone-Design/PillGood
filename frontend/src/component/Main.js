import Navigate from "../route/Navigate";
import "../css/Main.css";
import { Link } from "react-router-dom";
import { FullPage, Slide } from "react-full-page";
import Fade from "react-reveal/Fade";
import pictogram from "../image/pictogram.png";
import Cards from "./Cards";
import Footer from "./Footer";
import { useEffect } from "react";
import FirstPage from "./Main/FirstPage";
import SecondPage from './Main/SecondPage';

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
          <FirstPage/>
        </Slide>

        <Slide>
          <SecondPage/>
        </Slide>

        <Slide>
          <div className="thirdpage">
            <h1>당신을 위한 PillGood의 맞춤 영양 케어</h1>
            <Fade bottom>
              <div className="thirdpage__">
                <div className="thirdpage__first">
                  <div className="circle1"></div>
                  <div className="text1">
                    <h2>빠른 설문진단</h2>
                    <p>
                      겪고있는 증상을 체크해 영양소를 선별합니다.
                      <br />
                      신체발달에 도움을 주는 영양소를 선정합니다.
                      <br />
                      10가지 문항을 종합/평가해 웰빙 서비스를 제안합니다.
                      <br />
                    </p>
                  </div>
                </div>

                <div className="thirdpage__second ">
                  <div className="circle2"></div>
                  <div className="text2">
                    <h2>영양 헬스케어</h2>
                    <p>
                      여러 제약회사의 영양제를 알맞게 추천합니다.
                      <br />
                      영양소뿐만 아니라, 올바른 식습관을 관리합니다. <br />
                      치우치지 않은 균형잡힌 건강관리를 돕습니다.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
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

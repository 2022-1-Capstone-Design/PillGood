import Navigate from "../route/Navigate";
import "../css/Main.css";
import { Link } from "react-router-dom";
import { FullPage, Slide } from "react-full-page";
import Fade from "react-reveal/Fade";
import pictogram from "../image/pictogram.png";
import Cards from "./Cards";
import Footer from "./Footer";

function Main({ isLoggedIn, setIsLoggedIn }) {

  return (
    <div>
      <FullPage controls controlsProps={{ className: "slide-navigation" }}>
        <Slide>
          <div className="main">
            <div>
              <Navigate isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            </div>
            <div className="main__intro">
              <div className="main__intro__">
                <Fade right>
                  <div className="main__intro__main">
                    <h2>
                      약국에 방문하지 않아도, 검색을 하지 않아도 내 손 안의
                      헬스케어 전문 서비스 PillGood
                    </h2>
                  </div>
                  <p>
                    PillGood은 개인별 최적화된 영양제 맞춤 서비스를 제공합니다.{" "}
                    <br />
                    안심하고 믿을 수 있는 영양제 조회로 쉽고 빠르게 건강관리를
                    시작하세요.
                  </p>
                  <Link to={isLoggedIn ? "/form" : "auth"}>
                    <input
                      className="startForm"
                      type="submit"
                      value="내 몸에 필요한 바른 영양소 자가진단,
          지금 시작하기"
                    />
                  </Link>
                </Fade>
              </div>
            </div>
          </div>
        </Slide>

        <Slide>
          <div className="secondpage">
            <div className="secondpage__context">
              <Fade bottom>
                <div className="secondpage__left">
                  <h5>HEALTH SPECIALIST</h5>
                  <h1>건강 종합 솔루션을 제공하는 PillGood</h1>
                  <h4>
                    PillGood이 제공하는 기능은 영양제 제안 시스템을 효과적으로
                    발휘합니다.
                    <br />
                  </h4>
                </div>
                <div className="secondpage__right">
                  <img src={pictogram} alt="p"></img>
                </div>
              </Fade>
            </div>
          </div>
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
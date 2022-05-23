import Navigate from "../../route/Navigate";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "../../css/Main/FirstPage.css";

const FirstPage = ({ isLoggedIn }) => {
  return (
    <div className="main">
      <div className="main__intro">
        <div className="main__intro__">
          <Fade right>
            <div className="main__intro__main">
              <h2>
                약국에 방문하지 않아도, 검색을 하지 않아도 내 손 안의 헬스케어
                전문 서비스 PillGood
              </h2>
            </div>
            <p>
              PillGood은 개인별 최적화된 영양제 맞춤 서비스를 제공합니다. <br />
              안심하고 믿을 수 있는 영양제 조회로 쉽고 빠르게 건강관리를
              시작하세요.
            </p>
            <Link to={isLoggedIn ? "/form" : "/auth"}>
              <input
                className="startForm"
                type="submit"
                value="내 몸에 필요한 바른 영양소 자가진단,지금 시작하기"
              />
            </Link>
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default FirstPage;

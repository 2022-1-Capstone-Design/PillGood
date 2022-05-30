import Fade from "react-reveal/Fade";
import pictogram from "../../image/pictogram.png";

const SecondPage=()=>{
    return(
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
    );
}
export default SecondPage;
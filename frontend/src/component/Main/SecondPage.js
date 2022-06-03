import Fade from "react-reveal/Fade";
import pictogram from "../../image/pictogram.png";
import '../../css/Main/SecondPage.css';

const SecondPage=()=>{
    return(
        <div className="secondpage">
          <Fade bottom>
            <div className="secondpage__left">
              <span id="secondpage_text1">HEALTH SPECIALIST</span><br/>
              <span id="secondpage_text2">건강 종합 솔루션을 제공하는 PillGood</span>
              <span id="secondpage_text3">
                PillGood이 제공하는 기능은 영양제 제안 시스템을 효과적으로
                발휘합니다.
                </span >
              <br/>
            </div>
            <div className="secondpage__right">
              <img className="secondpage__img" src={pictogram} alt="p"></img>
            </div>
          </Fade>
        </div>
    );
}
export default SecondPage;
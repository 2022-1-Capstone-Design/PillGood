import { Link } from "react-router-dom";
import "../../css/Main/FirstPage.css";
import { useRef,useCallback,useEffect,useState} from 'react';
const FirstPage = ({ isLoggedIn }) => {
  let style="";
  const element = useRef();
  const addFadeIn=()=>{
      if(element){
       style="fadeInRight";
       console.log(style);
      }    
  }
  useEffect(()=>{
    console.log(element);
    addFadeIn();
  },[])


  return (
    <div className="main">
      <div className="main__intro">
        <div className= "main__intro__" ref={element}>
            <div className="main__intro__main" >
                <span id="text1">약국에 방문하지 않아도, 검색을 하지 않아도 </span> <br/>
                <span id="text2">내 손 안의 헬스케어 전문 서비스 PillGood </span>
            </div>
            <div className="main__intro__main2">
              <span id="text3">PillGood은 개인별 최적화된 영양제 맞춤 서비스를 제공합니다.</span> <br/>
              <span id="text4">안심하고 믿을 수 있는 영양제 조회로 쉽고 빠르게 건강관리를 시작하세요.</span>
            </div>
            <Link to={isLoggedIn ? "/form" : "/auth"}>
              <input
                className="startForm"
                type="submit"
                value="내 몸에 필요한 바른 영양소 자가진단, 지금 시작하기"
              />
            </Link>
        </div>
      </div>
    </div>
  );
};
export default FirstPage;
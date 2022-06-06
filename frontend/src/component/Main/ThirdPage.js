import '../../css/Main/ThirdPage.css';

const ThirdPage=()=>{
    return(
        <div className="thirdpage">
            <span id="third-text1">당신을 위한 PillGood의 맞춤 영양 케어</span>
              <div className="thirdpage__">
                <div className="thirdpage__first">
                  <div className="circle1"></div>
                  <div className="text1">
                    <span class="third-text2">빠른 설문진단</span>
                    <p class="third-text2-p">
                      <span class="third-text3">겪고있는 증상을 체크해 영양소를 선별합니다.</span>                      <br />
                      <span class="third-text3">신체발달에 도움을 주는 영양소를 선정합니다.</span>
                      <br />
                      <span class="third-text3">10가지 문항을 종합/평가해 웰빙 서비스를 제안합니다.</span>
                      <br />
                    </p>
                  </div>
                </div>

                <div className="thirdpage__second ">
                  <div className="circle2"></div>
                  <div className="text2">
                    <span class="third-text2">영양 헬스케어</span>
                    <p class="third-text2-p">
                    <span class="third-text5">여러 제약회사의 영양제를 알맞게 추천합니다.</span>
                      <br />
                    <span class="third-text5"> 영양소뿐만 아니라, 올바른 식습관을 관리합니다.</span> 
                    <br />
                    <span class="third-text5"> 치우치지 않은 균형잡힌 건강관리를 돕습니다.</span>
                      <br />
                    </p>
                  </div>
                </div>
              </div>
          </div>
    );
}
export default ThirdPage;
import {Link} from 'react-router-dom';
function Detail_Intestine(){
 return(
    <>
     <div className="survey">
         <nav className="survey_navbar">
             <ul className="survey_navbar_ul">
                 <li data="관심분야">
                     <span>관심분야</span>
                 </li>
                 <li data="분야별 정보">
                     <span>분야별 정보</span>
                 </li>
                 <li data="식습관">
                     <span>식습관</span>
                 </li>
                 <li data="기본정보">
                     <span>기본정보</span>
                 </li>
             </ul>
         </nav>
         <div className="survey_main">
             <div className="survey_main_question">
                 <span>질문 #2 (내장)</span>
                 <span>해당되는 문장을 선택해주세요</span>
                  <ul className="survey_main_question_answer"> 
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>복통이나 속 쓰림이 자주 발생해요
                          </label>
                      </li>
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>변비가 있어요
                          </label>
                      </li>
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>설사와 같은 묽은 변을 자주 보는 편이에요
                          </label>
                      </li>
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>술을 마실 때 얼굴이나 몸이 붉어지고 소화가 안돼요
                          </label>
                      </li>
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>선택할 것이 없지만 소화력 개선이 필요해요
                          </label>
                      </li>
                  </ul>
             </div>
         </div>
         <div className="survey_footer">
         <Link to="/form/detail/blood"> 
             <button className='prevPage'>이전으로 돌아가기</button>
             </Link>
             <Link to="/form/detail/tired">
             <button className="nextPage">다음으로 넘어가기</button>
            </Link>
         </div>
     </div>
    </>
 );
}
export default Detail_Intestine;

import {Link} from 'react-router-dom';
function Detail1(){
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
                 <span>질문 #1</span>
                 <span>분야를 선택해주세요</span>
                  <ul className="survey_main_question_answer"> 
                      <li data="혈관/혈액순환">
                          <label>
                          <input type="checkbox" name="answer" value="혈관/혈액순환"/>혈관/혈액순환
                          </label>
                      </li>
                      <li data="소화/장/위/간">
                          <label>
                          <input type="checkbox" name="answer" value="소화/위/간/장"/>소화/위/간/장
                          </label>
                      </li>
                      <li data="눈">
                          <label>
                          <input type="checkbox" name="answer" value="눈"/>눈
                          </label>
                      </li>
                      <li data="피로감">
                          <label>
                          <input type="checkbox" name="answer" value="피로감"/>피로감
                          </label>
                      </li>
                      <li data="뼈와 관절">
                          <label>
                          <input type="checkbox" name="answer" value="뼈와 관절"/>뼈와 관절
                          </label>
                      </li>
                      <li data="면역">
                          <label>
                          <input type="checkbox" name="answer" value="면역"/>면역
                          </label>
                      </li>
                  </ul>
             </div>
         </div>
         <div className="survey_footer">
            <Link to="/form/detail/blood"> 
             <button className="next">다음</button>
            </Link>
         </div>
     </div>
    </>
 );
}
export default Detail1;

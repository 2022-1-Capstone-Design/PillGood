import {Link} from 'react-router-dom';
function Detail_Family(){
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
                 <span>질문 #10 (유전질환)</span>
                 <span>해당되는 문장을 선택해주세요</span>
                  <ul className="survey_main_question_answer"> 
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>간 질환을 가지고 있어요
                          </label>
                      </li>
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>혈관(심근경색, 뇌출혈 등) 질환을 가지고 있어요
                          </label>
                      </li>
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>뼈/관절 질환(골다공증, 골감소증 등)을 가지고 있어요
                          </label>
                      </li>
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>우리 가족은 위와 같은 질환이 없어요
                          </label>
                      </li>
                  </ul>
             </div>
         </div>
         <div className="survey_footer">
         <Link to="/form/detail/common/other"> 
             <button className='prevPage'>이전으로 돌아가기</button>
             </Link>
             <Link to="/form/detail/common/result">
             <button className="nextPage">다음으로 넘어가기</button>
            </Link>
         </div>
     </div>
    </>
 );
}
export default Detail_Family;

import {Link} from 'react-router-dom';
function Detail_Blood(){
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
                 <span>질문 #2 (혈관/혈액순환)</span>
                 <span>해당되는 문장을 선택해주세요</span>
                  <ul className="survey_main_question_answer"> 
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>상처가 생기면 잘 아물지 않아요
                          </label>
                      </li>
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>손끝 또는 발끝이 자주 저려요
                          </label>
                      </li>
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>충치가 생기고 잇몸이 자주 붓고 피가 나요
                          </label>
                      </li>
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>선택할 것이 없지만 혈관/혈액순환이 걱정돼요
                          </label>
                      </li>
                  </ul>
             </div>
         </div>
         <div className="survey_footer">
            <Link to="/form/detail/intestine"> 
             <button className='prevPage'>이전으로 돌아가기</button>
             <button className="nextPage">다음으로 넘어가기</button>
            </Link>
         </div>
     </div>
    </>
 );
}
export default Detail_Blood;

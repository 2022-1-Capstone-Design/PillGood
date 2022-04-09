import {Link} from 'react-router-dom';
function Detail_Other(){
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
                 <span>질문 #9 (이외)</span>
                 <span>해당되는 문장을 선택해주세요</span>
                  <ul className="survey_main_question_answer"> 
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>하루 12시간 이상의 업무 또는 학업을 일주일에 3일 이상해요
                          </label>
                      </li>
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>하루에 6시간 이상 핸드폰 또는 모니터 화면을 집중해서 봐요
                          </label>
                      </li>
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>입에 구내염이 자주 생겨요
                          </label>
                      </li>
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>4시간 이상 야외활동을 해요
                          </label>
                      </li>
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>1시간에서 4시간 이내로 야외활동을 해요
                          </label>
                      </li>
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>1시간 이내로 야외활동을 해요
                          </label>
                      </li>
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>선택할 것이 없어요
                          </label>
                      </li>
                  </ul>
             </div>
         </div>
         <div className="survey_footer">
         <Link to="/form/detail/common/food"> 
             <button className='prevPage'>이전으로 돌아가기</button>
             </Link>
             <Link to="/form/detail/common/family">
             <button className="nextPage">다음으로 넘어가기</button>
            </Link>
         </div>
     </div>
    </>
 );
}
export default Detail_Other;

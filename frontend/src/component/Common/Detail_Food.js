import {Link} from 'react-router-dom';
function Detail_Food(){
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
                 <span>질문 #8 (식습관)</span>
                 <span>해당되는 문장을 선택해주세요</span>
                  <ul className="survey_main_question_answer"> 
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>생선을 일주일에 3번 이상 먹어요
                          </label>
                      </li>
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>녹황색 채소(시금치, 브로콜리 등)를 거의 매일 먹어요
                          </label>
                      </li>
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>일주일 동안 과일(사과 1개 또는 귤 3개 정도)을 4일 이상 먹어요
                          </label>
                      </li>
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>일주일 동안 4일 이상 고기(삼겹살 등 메인 요리)를 먹어요
                          </label>
                      </li>
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>단 음식(빵/과자, 초콜릿, 탄산음료 등)을 자주 먹어요
                          </label>
                      </li>
                      <li>
                          <label>
                          <input type="checkbox" name="answer"/>일주일 동안 식사를 5회 이상 거르고 있어요
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
            <Link to="/form/detail/intestine"> 
             <button className='prevPage'>이전으로 돌아가기</button>
             </Link>
             <Link to="/form/detail/common/other">
             <button className="nextPage">다음으로 넘어가기</button>
            </Link>
         </div>
     </div>
    </>
 );
}
export default Detail_Food;

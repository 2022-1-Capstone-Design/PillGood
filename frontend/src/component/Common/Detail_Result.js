import {Link} from 'react-router-dom';
function Detail_Result(){
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
                 <span>질문 #11 (결과 공유)</span>
                 <span>이메일 주소를 적어주세요</span>
                 <input type="email" value="이메일을 적어주세요"/>
             </div>
         </div>
         <div className="survey_footer">
             <Link to="/form/detail/common/family"> 
             <button className='prevPage'>이전으로 돌아가기</button>
             </Link>
             <Link to="/form/detail/see/result">
             <button className="nextPage">다음으로 넘어가기</button>
            </Link>
         </div>
     </div>
    </>
 );
}
export default Detail_Result;

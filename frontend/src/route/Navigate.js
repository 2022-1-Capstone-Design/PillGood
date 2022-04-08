import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/Navigate.css";
function Navigate({ isLoggedIn }) {
  return (
    <ul class="navbar__element">
  
      <li>
        <Link to="/">홈</Link>
      </li>
      {isLoggedIn ? null : (
        <li>
          <Link to="/auth">로그인</Link>
        </li>
      )}
      <li>
        <Link to={isLoggedIn ? "/form" : "/auth"}>설문시작</Link>
      </li>
      <li>
        <Link to="/all">전체보기</Link>
        </li>
      {isLoggedIn ? <li>로그아웃</li> : null}
      {isLoggedIn ? <li>마이페이지</li> : null}

      <li>
        <Link to="/ask">문의하기</Link>
        </li>
    </ul>
  );
}
export default Navigate;

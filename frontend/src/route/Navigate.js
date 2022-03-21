import { Link } from "react-router-dom";
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
      <li>전체보기</li>
      {isLoggedIn ? <li>로그아웃</li> : null}
      {isLoggedIn ? <li>마이페이지</li> : null}

      <li>문의하기</li>
    </ul>
  );
}
export default Navigate;

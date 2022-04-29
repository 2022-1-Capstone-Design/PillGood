import { Link } from "react-router-dom";
import "../css/Navigate.css";
import * as Logout from "../component/Logout";

function Navigate({ isLoggedIn }) {
  return (
    <ul className="navbar__element">
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
      {isLoggedIn ? (
        <li style={{ cursor: "pointer" }} onClick={Logout.Logout}
        className="navbar__element">
          <Link to="/" >
            로그아웃
          </Link>
          
        </li>
      ) : null}
      {isLoggedIn ? 
      <li style={{ cursor: "pointer" }} className="navbar__element">
       <Link to="/">
         마이페이지
       </Link>
      </li> : null}

      <li>
        <Link to="/ask">문의하기</Link>
      </li>
    </ul>
  );
}
export default Navigate;

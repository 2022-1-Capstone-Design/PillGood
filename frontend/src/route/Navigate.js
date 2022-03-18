import {Link} from 'react-router-dom';
import '../css/Navigate.css';
function Navigate(){
    return(
          <ul class="navbar__element">
              <li><Link to='/'>홈</Link></li>
              <li><Link to='/auth'>로그인</Link></li>
              <li><Link to='/form'>설문시작</Link></li>
              <li>전체보기</li>
              <li>로그아웃/마이페이지</li>
              <li>문의하기</li>
          </ul>
    );
}
export default Navigate;
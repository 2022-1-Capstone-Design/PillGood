import imgLogin from '../image/kakao_login.png';
import '../css/Auth.css';
import {Link} from 'react-router-dom';
function Auth(){
    return(
       <div class="auth">
            <Link to="/"><h2>Pill Good</h2></Link>
           <img src={imgLogin} alt='kakao Login button'/>
       </div>
    );
}
export default Auth;
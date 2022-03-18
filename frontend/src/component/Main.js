import { faBars  } from '@fortawesome/free-solid-svg-icons';
import Navigate from "../routes/Navigate";
import '../css/Main.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Main(){
    return(
      <div class="main"> 
       <div class="main__first">
        <Link to="/"><h2>Pill Good</h2></Link>
        <Navigate/>
        <FontAwesomeIcon class="main__first__menu" icon={faBars}/>
       </div>  
       <div class="main__intro">
        <p>사이트 소개</p>
        <Link to='/form'><input type="submit" value="설문 시작하기" /></Link>
       </div>
      </div>
    );
}
export default Main;
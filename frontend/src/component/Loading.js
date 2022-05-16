import Spinner from '../image/spinner.gif';

const Loading=()=>{
    return(
        <div>
            <img src={Spinner} style={{width: '20%'}} alt="로딩중"/>
            잠시만 기다려 주세요...
        </div>
    );
}
export default Loading;
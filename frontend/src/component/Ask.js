import React from "react";
import { Link } from "react-router-dom";
import "../../src/css/Ask.css";

const Ask = () => {
  return (
    <div className="ask">

      <div className="askBox_one">
        
        <h1 id="ask_text1">
        <span className="ask_text2">문의하실 내용이 있으신가요?</span>
        <span className="ask_text2"></span>
        <span className="ask_text2">
          필굿 카카오톡 채널을 이용하여 문의해주시면 빠르게 답변 받으실 수
          있습니다.</span>
          </h1>
      </div>

      <div className="askContainer">
        <div className="askArea">

          <div id="askAreaButtonBox">
            <Link target="_blank" to={"//pf.kakao.com/_dxkjcb/chat"}>
              <button id="askAreaButton">카카오톡으로 문의하기</button>
            </Link>
          </div>
          <img id="char2" src="images/ask.png" alt=""></img>
          <img id="char1" src="images/char1.png" alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Ask;

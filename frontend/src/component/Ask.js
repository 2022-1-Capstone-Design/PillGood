import React from "react";
import { Link } from "react-router-dom";
import "../../src/css/Ask.css";

const Ask = () => {
  return (
    <div className="ask">
      <div className="askContainer">
        <h1>문의하기</h1>
        <div className="askArea">
          <div className="askTextArea">
            <h2>문의하실 내용이 있으신가요?</h2>
            <span>
              필굿 카카오톡 채널을 이용하여 문의해주시면 빠르게 답변 받으실 수
              있습니다.
            </span>
          </div>
          <div className="askBtnArea">
            <Link target="_blank" to={"//pf.kakao.com/_dxkjcb/chat"}>
              <button>카카오톡으로 문의하기</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ask;

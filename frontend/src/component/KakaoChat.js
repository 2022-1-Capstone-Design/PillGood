import React from "react";
import { Link } from "react-router-dom";
import kakao_chat from "../../src/image/kakao_chat.png";
import "../css/KakaoChat.css";

const KakaoChat = () => {
  return (
    <div>
      <Link target="_blank" to={"//pf.kakao.com/_dxkjcb/chat"}>
        <img src={kakao_chat} className="kakao_chat" alt="ask" />
      </Link>
    </div>
  );
};

export default KakaoChat;

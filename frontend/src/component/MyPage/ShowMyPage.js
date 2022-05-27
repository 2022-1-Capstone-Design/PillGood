import React from "react";

const ShowMyPage = ({ myPageData}) => {

  return (
    <ul className="mypage_list">
        <li key={myPageData.name}>
          {myPageData.name}
        {myPageData.likes.map(item=>(
          <div>
            {item.BSSH_NM}<br/>
            {item.PRDLST_NM}
            <img src={`..\\..\\..\\img\\${item.INDEX}.jpg`} alt=''/>
          </div>
        ))}
        <button>지난 결과 보기</button>
        </li>
    </ul>
  );
};

export default ShowMyPage;

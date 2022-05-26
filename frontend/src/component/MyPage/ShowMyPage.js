import React from "react";

const ShowMyPage = ({ myPageData}) => {

  return (
    <ul className="mypage_list">
      {myPageData.map((myPageDatas) => (
        <li key={myPageDatas.user_name}>
          <p>{myPageDatas.likes}</p>
          <p>{myPageDatas.results}</p>
        </li>
      ))}
    </ul>
  );
};

export default ShowMyPage;

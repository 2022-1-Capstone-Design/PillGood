import React from "react";

const ShowMyPage = ({ myPageData}) => {

  return (
    <ul className="mypage_list">
        <li key={myPageData.name}>
         
        {myPageData.name}
        </li>
    </ul>
  );
};

export default ShowMyPage;

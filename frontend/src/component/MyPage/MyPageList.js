import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowMyPage from "./ShowMyPage";

const MyPageList = () => {
  const [myPageData, setMyPageData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/myPage");
        setMyPageData(res.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    loadData().then(() => console.log("success"));
  }, []);

  if (loading) {
    return <div>대기중</div>;
  }
  if (!myPageData) {
    return null;
  }

  return (
    <div>
      <ShowMyPage myPageData={myPageData} loading={loading} />
    </div>
  );
};

export default MyPageList;

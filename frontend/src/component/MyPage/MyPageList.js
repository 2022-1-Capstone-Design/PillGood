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
        const res = await axios.get("http://api.pillgood.ml/myPage", {
          withCredentials: true,
        });
        setMyPageData(res.data);
        console.log(res.data);
        setLoading(false);
        console.log("myPageData : ", myPageData);
      } catch (e) {
        console.log(e);
      }
    };
    loadData().then(() => console.log("success"));
  }, []);

  if (loading) {
    return <div>Loading..</div>;
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

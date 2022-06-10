import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SurveyResultForm from "./SurveyResultForm";

const SurveyResult = () => {
  const { id } = useParams();
  const [resultData, setResultData] = useState([]);

  const getResult = async () => {
    await axios.get(`/survey/${id}`).then((res) => setResultData(res.data));
  };

  useEffect(() => {
    getResult();
  }, []);
  return (
    <div>
      {resultData[0] && (
        <SurveyResultForm resultData={resultData} resultId={id} />
      )}
    </div> //resultData 검사 안하면 오류남
  );
};

export default SurveyResult;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SurveyResultForm from "./SurveyResultForm";

const SurveyResult = () => {
  const { id } = useParams();
  const [resultData, setResultData] = useState();
  useEffect(() => {
    axios.get(`/survey/${id}`).then((res) => {
      setResultData(res.data);
    });
  }, [id]);

  return <div>{<SurveyResultForm resultData={resultData} />}</div>;
};

export default SurveyResult;

import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SurveyLoading = () => {
  const location = useLocation();
  const surveyAnswer = location.state.surveyAnswer;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("/survey", { surveyAnswer }, { withCredentials: true })
      .then((res) => {
        navigate(`/form/survey/${res.data._id}`, { replace: true });
      })
      .catch((err) => console.log(err));
  });
  return <h1>loading</h1>;
};

export default SurveyLoading;

import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../css/Survey/SurveyLoading.css";

const SurveyLoading = () => {
  const location = useLocation();
  const surveyAnswer = location.state.surveyAnswer;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(
        "http://api.pillgood.ml/survey",
        { surveyAnswer },
        { withCredentials: true }
      )

      .then((res) => {
        navigate(`/form/survey/${res.data._id}`, { replace: true });
      })
      .catch((err) => console.log(err));
  });
  return (
    <div className="container_loading">
      <img id="char4" src="/images/char4.png" alt=""></img>
      <br />
      Loading..
    </div>
  );
};

export default SurveyLoading;

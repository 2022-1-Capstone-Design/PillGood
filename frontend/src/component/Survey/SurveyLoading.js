import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import image from "../../../public/images/char4.png";

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
    <div>
      <img src={image} alt="loading"></img>
      <br />
      loading..
    </div>
  );
};

export default SurveyLoading;

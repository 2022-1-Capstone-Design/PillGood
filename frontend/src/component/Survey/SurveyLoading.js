import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SurveyLoading = () => {
  const location = useLocation();
  const surveyAnswer = location.state.surveyAnswer;
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    axios
      .post(
        "/survey",
        { surveyAnswer },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        navigate(`/form/survey/${res.data._id}`, true);
      })
      .catch((err) => console.log(err));
  });
  return <h1>loading</h1>;
};

export default SurveyLoading;

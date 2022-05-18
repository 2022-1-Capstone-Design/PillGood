import React from "react";

const SurveyResultForm = ({ resultData }) => {
  return (
    <div>
      <div>{resultData[0]._id}</div>
      <br />
      <h1>{resultData[0].user_name}</h1>
    </div>
  );
};

export default SurveyResultForm;

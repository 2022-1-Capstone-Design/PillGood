import React from "react";

const SurveyResultCategoryForm = ({ resultData, categoryIndex }) => {
  if (categoryIndex === 1) {
    return (
      <div>
        <h1>{resultData[categoryIndex].category}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{resultData[categoryIndex].category}</h1>
      </div>
    );
  }
};

export default SurveyResultCategoryForm;

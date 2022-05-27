import React from "react";
import SurveyResultCategoryForm from "./ResultForm/SurveyResultCategoryForm";
import "../../../css/Survey/Result/SurveyResultForm.css";
const SurveyResultForm = ({ resultData, resultId }) => {
  //공유 메세지 템플릿
  const shareResult = () => {
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "내 손 안의 헬스케어 전문 서비스 PillGood",
        description: "아래 버튼을 눌러 결과를 확인해보세요",
        imageUrl:
          "https://images.unsplash.com/photo-1628771065518-0d82f1938462?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
        link: {
          mobileWebUrl: `http://localhost:3000/form/survey/${resultId}`,
          webUrl: `http://localhost:3000/form/survey/${resultId}`,
        },
      },
      buttons: [
        {
          title: "결과 확인하기",
          link: {
            mobileWebUrl: `http://localhost:3000/form/survey/${resultId}`,
            webUrl: `http://localhost:3000/form/survey/${resultId}`,
          },
        },
      ],
    });
  };
  return (
    <div className="result">
      <div className="resultContainer">
        <div className="resultUserInfo">
          <h1>🩺 필굿이 검진한 {resultData[0].user_name}님의 설문결과에요</h1>
          <dl>
            <dt>나이 :</dt>
            <dt>{resultData[0].age}</dt>
            <dt>BMI :</dt>
            <dt>
              {resultData[0].BMI.bmi_figure}({resultData[0].BMI.bmi_result})
            </dt>
            <dt>검사일시</dt>
            <dt>{resultData[0].user_date}</dt>
          </dl>
        </div>
        <SurveyResultCategoryForm resultData={resultData} />
      </div>
    </div>
  );
};

export default SurveyResultForm;

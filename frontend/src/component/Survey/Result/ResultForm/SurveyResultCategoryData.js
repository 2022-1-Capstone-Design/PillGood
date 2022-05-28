import React from "react";
import SurveyResultCategoryContent from "./SurveyResultCategoryContent";
import "../../../../css/Survey/Result/SurveyResultCategoryData.css";

const SurveyResultCategoryData = ({ index, item }) => {
  /* 사용자가 관심분야를 선택했을 경우, 필요한 정보만 보여줌 */
  return (
    <div className="contents__details__one__choose">
      <h2>
        {index === 0
          ? "첫"
          : index === 1
          ? "두"
          : index === 2
          ? "세"
          : index === 3
          ? "네"
          : index === 4
          ? "다섯"
          : index === 5
          ? "여섯"
          : null}
        번째 관심분야({item.category})
      </h2>
      <div className="contents__details">
        <div className="contents__details__n">
          <h3 className="contents__details__nutrient">(1) 부족 영양소</h3>
          <ol className="contents__details__nutrients">
            {item.nutrient.map((nutrient) => (
              <li>{nutrient}</li>
            ))}
          </ol>
        </div>

        <div className="contents__details__p">
          <div className="contents__details__pill">
            <h3 className="contents__details__pills">(2) 추천 영양제</h3>
            <span className="contents__details__pills">
              * 영양제 그림을 클릭하면 상세 설명을 볼 수 있어요. *
            </span>
          </div>
          <div className="contents__details__one__choose__pill">
            {item.product.map((product) => (
              <SurveyResultCategoryContent item={product} index={1} />
            ))}
          </div>
        </div>

        <div className="contents__details__f">
          <div className="contents__details__food">
            <h3 className="contents__details__foods">(3) 추천 음식</h3>
          </div>
          <div className="contents__details__one__choose__pill">
            {item.food.map((food) => (
              <SurveyResultCategoryContent item={food} index={2} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SurveyResultCategoryData;

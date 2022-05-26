import React,{useEffect, useState} from "react";
import '../../../../css/Survey/Result/SurveyResultCategoryForm.css';
import SurveyResultCategoryData from "./SurveyResultCategoryData";


const SurveyResultCategoryForm = ({ resultData }) => {
  const [data,setData]=useState([]);
  const [fieldClick, setFieldClick]=useState(0);
 

  /* 개인정보 제외한 정보들 배열만 data 배열로 저장 */
  const input= ()=>{
    setData( resultData.slice(1)); 
  }  
  useEffect(()=>{
    input();
  },[]);

  /* 사용자가 관심분야를 선택하는 이벤트 발생시 실행됨*/
  const cilckField=(e, index)=>{
    e.preventDefault(); 
    setFieldClick(num=>num=index); 
  }

  return (
  <div className="contents">

      <div className="contents__category">
         <span>* 카테고리 별로 클릭하면 결과를 볼 수 있어요.</span>
         <br />
        {data.map((item,index)=>
          <button className="contents__category__btn" onClick={(e)=>cilckField(e, index)}>{item.category}</button>
        )}
      </div>

      <div className="contents__details">
        {data.map((item,index)=>
         <div className="contents__details__one">
          {fieldClick===0 && index===0? 
            <SurveyResultCategoryData item={item} index={0}/>
           : (fieldClick===index && index!==0 ? (
            <SurveyResultCategoryData item={item} index={fieldClick}/> )
          : null)}
          </div>

      )}
      </div>
   </div>
  );
}
export default SurveyResultCategoryForm;

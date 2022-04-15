import React, { useState } from "react";
import CommonSurvey from "./Common/CommonSurvey";
import DetailSurvey from "./Detail/DetailSurvey";
import SurveyStartForm from "./SurveyStartForm";
import SurveyEnd from "./SurveyEnd";

const Survey = () => {
  //선택한 관심 분야에 따라 표시해 줄 상세 질문 번호를 저장해두는 배열
  const [detailNum, setdetailNum] = useState([]);
  //이전 질문 번호를 저장해두는 배열
  const [prevDetailNum, setPrevDetailNum] = useState([]);
  //공통 질문 렌더링 결정 변수
  const [common, setCommon] = useState(false);
  //공통 질문 번호를 저장해두는 배열
  const [commonNum, setCommonNum] = useState(["1", "2", "3"]);
  //질문지 번호 변수
  const [surveyNum, setSurveyNum] = useState();

  let tmpArr = [...detailNum];
  let removeArr = [...prevDetailNum];
  let comArr = [...commonNum];
  const onChange = (e) => {
    //체크 해재시 배열에서 지움
    if (tmpArr.includes(e.target.value)) {
      const idx = tmpArr.findIndex((item) => item === e.target.value);
      if (idx > -1) tmpArr.splice(idx, 1);
    }
    //체크 시 배열에 삽입
    else {
      tmpArr[tmpArr.length] = e.target.value;
    }
  };
  //상세 질문 번호 오름차순으로 저장
  const saveSurveyNum = () => {
    if (tmpArr.length >= 3) {
      setdetailNum(tmpArr.sort());
      setSurveyNum(2);
    }
  };

  const nextSurvey = () => {
    if (!common) {
      //이전 질문 번호 저장
      removeArr.push(tmpArr.shift());
      setPrevDetailNum(removeArr);
      //다음 상세 질문으로 이동
      setdetailNum(tmpArr);
      //상세 질문이 끝나면 공통 질문으로 이동
      if (tmpArr.length === 0) setCommon(true);
    }
    //다음 공통 질문으로 이동
    else if (common) {
      comArr.shift();
      setCommonNum(comArr);
    }
    setSurveyNum(surveyNum + 1);
  };

  const prevSurvey = () => {
    //공통 질문 -> 상세 질문
    if (common && detailNum.length === 0 && commonNum.length === 3) {
      setCommon(false);
    }
    //이전 공통 질문으로 이동
    if (common && commonNum[0] !== "1") {
      comArr.unshift(String(Number(commonNum[0]) - 1));
      setCommonNum(comArr);
    }
    //이전 상세 질문으로 이동
    if (prevDetailNum.length > 0 && commonNum[0] === "1") {
      tmpArr.unshift(prevDetailNum.pop());
      setdetailNum(tmpArr);
    }
    //결과 페이지에서 이전 페이지 클릭시
    if (commonNum.length === 0 && detailNum.length === 0) {
      setCommonNum(["3"]);
    }
    //첫번째 상세 질문에서 뒤로가면 상세 질문 번호 초기화
    if (!common && removeArr.length === 0) {
      setdetailNum([]);
    }
    setSurveyNum(surveyNum - 1);
  };

  //설문조사 리스트 제출 함수
  const onSubmit = () => {};

  console.log("다음 상세 질문 번호 -> " + detailNum);
  console.log("이전 상세 질문 번호 -> " + prevDetailNum);
  console.log("공통 질문 번호 -> " + commonNum);
  console.log("현재 질문지 번호 -> " + surveyNum);
  console.log("\n");
  return (
    <div className="survey">
      <nav className="survey_navbar">
        <ul className="survey_navbar_ul">
          <li data="관심분야">
            <span>관심분야</span>
          </li>
          <li data="분야별 정보">
            <span>분야별 정보</span>
          </li>
          <li data="식습관">
            <span>식습관</span>
          </li>
          <li data="기본정보">
            <span>기본정보</span>
          </li>
        </ul>
      </nav>
      <div className="survey_main">
        {detailNum.length === 0 && !common ? (
          <SurveyStartForm onChange={onChange} />
        ) : null}
        {detailNum.length > 0 ? (
          <DetailSurvey
            detailNum={detailNum}
            setdetailNum={setdetailNum}
            surveyNum={surveyNum}
          />
        ) : null}
        {common && commonNum.length !== 0 ? (
          <CommonSurvey commonNum={commonNum} surveyNum={surveyNum} />
        ) : null}
        {detailNum.length === 0 && commonNum.length === 0 ? (
          <SurveyEnd surveyNum={surveyNum} />
        ) : null}
      </div>
      <div className="survey_footer">
        <button
          onClick={detailNum.length === 0 && !common ? null : prevSurvey}
          className="next"
        >
          이전
        </button>
        <button
          onClick={() => {
            if (detailNum.length === 0 && !common) saveSurveyNum();
            else if (detailNum.length === 0 && commonNum.length === 0)
              onSubmit();
            else nextSurvey();
          }}
          className="next"
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Survey;

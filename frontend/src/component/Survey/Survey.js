import React, { useState } from "react";
import CommonSurvey from "./Common/CommonSurvey";
import DetailSurvey from "./Detail/DetailSurvey";
import SurveyStartForm from "./SurveyStartForm";
import SurveyEnd from "./SurveyEnd";
import SurveyNav from "./SurveyNav";

const Survey = () => {
  //선택한 관심 분야에 따라 표시해 줄 상세 질문 번호를 저장해두는 배열
  const [detailNum, setdetailNum] = useState([]);
  //이전 질문 번호를 저장해두는 배열
  const [prevDetailNum, setPrevDetailNum] = useState([]);
  //공통 질문 렌더링 결정 변수
  const [common, setCommon] = useState(false);
  //공통 질문 번호를 저장해두는 배열
  const [commonNum, setCommonNum] = useState(["1", "2", "3"]);
  //질문지 번호 변수(선택한 상세 질문 개수에 따라 바뀜)
  const [surveyNum, setSurveyNum] = useState();
  //백엔드에 넘겨줄 설문 답변 값
  const [surveyAnswer, setSurveyAnswer] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  //현재 질문에서 선택한 값
  const [checkedInputs, setCheckedInputs] = useState([]);

  let tmpArr = [...detailNum];
  let removeArr = [...prevDetailNum];
  let comArr = [...commonNum];
  let tmpAnswer = [...surveyAnswer];

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
    const selectValue = [...checkedInputs];
    //상세 질문에서 다음 버튼 클릭시
    if (!common && checkedInputs.length > 0) {
      //이전 질문 번호 저장
      removeArr.push(tmpArr.shift());
      setPrevDetailNum(removeArr);
      //답변 결과 정렬 후 배열에 저장
      tmpAnswer[detailNum[0]] = selectValue.sort(
        (a, b) => a.charAt(2) - b.charAt(2)
      );
      setSurveyAnswer(tmpAnswer);
      //선택한 답변 값들 초기화
      checkedInputs.length = 0;
      setCheckedInputs(checkedInputs);

      //다음 상세 질문으로 이동
      setdetailNum(tmpArr);
      setSurveyNum(surveyNum + 1);
      //상세 질문이 끝나면 공통 질문으로 이동
      if (tmpArr.length === 0) setCommon(true);
    }

    //공통 질문에서 다음 버튼 클릭시
    else if (common && checkedInputs.length > 0) {
      //답변 결과 정렬 후 배열에 저장
      tmpAnswer[Number(commonNum[0]) + 6] = selectValue.sort(
        (a, b) => a.charAt(2) - b.charAt(2)
      );
      setSurveyAnswer(tmpAnswer);
      //선택한 답변 값들 초기화
      checkedInputs.length = 0;
      setCheckedInputs(checkedInputs);

      //다음 공통 질문으로 이동
      comArr.shift();
      setCommonNum(comArr);
      setSurveyNum(surveyNum + 1);
    }
  };

  const prevSurvey = () => {
    //공통 질문 -> 상세 질문
    if (common && detailNum.length === 0 && commonNum.length === 3) {
      setCommon(false);
    }
    //이전 공통 질문으로 이동
    if (common && commonNum[0] !== "1") {
      //현재 공통 질문에서 선택한 값들은 초기화
      checkedInputs.length = 0;
      setCheckedInputs(checkedInputs);
      comArr.unshift(String(Number(commonNum[0]) - 1));
      setCommonNum(comArr);
    }
    //이전 상세 질문으로 이동
    if (prevDetailNum.length > 0 && commonNum[0] === "1") {
      //현재 상세 질문에서 선택한 값들은 초기화
      checkedInputs.length = 0;
      setCheckedInputs(checkedInputs);

      tmpArr.unshift(prevDetailNum.pop());
      setdetailNum(tmpArr);
    }
    //결과 페이지에서 이전 페이지 클릭시
    if (commonNum.length === 0 && detailNum.length === 0) {
      setCommonNum(["3"]);
    }
    //첫번째 상세 질문에서 뒤로가면 상세 질문 번호 및 답변 값 배열 초기화
    if (!common && removeArr.length === 0) {
      setdetailNum([]);
      setSurveyAnswer([0, 0, 0, 0, 0, 0]);
    }
    setSurveyNum(surveyNum - 1);
  };

  //설문조사 리스트 제출 함수
  const onSubmit = () => {
    console.log(surveyAnswer);
  };

  return (
    <div className="survey">
      <SurveyNav />
      <div className="survey_main">
        {detailNum.length === 0 && !common ? (
          <SurveyStartForm onChange={onChange} />
        ) : null}
        {detailNum.length > 0 ? (
          <DetailSurvey
            detailNum={detailNum}
            surveyNum={surveyNum}
            checkedInputs={checkedInputs}
            setCheckedInputs={setCheckedInputs}
          />
        ) : null}
        {common && commonNum.length !== 0 ? (
          <CommonSurvey
            commonNum={commonNum}
            surveyNum={surveyNum}
            checkedInputs={checkedInputs}
            setCheckedInputs={setCheckedInputs}
          />
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

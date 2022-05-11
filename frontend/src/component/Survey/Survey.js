import React, { useEffect, useRef, useState } from "react";
import CommonSurvey from "./Common/CommonSurvey";
import DetailSurvey from "./Detail/DetailSurvey";
import SurveyEnd from "./SurveyEnd";
import SurveyInfo from "./SurveyInfo";
import axios from "axios";
import "../../css/Survey/Survey.css";
import { Link } from "react-router-dom";
import SurveyBar from "./SurveyBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimneyUser } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faTableList } from "@fortawesome/free-solid-svg-icons";

const Survey = () => {
  //설문자 이름
  const [userName, setUserName] = useState("");
  //설문자 키 or 몸무게 or 나이
  const [userInfo, setUserInfo] = useState(0);
  //선택한 관심 분야에 따라 표시해 줄 상세 질문 번호를 저장해두는 배열
  const [detailNum, setdetailNum] = useState([]);
  //이전 질문 번호를 저장해두는 배열
  const [prevDetailNum, setPrevDetailNum] = useState([]);
  //공통 질문 렌더링 결정 변수
  const [common, setCommon] = useState(false);
  //공통 질문 번호를 저장해두는 배열
  const [commonNum, setCommonNum] = useState(["1", "2", "3"]);
  //질문지 번호 변수(선택한 상세 질문 개수에 따라 바뀜)
  const [surveyNum, setSurveyNum] = useState(1);
  //백엔드에 최종적으로 넘겨줄 사용자 설문 답변 값
  const [surveyAnswer, setSurveyAnswer] = useState([[], []]);
  //현재 질문에서 선택한 값
  const [checkedInputs, setCheckedInputs] = useState([]);
  //db에서 불러온 질문 배열
  const [questions, setQuestions] = useState([]);
  //선택한 답변 개수 저장 배열
  const [selectAmount, setSelectAmount] = useState([]);
  //경고메세지 출력 변수
  const [showWarn, setShowWarn] = useState(false);
  //프로그레스바 진행률 변수
  const [detailLength, setDetailLength] = useState(0);
  const inputRef = useRef(null);

  let tmpArr = [...detailNum];
  let removeArr = [...prevDetailNum];
  let comArr = [...commonNum];
  let tmpAnswer = [...surveyAnswer];
  let tmpSelect = [...selectAmount];
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
  //상세 질문 번호 오름차순으로 저장 및 진행률 변수 설정
  const saveSurveyNum = () => {
    if (tmpArr.length >= 3) {
      setDetailLength(tmpArr.length);
      setdetailNum(tmpArr.sort());
      setSurveyNum(surveyNum + 1);
    }
  };

  const nextSurvey = () => {
    setShowWarn(false);
    const selectValue = [...checkedInputs];
    if (surveyNum === 1) {
      //사용자 이름 값 삽입
      if (userName !== "") {
        const tmp = [...surveyAnswer];
        tmp[0][0] = userName;
        setSurveyAnswer(tmp);
        setSurveyNum(surveyNum + 1);
        inputRef.current.value = "";
      }
    }
    //키, 몸무게, 나이 입력값 검사 후 배열에 값 삽입
    else if (surveyNum === 2 || surveyNum === 3 || surveyNum === 4) {
      setUserInfo(0);
      if (surveyNum === 2 && (userInfo <= 100 || userInfo >= 250)) {
        setShowWarn(true);
      } else if (surveyNum === 3 && (userInfo <= 30 || userInfo >= 190)) {
        setShowWarn(true);
      } else if (surveyNum === 4 && (userInfo <= 10 || userInfo >= 110)) {
        setShowWarn(true);
      } else if (userInfo !== 0 && inputRef.current.value !== "") {
        const tmp = [...surveyAnswer];
        tmp[0][surveyNum - 1] = userInfo;
        setSurveyAnswer(tmp);
        setSurveyNum(surveyNum + 1);
        inputRef.current.value = "";
      }
    }

    //공통 질문에서 다음 버튼 클릭시
    else if (common && checkedInputs.length > 0) {
      //답변 결과 정렬 후 배열에 저장
      selectValue.forEach((element) => tmpAnswer[1].push(element));
      setSurveyAnswer(tmpAnswer);
      //선택한 답변 갯수 저장
      tmpSelect.push(checkedInputs.length);
      setSelectAmount(tmpSelect);
      //선택한 답변 값들 초기화
      checkedInputs.length = 0;
      setCheckedInputs(checkedInputs);

      //다음 공통 질문으로 이동
      comArr.shift();
      setCommonNum(comArr);
      setSurveyNum(surveyNum + 1);
    }

    //상세 질문에서 다음 버튼 클릭시
    else if (!common && checkedInputs.length > 0) {
      //이전 질문 번호 저장
      removeArr.push(tmpArr.shift());
      setPrevDetailNum(removeArr);
      //답변 결과 정렬 후 배열에 저장
      selectValue.forEach((element) => tmpAnswer[1].push(element));
      setSurveyAnswer(tmpAnswer);
      //선택한 답변 갯수 저장
      tmpSelect.push(checkedInputs.length);
      setSelectAmount(tmpSelect);
      //선택한 답변 값들 초기화
      checkedInputs.length = 0;
      setCheckedInputs(checkedInputs);

      //다음 상세 질문으로 이동
      setdetailNum(tmpArr);
      setSurveyNum(surveyNum + 1);
      //상세 질문이 끝나면 공통 질문으로 이동
      if (tmpArr.length === 0) setCommon(true);
    }
  };
  const prevSurvey = () => {
    if (surveyNum > 1) {
      setShowWarn(false);
      //이전 질문에서 선택한 답변값 제거
      for (let i = 0; i < tmpSelect[tmpSelect.length - 1]; i++) {
        tmpAnswer[1].pop();
      }
      setSurveyAnswer(tmpAnswer);
      tmpSelect.pop();
      setSelectAmount(tmpSelect);

      if (surveyNum === 2) {
        setUserName("");
      }
      //첫번째 상세 질문에서 뒤로가면 상세 질문 번호 초기화 및 진행률 변수 초기화
      if (surveyNum === 6) {
        setdetailNum([]);
        setDetailLength(0);
      }
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

      if (inputRef.current !== null) {
        inputRef.current.value = "";
      }
      setSurveyNum(surveyNum - 1);
    }
  };
  //설문조사 리스트 제출 함수
  const onSubmit = () => {
    const id = window.localStorage.getItem("token");
    axios
      .post("/survey", { id, surveyAnswer }, { withCredentials: true })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const getQuestions = async () => {
    const questions = await axios.get("/survey");
    setQuestions(questions.data);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  console.log(surveyAnswer);

  return (
    <div className="survey">
      <div className="surveyButton iconbox">
        <Link to="/">
          <div className="surveyhome ">
            <FontAwesomeIcon icon={faHouseChimneyUser} className="icon" />
          </div>
        </Link>

        <Link to="/ask">
          <div className="surveyask">
            <FontAwesomeIcon icon={faCommentDots} className="icon" />
          </div>
        </Link>

        <Link to="/all">
          <div className="surveyall ">
            <FontAwesomeIcon icon={faTableList} className="icon" />
          </div>
        </Link>
      </div>

      <div className="surveyfirst">
        <SurveyBar surveyNum={surveyNum} detailLength={detailLength} />
        <div className="survey_main">
          {surveyNum >= 1 && surveyNum <= 5 ? (
            <SurveyInfo
              userName={userName}
              setUserName={setUserName}
              setUserInfo={setUserInfo}
              inputRef={inputRef}
              surveyNum={surveyNum}
              onChange={onChange}
              showWarn={showWarn}
            />
          ) : null}
          {detailNum.length > 0 && (
            <DetailSurvey
              detailNum={detailNum}
              surveyNum={surveyNum}
              checkedInputs={checkedInputs}
              setCheckedInputs={setCheckedInputs}
              questions={questions}
            />
          )}
          {common && commonNum.length !== 0 ? (
            <CommonSurvey
              commonNum={commonNum}
              surveyNum={surveyNum}
              checkedInputs={checkedInputs}
              setCheckedInputs={setCheckedInputs}
              questions={questions}
            />
          ) : null}
          {detailNum.length === 0 && commonNum.length === 0 ? (
            <SurveyEnd surveyNum={surveyNum} />
          ) : null}
        </div>

        <div className="survey_footer">
          <button onClick={prevSurvey} className="before">
            이전
          </button>
          <button
            onClick={() => {
              if (surveyNum === 5) saveSurveyNum();
              else if (detailNum.length === 0 && commonNum.length === 0)
                onSubmit();
              else nextSurvey();
            }}
            className="next"
          >
            {detailNum.length === 0 && commonNum.length === 0 ? "제출" : "다음"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Survey;

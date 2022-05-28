import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../css/MyPage/ShowMyPage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShowMyPage = ({ myPageData }) => {
  const [visible, setVisible] = useState(false);
  const settings = {
    dots: true,
    infinite: false, //true : 무한으로 계속 나오게하기
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <ul className="mypage_list">
      <li className="mypage_content" key={myPageData.name}>
        <p id="head_text">
          💊 <b>{myPageData.name}</b>님의 PillGood
        </p>
        <p id="likes_text">관심상품</p>
        <Slider {...settings}>
          {myPageData.likes?.map((item) => (
            <div>
              <a
                href={`https://search.shopping.naver.com/search/all?query=${item.PRDLST_NM}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="set_img"
                  src={`..\\..\\..\\img\\${item.INDEX}.jpg`}
                  alt=""
                />
              </a>
              <br />
              <p id="company_name">{item.BSSH_NM}</p>
              <br />
              <p id="prdt_name">{item.PRDLST_NM}</p>
            </div>
          ))}
        </Slider>
        <p id="results_text">설문조사</p>
        <button
          id="btn_show_result"
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? "접기" : "지난 설문조사 결과 확인"}
        </button>
        {visible &&
          myPageData.results?.map((item) => (
            <li>
              <Link id="show_result_list" to={`/form/survey/${item._id}`}>
                <p id="list_date">{item.user_date}</p>📃 {item.user_name}의 지난
                설문조사 결과
              </Link>
            </li>
          ))}
      </li>
    </ul>
  );
};

export default ShowMyPage;

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
    infinite: true, //true : 무한으로 계속 나오게하기
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // 자동 스크롤 사용 여부
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
            slidesToShow: 7,
            slidesToScroll: 7
        }
    },
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 5
        }
    },
    {
        breakpoint: 720,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 320,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    ]
  };

  //   <button id="btn_delete">✖</button>
  return (
    <ul className="mypage_list">
      <li className="mypage_content" key={myPageData.name}>
        <p id="head_text">
          💊 <b>{myPageData.name}</b> 님의 PillGood
        </p>
        <p id="likes_text">관심상품</p>
        {myPageData.likes ? (myPageData.likes.length<=2 ? 
          <div className="set_box_two">
          {myPageData.likes?.map((item) => (
              <div className="set_box_two_all">
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

          </div>
           :
          <Slider {...settings}>
            {myPageData.likes?.map((item) => (
              <div className="set_box_all">
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
        ):<div id="likes_null">등록된 관심상품이 없습니다. '전체보기'에서 💖를 클릭해주세요.</div>}
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
            <table>
              <tr>
                <td>
                  <Link id="show_result_list" to={`/form/survey/${item._id}`}>
                    📃 <b>{item.user_name}</b>님의 지난 설문조사 결과
                  </Link>
                </td>
                <td>
                  <p id="list_date">{item.user_date}</p>
                </td>
              </tr>
            </table>
          ))}
      </li>
    </ul>
  );
};

export default ShowMyPage;
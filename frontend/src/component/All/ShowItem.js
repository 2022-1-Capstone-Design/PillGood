import React, { useEffect, useState } from "react";
import "../../css/All/ShowItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const ShowItem = ({ products, loading, likeItArray }) => {
  const [likeArray, setLikeArray] = useState(likeItArray);
  const navigate = useNavigate();

  useEffect(() => {
  }, [likeItArray]);

  if (loading) {
    return <h2> ....Loading...</h2>;
  }

  const cookie = document.cookie;
  const likeItEvent = (e, id) => {
    e.preventDefault();

    if (cookie) {
      if (likeArray.includes(id)) {
        e.target.style.color = "gray";
        Swal.fire({
          icon: "Alert가 실행되었습니다.", // Alert 제목
          title: "관심상품 해제가 되었어요.", // Alert 내용
          text: "관심상품 더 알아보러 가볼까요? 😲",
        });
        axios
          .delete("http://api.pillgood.ml/product", {
            data: { productId: `${id}` },

            withCredentials: true,
          })
          .then(console.log("delete 성공"))
          .catch((error) => {
            console.log(error);
          });

        setLikeArray(likeArray.filter((element) => element !== id));
      } else {
        Swal.fire({
          icon: "Alert가 실행되었습니다.", // Alert 제목
          title: "관심상품 등록이 되었어요.", // Alert 내용
          text: "관심상품은 마이페이지에서 확인할 수 있어요 😊",
        });
        axios
          .post(
            "http://api.pillgood.ml/product",
            {
              productId: `${id}`,
            },
            {
              withCredentials: true,
            }
          )
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
        setLikeArray((prev) => [id, ...prev]);
        e.target.style.color = "red";
      }
    } else {
    }
  };
  return (
    <ul className="show_item_list">
      {products.map((product) => (
        <li key={product.INDEX} className="item-card">
          <a
            href={`https://search.shopping.naver.com/search/all?query=${product.PRDLST_NM}`}
            target="_blank"
            rel="noopener noreferrer"
            className="card-img"
          >
            <img
              id="all_img"
              src={`..\\..\\..\\img\\${product.INDEX}.jpg`}
              alt=""
            />
          </a>

          {cookie ? (
            likeItArray.includes(product._id) ? (
              <FontAwesomeIcon
                icon={faHeart}
                onClick={(e) => {
                  likeItEvent(e, product._id);
                }}
                style={{ color: "red" }}
                className="card-heart fa-lg"
              />
            ) : (
              <FontAwesomeIcon
                icon={faHeart}
                onClick={(e) => {
                  likeItEvent(e, product._id);
                }}
                style={{ color: "gray" }}
                className="card-heart fa-lg"
              />
            )
          ) : (
            <FontAwesomeIcon
              icon={faHeart}
              onClick={() => {
                navigate("/auth");
              }}
              style={{ color: "gray" }}
            />
          )}

          <div className="item-card-text">
            <p id="item-name">
              <span id="highlight">{product.PRDLST_NM}</span>
            </p>
            <p>{product.BSSH_NM}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default ShowItem;

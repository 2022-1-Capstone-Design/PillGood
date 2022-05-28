import React,{useEffect, useState} from "react";
import "../../css/All/ShowItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate} from 'react-router-dom';

const ShowItem = ({ products, loading , likeItArray}) => {
  const [likeArray, setLikeArray]= useState(likeItArray);
  const navigate = useNavigate();

  useEffect(()=>{
    console.log("넘겨받은 likeArray: ", likeArray);
  },[likeItArray]);

  if (loading) {
    return <h2> ....Loading...</h2>;
  }

  const token = window.localStorage.getItem("token");
  const likeItEvent = (e, id) => {
    e.preventDefault();
    if (token) {
      if (likeArray.includes(id)) {
        e.target.style.color = "gray";
        axios
          .delete("/product", {
            data: { productId: `${id}` },
            headers: { Authorization: `Bearer ${JSON.parse(token)}` },
          })
          .then(console.log("delete 성공"))
          .catch((error) => {
            console.log(error);
          });

        setLikeArray(likeArray.filter((element) => element !== id));
      } else {
        axios
          .post(
            "/product",
            {
              productId: `${id}`,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`
              },
            }
          )
          .then(() => {
          })
          .catch((error) => {
            console.log(error);
          });
        setLikeArray((prev) => [id, ...prev]);
        e.target.style.color = "red";
      }
    } else {
      //로그인 토큰 값이 없다면 /auth 페이지로 이동시킴
    }
  };
  return (
    <ul className="show_item_list">
      {products.map((product) => (
          <li key={product.INDEX} className="item-card">
            
            <p>{product.PRDLST_NM}</p>
            <p>{product.BSSH_NM}</p>
            <a
            href={`https://search.shopping.naver.com/search/all?query=${product.PRDLST_NM}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="all_img" src={`..\\..\\..\\img\\${product.INDEX}.jpg`} alt="" /></a>
            {token? (likeItArray.includes(product._id)?
            <FontAwesomeIcon icon={faHeart} onClick={(e)=>{likeItEvent(e,product._id); }} style={{color:'red'}}/> : 
            <FontAwesomeIcon icon={faHeart} onClick={(e)=>{likeItEvent(e,product._id); }} style={{color: 'gray'}}/>)
            :
              <FontAwesomeIcon icon={faHeart} onClick={()=>{console.log("이동"); navigate("/auth");}}  style={{color: 'gray'}}/>
              }

          </li>
      ))}
    </ul>
  );
};
export default ShowItem;
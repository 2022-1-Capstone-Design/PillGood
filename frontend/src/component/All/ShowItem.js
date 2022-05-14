import React,{useEffect, useState} from "react";
import "../../css/All/ShowItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faHeart1} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const ShowItem = ({ products, loading }) => {
  const [likeArray, setLikeArray]=useState([]);
  const [logginToken, setLogginToken]=useState(true);

  useEffect(()=>{
    console.log("배열값 : ",likeArray);
  },[likeArray]);

  if (loading) {
    return <h2> ....Loading...</h2>;
  }

const token=window.localStorage.getItem("token");
const likeItEvent=(e,id)=>{
  e.preventDefault();
  if(token){
    console.log("토큰이 존재 : ", token);
    if(likeArray.includes(id)){
      axios
      .delete('/product', 
      {
        data: {
          'productId' : `${id}`
        }
      },
      {
        headers: {
        'Authorization' :  `Bearer ${token}`          
      }
    })
      .then(console.log("delete 성공"))
      .catch((error)=>{
        console.log(error);
      });
      
      console.log(id,", 좋아요 해제");
      setLikeArray(likeArray.filter(element=>element!==id));
    }else{
      axios
      .post('/product', 
        {
          data: {
            'productId' : `${id}`
          }
        },
        {
          headers: {
          'Authorization' :  `Bearer ${token}`          
        }
      })
      .then(()=>{
        console.log("get 성공")
      })
      .catch((error)=>{
        console.log(error);
      });
      console.log(id,", 좋아요 설정");
      setLikeArray(prev=>[id, ...prev]);
    }
  }else{
    //로그인 토큰 값이 없다면 /auth 페이지로 이동시킴
    console.log("토큰이 없음");
    setLogginToken(false);
  }
}

  return (
    <ul className="list">
      {products.map((product) => (
        <li key={product.INDEX} className="item-card">
          <p>{product.PRDLST_NM}</p>
          <p>{product.BSSH_NM}</p>
          <img src={`..\\..\\..\\img\\${product.INDEX}.jpg`} alt="" />
          <FontAwesomeIcon icon={faHeart} onClick={(e)=>{likeItEvent(e,product._id);}}/>
        </li>
      ))}
    </ul>
  );
};
export default ShowItem;
import React,{useEffect, useState} from "react";
import "../../css/All/ShowItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
const ShowItem = ({ products, loading , likeItArray}) => {
  const [likeArray, setLikeArray]= useState(likeItArray);
  const navigate = useNavigate();
  const [lock, setLock]=useState(false);

  useEffect(()=>{
    console.log("넘겨받은 likeArray: ", likeArray);
  },[likeItArray]);

  if (loading) {
    return <h2> ....Loading...</h2>;
  }

  const token = window.localStorage.getItem("token");
  const likeItEvent = (e, id) => {
    e.preventDefault();
    if(lock===false) {
      setLock(true);
      Swal.fire({
        icon:'Alert가 실행되었습니다.',         // Alert 제목
        title:'관심상품 등록이 되었어요.',  // Alert 내용
        text: '관심상품은 마이페이지에서 확인할 수 있어요 😊'  
      });
    }else{
      setLock(false);
      Swal.fire({
        icon:'Alert가 실행되었습니다.',         // Alert 제목
        title:'관심상품 등록이 해제 되었어요.',  // Alert 내용
        text: '관심상품 더 알아보러 가볼까요? 😲'    
      });
    } 
    
    
    if (token) {
      if (likeArray.includes(id)) {
        e.target.style.color = "gray";
        axios
          .delete("/product", {
            data: { productId: `${id}` },
            headers: { Authorization: `Bearer ${token}` },
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
            <a
            href={`https://search.shopping.naver.com/search/all?query=${product.PRDLST_NM}`}
            target="_blank"
            rel="noopener noreferrer"
            className="card-img"
          >
            <img id="all_img" src={`..\\..\\..\\img\\${product.INDEX}.jpg`} alt="" />
            </a>
            <p>{product.PRDLST_NM}</p>
            <p>{product.BSSH_NM}</p>
            {token? (likeItArray.includes(product._id)?
            <FontAwesomeIcon 
            icon={faHeart} 
            onClick={(e)=>{likeItEvent(e,product._id); }} 
            style={{color:'red'}} 
            className="card-heart fa-3x"/> : 
            <FontAwesomeIcon 
            icon={faHeart} 
            onClick={(e)=>{likeItEvent(e,product._id); }} 
            style={{color: 'gray'}} 
            className="card-heart fa-lg"/>)
            :
              <FontAwesomeIcon icon={faHeart} onClick={()=>{console.log("이동"); navigate("/auth");}}  style={{color: 'gray'}}/>
              }

          </li>
      ))}
    </ul>
  );
};
export default ShowItem;
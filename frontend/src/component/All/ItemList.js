import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ShowItem from "./ShowItem";
import axios from "axios";
import "../../css/All/ItemList.css";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const [search, setSearch] = useState("");
  const [btnClick, setBtnClick] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(products.length / postsPerPage); i++) {
    pageNumber.push(i);
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  const renderPageNumbers = pageNumber.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });
  const token=window.localStorage.getItem("token");

  //url query string으로 검색시 해당 제품 검색, 혹은 처음에 들어왔을때 전체제품 보여준다
  const axiosData = async () => {
    try{
        const response = 
        await axios
        .get("/product"+location.search, 
        {
          headers: {
          'Authorization' :  `Bearer ${JSON.parse(token)}`          
        }}
        );
        setProducts(response.data);
        setLoading(false);
        
    }catch (e) {
        console.log(e);
    }

  };
  
  
  // 처음에 렌더링 되는 구간, 이후에는 location.search 값이 변할때마다 렌더링 
  useEffect(() => {
    axiosData();
    console.log(products);
  }, [location.search]);

  //검색창에 검색어 작성할때마다 해당 검색어로 search 상태값 변경
  const writePill = (e) => {
    setSearch(e.target.value);
  };

  let data;

   //검색창에서 검색 기능 수행
   const searchPill = (e) => {
    e.preventDefault();
    if(search ){    
    data={key : {search}};
    setBtnClick(true);
      }
    };

  //페이지네이션 버튼
  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pageNumber.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}>&hellip;</li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}>&hellip;</li>;
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        navigate({
          pathname:"/all",
          search:`?search=${search}`,
          data:data,
          });
          location.search={search};
        searchPill(e);
      }}
      >
        <input
          type="text"
          name="pname"
          placeholder="영양제 검색하기"
          value={search}
          onChange={writePill}
        />
        <input type="submit" name="btn" value="검색하기" />
      </form>

      <div className="list-block">
        {btnClick ? (
          loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              <ShowItem products={currentPosts} loading={loading} />
            </div>
          )
        ) : loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <ShowItem products={currentPosts} loading={loading} />
          </div>
        )}
      </div>
      <ul className="pageNumbers">
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage === pageNumber[0] ? true : false}
          >
          &lt;&lt;
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage === pageNumber[pageNumber.length - 1] ? true : false}
          >
          &gt;&gt;
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ItemList;

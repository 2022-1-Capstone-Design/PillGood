import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ShowItem from "./ShowItem";
import axios from "axios";
import "../../css/All/ItemList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const [search, setSearch] = useState("");
  const [btnClick, setBtnClick] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [likeArray, setLikeArray] = useState([]);

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

  //url query string으로 검색시 해당 제품 검색, 혹은 처음에 들어왔을때 전체제품 보여준다
  const axiosData = async () => {
    try {
      const response = await axios.get(
        "http://api.pillgood.ml/product" + location.search,
        {
          withCredentials: true,
        }
      );
      setLikeArray(response.data.likes);
      setProducts(response.data.products);
      setLoading(false);
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  // 처음에 렌더링 되는 구간, 이후에는 location.search 값이 변할때마다 렌더링
  useEffect(() => {
    axiosData();
  }, [location.search]);

  //검색창에 검색어 작성할때마다 해당 검색어로 search 상태값 변경
  const writePill = (e) => {
    setSearch(e.target.value);
  };

  let data;

  //검색창에서 검색 기능 수행
  const searchPill = (e) => {
    e.preventDefault();
    if (search) {
      data = { key: { search } };
      setBtnClick(true);
      setLoading(true);
      setCurrentPage(1);
      renderPageNumbers(1);
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

  const handleDoubleNextbtn = () => {
    setCurrentPage(currentPage + pageNumberLimit);
    if (currentPage + pageNumberLimit > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handleDoublePrevbtn = () => {
    setCurrentPage(currentPage - pageNumberLimit);
    if (currentPage - pageNumberLimit < minPageNumberLimit) {
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


  let testNumber = pageNumber.length % 5;
  if(testNumber===0) {
    testNumber =5;
  }

  return (
    <div id="all-item-list">
      <div id="search-wrapper">
        <form
          id="input-holder"
          onSubmit={(e) => {
            navigate({
              pathname: "/all",
              search: `?search=${search}`,
              data: data,
            });
            location.search = { search };
            searchPill(e);
          }}
        >
          <button id="search-icon" type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            type="text"
            name="pname"
            placeholder="영양제 검색하기"
            value={search}
            onChange={writePill}
            id="search-input"
          />
        </form>
      </div>

      <div className="list-block">
        {btnClick ? (
          loading ? (
            <div>
            <img id="char5" src="images/char3.png" alt=""></img>
            <br/>
              Loading...
              </div>
          ) : (
            <div>
              <ShowItem
                products={currentPosts}
                loading={loading}
                likeItArray={likeArray}
              />
            </div>
          )
        ) : loading ? (
          <div>
            <img id="char3" src="images/char3.png" alt=""></img>
            <br />
            Loading..
          </div>
        ) : (
          <ShowItem
            products={currentPosts}
            loading={loading}
            likeItArray={likeArray}
          />
        )}
      </div>
      <ul className="pageNumbers">
        <li>
          <button
            onClick={handleDoublePrevbtn}
            disabled={
              currentPage === pageNumber[0] || currentPage <= pageNumber[4]
                ? true
                : false
            }
          >
            &lt;&lt;
          </button>
        </li>
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage === pageNumber[0] ? true : false}
          >
            &lt;
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <li>
          <button
            onClick={handleNextbtn}
            disabled={
              currentPage === pageNumber[pageNumber.length - 1] ? true : false
            }
          >
            &gt;
          </button>
        </li>
        <li>
          <button
            onClick={handleDoubleNextbtn}
            disabled={
              currentPage === pageNumber[pageNumber.length - 1] ||
              currentPage >= pageNumber[pageNumber.length - testNumber] // 나머지 0일 경우 5
                ? true
                : false
            }
          >
            &gt;&gt;
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ItemList;

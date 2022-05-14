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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/product" + location.search);
        setProducts(response.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  if (!products) {
    return null;
  }

  const writePill = (e) => {
    setSearch(e.target.value);
  };

  let data;

  const params = new URLSearchParams(location.search);

  const searchPill = (e) => {
    console.log("2. searchPill함수: ");
    console.log(search);
    e.preventDefault();
    if (search) {
      console.log("3. searchPill함수 내 if문 들어감 :");
      console.log(search);
      data = { key: { search } };
      //검색단어 저장
      setBtnClick(true);
      const axiosData = async () => {
        try {
          console.log("5. 백엔드 요청 들어가기 전 값 확인");
          console.log(search);
          const responseData = await axios.get("/product?search=" + search);

          console.log(responseData.data);
          setProducts(responseData.data);
        } catch (e) {
          console.log(e);
        }
      };
      axiosData();
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
      <form
        onSubmit={(e) => {
          navigate({
            pathname: "/all",
            search: `?search=${search}`,
            data: data,
          });
          console.log("4. search값 확인");
          console.log(location.search);
          console.log(params.get("search"));
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

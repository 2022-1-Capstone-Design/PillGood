import React, { useState, useEffect } from "react";
import ShowItem from "./ShowItem";
import axios from "axios";
import "../../css/All/ItemList.css";
import Pagination from "./Pagination";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const [search, setSearch] = useState("");
  const [btnClick, setBtnClick] = useState(false);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get("/product");
      setProducts(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (!products) {
    return null;
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  const writePill = (e) => {
    setSearch(e.target.value);
  };

  const searchPill = (e) => {
    e.preventDefault();
    console.log(search);
    setBtnClick(true);
    setProduct(
      products.filter(
        (item) =>
          item.PRDLST_NM.includes(e.target.pname.value) ||
          item.BSSH_NM.includes(e.target.pname.value)
      )
    );
    console.log(product);
  };

  return (
    <div>
    <form onSubmit={searchPill}>
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
      <ShowItem products={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={products.length}
        paginate={setCurrentPage}
      ></Pagination>
    </div>
    </div>
  );
};

export default ItemList;
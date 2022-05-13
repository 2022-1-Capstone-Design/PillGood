import React, { useState, useEffect } from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import ShowItem from "./ShowItem";
import axios from "axios";
import "../../css/All/ItemList.css";
import Pagination from "./Pagination";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);     //총 데이터를 postsPerPage만큼 등분
  const [search, setSearch] = useState("");
  const [btnClick, setBtnClick] = useState(false);
  const [product, setProduct] = useState([]);
  const [searchWord, setSearchWord]=useState("");
  const navigate = useNavigate();
    const location=useLocation();

    let data={key : {searchWord}};
  useEffect(() => {
    const fetchData = async () => {
        const nutrients=[
            "루테인", "비타민A", "비타민D", "비타민E","비타민K", "비타민C", "비타민B2",
            "아연","셀렌","철","마그네슘","EPA","프로바이오틱스","실리마린","나이아신",
            "올리고당","칼슘","비타민B6","베타카로틴","판토텐산","비오틴","망간","크롬",
            "엽산","구리","몰리브덴"
        ]
        try{
            setLoading(true);
            const response = await axios.get('/product/');
            setProducts(response.data);
            setLoading(false);
        }catch (e) {
            console.log(e);
        }

    };
    fetchData();
  }, []);

  if (!products) {
    return null;
  }

  //postsPerPage로 등분한 배열의 데이터를 나누어서 보여주기위한 변수들 선언
  const indexOfLastPost = currentPage * postsPerPage;  //1*10 = 10번 포스트
  const indexOfFirstPost = indexOfLastPost - postsPerPage; //10-10 = 0번 포스트
  
  //위 처음,끝 인덱스 구한 번호를 아래 currentPosts를 통해 배열데이터를 slice로 분할
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost); //0~10번까지 포스트

  const writePill = (e) => {
    setSearch(e.target.value);
  };

  const searchPill = (e) => {
    e.preventDefault();
    console.log(search);
    setSearchWord(search);
    setBtnClick(true);
    setProduct(
      products.filter(
        (item) =>
          item.PRDLST_NM.includes(e.target.pname.value) ||
          item.BSSH_NM.includes(e.target.pname.value)
      )
    );
    setSearch("");
    if(searchWord){
    }
    navigate({
        pathname:"/all",
        search:`?search=${searchWord}`,
        data:data,
        });
    console.log(product);
    if(location.search){
        const axiosData= async()=>{
            try{
                const responseData =await axios.get('/product',
                                    {params: {search: location.search}},
                                    {withCredentials:true}
                                    );
                console.log(responseData);
            }catch(e){
                console.log(e);
            }
        }
        axiosData();
    }
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
        {btnClick?
          (loading?<div>Loading...</div>:
          <div>
              <ShowItem products={currentPosts} loading={loading}/>
          </div>)
        :(loading?<div>Loading...</div>:
        <div>
            <ShowItem products={currentPosts} loading={loading}/>
        </div>
        )}
        
        <Pagination 
        postsPerPage={postsPerPage} 
        totalPosts={products.length} 
        paginate={setCurrentPage}>
        </Pagination>
 
    </div>
    </div>
  );
};

export default ItemList;
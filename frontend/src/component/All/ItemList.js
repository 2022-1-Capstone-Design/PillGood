import React, { useState, useEffect } from 'react';
import ShowItem from './ShowItem';
import axios from 'axios';
import '../../css/All/ItemList.css';

const ItemList = () => {
    const [products, setProducts] = useState(null);
    const [search, setSearch]=useState("");
    const [btnClick, setBtnClick]=useState(false);
    const [product, setProduct]=useState([]);

    useEffect(() => {
        const fetchData = async () => {
       
            try {
                const response = await axios.get('/product');
               setProducts(response.data);
            } catch (e) {
                console.log(e);
            }
      
        };
        fetchData();
    }, []);

    if (!products) {
        return null;
    }
    
    const writePill=(e)=>{
        setSearch(e.target.value);
      }
    
    const searchPill=(e)=>{
        e.preventDefault();
        console.log(search);
        setBtnClick(true);
        setProduct(
            products.filter(item=>item.PRDLST_NM.includes(e.target.pname.value)
            || item.BSSH_NM.includes(e.target.pname.value))
        )
        console.log(product);
    }

    return (
        <div>
        <form onSubmit={searchPill}>
            <input type="text" name="pname" placeholder="영양제 검색하기"
            value={search} onChange={writePill}/>
            <input type="submit" name="btn" value='검색하기'/>
        </form>
    
        <div className="list-block">

            {btnClick?
                product.map(item=>{
                  return <ShowItem key={item.INDEX} items={item}/>
                }
                )
                
            : 
            products.map(items => {
                return <ShowItem key={items.INDEX} items={items} />
            })
            }
            
        </div>
        </div>
            
    );
};

export default ItemList;
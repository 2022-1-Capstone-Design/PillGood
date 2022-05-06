import React, { useState, useEffect } from 'react';
import ShowItem from './ShowItem';
import axios from 'axios';
import '../../css/All/ItemList.css';

const ItemList = () => {
    const [products, setProducts] = useState(null);

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
    
    return (
        <div className="list-block">
            {products.map((items) => (
                <ShowItem key={items.INDEX} items={items} />
            ))}
        </div>
    );
};

export default ItemList;
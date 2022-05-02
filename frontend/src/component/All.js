import axios from 'axios';
import React, {useEffect} from 'react';

function All(){

    async function loyal(){
        try{
        const response= await axios.get('/product');
        console.log(response);
        }catch(error){
          console.log(error);
        }
    };
    useEffect(loyal,[]);

// https://jsonplaceholder.typicode.com/todos/1

    return(
       <div>
            전체보기
       </div>
    );
}
export default All;
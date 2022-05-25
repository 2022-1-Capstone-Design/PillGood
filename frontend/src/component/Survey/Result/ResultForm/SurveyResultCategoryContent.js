import React,{useState} from "react";
import ModalData from "./ModalData";

const SurveyResultCategoryContent=({item, index})=>{
    const [modalIsOpen,setModalIsOpen]=useState(false);
    const [productData, setProductData]=useState({});

    return(
        <div className="contents__details__one__choose__pillImg">
            <div className="imgBox">
                <img 
                src={index===1?`..\\..\\..\\..\\img\\${item.INDEX}.jpg`:
                `..\\..\\..\\..\\food_img\\${item.INDEX}.jpg`} 
                alt={item.NAME}
                onClick={index===1? ()=>{setModalIsOpen(true); setProductData(()=>item)}: null}
                className="imgTag"
                />
            </div>
            {index===1? 
            <ModalData product={productData} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
            :null}
           
           {index===1?
           <div>
              <h6>{item.BSSH_NM}</h6>
              <h4>{item.PRDLST_NM} </h4>
           </div>: <h4>{item.NAME}</h4>}
      </div>
    );
}
export default SurveyResultCategoryContent;
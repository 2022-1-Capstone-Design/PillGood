import Modal from 'react-modal';
import React,{useEffect} from "react";
import '../../../../css/Survey/Result/ModalData.css';

Modal.setAppElement('#root');

const ModalData=({product, modalIsOpen, setModalIsOpen})=>{

  useEffect(()=>{
     if(modalIsOpen){
       document.body.style.overflow="hidden";
       document.body.style.touchAction="none";
       document.querySelector('.navbar').style.display="none";
     }else{
       document.body.style.overflow="unset";
       document.body.style.touchAction="auto";
       document.querySelector('.navbar').style.display="flex";
     }
  },[modalIsOpen])

  return(
    <Modal 
    className="Modal"
    overlayClassName="Overlay"
    isOpen={modalIsOpen}
    onRequestClose={()=>setModalIsOpen(false)}>
        <div className="Modal__content">
          <div>
            <h4>(1) 제품이름(타입)</h4> 
            <p>{product.PRDLST_NM}({product.PRDT_SHAP_CD_NM})</p>
            <h4>(2) 섭취방법</h4>
            <p>{product.NTK_MTHD}</p>

             <h4>(3) 주요 기능</h4>
              <p>{product.PRIMARY_FNCLTY}</p>
            
              <h4>(3) 주의사항</h4>
              <p>{product.IFTKN_ATNT_MATR_CN}</p>
            
          </div>
          <button className="Modal__btn" onClick={()=>setModalIsOpen(false)}>닫기</button>
        </div> 
      </Modal>
  );
}
export default ModalData;

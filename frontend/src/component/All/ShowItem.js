import React from "react";
import "../../css/All/ShowItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";

const ShowItem = ({ products, loading }) => {
  if (loading) {
    return <h2> ....Loading...</h2>;
}

  return (
    <ul className="list">
      {products.map((product) => (
        <li key={product.INDEX} className="item-card">
          <p>{product.PRDLST_NM}</p>
          <p>{product.BSSH_NM}</p>
          <img src={`..\\..\\..\\img\\${product.INDEX}.jpg`} alt="" />
          <FontAwesomeIcon icon={faHeart} />
        </li>
      ))}
    </ul>
  );
};
export default ShowItem;

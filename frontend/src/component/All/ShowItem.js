import React from 'react';
import '../../css/All/ShowItem.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";

const ShowItem = ({ items }) => {
    const { INDEX, PRDLST_NM, BSSH_NM } = items;
    const path=`..\\..\\..\\img\\${INDEX}.jpg`;

    return (
        <div className="item-card">
        <h2>{INDEX}</h2>
        <img src={path} alt="" />
        <p>{PRDLST_NM}</p>
        <p>{BSSH_NM}</p>
        <FontAwesomeIcon icon={faHeart} />
        </div>
    );
};

export default ShowItem;
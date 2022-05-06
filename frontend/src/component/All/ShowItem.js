import React from 'react';
import '../../css/All/ShowItem.css';

const ShowItem = ({ items }) => {
    const { INDEX, PRDLST_NM } = items;

    return (
        <div className="item-card">
        <h2>{INDEX}</h2>
        <p>{PRDLST_NM}</p>
        </div>
    );
};

export default ShowItem;
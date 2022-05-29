import React from 'react';
//Components
import styled from "./cards.module.css"
const Cards = ({data}) => {
    return (
        <div className={styled.component}>
            <img src={data.image} alt="coin" className={styled.image}/>
            <h2 className={styled.name}>{data.name}</h2>
            <span className={styled.symbol}>{data.symbol.toUpperCase()}</span>
            <p className={styled.price}>{data.current_price}</p>
            <p className={styled.chPrice}>{data.price_change_percentage_24h}</p>
            <p className={styled.market}>{data.market_cap}</p>
        </div>
    );
};

export default Cards;
import React from 'react';
import './item.css'

const Item = ({name, seller, price, img, onLike, item}) => {
    return (
        <div className="item">
            <figure>
                <img alt="product img" src={img}/>
            </figure>
            <div style={{padding: "1rem 1.5rem"}}>
                <h3 className="item_name">{name}</h3>
                <div className="item_sub_details">
                    <p className="item_seller">{seller}</p>
                    <p className="item_price">{price}</p>
                </div>
                <div className="cta">
                    <button onClick={(e)=>onLike(item, e)} className="like_btn">❤️</button>
                    <button className="buy_btn">BUY NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Item;
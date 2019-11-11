import React from 'react';
import './item.css'

const Item = ({name, seller, price, img, onLike, item, viewDetails}) => {
    return (
        <div className="item">
            <figure>
                <img alt="product img" src={img}/>
            </figure>
            <div className="item_details" >
                <h3 className="item_name">{name}</h3>
                <div className="item_sub_details">
                    <p className="item_seller">{seller}</p>
                    <p className="item_price">{price}</p>
                </div>
                <div className="cta">
                    <button onClick={(e)=>onLike(item, e)} className="like_btn">❤️</button>
                    <button onClick={()=>viewDetails(item)} className="buy_btn">BUY NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Item;
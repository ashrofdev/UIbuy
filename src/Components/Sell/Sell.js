import React from 'react';
import './sell.css'

const Sell = () => {
    return (
        <div className="sell-page">
            <input type="file" className="product_img" />
            <input placeholder="Enter product's name" className="product_name"/>
            <input placeholder="Enter your name" className="seller_name"/>
            <input placeholder="Enter product's price" className="product_price"/>
        </div>
    );
};

export default Sell;
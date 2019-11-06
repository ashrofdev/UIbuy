import React from 'react';
import './sell.css'

const Sell = () => {
    return (
        <div className="sell-page">
            <input placeholder="Enter product's name" className="product_name"/>
            <input placeholder="Enter your name" className="seller_name"/>
            <input placeholder="Enter product's price" className="product_price"/>
            <input placeholder="Enter product's name" className="product_name"/>
            <input placeholder="Enter product's name" className="product_name"/>
        </div>
    );
};

export default Sell;
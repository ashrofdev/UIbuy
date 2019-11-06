import React from 'react';
import './nav.css'

const Nav = ({onRouteChange}) => {
    return (
        <nav>
            <ul>
                <li ><button className="products" onClick={()=>onRouteChange('products')}>Home</button></li>
                <li ><button className="likes" onClick={()=>onRouteChange('likes')}>Likes</button></li>
                <li ><button className="sell" onClick={()=>onRouteChange('sell')}>Sell an item</button></li>
            </ul>
        </nav>
    );
};

export default Nav;
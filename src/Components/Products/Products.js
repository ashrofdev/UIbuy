import React, { Component } from 'react';
import './prodcs.css'
import Item from './Item';

class Products extends Component {
    render() {
        const { items, onLike } = this.props
        console.log(items)
        const item = items.map((i,e)=>{
            return <Item item={items[e]} itemNo={e} onLike={onLike} img={items[e].img} name={items[e].name} seller={items[e].seller}
             price={items[e].price}/>
        })
        return (
            <div className="prodcs">
                {item}
            </div>
        );
    }
}

export default Products;
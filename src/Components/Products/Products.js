import React, { Component } from 'react';
import './prodcs.css'
import Item from './Item';

class Products extends Component {
    componentDidMount(){
        this.props.likes.forEach(item => {
            this.props.items.forEach((e)=>{
                if (e===item) {
                    e.isLiked = true
                }
            })
        });
        console.log(this.props.items)
    }
    render() {
        const { items, onLike, viewDetails, likes } = this.props
        const item = items.map((i,e)=>{
            return <Item viewDetails={viewDetails} item={items[e]} itemNo={e} onLike={onLike} img={items[e].product_url} name={items[e].product_name} seller={items[e].seller_name}
             price={items[e].product_price}/>
        })
        return (
            <div className="prodcs">
                {item}
            </div>
        );
    }
}

export default Products;
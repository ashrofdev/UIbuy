import React, { Component } from 'react';
import './likes.css'
import Item from '../Products/Item';
import Error from '../Error/Error'

class Likes extends Component {
    render() {
        const { likes, error } = this.props
        const likesList = likes.map((i,e)=>{
            return <Item img={likes[e].img} name={likes[e].name} seller={likes[e].seller}
             price={likes[e].price}/>
        })
        return (
            <div className="likes-page prodcs">
                {
                    likes.length < 1 ?
                        <Error message={"🤷🏽‍♂️ Your likes list is currently empty"}/>
                    : likesList
                }
            </div>
        );
    }
}

export default Likes;
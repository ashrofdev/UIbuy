import './sell.css'
import {firebaseDB, storage} from '../../Server'


import React, { Component } from 'react';
import Alert from '../Alert/Alert';

class Sell extends Component {

    state = {
        file: '',
        upload: false
    }

    onSubmitProduct = async () => {
        document.querySelector('button span').classList.add('roll')

        await storage.ref('product_images')
        .child(document.querySelector('.product_name').value)
        .put(this.state.file)

        storage.ref('product_images').child(document.querySelector('.product_name').value)
        .getDownloadURL().then((url)=>{
            console.log(url)
            firebaseDB.ref('products').push().set({
                product_url: url,
                seller_name: document.querySelector('.seller_name').value,
                product_name: document.querySelector('.product_name').value,
                product_price: '₦' + document.querySelector('.product_price').value,
                price_negotiability: document.querySelector('select').value,
                item_details: document.querySelector('.item_details').value
            }).then((snapshot)=>{
                console.log(snapshot)
                this.setState({upload: true})
                document.querySelector('button span').classList.remove('roll')
            }).catch((err)=>{
                console.log(err)
                document.querySelector('button span').classList.remove('roll')
            })
        })
        
    }

    onUpload = (e) => {
        this.setState({file: e.target.files[0]})
    }

    alertGo = (e) => {
        e.target.parentElement.remove()
        this.setState({alert: false})
    }

    render() {
    
        return (
            <div className="sell-page">
                <label>
                    UPLOAD IMAGE
                    <input onChange={this.onUpload} type="file" className="product_img" />
                </label>
                <input placeholder="Enter your name" className="seller_name"/>
                <input placeholder="Enter product's name" className="product_name"/>
                <input placeholder="Enter product's price" className="product_price"/>
                <label>
                    Price Negotiability
                    <select>
                        <option>Negotiable</option>
                        <option>Not negotiable</option>
                    </select>
                </label>
                <textarea className="item_details" placeholder="Item details"/>
                <button onClick={this.onSubmitProduct}>SELL ITEM <span>🛒</span></button>
                {
                    this.state.upload? <Alert alertGo={this.alertGo} text="Product deployed"/>:null
                }
            </div>
        );
    }
}


export default Sell;
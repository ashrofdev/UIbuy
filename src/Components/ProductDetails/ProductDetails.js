import React from 'react';
import './detail.css'


// https://uibuy-api.herokuapp.com/test
const ProductDetails = ({product, back}) => {
    const sendRequest = () => {
        fetch('https://uibuy-api.herokuapp.com/send_mail').then((res)=>{
            return res.json()
        }).then(console.log)
    }
    return (
        <div className="product-details">
            <figure style={{gridColumn: "1/4"}}>
                <img style={{
                    width: "100%",
                    height: "30rem",
                }}  src={product.product_url}/>
            </figure>
            <div 
                style={{
                    fontSize: "1.3rem",
                    gridColumn: "4/-1",
                    justifySelf: "flexEnd"
                }}
            >
                <div style={{display: "flex", justifyContent: "flexStart", alignItems: "center"}}>
                    <p style={{padding: ".5rem .8rem", fontWeight: "700"}}>{`Product's Name: `}</p><span>{product.product_name}</span>
                </div>
                <div style={{display: "flex", justifyContent: "flexStart", alignItems: "center"}}>
                    <p style={{padding: ".5rem .8rem", fontWeight: "700"}}>{`Product's Price: `}</p><span>{product.product_price}</span>
                </div>
                <div style={{display: "flex", justifyContent: "flexStart", alignItems: "center"}}>
                    <p style={{padding: ".5rem .8rem", fontWeight: "700"}}>{`Seller's Name: `}</p><span>{product.seller_name}</span>
                </div>
                <div style={{display: "flex", justifyContent: "flexStart", alignItems: "center"}}>
                    <p style={{padding: ".5rem .8rem", fontWeight: "700"}}>{`Phone no: `}</p><span>{product.seller_phone}</span>
                </div>
                <div style={{display: "flex", justifyContent: "flexStart", alignItems: "center"}}>
                    <p style={{padding: ".5rem .8rem", fontWeight: "700"}}>{`Prce Negotiability: `}</p><span>{product.product_negotiability}</span>
                </div>
            </div>
            <h2 
                style={{
                    gridColumn: "1/4",
                    fontWeight: "700",
                    fontSize: "2rem"
                }}
            >{"Product's description ............................"}</h2>
            <div className="details" 
                style={{
                    gridColumn: "4/-1",
                    fontWeight: "700",
                    fontSize: "2rem"
                }}
            >
                <button className="back" onClick={back}>BACK</button>
                <button onClick={sendRequest}>REQUEST PRODUCT</button>
            </div>
            
        </div>
        
    );
};

export default ProductDetails;
import React from 'react';

const ProductDetails = ({product}) => {
    return (
        <div className="prodcs product_details">
            <figure style={{gridColumn: "1/4"}}>
                <img />
            </figure>
            <div 
                style={{
                    fontSize: "1.3rem"
                }}
            >
                <div style={{display: "flex", justifyContent: "flexStart", alignItems: "center"}}>
                    <p style={{padding: ".5rem .8rem", fontWeight: "700"}}>{`Product's Name: `}</p><span>{product.product_name}</span>
                </div>
                <div style={{display: "flex", justifyContent: "flexStart", alignItems: "center"}}>
                    <p style={{padding: ".5rem .8rem", fontWeight: "700"}}>{`Product's Price: `}</p><span>{'₦'+product.product_price}</span>
                </div>
                <div style={{display: "flex", justifyContent: "flexStart", alignItems: "center"}}>
                    <p style={{padding: ".5rem .8rem", fontWeight: "700"}}>{`Seller's Name: `}</p><span>{product.seller_name}</span>
                </div>
                <div style={{display: "flex", justifyContent: "flexStart", alignItems: "center"}}>
                    <p style={{padding: ".5rem .8rem", fontWeight: "700"}}>{`Seller's Phone: `}</p><span>{product.seller_phone}</span>
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
                <button>BACK</button>
                <button>REQUEST PRODUCT</button>
            </div>
            
        </div>
    );
};

export default ProductDetails;
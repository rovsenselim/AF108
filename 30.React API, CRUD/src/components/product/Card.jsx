import React from 'react';
import "./Card.css";

const ProductCard = ({ card, deleteProduct, handleShow }) => {
    const { title, price, id } = card;

    return (
        <div className="product-card">
            <div className="product-info">
                <h3 className="product-title">{title}</h3>
                <p className="product-price">${price}</p>


                <p
                    style={{ backgroundColor: "red", color: 'white', borderRadius: "10px", cursor: "pointer", fontWeight: "bold" }}
                    onClick={() => deleteProduct(id)}
                >
                    Delete
                </p>


                <p
                    style={{ backgroundColor: "blue", color: 'white', borderRadius: "10px", cursor: "pointer", fontWeight: "bold" }}
                    onClick={() => handleShow(card)}
                >
                    Edit
                </p>
            </div>
        </div>
    );
}

export default ProductCard;
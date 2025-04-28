import React from 'react';
import "./Products.css";
import Card from "../components/product/Card";

const Products = ({ data, deleteProduct, handleShow }) => {
    return (
        <div className="product-container">
            {data && data.map((product) => (
                <Card
                    key={product.id}
                    card={product}
                    deleteProduct={deleteProduct}
                    handleShow={handleShow}
                />
            ))}
        </div>
    );
}

export default Products;
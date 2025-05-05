import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';

function AddProduct() {
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: '',
        image: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://fakestoreapi.com/products', product)
            .then(() => {
                toast.success('Product added');
                navigate('/admin-panel');
            })
            .catch(() => toast.error('Add failed'));
    };

    return (
        <div className="form-container">
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <input name="title" value={product.title} onChange={handleChange} placeholder="Title" required />
                <input name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
                <input name="description" value={product.description} onChange={handleChange} placeholder="Description" required />
                <input name="image" value={product.image} onChange={handleChange} placeholder="Image URL" required />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;

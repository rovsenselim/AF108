import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';
import './EditProduct.css';

function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: '',
        image: '',
    });

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(() => toast.error('Failed to fetch product'));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://fakestoreapi.com/products/${id}`, product)
            .then(() => {
                toast.success('Product updated');
                navigate('/admin-panel');
            })
            .catch(() => toast.error('Update failed'));
    };

    return (
        <div className="form-container">
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <input name="title" value={product.title} onChange={handleChange} placeholder="Title" required />
                <input name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
                <input name="description" value={product.description} onChange={handleChange} placeholder="Description" required />
                <input name="image" value={product.image} onChange={handleChange} placeholder="Image URL" required />
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
}

export default EditProduct;

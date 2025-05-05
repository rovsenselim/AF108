import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useLocation } from 'react-router-dom';
import './AdminPanel.css';

function AdminPanel() {
    const [products, setProducts] = useState([]);
    const location = useLocation();

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => setProducts(res.data))
            .catch(() => toast.error('Failed to fetch products'));
    }, [location]);

    const handleDelete = (id) => {
        axios.delete(`https://fakestoreapi.com/products/${id}`)
            .then(() => {
                setProducts(prev => prev.filter(p => p.id !== id));
                toast.success('Product deleted');
            })
            .catch(() => toast.error('Failed to delete'));
    };

    return (
        <div className="admin-panel">
            <h2>Admin Panel</h2>
            <Link className="add-btn" to="/admin/add-product">Add New Product</Link>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p => (
                        <tr key={p.id}>
                            <td><img src={p.image} alt={p.title} /></td>
                            <td>{p.title}</td>
                            <td>${p.price}</td>
                            <td>
                                <Link to={`/admin/edit-product/${p.id}`}>Edit</Link>
                                <button onClick={() => handleDelete(p.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminPanel;

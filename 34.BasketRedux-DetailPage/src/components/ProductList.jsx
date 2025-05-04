import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../redux/slices/basketSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import "./ProductList.css";

const ProductList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => setProducts(response.data))
            .catch(error => {
                console.error('Error fetching products:', error);
                toast.error('Error fetching products');
            });
    }, []);

    const toggleWishlist = (id) => {
        if (wishlist.includes(id)) {
            setWishlist(wishlist.filter(item => item !== id));
        } else {
            setWishlist([...wishlist, id]);
        }
    };

    const handleAddToBasket = (product) => {
        const payload = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            count: 1
        };
        dispatch(addToBasket(payload));
        toast.success(`${product.title} added to basket!`);
    };

    return (
        <div className="product-list">
            <h2>Our Products</h2>
            <div className="product-items">
                {products.length === 0 ? (
                    <p>Loading products...</p>
                ) : (
                    products.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="heart-icon" onClick={() => toggleWishlist(product.id)}>
                                <i
                                    className={`fa${wishlist.includes(product.id) ? 's' : 'r'} fa-heart`}
                                    style={{ color: wishlist.includes(product.id) ? 'red' : 'black' }}
                                ></i>
                            </div>
                            <div onClick={() => navigate(`/product-details/${product.id}`)}>
                                <img src={product.image} alt={product.title} />
                                <h3>{product.title}</h3>
                                <p>${product.price}</p>
                            </div>
                            <div className="btn-group">
                                <button onClick={() => handleAddToBasket(product)}>Add to Basket</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ProductList;

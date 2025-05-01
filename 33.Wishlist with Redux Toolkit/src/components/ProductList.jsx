import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../redux/slices/productSlice';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductList = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.product);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    const handleAddToWishlist = (product) => {
        dispatch(addToWishlist(product));
        toast.success(`${product.title} added to wishlist!`);
    };

    return (
        <div className="product-list">
            <h2>Our Products</h2>
            <div className="product-items">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>${product.price}</p>
                            <button onClick={() => handleAddToWishlist(product)}>
                                Add to Wishlist
                            </button>
                        </div>
                    ))
                ) : (
                    <p>Loading products...</p>
                )}
            </div>
        </div>
    );
};

export default ProductList;

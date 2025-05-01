import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slices/productSlice';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { addToWishlist, removeFromWishlist } from '../redux/slices/wishlistSlice';
import './Home.css';

function Home() {
    let dispatch = useDispatch();
    let { products, loading } = useSelector(state => state.product);
    let { items: wishlist } = useSelector(state => state.wishlist);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }

    const isInWishlist = (id) => {
        return wishlist.some(product => product.id === id);
    };

    const handleToggleWishlist = (product) => {
        if (isInWishlist(product.id)) {
            dispatch(removeFromWishlist(product));
        } else {
            dispatch(addToWishlist(product));
        }
    };

    return (
        <div className="product-container">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title.slice(0, 20)}...</h3>
                    <p className="price">${product.price}</p>
                    <button className="add-basket">Add Basket</button>
                    <div onClick={() => handleToggleWishlist(product)}>
                        {isInWishlist(product.id) ? (
                            <FaHeart className="heart-icon filled" />
                        ) : (
                            <FaRegHeart className="heart-icon" />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;

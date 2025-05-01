import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { toast } from 'react-toastify';
import "./Wishlist.css"

function Wishlist() {
    const dispatch = useDispatch();
    const wishlistItems = useSelector(state => state.wishlist.items);

    const handleRemove = (id) => {
        dispatch(removeFromWishlist(id));
        toast.success('Product removed from wishlist!');
    };

    return (
        <div className="wishlist-container">
            <h2>Your Wishlist</h2>
            <div className="wishlist-items">
                {wishlistItems.length === 0 ? (
                    <p>Your wishlist is empty.</p>
                ) : (
                    wishlistItems.map(item => (
                        <div key={item.id} className="wishlist-item">
                            <img src={item.image} alt={item.title} className="wishlist-item-image" />
                            <h3>{item.title}</h3>
                            <p className="wishlist-item-price">${item.price}</p>
                            <button className="remove-button" onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Wishlist;

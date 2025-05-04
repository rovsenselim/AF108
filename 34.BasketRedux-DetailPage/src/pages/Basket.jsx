import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket, incrementCount, decrementCount } from '../redux/slices/basketSlice';
import './Basket.css';

const Basket = () => {
    const dispatch = useDispatch();
    const basketItems = useSelector(state => state.basket.products);  // Get basket items from Redux store

    const totalPrice = basketItems.reduce((sum, item) => sum + item.price * item.count, 0).toFixed(2);

    return (
        <div className="basket-container">
            <h2>Your Basket</h2>
            <div className="basket-items">
                {basketItems.length === 0 ? (
                    <p>Your basket is empty.</p>
                ) : (
                    basketItems.map(item => (
                        <div key={item.id} className="basket-item">
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                            <div className="quantity-controls">
                                <button onClick={() => dispatch(decrementCount(item.id))}>-</button>
                                <span>{item.count}</span>
                                <button onClick={() => dispatch(incrementCount(item.id))}>+</button>
                            </div>
                            <p>Total: ${(item.price * item.count).toFixed(2)}</p>
                            <button onClick={() => dispatch(removeFromBasket(item.id))}>Remove</button>
                        </div>
                    ))
                )}
            </div>
            {basketItems.length > 0 && (
                <h3 className="total-price">Overall Total: ${totalPrice}</h3>
            )}
        </div>
    );
};

export default Basket;

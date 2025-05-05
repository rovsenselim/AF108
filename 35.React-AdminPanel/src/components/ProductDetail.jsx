import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../redux/slices/basketSlice';
import axios from 'axios';
import './ProductDetail.css';

function ProductDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(1);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                setProduct(res.data);
                setLoading(false);
            })
            .catch(err => {
                toast.error("Product not found!");
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }

    const handleDecrease = () => {
        if (count > 1) {
            setCount(count - 1);
        } else {
            toast.warning("Minimum 1 məhsul seçilə bilər.");
        }
    };

    const handleIncrease = () => {
        setCount(count + 1);
    };

    const handleAddToBasket = () => {
        const payload = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            count: count
        };
        dispatch(addToBasket(payload));
        toast.success(`${product.title} səbətə əlavə olundu (${count} ədəd)`);
    };

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <div className="counter">
                <button onClick={handleDecrease}>-</button>
                <span>{count}</span>
                <button onClick={handleIncrease}>+</button>
            </div>
            <button onClick={handleAddToBasket} className='addbasket'>Add to Basket</button>
        </div>
    );
}

export default ProductDetail;

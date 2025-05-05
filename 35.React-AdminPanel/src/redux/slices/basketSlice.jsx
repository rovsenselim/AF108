import { createSlice } from '@reduxjs/toolkit';

const getBasketFromStorage = () => {
    const data = localStorage.getItem("basket");
    return data ? JSON.parse(data) : [];
};

const writeBasketToStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket));
};

const initialState = {
    products: getBasketFromStorage()
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.products.find(item => item.id === action.payload.id);
            if (!findProduct) {
                state.products.push({ ...action.payload, count: 1 });
                writeBasketToStorage(state.products);
            }
        },

        removeFromBasket: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload);
            writeBasketToStorage(state.products);
        },

        incrementCount: (state, action) => {
            const product = state.products.find(item => item.id === action.payload);
            if (product) {
                product.count += 1;
                writeBasketToStorage(state.products);
            }
        },

        decrementCount: (state, action) => {
            const product = state.products.find(item => item.id === action.payload);
            if (product && product.count > 1) {
                product.count -= 1;
                writeBasketToStorage(state.products);
            }
        }
    }
});

export const { addToBasket, removeFromBasket, incrementCount, decrementCount } = basketSlice.actions;
export default basketSlice.reducer;

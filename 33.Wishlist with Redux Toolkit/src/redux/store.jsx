import { configureStore } from '@reduxjs/toolkit';
import appReducer from "../redux/slices/appSlice";
import productReducer from "../redux/slices/productSlice";
import wishlistReducer from "../redux/slices/wishlistSlice";

export const store = configureStore({
    reducer: {
        app: appReducer,
        product: productReducer,
        wishlist: wishlistReducer,
    },
});

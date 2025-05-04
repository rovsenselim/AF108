import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getAllProducts = createAsyncThunk(
    'product/getAllProducts',
    async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
    }
);

const initialState = {
    products: [],
    loading: false,
    error: null
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default productSlice.reducer;

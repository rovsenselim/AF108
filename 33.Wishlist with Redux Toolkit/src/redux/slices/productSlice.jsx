import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
    products: [],
    selectedProduct: {},
    loading: false
}

const BASE_URL = "https://fakestoreapi.com/products"

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
});


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state, actions) => {
            state.loading = true
        })
        builder.addCase(getAllProducts.fulfilled, (state, actions) => {
            state.loading = false
            state.products = actions.payload
        })
    }
})


export const { } = productSlice.actions

export default productSlice.reducer
import { createSlice } from '@reduxjs/toolkit';
let initialState = {
    loading: false
};

let appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    },
    extraReducers: (builder) => {

    }
});

export const { setLoading } = appSlice.actions;
export default appSlice.reducer;
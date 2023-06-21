import { createSlice } from "@reduxjs/toolkit";
import { statisticalState } from "../initialState/StatisticalState";
import { fetchGetCountOrderAsyncThunk, fetchGetCountOrderCancelAsyncThunk, fetchGetIntervalOrderAsyncThunk, fetchGetIntervalOrderCancelAsyncThunk } from "../thunks/StatisticalThunk";

const statisticalSlice = createSlice({
    name: 'statistical',
    initialState: statisticalState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGetCountOrderAsyncThunk.fulfilled, (state, action) => {
            state.data = action.payload;
        })
        builder.addCase(fetchGetCountOrderCancelAsyncThunk.fulfilled, (state, action) => {
            state.dataCountOrderCancel = action.payload;
        })    
        builder.addCase(fetchGetIntervalOrderAsyncThunk.fulfilled, (state, action) => {
            state.dataIntervalOrder = action.payload;
        })
        builder.addCase(fetchGetIntervalOrderCancelAsyncThunk.fulfilled, (state, action) => {
            state.dataIntervalCancelOrder = action.payload;
        })
    }
})

export default statisticalSlice.reducer
const statisticalSelector = (state) => state.StatisticalReducer

export {
    statisticalSelector
}
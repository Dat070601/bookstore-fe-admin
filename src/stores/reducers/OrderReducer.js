import { createSlice } from "@reduxjs/toolkit";
import { orderState } from "../initialState/OrderState";
import { changeOrderStatusAsyncThunk, getOrdersAsyncThunk } from "../thunks/OrderThunk";

const orderSlice = createSlice({
  name: "order",
  initialState: orderState,
  reducers: {
    resetState: (state, action) => {
      return {
        ...state,
        isOrderStateChange: undefined
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getOrdersAsyncThunk.fulfilled, (state, action) => {
      state.orders = action.payload
    })
    builder.addCase(changeOrderStatusAsyncThunk.fulfilled, (state, action) => {
      state.isOrderStateChange = action.payload?.isSuccess || false
    })
    builder.addCase(changeOrderStatusAsyncThunk.rejected, (state, action) => {
      state.isOrderStateChange = false
    })
  }
})

export const orderReducer = orderSlice.reducer
export const orderSelector = state => state.orderReducer
export const { resetState } = orderSlice.actions
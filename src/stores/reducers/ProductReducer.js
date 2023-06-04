import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { productState } from '../initialState/ProductState'
import { fetchBookCountAsyncThunk, fetchProductBestSellerAsyncThunk } from '../thunks/ProductThunk'

const productSlice = createSlice({
    name: "product",
    initialState: productState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductBestSellerAsyncThunk.fulfilled, (state, action) => {
            state.booksBestSeller = action.payload
        })
        builder.addCase(fetchBookCountAsyncThunk.fulfilled, (state, action) => {
            state.bookCount = action.payload
        })
    }
})

export default productSlice.reducer
const productSelector = (state) => state.ProductReducer

export {
    productSelector
}
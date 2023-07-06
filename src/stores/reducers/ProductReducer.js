import { createSlice } from '@reduxjs/toolkit'
import { productState } from '../initialState/ProductState'
import { addBookAsyncThunk, fetchBookCountAsyncThunk, fetchGetBookMaxPageAsyncThunk, fetchGetBooksWithPaginationAsyncThunk, fetchProductBestSellerAsyncThunk, stopProductionBookAsyncThunk, updateBookPriceAsyncThunk,  } from '../thunks/ProductThunk'

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
        builder.addCase(fetchGetBooksWithPaginationAsyncThunk.fulfilled, (state, action) => {
            state.books = action.payload
        })
        builder.addCase(fetchGetBookMaxPageAsyncThunk.fulfilled, (state, action) => {
            state.pages = action.payload
        })
        builder.addCase(addBookAsyncThunk.fulfilled, (state, action) => {
            state.isCreated = true
        })
        builder.addCase(stopProductionBookAsyncThunk.fulfilled, (state, action) => {
            state.isDeleted = true
        })
        builder.addCase(updateBookPriceAsyncThunk.fulfilled, (state, action) => {
            state.isUpdated = true
        })
    }
})

export default productSlice.reducer
const productSelector = (state) => state.ProductReducer

export {
    productSelector
}
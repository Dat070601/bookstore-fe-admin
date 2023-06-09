import { createSlice } from '@reduxjs/toolkit'
import { productState } from '../initialState/ProductState'
import { addBookAsyncThunk, fetchBookCountAsyncThunk, fetchGetBookMaxPageAsyncThunk, fetchGetBooksWithPaginationAsyncThunk, fetchProductBestSellerAsyncThunk, fetchWalletAsyncThunk, stopProductionBookAsyncThunk, updateBookPriceAsyncThunk,  } from '../thunks/ProductThunk'

const productSlice = createSlice({
    name: "product",
    initialState: productState,
    reducers: {
        resetProductIsDeletedState: (state, action) => ({
            ...state,
            isDeleted: undefined
        }),
        resetProductIsUpdatedState: (state, action) => ({
            ...state,
            isUpdated: undefined
        })
    },
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
        builder.addCase(fetchWalletAsyncThunk.fulfilled, (state, action) => {
            state.wallet = action.payload
        })
    }
})

export default productSlice.reducer
const productSelector = (state) => state.ProductReducer
export const { resetProductIsDeletedState, resetProductIsUpdatedState } = productSlice.actions
export {
    productSelector
}
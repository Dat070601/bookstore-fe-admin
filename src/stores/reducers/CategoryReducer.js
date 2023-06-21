import { createSlice } from "@reduxjs/toolkit";
import { categoryState } from "../initialState/CategoryState";
import { addCategoryAsyncThunk, addSubCategoryAsyncThunk, fetchCategoriesAsyncThunk } from "../thunks/CategoryThunk";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: categoryState,
  reducers: {
    resetState: (state, action) => {
      return {
        ...state,
        isCategoryCreated: undefined,
        isSubCategoryCreated: undefined
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategoriesAsyncThunk.fulfilled, (state, action) => {
      state.categories = action.payload
    })
    builder.addCase(addCategoryAsyncThunk.fulfilled, (state) => {
      state.isCategoryCreated = true
    })
    builder.addCase(addSubCategoryAsyncThunk.fulfilled, (state) => {
      state.isSubCategoryCreated = true
    })
  }
})

const categoriesReducer = categoriesSlice.reducer
const categoriesSelector = (state) => state.categoriesReducer 
export const { resetState } = categoriesSlice.actions

export {
  categoriesReducer,
  categoriesSelector
}
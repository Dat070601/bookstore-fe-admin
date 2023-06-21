import { createAsyncThunk } from "@reduxjs/toolkit";
import { addCategoryAsync, addSubCategoryAsync, fetchCategoriesAsync } from "../../api/category";
import { URL } from "../../constant";

export const fetchCategoriesAsyncThunk = createAsyncThunk("fetch-categories", async () => {
  const response = await fetchCategoriesAsync(URL)
  return response
})

export const addCategoryAsyncThunk = createAsyncThunk("add-category", async (payload) => {
  const { categoryName, token } = payload
  const response = await addCategoryAsync(URL, { categoryName }, token)
  return response
})

export const addSubCategoryAsyncThunk = createAsyncThunk("add-sub-category", async (payload) => {
  const { subId, categoryName, token } = payload
  const response = await addSubCategoryAsync(URL, {
    subId,
    categoryName
  }, token)
  return response
})
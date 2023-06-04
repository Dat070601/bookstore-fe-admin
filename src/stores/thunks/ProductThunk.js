import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchGetBookCountAsync, fetchMostProductBestSellerAsync } from "../../api/product"
import { URL } from "../../constant"

const fetchProductBestSellerAsyncThunk = createAsyncThunk("product/fetch-product-best-seller", async (payload) => {
    try {
      const response = await fetchMostProductBestSellerAsync(URL)
      return response
    } catch (error) {
      console.log(error)
    }
})

const fetchBookCountAsyncThunk = createAsyncThunk("product/fetch-book-count", async (payload) => {
  try {
    const response = await fetchGetBookCountAsync(URL)
    return response
  } catch (error) {
    console.log(error)
  }
})
export {fetchProductBestSellerAsyncThunk, fetchBookCountAsyncThunk}
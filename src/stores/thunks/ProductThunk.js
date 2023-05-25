import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchMostProductBestSellerAsync } from "../../api/product"
import { URL } from "../../constant"

const fetchProductBestSellerAsyncThunk = createAsyncThunk("product/fetch-product-best-seller", async (payload) => {
    try {
      const response = await fetchMostProductBestSellerAsync(URL)
      return response
    } catch (error) {
      console.log(error)
    }
})

export {fetchProductBestSellerAsyncThunk}
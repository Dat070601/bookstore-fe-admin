import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchGetBookCountAsync, fetchMostProductBestSellerAsync ,fetchGetBooksWithPagination, fetchGetBookMaxPage, addBookAsync, stopProductionBookAsync, updateBookPriceAsync, fetchGetWWalletAsync } from "../../api/product"
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

const fetchGetBooksWithPaginationAsyncThunk = createAsyncThunk("product/fetch-book-with-pagination", async (payload) => {
  try {
    const { page } = payload
    const response = await fetchGetBooksWithPagination(URL, { page })
    return response
  } catch (error) {
    console.log(error)
  }
})

const fetchGetBookMaxPageAsyncThunk = createAsyncThunk("product/fetch-book-max-page", async () => {
  try {
    const response = await fetchGetBookMaxPage(URL)
    return response
  } catch (error) {
    console.log(error)
  }
})

const addBookAsyncThunk = createAsyncThunk("product/add-book", async (payload) => {
  try {
    const { book, accessToken } = payload
    const response = await addBookAsync(URL, book, accessToken)
    return response
  } catch (error) {
    console.log(error)
  }
})

const stopProductionBookAsyncThunk = createAsyncThunk("product/stop-production-book", async (payload) => {
  try {
    const { bookId } = payload
    const response = await stopProductionBookAsync(URL, {
      bookId
    })
    return response
  } catch (error) {
    console.log(error)
  }
})

const updateBookPriceAsyncThunk = createAsyncThunk("product/update-book-price", async (payload) => {
  try {
    const { bookId, body } = payload
    const response = await updateBookPriceAsync(URL, bookId, body)
    return response
  } catch (error) {
    console.log(error)
  }
})

const fetchWalletAsyncThunk = createAsyncThunk("product/fetch-wallet", async (payload) => {
  try {
    const response = await fetchGetWWalletAsync(URL)
    return response
  } catch (error) {
    console.log(error)
  }
})

export { 
  fetchProductBestSellerAsyncThunk,
  fetchWalletAsyncThunk,
  fetchBookCountAsyncThunk, 
  fetchGetBooksWithPaginationAsyncThunk, 
  fetchGetBookMaxPageAsyncThunk,
  addBookAsyncThunk,
  stopProductionBookAsyncThunk,
  updateBookPriceAsyncThunk
}
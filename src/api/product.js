import axios from 'axios'
import React from 'react'

const fetchMostProductBestSellerAsync = async (url) => {
    try {
      const response = await axios.get(`${url}/api/book/product-most-seller`)
      return response.data
    } catch (error) {
      console.log(error)
    }
}

const fetchGetBookCountAsync = async (url) => {
  try {
    const response = await axios.get(`${url}/api/book/book-count`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const fetchGetBookMaxPage = async (url) => {
  try {
    const response = await axios.get(`${url}/api/book/number-page`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const fetchGetBooksWithPagination = async (url, { page }) => {
  try {
    const response = await axios.get(`${url}/api/book?page=${page}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const addBookAsync = async (url, payload, accessToken) => {
  try {
    const response = await axios.post(`${url}/api/book`, payload, {
      headers: {
        Authorization: `bearer ${accessToken}`
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}



export { 
  fetchMostProductBestSellerAsync, 
  fetchGetBookCountAsync, 
  fetchGetBooksWithPagination, 
  fetchGetBookMaxPage,
  addBookAsync
}
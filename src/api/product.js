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
export {fetchMostProductBestSellerAsync, fetchGetBookCountAsync}
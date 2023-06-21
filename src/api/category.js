import axios from 'axios'

export const fetchCategoriesAsync = async (url) => {
  try {
    const response = await axios.get(`${url}/api/Category/sub`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const addCategoryAsync = async (url, payload, token) => {
  try {
    const response = await axios.post(`${url}/api/category/subCate`, payload, {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const addSubCategoryAsync = async (url, payload, token) => {
  try {
    const response = await axios.post(`${url}/api/category`, payload, {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}
import axios from 'axios'

export const getAuthorsAsync = async (url) => {
  try {
    const response = await axios.get(`${url}/api/Author/all`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const addAuthorAsync = async (url, { nameAuthor, accessToken }) => {
  try {
    const response = await axios.post(`${url}/api/author`, {
      nameAuthor
    }, {
      headers: {
        Authorization: `bearer ${accessToken}`
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const updateAuthorAsync = async (url, {
  authorId,
  nameAuthor,
  accessToken
}) => {
  try {
    const response = await axios.put(`${url}/api/author`, {
      authorId,
      nameAuthor,
    }, {
      headers: {
        Authorization: `bearer ${accessToken}`
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}
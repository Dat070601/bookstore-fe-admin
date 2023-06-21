import axios from 'axios'

export const getPublisherAsync = async (url) => {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const addPublisherAsync = async (url, { namePublisher, description, accessToken }) => {
  try {
    const response = await axios.post(url, {
      namePublisher,
      description
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

export const updatePublisherAsync = async (url, { publisherId, namePublisher, description, accessToken }) => {
  try {
    const response = await axios.put(url, {
      publisherId,
      namePublisher,
      description
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
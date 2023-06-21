import axios from 'axios'

export const getOrdersAsync = async (url) => {
  try {
    const response = await axios.get(`${url}/api/order`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const changeOrderStatusAsync = async (url, { orderId, statusName }) => {
  try {
    const response = await axios.put(`${url}/api/order/status/${orderId}`, {
      statusName
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}
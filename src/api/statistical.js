import axios from 'axios'
import React from 'react'

const fetchGetCountOrderAsync = async (url, type) => {
    try {
        const response = await axios.get(`${url}/api/Statistical/count-order`,{
            params: {
                type: type
            },
        }
    )
     return response.data
    }
    catch (error) {
        console.log(error)
    }
}

const fetchGetCountOrderCanceLAsync = async (url, type) => {
    try {
        const response = await axios.get(`${url}/api/Statistical/count-order-cancel`, {
            params: {
                type: type
            },
        }
    )
    return response.data
    } catch (error) {
        console.log(error)
    }
}

const fetchGetIntervalOrderAsync = async (url, type) => {
    try {
        const response = await axios.get(`${url}/api/Statistical/interval-order`, {
            params: {
                type: type
            },
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

const fetchGetIntervalOrderCanceLAsync = async (url, type) => {
    try {
        const response = await axios.get(`${url}/api/Statistical/interval-cancel-order`, {
            params: {
                type: type
            }, 
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}
export { fetchGetCountOrderAsync, fetchGetCountOrderCanceLAsync, fetchGetIntervalOrderAsync, fetchGetIntervalOrderCanceLAsync}
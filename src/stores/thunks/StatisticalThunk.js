import React from 'react'
import { fetchGetCountOrderAsync, fetchGetCountOrderCanceLAsync, fetchGetIntervalOrderAsync, fetchGetIntervalOrderCanceLAsync } from '../../api/statistical'
import { URL } from '../../constant'
import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchGetCountOrderAsyncThunk = createAsyncThunk("statistical/fetch-get-count-order", async (payload) => {
    try{
      const responses = await fetchGetCountOrderAsync(URL, payload)
      return responses  
    } catch (error) {
        console.log(error)
    }
})

const fetchGetCountOrderCancelAsyncThunk = createAsyncThunk("statistical/fetch-get-count-order-cancel", async (payload) => {
    try {
        const responses = await fetchGetCountOrderCanceLAsync(URL, payload)
        return responses
    } catch (error) {
        console.log(error)
    }
})

const fetchGetIntervalOrderAsyncThunk = createAsyncThunk("statistical/fetch-get-interval-order", async (payload) => {
    try {
        const response = await fetchGetIntervalOrderAsync(URL, payload)
        return response
    } catch (error) {
        console.log(error)
    }
})

const fetchGetIntervalOrderCancelAsyncThunk = createAsyncThunk("statistical/fetch-get-interval-order-cancel", async (payload) => {
    try {
        const response = await fetchGetIntervalOrderCanceLAsync(URL, payload)
        return response
    } catch (error) {
        console.log(error)
    }
})
export {
    fetchGetCountOrderAsyncThunk,
    fetchGetCountOrderCancelAsyncThunk,
    fetchGetIntervalOrderAsyncThunk,
    fetchGetIntervalOrderCancelAsyncThunk
}
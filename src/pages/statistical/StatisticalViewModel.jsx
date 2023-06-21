import React, { useEffect } from 'react'
import { statisticalSelector } from '../../stores/reducers/StatisticalReducer'
import { fetchGetCountOrderAsyncThunk } from '../../stores/thunks/StatisticalThunk'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
const StatisticalViewModel = () => {
    const [ type , setType] = useState("Bảy ngày")
    const { data } = useSelector(statisticalSelector)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchGetCountOrderAsyncThunk(type))
    },[type])
  return {
    data,
    setType,
    type
  }
}

export default StatisticalViewModel
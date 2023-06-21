import React, { useEffect } from 'react'
import { productSelector } from '../../stores/reducers/ProductReducer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookCountAsyncThunk, fetchProductBestSellerAsyncThunk } from '../../stores/thunks/ProductThunk';
import { useState } from 'react';
import { fetchGetCountOrderAsyncThunk, fetchGetCountOrderCancelAsyncThunk, fetchGetIntervalOrderAsyncThunk, fetchGetIntervalOrderCancelAsyncThunk } from '../../stores/thunks/StatisticalThunk';
import { statisticalSelector } from '../../stores/reducers/StatisticalReducer';
import { fetchGetIntervalOrderAsync } from '../../api/statistical';
const HomePageViewModel = () => {
    const dispatch = useDispatch()
    const {booksBestSeller} = useSelector(productSelector)
    const {bookCount} = useSelector(productSelector)
    const [ type , setType] = useState("Bảy ngày")
    const [ typeInterval, setTypeInterval ] = useState("Bảy ngày")
    const { data, dataCountOrderCancel, dataIntervalOrder, dataIntervalCancelOrder } = useSelector(statisticalSelector)

    useEffect(() => {
        dispatch(fetchGetCountOrderAsyncThunk(type)),
        dispatch(fetchGetCountOrderCancelAsyncThunk(type))
    },[type])
    
    useEffect(() => {
        dispatch(fetchGetIntervalOrderAsyncThunk(typeInterval))
        dispatch(fetchGetIntervalOrderCancelAsyncThunk(typeInterval))
    },[typeInterval])

    useEffect(() => {
        dispatch(fetchProductBestSellerAsyncThunk(null))
        dispatch(fetchBookCountAsyncThunk(null))
    },[dispatch])
    
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    return {
        bookCount,
        booksBestSeller,
        data,
        setType,
        setTypeInterval,
        type,
        typeInterval,
        dataCountOrderCancel,
        dataIntervalOrder,
        dataIntervalCancelOrder
    }
};

export default HomePageViewModel
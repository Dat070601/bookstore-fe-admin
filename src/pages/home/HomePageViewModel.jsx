import React, { useEffect } from 'react'
import { productSelector } from '../../stores/reducers/ProductReducer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookCountAsyncThunk, fetchProductBestSellerAsyncThunk } from '../../stores/thunks/ProductThunk';
const HomePageViewModel = () => {
    const dispatch = useDispatch()
    const {booksBestSeller} = useSelector(productSelector)
    const {bookCount} = useSelector(productSelector)
    
    useEffect(() => {
        dispatch(fetchProductBestSellerAsyncThunk(null))
        dispatch(fetchBookCountAsyncThunk(null))
    },[dispatch])
    
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    return {
        bookCount,
        booksBestSeller
    }
};

export default HomePageViewModel
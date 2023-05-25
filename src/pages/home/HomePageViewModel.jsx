import React, { useEffect } from 'react'
import { productSelector } from '../../stores/reducers/ProductReducer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductBestSellerAsyncThunk } from '../../stores/thunks/ProductThunk';
const HomePageViewModel = () => {
    const dispatch = useDispatch()
    const {booksBestSeller} = useSelector(productSelector)
    
    useEffect(() => {
        dispatch(fetchProductBestSellerAsyncThunk(null))
    },[dispatch])
    
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    return {
        booksBestSeller
    }
};

export default HomePageViewModel
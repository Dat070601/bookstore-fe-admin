import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { productSelector } from '../../stores/reducers/ProductReducer'
import { useEffect } from 'react'
import { fetchGetBooksWithPaginationAsyncThunk, fetchBookCountAsyncThunk, fetchGetBookMaxPageAsyncThunk } from '../../stores/thunks/ProductThunk'
import { useParams } from 'react-router-dom'

const ProductViewModel = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { books, bookCount, pages } = useSelector(productSelector)
  const { page } = useParams()

  useEffect(() => {
    dispatch(fetchGetBookMaxPageAsyncThunk())
  }, [])

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchBookCountAsyncThunk())
    })
  }, [dispatch])

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchGetBooksWithPaginationAsyncThunk({
        page
      }))
      window.scrollTo(0, 0)
    }, 1000)
  }, [dispatch, page])

  const handleNavigatePage = (page) => {
    navigate(`/product/${page + 1}`)
  }

  const handleGoToPreviousPage = () => {
    navigate(`/product/${Number(page) - 1}`)
  }

  const handleGoToNextPage = () => {
    navigate(`/product/${Number(page) + 1}`)
  }

  return {
    books,
    bookCount,
    pages,
    handleNavigatePage,
    handleGoToNextPage,
    handleGoToPreviousPage
  }
}

export default ProductViewModel
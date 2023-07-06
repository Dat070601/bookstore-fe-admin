import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { productSelector } from '../../stores/reducers/ProductReducer'
import { useEffect } from 'react'
import { fetchGetBooksWithPaginationAsyncThunk, fetchBookCountAsyncThunk, fetchGetBookMaxPageAsyncThunk, stopProductionBookAsyncThunk, updateBookPriceAsyncThunk } from '../../stores/thunks/ProductThunk'
import { useParams } from 'react-router-dom'
import { useDisclosure } from '@chakra-ui/react'

const ProductViewModel = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { books, bookCount, pages, isDeleted, isUpdated } = useSelector(productSelector)
  const { page } = useParams()
  const { isOpen: isDeleteProductOpen, onOpen: onDeleteProductOpen, onClose: onDeleteProductClose } = useDisclosure()
  const { isOpen: isEditBookPriceOpen, onOpen: onEditBookPriceOpen, onClose: onEditBookPriceClose } = useDisclosure()
  const { isOpen: isUpdateProductPriceOpen, onOpen: onUpdateProductPriceOpen, onClose: onUpdateProductPriceClose } = useDisclosure()
  const [ productId, setProductId ] = useState("")
  const [ newPrice, setNewPrice ] = useState({
    bookDefautPrice: 0,
    bookSalePrice: 0,
    activationDate: null,
    expirationDate: null
  })

  const handleChangeInput = (event) => {
    setNewPrice(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }
 
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

  useEffect(() => {
    if (isDeleted === true) {
      dispatch(fetchGetBooksWithPaginationAsyncThunk({
        page
      }))
    }
  }, [isDeleted]) 

  useEffect(() => {
    if (isUpdated === true) {
      onUpdateProductPriceOpen()
      dispatch(fetchGetBooksWithPaginationAsyncThunk({
        page
      }))
    }
  }, [isUpdated])

  const handleGetProductToUpdatePrice = (id) => {
    const result = books?.find(book => book.id === id)
    return result
  }

  const handleNavigatePage = (page) => {
    navigate(`/product/${page + 1}`)
  }

  const handleGoToPreviousPage = () => {
    navigate(`/product/${Number(page) - 1}`)
  }

  const handleGoToNextPage = () => {
    navigate(`/product/${Number(page) + 1}`)
  }

  const handleStopProductionProduct = ({ bookId }) => {
    dispatch(stopProductionBookAsyncThunk({
      bookId
    }))
  }

  const handleUpdateBookPrice = ({ bookId, body }, event) => {
    event.preventDefault()
    dispatch(updateBookPriceAsyncThunk({
      bookId,
      body
    }))
  }

  const handleSetProductId = (productId) => {
    setProductId(productId)
  }

  return {
    books,
    bookCount,
    pages,
    isDeleteProductOpen,
    isEditBookPriceOpen,
    isUpdateProductPriceOpen,
    productId,
    newPrice,
    onEditBookPriceClose,
    onEditBookPriceOpen,
    onDeleteProductClose,
    onDeleteProductOpen,
    onUpdateProductPriceOpen,
    onUpdateProductPriceClose,
    handleNavigatePage,
    handleGoToNextPage,
    handleGoToPreviousPage,
    handleStopProductionProduct,
    handleSetProductId,
    handleGetProductToUpdatePrice,
    handleChangeInput,
    handleUpdateBookPrice
  }
}

export default ProductViewModel
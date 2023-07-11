import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoriesAsyncThunk } from '../../stores/thunks/CategoryThunk'
import { categoriesSelector } from '../../stores/reducers/CategoryReducer'
import { useState } from 'react'
import { publisherSelector } from '../../stores/reducers/PublisherReducer'
import { getPublisherAsyncThunk } from '../../stores/thunks/PublisherThunk'
import { authorSelector } from '../../stores/reducers/AuthorReducer'
import { getAuthorsAsyncThunk } from '../../stores/thunks/AuthorThunk'
import { useFormik } from 'formik'
import { addBookAsyncThunk } from '../../stores/thunks/ProductThunk'
import useLocalStorage from '../../hooks/useLocalStorage'
import { productSelector } from '../../stores/reducers/ProductReducer'
import { useDisclosure } from '@chakra-ui/hooks'

const AddProductViewModel = () => {
  const dispatch = useDispatch()
  const { categories } = useSelector(categoriesSelector)
  const { publishers } = useSelector(publisherSelector)
  const { authors } = useSelector(authorSelector)
  const { isCreated } = useSelector(productSelector)
  const { get } = useLocalStorage()
  const accessTokenSaved = get({
    key: "accessToken"
  })
  const { isOpen: isAddProductSuccessBoxOpen, onOpen: onAddProductSuccessBoxOpen, onClose: onAddProductSuccessBoxClose } = useDisclosure()
  const formik = useFormik({
    initialValues: {
      bookName: "",
      bookDescription: "",
      categoryId: "",
      quantity: 0,
      numPage: 0,
      publisherId: "",
      authorId: "",
      imageUrls: [],
      price: {
        bookDefaultPrice: 0,
        bookSalePrice: 0,
        activationDate: "",
        expirationDate: ""
      }
    },
    onSubmit: (values) => {
      dispatch(addBookAsyncThunk({
        book: {
          ...values,
          imageUrls: values.imageUrls,
          price: {
            ...values.price,
            activationDate: new Date(values.price.activationDate),
            expirationDate: new Date(values.price.expirationDate)
          }
        },
        accessToken: accessTokenSaved
      }))
    }
  })

  useEffect(() => {
    if (isCreated === true) {
      onAddProductSuccessBoxOpen()
    }
  }, [isCreated])

  useEffect(() => {
    dispatch(fetchCategoriesAsyncThunk())
  }, [])

  useEffect(() => {
    dispatch(getPublisherAsyncThunk())
  }, [])

  useEffect(() => {
    dispatch(getAuthorsAsyncThunk())
  }, [])
  
  return {
    categories,
    publishers,
    authors,
    formik,
    isAddProductSuccessBoxOpen,
    onAddProductSuccessBoxClose
  }
}

export default AddProductViewModel
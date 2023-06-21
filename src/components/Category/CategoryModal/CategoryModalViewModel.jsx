import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoriesSelector, resetState } from '../../../stores/reducers/CategoryReducer'
import { addCategoryAsyncThunk, fetchCategoriesAsyncThunk } from '../../../stores/thunks/CategoryThunk'
import { useFormik } from 'formik'
import useLocalStorage from '../../../hooks/useLocalStorage'
import { useDisclosure } from '@chakra-ui/hooks'

const CategoryModalViewModel = () => {
  const dispatch = useDispatch()
  const { isCategoryCreated } = useSelector(categoriesSelector)
  const { isOpen: isAddCategoryAlertBoxOpen, onOpen: onAddCategoryAlertBoxOpen, onClose: onAddCategoryAlertBoxClose } = useDisclosure()
  const { get } = useLocalStorage()
  const accessTokenSaved = get({
    key: "accessToken"
  })

  const formik = useFormik({
    initialValues: {
      categoryName: ""
    },
    onSubmit: (values) => {
      console.log(values)
      dispatch(addCategoryAsyncThunk({
        categoryName: values.categoryName,
        token: accessTokenSaved
      }))
    }
  })

  useEffect(() => {
    if (isCategoryCreated === true) {
      onAddCategoryAlertBoxOpen()
      dispatch(fetchCategoriesAsyncThunk())
    }
    // if (isCategoryCreated === false) {
    //   onAddCategoryAlertBoxOpen()
    // }
    return () => {
      dispatch(resetState())
    }
  }, [isCategoryCreated])

  return {
    formik,
    isAddCategoryAlertBoxOpen,
    onAddCategoryAlertBoxClose
  }
}

export default CategoryModalViewModel
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authorSelector, resetIsAuthorCreatedState, resetIsAuthorUpdatedState } from '../../stores/reducers/AuthorReducer'
import { addAuthorAsyncThunk, getAuthorsAsyncThunk, updateAuthorAsyncThunk } from '../../stores/thunks/AuthorThunk'
import { useDisclosure } from '@chakra-ui/react'
import { useFormik } from 'formik'
import { useState } from 'react'

const AuthorViewModel = () => {
  const addAuthorWithFormik = useFormik({
    initialValues: {
      nameAuthor: ""
    },
    onSubmit: (values) => {
      addAuthor({
        nameAuthor: values.nameAuthor
      })
    }
  })

  const dispatch = useDispatch()
  const { authors, isAuthorCreated, isAuthorUpdated } = useSelector(authorSelector)
  const { isOpen: isAddAuthorModalOpen, onOpen: onAddAuthorModalOpen, onClose: onAddAuthorModalClose } = useDisclosure()
  const { isOpen: isSuccessAlertBoxOpen, onOpen: onSuccessAlertBoxOpen, onClose: onSuccessAlertBoxClose } = useDisclosure()

  const addAuthor = ({ nameAuthor }) => {
    dispatch(addAuthorAsyncThunk({
      nameAuthor
    }))
  }

  const updateAuthor = ({ authorId, nameAuthor }, event) => {
    event.preventDefault()
    dispatch(updateAuthorAsyncThunk({
      authorId,
      nameAuthor
    }))
  }

  useEffect(() => {
    dispatch(getAuthorsAsyncThunk())
  }, [])

  useEffect(() => {
    if (isAuthorCreated === true) {
      onSuccessAlertBoxOpen()
      dispatch(getAuthorsAsyncThunk())
    }
    return () => {
      dispatch(resetIsAuthorCreatedState())
    }
  }, [isAuthorCreated])

  useEffect(() => {
    if (isAuthorUpdated === true) {
      onSuccessAlertBoxOpen()
      dispatch(getAuthorsAsyncThunk())
    }
    return () => {
      dispatch(resetIsAuthorUpdatedState())
    }
  }, [isAuthorUpdated])

  return {
    authors,
    isAddAuthorModalOpen,
    onAddAuthorModalClose,
    onAddAuthorModalOpen,
    addAuthor,
    updateAuthor,
    addAuthorWithFormik,
    onSuccessAlertBoxClose,
    isSuccessAlertBoxOpen,
    onSuccessAlertBoxOpen,
  }
}

export default AuthorViewModel
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { publisherSelector, resetIsPublisherCreatedState, resetIsPublisherUpdatedState } from '../../stores/reducers/PublisherReducer'
import { addPublisherAsyncThunk, getPublisherAsyncThunk } from '../../stores/thunks/PublisherThunk'
import { useDisclosure } from '@chakra-ui/react'
import { useFormik } from 'formik'

const PublisherViewModel = () => {
  const addPublisherWithFormik = useFormik({
    initialValues: {
      namePublisher: "",
      description: ""
    },
    onSubmit: (values) => {
      handleCreatePublisher({
        namePublisher: values.namePublisher,
        description: values.description
      })
    }
  })
  const dispatch = useDispatch()
  const { publishers, isPublisherCreated, isPublisherUpdated } = useSelector(publisherSelector)

  const { isOpen: isAddPublisherModalOpen, onOpen: onAddPublisherModalOpen, onClose: onAddPublisherModalClose } = useDisclosure()
  const { isOpen: isSuccessBoxOpen, onOpen: onSuccessBoxOpen, onClose: onSuccessBoxClose } = useDisclosure()

  useEffect(() => {
    dispatch(getPublisherAsyncThunk())
  }, [])

  useEffect(() => {
    if (isPublisherCreated === true) {
      onSuccessBoxOpen()
      dispatch(getPublisherAsyncThunk())
    }
    return () => {
      dispatch(resetIsPublisherCreatedState())
    }
  }, [isPublisherCreated])

  useEffect(() => {
    if (isPublisherUpdated === true) {
      onSuccessBoxOpen()
      dispatch(getPublisherAsyncThunk())
    }
    return () => {
      dispatch(resetIsPublisherUpdatedState())
    }
  }, [isPublisherUpdated])

  const handleCreatePublisher = ({ namePublisher, description }) => {
    dispatch(addPublisherAsyncThunk({
      namePublisher,
      description
    }))
  }
  
  return {
    publishers,
    isAddPublisherModalOpen,
    onAddPublisherModalClose,
    onAddPublisherModalOpen,
    addPublisherWithFormik,
    isSuccessBoxOpen,
    onSuccessBoxClose,
    onSuccessBoxOpen
  }
}

export default PublisherViewModel
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { updatePublisherAsyncThunk } from '../../../../stores/thunks/PublisherThunk'

const PublisherCardViewModel = ({ publisherId }) => {
  const updatePublisherWithFormik = useFormik({
    initialValues: {
      namePublisher: "",
      description: "",
    },
    onSubmit: (values) => {
      handleUpdatePublisher({
        publisherId,
        namePublisher: values.namePublisher,
        description: values.description
      })
    }
  })

  const dispatch = useDispatch()
  const handleUpdatePublisher = ({ publisherId, namePublisher, description }) => {
    dispatch(updatePublisherAsyncThunk({
      publisherId,
      namePublisher,
      description
    }))
  }

  return {
    updatePublisherWithFormik
  }
}

export default PublisherCardViewModel
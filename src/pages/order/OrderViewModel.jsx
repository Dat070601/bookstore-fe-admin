import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { orderSelector, resetState } from '../../stores/reducers/OrderReducer'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { changeOrderStatusAsyncThunk, getOrdersAsyncThunk } from '../../stores/thunks/OrderThunk'
import { useDisclosure } from '@chakra-ui/hooks'

const OrderViewModel = () => {

  const { orders, isOrderStateChange } = useSelector(orderSelector)
  const { isOpen: isProductDetailModalOpen, onOpen: onProductDetailModalOpen, onClose: onProductDetailModalClose } = useDisclosure()
  const { isOpen: isSuccessBoxOpen, onOpen: onSuccessBoxOpen, onClose: onSuccessBoxClose } = useDisclosure()
  const dispatch = useDispatch()

  const handleChangeOrderStatus = ({ orderId, statusName }) => {
    dispatch(changeOrderStatusAsyncThunk({
      orderId,
      statusName
    }))
  }

  useEffect(() => {
    if (isOrderStateChange === true) {
      onSuccessBoxOpen()
    } 
    return () => {
      dispatch(resetState())
    }
  }, [isOrderStateChange])

  useEffect(() => {
    dispatch(getOrdersAsyncThunk())
  }, [])

  return {
    orders,
    handleChangeOrderStatus,
    isProductDetailModalOpen,
    onProductDetailModalClose,
    onProductDetailModalOpen,
    isSuccessBoxOpen,
    onSuccessBoxClose,
  }
}

export default OrderViewModel
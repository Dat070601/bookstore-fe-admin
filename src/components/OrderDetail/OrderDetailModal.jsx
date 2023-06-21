import React, { useEffect, useState } from 'react'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import { Button } from '@chakra-ui/button'
import { Text } from '@chakra-ui/layout'

const OrderDetailModal = ({ isOpen, onClose, orderDetails, orderId }) => {

  const [ orderDetail, setOrderDetail ] = useState({})

  useEffect(() => {
    const orderDetail = orderDetails.find(orderDetail => {
      return orderDetail.orderId === orderId
    })
    setOrderDetail(orderDetail)
  }, [orderId])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Order detail: {orderId}</ModalHeader>
        <ModalBody>
          {/* {orderDetails?.map(orderDetail => { */}
            {/* return ( */}
              <>
                <Text>Tên sản phẩm: {orderDetail?.bookName}</Text>
                <Text>Số lượng {orderDetail?.quantity}</Text>
                <Text>Tổng tiền: {orderDetail?.price}</Text>
              </>
            {/* ) */}
          {/* })} */}
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => onClose()}>Ok</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default OrderDetailModal
import React from 'react'
import CustomContainer from '../../components/root/CustomContainer'
import { Box, Select, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Text, Modal, ModalOverlay, ModalContent, ModalHeader, Accordion, AccordionButton, AccordionItem, AccordionPanel, Heading, Divider, Flex, Icon } from '@chakra-ui/react'
import OrderViewModel from './OrderViewModel'
import { COLOR } from '../../constant'
import OrderDetailModal from '../../components/OrderDetail/OrderDetailModal'
import { RiBillLine }  from "react-icons/ri";
import AlertBox from '../../components/AlertBox/AlertBox'


const Order = () => {

  const { orders, handleChangeOrderStatus, onSuccessBoxClose, isSuccessBoxOpen, onProductDetailModalOpen } = OrderViewModel()

  return (
    <CustomContainer height={"120vh"}>
        <Flex alignItems="center" mb={6}>
          <Flex alignItems="center">
            <Box color="white" mr={2} bg={"blue.500"} p={2} borderRadius={"xl"} boxShadow={"xl"}rounded='md'>
              <Icon as={RiBillLine} boxSize={7}/>
            </Box>
            <Text fontSize="2xl" fontWeight="medium">Quản lý đơn hàng</Text>
          </Flex>
      </Flex>
        <Box w={"1550px"} bg={"white"} rounded={"20px"}>
          <Box height={"90vh"} overflowY={"scroll"}>
                {orders.map(order => {
                  return (
                    <>
                    <Accordion allowMultiple>
                      <AccordionItem>
                      <AccordionButton>
                      <Box key={order.orderId} onClick={() => onProductDetailModalOpen()}>
                        <Box mx="10px" my="10px" mb="30px" display={"flex"} justifyContent={"space-between"} w={"1450px"}>
                          <Box textAlign={"left"}>
                            <Heading mb="10px" size={"md"}>Đơn hàng</Heading>
                            <Box display={"flex"} justifyContent={"space-between"}>
                              <Box>
                                <Text>Tên: {order.nameCus}</Text>
                                <Text>Phương thức thanh toán: {order.paymentMethod}</Text>
                                <Text>Tin nhắn: {(order.message === "") ? "khong co tin nhan" : order.message}</Text>       
                                <Text>Số điện thoại: {order.phoneNumber}</Text>
                              </Box>
                              <Box mx="200px">
                                <Box display={"flex"} gap={5}>
                                  <Text>Địa chỉ: {order.address}</Text> 
                                  <Text>Thành phố: {order.city}</Text> 
                                  <Text>Quận: {order.district}</Text>
                                </Box>
                                <Text>Tổng thanh toán: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND'}).format(order.totalPrice)}</Text>
                              </Box>
                            </Box>
                            <Text>Ngày đặt hàng: {
                            `${new Date(order.orderDate)
                                .getDate()
                                .toString()}/${new Date(order.orderDate)
                                .getUTCMonth()
                                .toString()}/${new Date(order.orderDate)
                                .getFullYear()
                                .toString()} -
                              ${new Date(order.orderDate).getHours()}:${new Date(order.orderDate).getMinutes()}h
                            `}</Text>
                          </Box>
                          <Box>
                            <Select w={"200px"} onChange={(event) => handleChangeOrderStatus({ orderId: order.orderId, statusName: event.target.value })}>
                              <option style={{ background: COLOR, color: "white" }}>{order.orderStatus}</option>
                              <option value="Đã Thanh Toán">Đã Thanh Toán</option>
                              <option value="Chờ Xác Nhận">Chờ Xác Nhận</option>
                              <option value="Đã Giao">Đã Giao</option>
                              <option value="Đang Vận Chuyển">Đang Vận Chuyển</option>
                              <option value="Đã Xác Nhận">Đã Xác Nhận</option>
                              <option value="Đã Hủy">Đã Hủy</option>
                            </Select>
                          </Box>
                        </Box>
                      </Box>
                      </AccordionButton>
                      <AccordionPanel>
                        <Box>
                          <Heading size={"md"}>Chi tiết đơn hàng</Heading>
                          {order.orderDetails.map(orderDetail => {
                            return (
                              <Box mx="10px" my="10px">
                                <Text>Tên sản phẩm: {orderDetail.bookName}</Text>
                                <Text>Số lượng: {orderDetail.quantity}</Text>
                                <Text>Giá tiền: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND'}).format(orderDetail.price)}</Text>
                                <Divider />
                              </Box>
                            )
                          })}
                        </Box>
                      </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                    </>
                  )
                })}
          </Box>
        </Box>
        <AlertBox 
          isOpen={isSuccessBoxOpen}
          onClose={onSuccessBoxClose}
          title={"Thông báo"}
          message={"Cập nhật trạng thái đơn hàng thành công"}
        />
    </CustomContainer>
  )
}

export default Order
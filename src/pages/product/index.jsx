import React, { useState } from 'react'
import { Box, Button, Divider, Input, Spacer, Table, Td, Text, Th, Thead, Tr, TableContainer, Tbody, Image, IconButton, ButtonGroup, Flex, Icon } from '@chakra-ui/react'
import CustomContainer from '../../components/root/CustomContainer'
import { COLOR } from '../../constant'
import { BsPencilFill, BsTrash } from 'react-icons/bs'
import { GiBlackBook } from 'react-icons/gi'
import ProductViewModel from './ProductViewModel'
import { useNavigate } from 'react-router-dom'
import AlertBox from '../../components/AlertBox/AlertBox'
import ModalBox from '../../components/ModalBox'
import UpdateBookPriceForm from '../../components/Product/UpdateBookPriceForm'

const Product = () => {

  const { 
    books, 
    pages, 
    isDeleteProductOpen,
    productId,
    newPrice,   
    isEditBookPriceOpen,
    isUpdateProductPriceOpen,
    onDeleteProductClose,
    onDeleteProductOpen,
    handleNavigatePage, 
    handleGoToNextPage, 
    handleGoToPreviousPage,
    handleStopProductionProduct,
    handleSetProductId,
    handleChangeInput,
    handleUpdateBookPrice,
    onEditBookPriceClose,
    onEditBookPriceOpen,
    onUpdateProductPriceClose,
    isDeleteProductSuccessOpen,
    onDeleteProductSuccessClose
  } = ProductViewModel()
  const navigate = useNavigate()

  return (
    <CustomContainer height={"150vh"}>
        <Flex alignItems="center" mb={6}>
          <Flex alignItems="center">
            <Box color="white" mr={2} bg={"blue.500"} p={2} borderRadius={"xl"} boxShadow={"xl"}rounded='md'>
              <Icon as={GiBlackBook} boxSize={7}/>
            </Box>
            <Text fontSize="2xl" fontWeight="medium">Quản lý sản phẩm</Text>
          </Flex>
      </Flex>
        <Box bg="white" px={"20px"} py="20px" rounded={"8px"} width={"1555px"}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Text fontSize={"2xl"} fontWeight={"semibold"}>Danh sách sản phẩm</Text>
            <Button size={"md"} bg={COLOR} color="white" onClick={() => navigate("/product/add-product")}>Thêm sản phẩm</Button>
          </Box>
          <Divider my="30px" />
              <TableContainer my="20px" border={'1px'} borderColor={'gray'} height={"100vh"} overflowY={"scroll"}>
                <Table variant="striped" colorScheme='gray'>
                  <Thead border={"1px solid"}>
                    <Tr>
                      <Th textAlign={'center'} fontSize={"md"}>No</Th>
                      <Th textAlign={'center'} fontSize={"md"}>Book Image</Th>
                      <Th textAlign={'center'} fontSize={"md"}>Book Name</Th>
                      <Th textAlign={'center'} fontSize={"md"}>Book Category</Th>
                      <Th textAlign={'center'} fontSize={"md"}>Book Author</Th>
                      <Th textAlign={'center'} fontSize={"md"}>Sale price</Th>
                      <Th textAlign={'center'} fontSize={"md"}>Current price</Th>
                      <Th textAlign={'center'} fontSize={"md"}>Action</Th>
                    </Tr>
                  </Thead>
                {books?.map((book, index) => {
                return (
                  <Tbody border={"1px solid"}>
                    <Tr textAlign={'center'} fontSize={"md"}>
                      <Td textAlign={'center'} fontSize={"md"}>
                        <Box>
                          <Text isTruncated={true}>{index + 1}</Text>
                        </Box>
                      </Td>
                      <Td fontSize={"md"}>
                        <Image src={book.imageUrl} />
                      </Td>
                      <Td textAlign={'center'} fontSize={"md"} maxW={"300px"}>
                        <Text isTruncated>{book.title}</Text>
                      </Td>
                      <Td textAlign={'center'} fontSize={"md"}>{book.nameCategory}</Td>
                      <Td textAlign={'center'} fontSize={"md"}>{book.author}</Td>
                      <Td>
                        <Text textAlign={'center'}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND'}).format(book.salePrice)}</Text>
                      </Td>
                      <Td><Text textAlign={'center'} fontSize={"md"}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND'}).format(book.defaultPrice)}</Text></Td>
                      <Td>
                        <Box display={"flex"} gap={"3px"}>
                          <IconButton icon={<BsPencilFill />} bg={COLOR} color="white" onClick={() => {
                            onEditBookPriceOpen()
                            handleSetProductId(book.id)
                          }}/>
                          <IconButton icon={<BsTrash />} bg={"red.500"} color="white" onClick={() => {
                            onDeleteProductOpen()
                            handleSetProductId(book.id)
                          }}/>
                        </Box>
                      </Td>
                    </Tr>
                  </Tbody>
                  )
                })}
                </Table>
              </TableContainer>
          <Box display={"flex"}>
            <Text>Showing 1 to {books.length} of {books.length} entries</Text>
            <Spacer />
            <ButtonGroup isAttached>
              <Button variant={"outline"} color={COLOR} borderColor={COLOR} onClick={() => handleGoToPreviousPage()}>Previous</Button>
              {[...Array(pages)].map((el, i) => {
                return <Button bg={COLOR} color={"white"} onClick={() => handleNavigatePage(i)}>{i + 1}</Button>
              })}
              <Button variant={"outline"} color={COLOR} borderColor={COLOR} onClick={() => handleGoToNextPage()}>Next</Button>
            </ButtonGroup>
          </Box>
        </Box>
        <AlertBox 
          isOpen={isDeleteProductOpen}
          onClose={onDeleteProductClose}
          title={"Thông báo "}
          message={"Bạn có chắc chắn việc sẽ ngừng kinh doanh sản phẩm này ?"}
          footer={[
            <Box display={"flex"} gap="5px">
              <Button colorScheme='blue' onClick={() => handleStopProductionProduct({
                bookId: productId
              })}>Có</Button>
              <Button colorScheme='red' onClick={() => onDeleteProductClose()}>Không</Button>
            </Box>
          ]}
        />
        <ModalBox 
          isOpen={isEditBookPriceOpen}
          onClose={onEditBookPriceClose}
          header={"Cập nhật giá thành sản phẩm"}
          bodies={[
            <form onSubmit={handleUpdateBookPrice.bind(this, {
              bookId: productId,
              body: {
                bookDefaultPrice: newPrice.bookDefaultPrice,
                bookSalePrice: newPrice.bookSalePrice,
                activationDate: newPrice.activationDate,
                expirationDate: newPrice.expirationDate
              }
            })} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <UpdateBookPriceForm 
              handleChangeInput={handleChangeInput}
            />
            <Box display={"flex"} gap="10px">
              <Button colorScheme='blue' type='submit'>Cập nhật</Button>
              <Button colorScheme='red'>Hủy</Button>
            </Box>
            </form>
          ]}
          footers={[]}
        />
        <AlertBox 
          isOpen={isUpdateProductPriceOpen}
          onClose={onUpdateProductPriceClose}
          title={"Thông báo"}
          message={"Cập nhật giá tiền sản phẩm thành công."}
        />
        <AlertBox 
          isOpen={isDeleteProductSuccessOpen}
          onClose={onDeleteProductSuccessClose}
          title={"Thông báo"}
          message={"Sản phẩm đã được ngừng kinh doanh."}
        />
    </CustomContainer>
  )
}

export default Product
import React, { useState } from 'react'
import { Box, Button, Divider, Input, Spacer, Table, Td, Text, Th, Thead, Tr, TableContainer, Tbody, Image, IconButton, ButtonGroup, Flex, Icon } from '@chakra-ui/react'
import CustomContainer from '../../components/root/CustomContainer'
import { COLOR } from '../../constant'
import { BsPencilFill, BsTrash } from 'react-icons/bs'
import { GiBlackBook } from 'react-icons/gi'
import ProductViewModel from './ProductViewModel'
import { useNavigate } from 'react-router-dom'

const Product = () => {

  const { books, pages, handleNavigatePage, handleGoToNextPage, handleGoToPreviousPage } = ProductViewModel()
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
                {books.map((book, index) => {
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
                          <IconButton icon={<BsPencilFill />} bg={COLOR} color="white" />
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
    </CustomContainer>
  )
}

export default Product
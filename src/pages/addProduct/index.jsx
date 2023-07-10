import React, { useState } from 'react'
import { Box, Button, Divider, Flex, FormControl, FormLabel, Image, Input, Select, Text, Textarea } from '@chakra-ui/react'
import CustomContainer from '../../components/root/CustomContainer'
import { COLOR } from '../../constant'
import AddProductViewModel from './AddProductViewModel'
import { Field, FormikProvider } from 'formik'
import { useDropzone } from 'react-dropzone'
import usePostToCloudinary from '../../hooks/usePostToCloudinary'
import AlertBox from '../../components/AlertBox/AlertBox'

const AddProduct = () => {

  const { 
    categories, 
    publishers, 
    authors, 
    formik, 
    isAddProductSuccessBoxOpen,
    onAddProductSuccessBoxClose
  } = AddProductViewModel()

  const [ linkImage, setLinkImage ] = useState([])
  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, open } = useDropzone({
    accept: {
        'image/*': ['.jpg', '.png'],
    },
    onDrop: async (acceptedFiles) => {
        const listLink = await Promise.all(
            acceptedFiles.map(async (file) => {
                const link = await usePostToCloudinary(file);
                return link;
              }),
        );
        formik.values.imageUrls = listLink
        setLinkImage(listLink);
    },
});

  return (
    <FormikProvider value={formik}>
      <CustomContainer height={"150vh"}>
        <Box bg="white" px={"20px"} py="20px" rounded={"8px"} width={"1555px"}>
          <Text fontSize={"2xl"} fontWeight={"semibold"}>Thêm sản phẩm</Text>
          <Box my="20px">
            <Divider />
          </Box>
          <Box>
            <form onSubmit={formik.handleSubmit}>
              <FormControl my="20px">
                <FormLabel>Tên sách</FormLabel>
                <Input name="bookName" placeholder='tên sách...' onChange={formik.handleChange} required/>
              </FormControl>
              <FormControl my="20px">
                <FormLabel>Danh mục</FormLabel>
                <Select name="categoryId" onChange={formik.handleChange} required>
                  <option value="">Chọn danh mục</option>
                  {categories?.map(category => {
                    return (
                      <>
                        <option key={category?.categoryId} style={{ fontWeight: "bold", color: COLOR }} disabled>{category?.nameCategory}</option>
                        {category?.categories?.map(subCategory => {
                          return (
                            <option value={subCategory?.categoryId}>{subCategory?.nameCategory}</option>
                          )
                        })}
                      </>
                    )
                  })}
                </Select>
              </FormControl>
              <FormControl my="20px">
                <FormLabel>Tác giả</FormLabel>
                <Select name="authorId" onChange={formik.handleChange} required>
                  <option value="">Chọn tác giả</option>
                  {authors.map(author => {
                    return (
                      <option value={author?.authorId}>{author?.authorName}</option>
                    )
                  })}
                </Select>
              </FormControl>
              <FormControl my="20px">
                <FormLabel>Nhà xuất bản</FormLabel>
                <Select name="publisherId" onChange={formik.handleChange} required>
                  <option value="">Chọn nhà xuất bản</option>
                  {publishers.map(publisher => {
                    return (
                      <option key={publisher?.id} value={publisher?.id}>{publisher.publisherName}</option>
                    )
                  })}
                </Select>
              </FormControl>
              <FormControl my="20px">
                <FormLabel>Hình ảnh</FormLabel>
                <Flex gap={10}>
                  {linkImage.map(link => <Image src={link} w={200} h={300} />)}
                </Flex>
                <Button onClick={open} mt={5}>Up ảnh</Button>
              </FormControl>
              <FormControl my="20px">
                <FormLabel>Giá mặc định</FormLabel>
                <Input name="price.bookDefaultPrice" placeholder='giá mặc định...' type='number' onChange={formik.handleChange} required/>
              </FormControl>
              <FormControl my="20px">
                <FormLabel>Giá khuyến mãi</FormLabel>
                <Input name="price.bookSalePrice" placeholder='giá khuyến mãi...' type='number' onChange={formik.handleChange} required/>
              </FormControl>
              <FormControl my="20px">
                <FormLabel>Mô tả</FormLabel>
                <Textarea name="bookDescription" placeholder='mô tả...' height={"180px"} onChange={formik.handleChange}/>
              </FormControl>
              <FormControl my="20px">
                <FormLabel>Số lượng</FormLabel>
                <Input name="quantity" placeholder='Số lượng...' type='number' onChange={formik.handleChange} required/>
              </FormControl>
              <FormControl my="20px">
                <FormLabel>Số trang</FormLabel>
                <Input name="numPage" placeholder='số trang...' type='number' onChange={formik.handleChange} required/>
              </FormControl>
              <FormControl my="20px">
                <FormLabel>Ngày kích hoạt</FormLabel>
                <Field name="price.activationDate" placeholder='ngày kích hoạt...' type='datetime-local' onChange={formik.handleChange} required/>
              </FormControl>
              <FormControl my="20px">
                <FormLabel>Ngày hết hạn</FormLabel>
                <Field name="price.expirationDate" placeholder='ngày hết hạn...' type='datetime-local' onChange={formik.handleChange} required/>
              </FormControl>
              <Button type="submit" bg={COLOR} color="white" _hover={{
                opacity: "80%"
              }}>Submit</Button>
            </form>
          </Box>
        </Box>
      </CustomContainer>
      <>
        <AlertBox 
          isOpen={isAddProductSuccessBoxOpen}
          onClose={onAddProductSuccessBoxClose}
          message={"Add product successfully"}
          title={"Alert"}
        />
      </>
    </FormikProvider>
  )
}

export default AddProduct
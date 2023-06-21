import React from 'react'
import CustomContainer from '../../components/root/CustomContainer'
import AuthorViewModel from './AuthorViewModel'
import AuthorList from '../../components/Author/AuthorList/AuthorList'
import { Box } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import AuthorModal from '../../components/Author/AuthorModal/AuthorModal'
import AlertBox from '../../components/AlertBox/AlertBox'

const Author = () => {

  const { 
    authors,
    isAddAuthorModalOpen,
    onAddAuthorModalClose,
    onAddAuthorModalOpen,
    addAuthorWithFormik,
    isSuccessAlertBoxOpen,
    onSuccessAlertBoxClose,
  } = AuthorViewModel()

  return (
    <CustomContainer height={"430vh"}>
      <Box my="20px" gap="10px" display={"flex"}>
        <Button 
          onClick={() => onAddAuthorModalOpen()}
          colorScheme='blue'
      >Thêm tác giả</Button>
      </Box>
      <AuthorModal 
        title={"Thêm tác giả"}
        isOpen={isAddAuthorModalOpen}
        onClose={onAddAuthorModalClose}
        handleChange={addAuthorWithFormik.handleChange}
        method={addAuthorWithFormik.handleSubmit}
        name={"nameAuthor"}
      />
      <AlertBox 
        isOpen={isSuccessAlertBoxOpen}
        onClose={onSuccessAlertBoxClose}
        message={"Thêm tác giả mới thành công"}
        title={"Thông báo"}
      />
      <AlertBox 
        isOpen={isSuccessAlertBoxOpen}
        onClose={onSuccessAlertBoxClose}
        message={"Cập nhật tác giả thành công"}
        title={"Thông báo"}
      />
      <AuthorList authors={authors}/>
    </CustomContainer>
  )
}

export default Author
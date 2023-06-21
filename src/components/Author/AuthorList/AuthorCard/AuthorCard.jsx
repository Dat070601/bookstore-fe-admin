import { Box, Card, Image, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { COLOR } from '../../../../constant'
import AuthorCardViewModel from './AuthorCardViewModel'
import AuthorModal from '../../AuthorModal/AuthorModal'
import AlertBox from '../../../AlertBox/AlertBox'

const AuthorCard = ({ authorId, authorName }) => {

  const {
    isUpdateAuthorModalOpen,
    onUpdateAuthorModalClose,
    onUpdateAuthorModalOpen,
    authorUpdateWithFormik,
    isSuccessAlertBoxOpen,
    onSuccessAlertBoxClose,
  } = AuthorCardViewModel({ authorId })

  return (
    <Box>
      <Card w="350px" _hover={{
        boxShadow: `4px 4px 15px 4px ${COLOR}`,
        transition: "100ms"
      }}>
        <Image 
          src='https://i.pinimg.com/originals/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg'
        />
        <Box mx="10px" my="30px">
          <Text color={COLOR} fontWeight={"bold"} fontSize="15px">{authorName}</Text>
          <Button 
            mt="10px"
            onClick={() => onUpdateAuthorModalOpen()}
            colorScheme='blue'
          >Cập nhật tác giả</Button>
        </Box>
      </Card>
      <AuthorModal 
        title={"Cập nhật tác giả"}
        isOpen={isUpdateAuthorModalOpen}
        onClose={onUpdateAuthorModalClose}
        name={"nameAuthor"}
        handleChange={authorUpdateWithFormik.handleChange}
        method={authorUpdateWithFormik.handleSubmit}
      />
      <AlertBox 
        isOpen={isSuccessAlertBoxOpen}
        message={"Cập nhật tác giả thành công"}
        onClose={onSuccessAlertBoxClose}
        title={"Thông báo"}
      />
    </Box>
  )
}

export default AuthorCard
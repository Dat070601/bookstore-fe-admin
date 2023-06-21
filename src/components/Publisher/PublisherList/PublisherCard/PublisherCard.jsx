import React from 'react'
import { Card } from '@chakra-ui/card'
import { Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { Text } from '@chakra-ui/layout'
import { COLOR } from '../../../../constant'
import { Button, useDisclosure } from '@chakra-ui/react'
import PublisherCardViewModel from './PublisherCardViewModel'
import PublisherModal from '../../PublisherModal/PublisherModal'

const PublisherCard = ({ publisherId, publisherName, description }) => {

  const { isOpen: isUpdatePublisherModalOpen, onOpen: onUpdatePublisherModalOpen, onClose: onUpdatePublisherModalClose } = useDisclosure()
  const { updatePublisherWithFormik } = PublisherCardViewModel({
    publisherId
  })
  return (
    <>
      <Card w="350px" _hover={{
        boxShadow: `4px 4px 15px 4px ${COLOR}`,
        transition: "100ms"
      }}>
        <Image 
          src='https://i.pinimg.com/originals/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg'
        />
        <Box mx="10px" my="30px">
          <Text color={COLOR} fontWeight={"bold"} fontSize="15px">{publisherName}</Text>
          <Button colorScheme='blue' mt="20px" onClick={() => onUpdatePublisherModalOpen()}>Cập nhật nhà xuất bản</Button>
        </Box>
      </Card>
      <PublisherModal 
        isOpen={isUpdatePublisherModalOpen}
        onClose={onUpdatePublisherModalClose}
        title={"Cập nhật nhà xuất bản"}
        handleChange={updatePublisherWithFormik.handleChange}
        handleSubmit={updatePublisherWithFormik.handleSubmit}
        namePublisher={publisherName}
        description={description}
      />
    </>
  )
}

export default PublisherCard
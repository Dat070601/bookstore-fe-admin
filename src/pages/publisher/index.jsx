import React from 'react'
import CustomContainer from '../../components/root/CustomContainer'
import PublisherList from '../../components/Publisher/PublisherList/PublisherList'
import PublisherViewModel from './PublisherViewModel'
import { Box, Button } from '@chakra-ui/react'
import PublisherModal from '../../components/Publisher/PublisherModal/PublisherModal'
import AlertBox from '../../components/AlertBox/AlertBox'

const Publisher = () => {

  const {
    publishers,
    isAddPublisherModalOpen,
    onAddPublisherModalClose,
    onAddPublisherModalOpen,
    addPublisherWithFormik,
    isSuccessBoxOpen,
    onSuccessBoxClose,
  } = PublisherViewModel()

  return (
    <CustomContainer height={"850vh"}>
      <Box mb="10px">
        <Button
          onClick={() => onAddPublisherModalOpen()} 
          colorScheme="blue">Thêm nhà xuất bản</Button>
      </Box>
      <PublisherList publishers={publishers}/>
      <PublisherModal 
        isOpen={isAddPublisherModalOpen}
        onClose={onAddPublisherModalClose}
        title={"Thêm nhà xuất bản"}
        handleChange={addPublisherWithFormik.handleChange}
        handleSubmit={addPublisherWithFormik.handleSubmit}
      />
      <AlertBox 
        isOpen={isSuccessBoxOpen}
        onClose={onSuccessBoxClose}
        title={"Thông báo"}
        message={"Thêm nhà xuất bản thành công"}
      />
      <AlertBox 
        title={"Thông báo"}
        message={"Cập nhật nhà xuất bản thành công"}
        onClose={onSuccessBoxClose}
        isOpen={isSuccessBoxOpen}
      />
    </CustomContainer>
  )
}

export default Publisher
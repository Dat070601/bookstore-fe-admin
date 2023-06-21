import { Button, FormControl, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea } from '@chakra-ui/react'
import React from 'react'

const PublisherModal = ({ title, isOpen, onClose, handleChange, handleSubmit, namePublisher, description }) => {
  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalOverlay></ModalOverlay>
        <ModalContent>
          <ModalCloseButton onClick={() => onClose()}/>
          <ModalHeader>
            {title}
          </ModalHeader>
          <form onSubmit={handleSubmit}>
            <ModalBody display={"flex"} flexDir={"column"} gap="10px">
              <FormControl>
                <Input placeholder='Tên nhà xuất bản...' name="namePublisher" defaultValue={namePublisher} onChange={handleChange} />
              </FormControl>
              <FormControl>
                <Textarea height={"200px"} placeholder='Mô tả...' name="description" defaultValue={description} onChange={handleChange}/>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" colorScheme='blue'>Ok</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PublisherModal
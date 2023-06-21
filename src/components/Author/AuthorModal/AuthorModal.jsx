import { Button, FormControl, Input, InputGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

const AuthorModal = ({ title, isOpen, onClose, handleChange, method, name }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay></ModalOverlay>
      <ModalContent>
        <ModalCloseButton onClick={onClose}></ModalCloseButton>
        <form onSubmit={method}>
          <ModalHeader>{title}</ModalHeader>
          <ModalBody>
            <FormControl>
              <InputGroup>
                <Input placeholder='Tên tác giả...' name={name} onChange={handleChange}></Input>
              </InputGroup>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" colorScheme='blue'>Ok</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

export default AuthorModal
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'

const ModalBox = ({ header, bodies, footers, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton onClose={onClose} /> 
        <ModalHeader>
          {header}
        </ModalHeader>
        <ModalBody>
          {[...bodies].map(component => component)}
        </ModalBody>
        <ModalFooter>
          {[...footers].map(component => component)}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalBox
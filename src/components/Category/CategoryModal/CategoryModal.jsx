import { Button, Input, InputGroup, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import CategoryModalViewModel from './CategoryModalViewModel'
import AlertBox from '../../AlertBox/AlertBox'

const CategoryModal = ({ isOpen, onClose }) => {
  
  const { formik, isAddCategoryAlertBoxOpen, onAddCategoryAlertBoxClose } = CategoryModalViewModel()

  return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Thêm danh mục</ModalHeader>    
            <form onSubmit={formik.handleSubmit}>
              <ModalBody>
                <InputGroup>
                  <Input
                    placeholder='tên danh mục..'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="categoryName"
                  ></Input>
                </InputGroup>
              </ModalBody>    
              <ModalFooter gap="10px">
                <Button type="submit" colorScheme='blue'>Thêm</Button>
                <Button onClick={() => onClose()} colorScheme='red'>Thoát</Button>
              </ModalFooter>            
            </form>
          </ModalContent>
        </Modal>
        <AlertBox 
          isOpen={isAddCategoryAlertBoxOpen}
          onClose={onAddCategoryAlertBoxClose}
          message={"Thêm danh mục thành công"}
          title={"Thông báo"}
        />
      </>
  )
}

export default CategoryModal
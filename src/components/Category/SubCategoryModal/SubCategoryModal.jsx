import { Button, Input, InputGroup, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select } from '@chakra-ui/react'
import React from 'react'
import SubCategoryModalViewModel from './SubCategoryModalViewModel'
import AlertBox from '../../AlertBox/AlertBox'

const SubCategoryModal = ({ isOpen, onClose, categories }) => {

  const { formik, isAddSubCategoryModalOpen, onAddSubCategoryModalClose } = SubCategoryModalViewModel()

  return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
          <form onSubmit={formik.handleSubmit}>
            <ModalHeader>Thêm danh mục con</ModalHeader>
            <ModalBody style={{ display: "flex", flexDirection: "column", gap: "10px" }}>    
                <InputGroup>
                  <Select onChange={formik.handleChange} name="subId">
                    <option value="">chọn tên danh mục</option>
                    {categories.map(category => {
                      return (
                        <option key={category.categoryId} value={category.categoryId}>{category.nameCategory}</option>
                      )
                    })}
                  </Select>
                </InputGroup>
                <InputGroup>
                  <Input
                    placeholder='ten danh muc con...'
                    name="categoryName"
                    onChange={formik.handleChange}
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
          isOpen={isAddSubCategoryModalOpen}
          onClose={onAddSubCategoryModalClose}
          message={"Add subcategory successfully"}
          title={"Alert"}
        />
      </>
  )
}

export default SubCategoryModal
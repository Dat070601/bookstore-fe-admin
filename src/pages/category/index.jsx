import React from 'react'
import CustomContainer from '../../components/root/CustomContainer'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import CategoryViewModel from './CategoryViewModel'
import { COLOR } from '../../constant'
import CategoryModal from '../../components/Category/CategoryModal/CategoryModal'
import SubCategoryModal from '../../components/Category/SubCategoryModal/SubCategoryModal'
import { MdOutlineCategory } from 'react-icons/md'
const Category = () => {

  const { 
    categories, 
    isAddCategoryModalOpen, 
    isAddSubCategoryModalOpen, 
    onAddCategoryModalClose, 
    onAddCategoryModalOpen, 
    onAddSubCategoryModalOpen, 
    onAddSubCategoryModalClose  
  } = CategoryViewModel()
  
  return (
      <CustomContainer width={window.screen.availWidth} height={"75vh"} minHeight={window.screen.availHeight}>   
        <Flex alignItems="center" mb={6}>
            <Flex alignItems="center">
              <Box color="white" mr={2} bg={"blue.500"} p={2} borderRadius={"xl"} boxShadow={"xl"}rounded='md'>
                <Icon as={MdOutlineCategory} boxSize={7}/>
              </Box>
              <Text fontSize="2xl" fontWeight="medium">Quản lý danh mục</Text>
            </Flex>
        </Flex>
        <Box display={"flex"} flexDir={"column"} gap="10px" ml="100px" mr="400px">
          <Box display={"flex"} gap={"10px"}>
            <Button colorScheme='blue' onClick={() => onAddCategoryModalOpen()}>Thêm danh mục</Button>
            <Button colorScheme='blue' onClick={() => onAddSubCategoryModalOpen()}>Thêm danh mục con</Button>
          </Box>   
          <Box border="1px solid" color="gray.100" background={"white"} height={"80vh"} overflow={"hidden"} overflowY={"auto"}>
            <Accordion width={"1400px"} display={"flex"} flexDirection={"column"}>
              {categories.map(category => {
                return (
                  <AccordionItem>
                    <AccordionButton px="30px" py="30px" display={"flex"} justifyContent={"space-between"}>
                      <Text fontWeight={"bold"} color={COLOR} key={category.categoryId}>{category.nameCategory}</Text>
                      <AccordionIcon color={COLOR}/>
                    </AccordionButton>
                    <AccordionPanel>
                      {category?.categories?.map(subCategory => {
                        return (
                          <Box key={subCategory.categoryId} px="30px" py="30px" _hover={{
                            background: "blue.100",
                          }}>
                            <Text color={COLOR}>{subCategory?.nameCategory}</Text>
                          </Box>
                        )
                      })}
                    </AccordionPanel>
                  </AccordionItem>
                )
              })}
            </Accordion>        
          </Box>
        </Box>
        <CategoryModal 
          isOpen={isAddCategoryModalOpen}
          onClose={onAddCategoryModalClose}
        />
        <SubCategoryModal 
          isOpen={isAddSubCategoryModalOpen}
          onClose={onAddSubCategoryModalClose}
          categories={categories}
        />
      </CustomContainer>    
  )
}

export default Category
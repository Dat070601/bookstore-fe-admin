import { useDispatch, useSelector } from "react-redux"
import { categoriesSelector } from "../../stores/reducers/CategoryReducer"
import { useEffect } from "react"
import { fetchCategoriesAsyncThunk } from "../../stores/thunks/CategoryThunk"
import { useDisclosure } from "@chakra-ui/react"

const CategoryViewModel = () => {

  const dispatch = useDispatch()
  const { isOpen: isAddCategoryModalOpen, onOpen: onAddCategoryModalOpen, onClose: onAddCategoryModalClose } = useDisclosure()
  const { isOpen: isAddSubCategoryModalOpen, onOpen: onAddSubCategoryModalOpen, onClose: onAddSubCategoryModalClose } = useDisclosure()
  const { categories } = useSelector(categoriesSelector)

  useEffect(() => {
    dispatch(fetchCategoriesAsyncThunk())
  }, [])

  return {
    categories,
    isAddCategoryModalOpen,
    onAddCategoryModalClose,
    onAddCategoryModalOpen,
    isAddSubCategoryModalOpen,
    onAddSubCategoryModalOpen,
    onAddSubCategoryModalClose  
  }
}

export default CategoryViewModel
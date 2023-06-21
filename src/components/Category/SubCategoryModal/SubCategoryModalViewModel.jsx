import { useDispatch, useSelector } from "react-redux"
import { categoriesSelector, resetState } from "../../../stores/reducers/CategoryReducer"
import { useFormik } from "formik"
import { addSubCategoryAsyncThunk, fetchCategoriesAsyncThunk } from "../../../stores/thunks/CategoryThunk"
import useLocalStorage from '../../../hooks/useLocalStorage'
import { useEffect } from "react"
import { useDisclosure } from "@chakra-ui/hooks"

const SubCategoryModalViewModel = () => {

  const dispatch = useDispatch()
  const { isSubCategoryCreated } = useSelector(categoriesSelector)
  const { isOpen: isAddSubCategoryModalOpen, onOpen: onAddSubCategoryModalOpen, onClose: onAddSubCategoryModalClose } = useDisclosure()
  const { get } = useLocalStorage()
  const accessTokenSaved = get({
    key: "accessToken"
  })

  const formik = useFormik({
    initialValues: {
      subId: "",
      categoryName: ""
    },
    onSubmit: (values) => {
      console.log(values)
      dispatch(addSubCategoryAsyncThunk({
        ...values,
        token: accessTokenSaved
      }))
    }
  })

  useEffect(() => {
    if (isSubCategoryCreated === true) {
      onAddSubCategoryModalOpen()
      dispatch(fetchCategoriesAsyncThunk())
    }
    return () => {
      dispatch(resetState())
    }
  }, [isSubCategoryCreated])

  return {
    formik,
    isAddSubCategoryModalOpen,
    onAddSubCategoryModalClose
  }
}

export default SubCategoryModalViewModel
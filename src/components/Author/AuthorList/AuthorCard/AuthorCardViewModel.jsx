import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { useDisclosure } from "@chakra-ui/react"
import { getAuthorsAsyncThunk, updateAuthorAsyncThunk } from "../../../../stores/thunks/AuthorThunk"
import { authorSelector, resetIsAuthorUpdatedState } from "../../../../stores/reducers/AuthorReducer"
import { useEffect } from "react"

const AuthorCardViewModel = ({ authorId }) => {
  const authorUpdateWithFormik = useFormik({
    initialValues: {
      nameAuthor: ""
    },
    onSubmit: (values) => {
      updateAuthor({
        authorId,
        nameAuthor: values.nameAuthor
      })
    }
  })
  
  const { isAuthorUpdated } = useSelector(authorSelector)
  const dispatch = useDispatch()
  const { isOpen: isUpdateAuthorModalOpen, onOpen: onUpdateAuthorModalOpen, onClose: onUpdateAuthorModalClose } = useDisclosure()
  const { isOpen: isSuccessAlertBoxOpen, onOpen: onSuccessAlertBoxOpen, onClose: onSuccessAlertBoxClose } = useDisclosure()

  const updateAuthor = ({ authorId, nameAuthor }) => {
    dispatch(updateAuthorAsyncThunk({
      authorId,
      nameAuthor
    }))
  }

  return {
    authorUpdateWithFormik,
    isUpdateAuthorModalOpen,
    onUpdateAuthorModalOpen,
    onUpdateAuthorModalClose,
    isSuccessAlertBoxOpen,
    onSuccessAlertBoxOpen,
    onSuccessAlertBoxClose
  }
}

export default AuthorCardViewModel
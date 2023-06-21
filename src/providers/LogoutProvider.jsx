import { createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useDisclosure } from "@chakra-ui/hooks";
import { Outlet } from "react-router";

export const LogoutContext = createContext({
  isLogoutModalOpen: false,
  onLogoutModalOpen: () => {},
  onLogoutModalClose: () => {}
})

const LogoutProvider = ({ children }) => {
  const { get, set, remove } = useLocalStorage()
  const accessToken = get({
    key: "accessToken"
  })
  const { isOpen: isLogoutModalOpen, onOpen: onLogoutModalOpen, onClose: onLogoutModalClose } = useDisclosure()

  useEffect(() => {
    if (accessToken) {
      setTimeout(() => {
        remove({
          key: "accessToken"
        })
      }, 1800000)
    }
    if (!accessToken) {
      onLogoutModalOpen()
    } 
  }, [accessToken])  

  const values = {
    isLogoutModalOpen,
    onLogoutModalClose,
    onLogoutModalOpen
  }

  return (
    <LogoutContext.Provider value={values}>
      { children }
    </LogoutContext.Provider>
  )
}

export default LogoutProvider
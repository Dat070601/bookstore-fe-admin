import { createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { Outlet, useNavigate } from "react-router";

const AuthProvider = () => {
  const { get } = useLocalStorage()
  const navigate = useNavigate()
  const accessToken = get({
    key: "accessToken"
  })

  useEffect(() => {
    if (!accessToken) {
      navigate("/")
    } else {
      navigate("/home")
    }
  }, [accessToken])

  return (
    <Outlet />
  )
}

export default AuthProvider
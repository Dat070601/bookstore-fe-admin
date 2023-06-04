import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router, Routes, Route, useNavigate } from 'react-router-dom'
import Login from './pages/auth'
import { Switch, useDisclosure } from '@chakra-ui/react'
import Home from './pages/home'
import Sidebar from './components/sidebar/sidebar'
import Navbar from './components/Navbar/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import AddProduct from './pages/addProduct'
import AlertLoginModal from './components/AlertLoginModal'
import useLocalStorage from './hooks/useLocalStorage'
import Product from './pages/product'

function  App() {
  const [count, setCount] = useState(0)
  const { remove, get} = useLocalStorage()
  const accessTokenSaved = get({
    key: "accessToken"
  })
  const {onClose, onOpen, isOpen } = useDisclosure()
  const navigate = useNavigate()
 
  useEffect(() => {
		if (accessTokenSaved)
		{
			setTimeout(() => {
				remove({
					key: "accessToken"
				})
				onOpen()
			}, 1800000)
		}
	}, [])

  return (
    <div>
      <AlertLoginModal
          title={"Alert"}
          body={"your session has timed out"}
          isOpen={isOpen}
          onClose={onClose}
          reLogin={() => {
            onClose()
            window.location.href = "/login"
          }}
          close={() => {
            onClose()
            window.location.reload()
          }}
      />
      <Routes>
        <Route index path='/' element={<Login />}></Route>
        <Route element={<Sidebar />}>
          <Route path='home' element={<Home />}></Route>
          <Route path='product' element={<Product />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App

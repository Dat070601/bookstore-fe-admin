import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router, Routes, Route, useNavigate } from 'react-router-dom'
import Login from './pages/auth'
import { Switch, useDisclosure } from '@chakra-ui/react'
import Home from './pages/home'
import Navbar from './components/Navbar/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import AddProduct from './pages/addProduct'
import AlertLoginModal from './components/AlertLoginModal'
import useLocalStorage from './hooks/useLocalStorage'
import Product from './pages/product'
import Order from './pages/order'
import Category from './pages/category'
import Author from './pages/author'
import Publisher from './pages/publisher'
import LogoutProvider, { LogoutContext } from './providers/LogoutProvider'
import AuthProvider from './providers/AuthProvider'
import Statistical from './pages/statistical'
import Sidebar from './components/Sidebar/Sidebar.jsx'

function App() {
  const logoutContext = useContext(LogoutContext)
  const { isLogoutModalOpen, onLogoutModalClose } = logoutContext

  return (
    <div>
      <AlertLoginModal
          title={"Alert"}
          body={"your session has timed out"}
          isOpen={isLogoutModalOpen}
          onClose={onLogoutModalClose}
          reLogin={() => {
            onLogoutModalClose()
            window.location.href = "/login"
          }}
      />
      <Routes>
        <Route index path='/' element={<Login />}></Route>
          <Route element={<Sidebar />}>
            <Route path='home' element={<Home />}></Route>
            <Route path='product/:page' element={<Product />}></Route>
            <Route path='product/add-product' element={<AddProduct />}></Route>
            <Route path='order' element={<Order />}></Route>
            <Route path='category' element={<Category />}></Route>
            <Route path='category/add-category'></Route>
            <Route path="author" element={<Author />}></Route>
            <Route path="publisher" element={<Publisher />}></Route>
            <Route path="statistical" element={<Statistical />}></Route>
          </Route>
      </Routes>
    </div>
  )
}

export default App

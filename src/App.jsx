import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router, Routes, Route } from 'react-router-dom'
import Login from './pages/auth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route index path='/' element={<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default App

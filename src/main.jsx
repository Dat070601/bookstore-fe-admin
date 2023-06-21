import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Box, ChakraProvider } from "@chakra-ui/react"
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './stores'
import LogoutProvider from './providers/LogoutProvider.jsx'
import Footer from './components/Footer/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <HashRouter>
        <LogoutProvider>
        <Provider store = {store}>
          <App />
          <Footer/>
        </Provider>
        </LogoutProvider>
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>,
)

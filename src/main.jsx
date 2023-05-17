import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Box, ChakraProvider } from "@chakra-ui/react"
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './stores'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <HashRouter>
        <Provider store = {store}>
          <App />
        </Provider>
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>,
)

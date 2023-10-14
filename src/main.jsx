import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { HashRouter, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/auth-context.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <HashRouter>
        <AuthProvider>
        <App />

        </AuthProvider>
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>,
)

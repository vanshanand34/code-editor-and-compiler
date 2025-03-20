import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { system } from '@chakra-ui/react/preset'


import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)

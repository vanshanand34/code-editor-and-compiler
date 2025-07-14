import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { system } from '@chakra-ui/react/preset'
import { ColorModeProvider } from './components/ui/color-mode.jsx'

import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </StrictMode>,
)

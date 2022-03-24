import { extendTheme } from '@chakra-ui/react'

//extender a configurações que o meu theme tem. Mudando a estilização no component
const colors = {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  }
  
export const theme = extendTheme({ colors })
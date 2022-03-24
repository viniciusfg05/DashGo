import { extendTheme, Theme } from '@chakra-ui/react'

//extender a configurações que o meu theme tem. Mudando a estilização no component
export const theme = extendTheme({
  color: {
    gray: {

    },
    styles: {
      global: {
        body: {
          bg: 'gray.900',
          color: 'gray.50'
        }
      }
    }
  }
} as Theme | {} ) 

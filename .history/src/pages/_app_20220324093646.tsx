import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/chakraConfigTheme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}> 
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

// * resetCSS : Reseta as configurações do CSS predefinidas
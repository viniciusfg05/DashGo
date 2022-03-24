import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { chakraConfigTheme } from '../styles/chakraConfigTheme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={chakraConfigTheme}> 
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

// * resetCSS : Reseta as configurações do CSS predefinidas
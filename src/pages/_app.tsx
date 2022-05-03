import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { chakraConfigTheme } from '../styles/chakraConfigTheme'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'

//verifica é um ambiente de development
if (process.env.NODE_ENV === "development") {
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarDrawerProvider>
      <ChakraProvider theme={chakraConfigTheme}> 
        <Component {...pageProps} />
      </ChakraProvider>
    </SidebarDrawerProvider>

  )
}

export default MyApp

// * resetCSS : Reseta as configurações do CSS predefinidas
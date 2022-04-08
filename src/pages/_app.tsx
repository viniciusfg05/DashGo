import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { chakraConfigTheme } from '../styles/chakraConfigTheme'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'

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
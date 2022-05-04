import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ChakraProvider } from '@chakra-ui/react'
import { chakraConfigTheme } from '../styles/chakraConfigTheme'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'

//verifica é um ambiente de development
if (process.env.NODE_ENV === "development") {
  makeServer()
}

const queryClient = new QueryClient() 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarDrawerProvider>
        <ChakraProvider theme={chakraConfigTheme}> 
          <Component {...pageProps} />
        </ChakraProvider>
      </SidebarDrawerProvider>

      <ReactQueryDevtools/>
    </QueryClientProvider>

  )
}

export default MyApp

// * resetCSS : Reseta as configurações do CSS predefinidas
import { Box, Flex, SimpleGrid,Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import SideBar from "../components/Sidebar";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options = {

}

const series = [
  {name: 'series1', data: [31, 120, 180, 200, 300, 109]}
]
export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1080} mx="auto" px="6">
        <SideBar/>

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
          >
            <Text fontSize="lg" mb="4">
              Inscritos da Semana
            </Text>

            <Chart 
              type="area"
              height={160}
              series={series}
              options={options}
            />
          </Box>

          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
          >
            <Text fontSize="lg" mb="4">
              Taxa de abertura 
            </Text>

          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

/* minChildWidth="320px" - minimo que os intens vao ter de largura se ao 
reduzior a pagina ele quebra a linha automatico
*/
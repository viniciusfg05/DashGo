import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header/Index";
import { Pagination } from "../../components/Pagination";
import SideBar from "../../components/Sidebar";

export default function UserList() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1200} mx="auto" px="6">
                <SideBar/>

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>

                        <Button as="a" size="sn" fontSize="sn" colorScheme="pink"
                        p="1" leftIcon={<Icon as={RiAddLine} fontSize="22"/>} 
                        >
                            Criar Novo
                        </Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha" >
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="pink"/>
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td  px="6">
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Vinicius Ferreira</Text>
                                        <Text fontSize="sm" color-="gray.300">vinicius.fg05@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>05 de abril de 2022</Td>
                                <Td>
                                <Button as="a" size="sn" fontSize="sn" colorScheme="purple"
                                    p="1" leftIcon={<Icon as={RiPencilLine} fontSize="15"/>}
                                >
                                  Editar
                                </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td  px="6">
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Vinicius Ferreira</Text>
                                        <Text fontSize="sm" color-="gray.300">vinicius.fg05@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>05 de abril de 2022</Td>
                                <Td>
                                <Button as="a" size="sn" fontSize="sn" colorScheme="purple"
                                    p="1" leftIcon={<Icon as={RiPencilLine} fontSize="15"/>}
                                >
                                  Editar
                                </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td  px="6">
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Vinicius Ferreira</Text>
                                        <Text fontSize="sm" color-="gray.300">vinicius.fg05@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>05 de abril de 2022</Td>
                                <Td>
                                <Button as="a" size="sn" fontSize="sn" colorScheme="purple"
                                    p="1" leftIcon={<Icon as={RiPencilLine} fontSize="15"/>}
                                >
                                  Editar
                                </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}
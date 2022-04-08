import { Box, Button, Divider, Flex, Heading, Icon, SimpleGrid, Stack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import SideBar from "../../components/Sidebar";
import { ImFloppyDisk } from "react-icons/im";
import { TiCancel } from "react-icons/ti";
import { Header } from "../../components/Header/Index";
import Link from "next/link";


export default function CreateUser() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1200} mx="auto" px="6">
                <SideBar/>

                <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
                  <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

                  <Divider my="6" borderColor="gray.700"/>

                  <Stack spacing="8">
                    <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                      <Input name="name" label="Nome Completo"/>
                      <Input name="Email" label="E-mail"/>
                    </SimpleGrid>

                    <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                      <Input name="password" type="password" label="Senha"/>
                      <Input name="password_confirmation" type="passaword" label="Confirmar senha"/>
                    </SimpleGrid>
                  </Stack>

                  <Flex mt={["6", "8"]} justify="flex-end">
                    <Stack spacing={["2", "4"]} direction="row">
                      <Link href="/users" passHref>
                        <Button as="a" colorScheme="whiteAlpha" leftIcon={<Icon as={ImFloppyDisk}/>}>Cancelar</Button>
                      </Link>
                      <Button colorScheme="pink" leftIcon={<Icon as={TiCancel} fontSize="23"/>}>Salvar</Button>
                    </Stack>
                  </Flex>
                </Box>
            </Flex>
        </Box>
    )
}
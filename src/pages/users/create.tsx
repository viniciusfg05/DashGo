import { Box, Button, Divider, Flex, Heading, Icon, SimpleGrid, Stack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import SideBar from "../../components/Sidebar";
import { ImFloppyDisk } from "react-icons/im";
import { TiCancel } from "react-icons/ti";
import { Header } from "../../components/Header/Index";
import Link from "next/link";


import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SubmitHandler, useForm } from "react-hook-form";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

//Criando um schema de validação
const CreateUserFormSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().required('Informe um email').email('Email inválido'),
  password: yup.string().required('Informe uma senha').min(6, 'infome uma senha de no minimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password'),
  ], 'As senhas precisam ser iguais')
}) 

export default function CreateUser() {
  const { register, handleSubmit, formState: {errors, isSubmitted},  } = useForm({
    resolver: yupResolver(CreateUserFormSchema)
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (value) => {
    await new Promise(resolver => setTimeout(resolver, 2000))
    console.log(value)
  }

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1200} mx="auto" px="6">
                <SideBar/>

                <Box as="form" flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]} onSubmit={handleSubmit(handleCreateUser)}>
                  <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

                  <Divider my="6" borderColor="gray.700"/>

                  <Stack spacing="8">
                    <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                      <Input name="name" type="text" label="Nome Completo" error={errors.name} {...register('name')} />
                      <Input name="Email" label="E-mail" error={errors.email} {...register('email')}/>
                    </SimpleGrid>

                    <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                      <Input name="password" type="password" label="Senha" error={errors.password} {...register('password')}/>
                      <Input name="password_confirmation" type="passaword" label="Confirmar senha" error={errors.password_confirmation} {...register('password_confirmation')}/>
                    </SimpleGrid>
                  </Stack>

                  <Flex mt={["6", "8"]} justify="flex-end">
                    <Stack spacing={["2", "4"]} direction="row">
                      <Link href="/users" passHref>
                        <Button as="a" colorScheme="whiteAlpha" leftIcon={<Icon as={ImFloppyDisk}/>}>Cancelar</Button>
                      </Link>
                      <Button type="submit" colorScheme="pink" leftIcon={<Icon as={TiCancel} fontSize="23" />}>Salvar</Button>
                    </Stack>
                  </Flex>
                </Box>
            </Flex>
        </Box>
    )
}
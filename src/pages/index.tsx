import { Button, Flex, Stack, FormLabel, FormControl} from "@chakra-ui/react";
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from "../components/Form/Input";
import { FieldError } from 'react-hook-form'
import { AuthContext } from '../contexts/AuthContext'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useContext } from "react";

type SignInFormData = {
  email: string;
  password: string;
  error: FieldError;
}


//Criando um schema de validação
const signInFormSchema = yup.object().shape({
  email: yup.string().required('Informe um email').email('Email inválido'),
  password: yup.string().required('Informe uma senha'), 
}) 

export default function SingIn() {
  const { register, handleSubmit, formState: {errors, isSubmitted},  } = useForm({
    resolver: yupResolver(signInFormSchema)
  })
  console.log(errors)
  
  const { signIn } = useContext(AuthContext)
  

  const handleSignIn: SubmitHandler<SignInFormData> = async (value) => {
    await new Promise(resolver => setTimeout(resolver, 2000))

    signIn(value)
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center" 
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        borderRadius={8}
        flexDir="column"
        p="8"
        onSubmit={handleSubmit(handleSignIn)}
      >
        
        <Stack spacing={4}> 

          <Input name="email" type="email" label="E-mail" error={errors.email} {...register('email')} />
          <Input name="password" type="password" label="Senha" error={errors.password} {...register('password')} />

        </Stack>

        <Button type="submit" colorScheme="pink" mt="6" size="lg" isLoading={isSubmitted}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

 
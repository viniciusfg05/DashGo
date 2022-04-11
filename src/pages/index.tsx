import { Button, Flex, Stack, FormLabel, FormControl} from "@chakra-ui/react";
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
}

export default function SingIn() {
  const { register, handleSubmit } = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = (value) => {
    console.log(value)
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

          <Input name="email" type="email" label="E-mail" {...register('email')} />
          <Input name="password" type="password" label="Senha" {...register('password')} />

        </Stack>

        <Button type="submit" colorScheme="pink" mt="6" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
 
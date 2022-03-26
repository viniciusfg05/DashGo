import { Button, Flex, Stack, FormLabel, FormControl} from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function SingIn() {
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
      >
        
        <Stack spacing={4}> 

          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />

        </Stack>

        <Button type="submit" colorScheme="pink" mt="6" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
 
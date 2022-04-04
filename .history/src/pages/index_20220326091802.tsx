import { Button, Flex, Input, Stack, FormLabel} from "@chakra-ui/react";

export default function Home() {
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
          <FormLabel htmlFor="email">E-mail</FormLabel>

          <Input
          id="email"
          name="email"
          type="email"
          focusBorderColor="pink.500"
          bgColor="gray.900"
          variant={"filled"}
          _hover={{
            bgColor: 'gray-900'
          }}
          size="lg"
          />
          
          <FormLabel htmlFor="password">Senha</FormLabel>

          <Input
          id='password'
          name="password"
          type="password"
          focusBorderColor="pink.500"
          bgColor="gray.900"
          variant={"filled"} //variente se o input tem borda ou não
          _hover={{
            bgColor: 'gray-900'
          }}
          size="lg"
          />
        </Stack>

        <Button type="submit" colorScheme="pink" mt="6" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
 
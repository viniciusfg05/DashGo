import { Button, Flex, Input} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      p="6"
      
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        borderRadius={8}
        flexDir="column"
        p="6"
      >
        <Input name="email" type="email"/>
        <Input name="password" type="password"/>

        <Button type="submit" mt="6">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
 
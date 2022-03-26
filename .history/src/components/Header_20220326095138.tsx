import { Flex, Text} from "@chakra-ui/react";


export function Header() {
  return (
    <Flex
    as="header"
    w='100%'
    maxWidth={1200}
    h='20'
    mx="auto"
    mt='4'
    px='6'
    align='center'
    >
      <Text

        fontSize="3xl"
        fontWeight="bold"
        letter-spacing="tight" //deixa as fonts um pouco mais grudadas
        w="64"
         

      >DashGo</Text>
    </Flex>
  )
}
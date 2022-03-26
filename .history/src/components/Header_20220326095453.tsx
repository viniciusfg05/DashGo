import { Flex, Text} from "@chakra-ui/react";


export function Header() {
  return (
    <Flex
    as="header"
    w='100%'
    maxWidth={1080}
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
      >
        DashGo
        <Text as="span" ml="1" color="pink.500">.</Text>


        <Flex
          as="label"
          flex="1"
          py="4"
          px="8"
          maxWidth={400}
        >
          oiii
        </Flex>
      </Text>
    </Flex>
  )
}
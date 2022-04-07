import { Text } from "@chakra-ui/react";


export function Logo() {
  return(
  <Text
    fontSize={["2xl", "3xl"]}
    fontWeight="bold"
    letter-spacing="tight" //deixa as fonts um pouco mais grudadas
    w="64"
  >
    DashGo
    <Text as="span" ml="1" color="pink.500">.</Text>
  </Text>
  )
}
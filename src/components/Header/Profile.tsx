import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showPropileData?: boolean;
}

export function Profile({showPropileData = true}: ProfileProps ) {
  return(
    <Flex align="center">
      {showPropileData && (
        <Box mr="4" textAlign="right">
          <Text>Vinícius Ferreira</Text>
          <Text color="gray.300" fontSize="small">vinicius.fg05@gmail.com</Text>
        </Box>
      )}

    <Avatar 
      size="md"
      name="Vinicius Ferreira"
      src="https:github.com/viniciusfg05.png"
    />
  </Flex>
  )
}
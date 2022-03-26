import { Button, Flex, Input, Stack, FormLabel, FormControl} from "@chakra-ui/react";


interface InputProps{
  name: string;
  label?: string;
}

export function Iput() {
  return (
    <FormControl>
    <FormLabel htmlFor="email">E-mail</FormLabel>          <Input

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
    
  </FormControl>
  )
}
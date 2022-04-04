import { Button, Flex, Input, Stack, FormLabel, FormControl} from "@chakra-ui/react";


interface InputProps{
  name: string;
  label?: string;
}

export function Input({name, label}: InputProps) {
  return (
    <FormControl>
    {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>} {//se existir o label}
    
    <Input
    id={name}
    name={name}
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
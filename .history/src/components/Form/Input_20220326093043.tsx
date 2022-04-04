import { Button, Flex, Input as ChakraInput, Stack, FormLabel, FormControl, InputProps as ChakraInputProps} from "@chakra-ui/react";


interface InputProps extends ChakraInputProps{
  name: string;
  label?: string;
}

export function Input({name, label}: InputProps) {
  return (
    <FormControl>
    {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>} {//se existir o label}
    
    <ChakraInput
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

{
/*

Vamos externder as propriedade do input e repassar para o Input do chakra

*/
}
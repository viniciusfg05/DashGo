import { Button, Flex, Input as ChakraInput, Stack, FormLabel, FormControl, InputProps as ChakraInputProps} from "@chakra-ui/react";


interface InputProps extends ChakraInputProps{
  name: string;
  label?: string;
}

export function Input({name, label, ...rest}: InputProps) {
  return (
    <FormControl>
    {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>} 
    
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
    {...rest}
    />
    
  </FormControl>
  )
}

{
/*

Vamos externder as propriedade do input e repassar para o Input do chakra

## Se existir o label
{!!label && <FormLabel htmlFor={name}>{label}</FormLabel>} 

*/
}
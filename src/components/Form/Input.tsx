import { forwardRef, ForwardRefRenderFunction } from "react";
import { Button, Flex, Input as ChakraInput, Stack, FormLabel, FormControl, InputProps as ChakraInputProps} from "@chakra-ui/react";


interface InputProps extends ChakraInputProps{
  name: string;
  label?: string;
  
}

//para criação do formulario vamo tranformar esse Input em umas const
//Tranformar o input em InputBase e exporta desta forma (export const Input = forwardRef(InputBase)) - fazendo o encaminhamento da ref
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({name, label, ...rest}, ref) => {
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
    ref={ref}
    {...rest}
    />
    
  </FormControl>
  )
}

export const Input = forwardRef(InputBase)

{
/*

Vamos externder as propriedade do input e repassar para o Input do chakra

## Se existir o label
{!!label && <FormLabel htmlFor={name}>{label}</FormLabel>} 

*/
}
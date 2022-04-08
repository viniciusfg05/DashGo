import { Icon, Text, Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";
import { RiDashboardLine } from "react-icons/ri";

interface NavLinkProp extends LinkProps{
  icon: ElementType; // Quando eu passa a referencia do elemento somente pelo nome (as={RiDashboardLine})
  children: string;
  href: string;
}

export function NavLink({icon, children, href ,...rest}:NavLinkProp ) {
  return (
    <Link href={href} passHref> 
      <ChakraLink display="flex" alignItems="center" {...rest}> 
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </Link>

  )
}
//passHref = para o navegador mostrar o link a qual a acora vai mandar, pq não mostra quando tem outro componente fazendo isso, essa função serve para forçar isso
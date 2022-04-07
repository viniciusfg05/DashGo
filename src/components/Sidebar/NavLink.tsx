import { Icon, Text, Link, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { RiDashboardLine } from "react-icons/ri";

interface NavLinkProp extends LinkProps{
  icon: ElementType; // Quando eu passa a referencia do elemento somente pelo nome (as={RiDashboardLine})
  children: string;
}

export function NavLink({icon, children, ...rest}:NavLinkProp ) {
  return (
    <Link display="flex" alignItems="center" {...rest}> 
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}
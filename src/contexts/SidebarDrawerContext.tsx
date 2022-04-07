import { useDisclosure } from "@chakra-ui/react";
import { createContext, ReactNode } from "react";

interface SidebarDrawerContextProps {
  children: ReactNode;
}

const SidebarDrawerContext = createContext();

export function SidebarDrawerContext({children}: SidebarDrawerContextProps) {
  const { getDisclosureProps } = useDisclosure()

  return(
    <SidebarDrawerContext.Provider value={getDisclosureProps}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}
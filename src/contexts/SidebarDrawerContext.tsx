import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerContextProps {
  children: ReactNode;
}

type SidebarDrawerContextData= UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({children}: SidebarDrawerContextProps) {
  const getDisclosureProps = useDisclosure()
  const router = useRouter()

  useEffect(() => {getDisclosureProps.onClose()}, [router.asPath]) // sempre que mudar de rota a Sidebar fecha

  return(
    <SidebarDrawerContext.Provider value={getDisclosureProps}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
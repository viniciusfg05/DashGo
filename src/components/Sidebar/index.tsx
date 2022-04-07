import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue} from "@chakra-ui/react";
import { SideBarNav } from "./SideBarNav";

export default function SideBar() {
  const inDrawerSideBar = useBreakpointValue({
    base: true,
    lg: false
  })

  if(inDrawerSideBar) {
    return(
      <Drawer isOpen={true} placement="left" onClose={() => {}}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6"/>
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as="aside" w="64" mr="8">

      <SideBarNav />
    </Box>
  )
}
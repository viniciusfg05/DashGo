import { Flex, Icon, IconButton, useBreakpointValue} from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SeachBox } from "./SeachBox";


export function Header() {
  const {onOpen} = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })


  return (
    <Flex
    as="header"
    w='100%'
    maxWidth={1080}
    h='20'
    mx="auto"
    mt='4'
    px='6'
    align='center'
    >
      { !isWideVersion && (
        <IconButton
        aria-label="Open navigation"
        icon={<Icon as={RiMenuLine} />}
        fontSize="26"
        variant="ghost"
        onClick={onOpen}
        mr="2"
        >

        </IconButton>
      ) }
      <Logo />

      { isWideVersion && <SeachBox />}

      <Flex align="center" ml="auto">
        <NotificationNav/>

        <Profile showPropileData={isWideVersion}/>
      </Flex>
    </Flex>
  )
}

//variant="unstyled" sem borde e backgroud
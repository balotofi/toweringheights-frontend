import {
    Box,
    Flex,
    Text,
    Icon,
    useDisclosure,
    IconButton,
    Collapse
} from "@chakra-ui/react"
import { FaBars } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

const Nav = () => {

    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box>
            <Box 
                maxH='3rem' 
                mt='2.5rem' 
                position='sticky' 
                top='0' 
                zIndex='9999' 
                bg='brand.300' 
                boxShadow={'0 3px rgb(11 99 221 / 54%)'} >
                <Flex align='center' display={{ base: 'flex', md: 'none'}}>
                    <IconButton
                        onClick={onToggle} 
                        icon={isOpen ? <IoMdClose color='white' fontSize='1.5rem' /> : <FaBars color='white' />}  
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                    <Text fontSize='lg' color='white' lineHeight={5}>MENU</Text>
                </Flex>

                <Flex display={{base: 'none', md: 'flex'}}>
                    <DesktopNav />
                </Flex>

            </Box>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    )
}

export default Nav
import {
    Box,
    Flex,
    Text,
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
        <Box position='sticky' top='0' zIndex='9999' mt='2.5rem'>
            <Box 
                h={{ base: '2.8rem', md: '4rem', xl: '4.5rem'}} 
                display={'flex'}
                alignItems='center' 
                bg='brand.300' 
                boxShadow={'0 5px 5px rgb(8 33 68 / 54%)'} >
                <Flex align='center' display={{ base: 'flex', md: 'none'}}>
                    <IconButton
                        onClick={onToggle} 
                        icon={isOpen ? <IoMdClose color='white' fontSize='1.5rem' /> : <FaBars color='white' />}  
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                    <Text fontSize='lg' color='white' lineHeight={5}>MENU</Text>
                </Flex>

                <Flex display={{base: 'none', md: 'flex'}} align={'center'} w={'100%'} justify={'center'}>
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
import {
    Box,
    Flex,
    Text,
    Icon
} from "@chakra-ui/react"
import { FaBars } from "react-icons/fa"

const Nav = () => {

    return (
        <Box maxH='3rem' mt='2.5rem' position='sticky' top='0' z-index='1' bg='brand.300' >
            <Flex align='center' p='1rem'>
                <Icon as={FaBars} color='white' />
                <Text fontSize='lg' color='white' pl='0.5rem' lineHeight={5}>MENU</Text>
            </Flex>
        </Box>
    )
}

export default Nav
import {
    Box,
    Flex,
    Text,
    Icon
} from "@chakra-ui/react"
import { FaBars } from "react-icons/fa"

const Nav = () => {
    return (
        <Box maxH='3rem' mt='2.5rem'>
            <Flex position='sticky' top='0' bg='brand.300' align='center' p='0.5rem'>
                <Icon as={FaBars} color='white' />
                <Text fontSize='lg' color='white' pl='0.3rem' lineHeight={5}>MENU</Text>
            </Flex>
        </Box>
    )
}

export default Nav
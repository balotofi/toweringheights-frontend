import {
    Box,
    Flex,
    Text,
    Icon
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa"

const Nav = () => {

    // const [sticky, setSticky] = useState(false)

    // useEffect(() => {
    //     const stickyFunction = () => {
    //         setSticky(window.pageYOffset === 0 ? true : false)
    //         console.log(sticky, 'offset')
    //     }
    //     return () => {}
    // }, [])

    return (
        <Box maxH='3rem' mt='2.5rem' position='sticky' top='0' >
            <Flex bg='brand.300' align='center' p='0.5rem 1rem'>
                <Icon as={FaBars} color='white' />
                <Text fontSize='lg' color='white' pl='0.5rem' lineHeight={5}>MENU</Text>
            </Flex>
        </Box>
    )
}

export default Nav
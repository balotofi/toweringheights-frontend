import {
    Flex,
    Heading,
    Stack,
} from "@chakra-ui/react"
import Image from "next/image"
import SchoolLogo from "../../assets/logo_ths.jpg"
import SearchBar from "../SearchBar"

const LogoNavbar = () => {
    return (
        <Flex maxH='14.625rem' align='center' my={4} justify='space-around' mx={3}>
            <Stack direction={{base: 'column', md: 'row'}} align='center' gap={{md: 3.5}}>
                <Image
                    height={93}
                    width={105}
                    src={SchoolLogo}
                    alt='School Logo'
                    loading="eager"
                />
                <Heading variant='logoHeading' fontSize= {{base: '1.4rem', md: '1.6rem'}}>
                    Towering Heights School
                </Heading>
            </Stack>

            <SearchBar />
        </Flex>
    )
}

export default LogoNavbar
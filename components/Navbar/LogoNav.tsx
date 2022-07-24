import {
    Flex,
    Image,
    Heading,
} from "@chakra-ui/react"

const LogoNav = () => {
    return (
        <Flex maxH='14.625rem' flexDirection='column' align='center' top='25px' position='relative'>
            <Image
                borderRadius='full'
                height='93px'
                width='105px'
                src='/assets/logo_ths.jpg'
                alt='School Logo'
            />
            <Heading 
                as='h1' 
                color='brand.300' 
                fontSize='2xl'
                fontWeight='bold'
                lineHeight={10}
            >Towering Heights School</Heading>
        </Flex>
    )
}

export default LogoNav
import {
    Flex,
    Image,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
} from "@chakra-ui/react"
import { BiSearchAlt } from "react-icons/bi"

const LogoNav = () => {
    return (
        <Flex maxH='14.625rem' align='center' mt='25px' justify='space-around' mx={'3'}>
            <Stack direction={{base: 'column', md: 'row'}} align='center' gap={{md: '15px'}}>
                <Image
                    borderRadius='full'
                    height={'93px'}
                    width={'105px'}
                    src='/assets/logo_ths.jpg'
                    alt='School Logo'
                />
                <Heading 
                    as='h1' 
                    color='brand.300' 
                    fontSize={{base: '2xl', md: '2xl'}}
                    fontWeight='bold'
                    lineHeight={10}
                >
                    Towering Heights School
                </Heading>
            </Stack>

            <InputGroup display={{base: 'none', md: 'flex'}} width={'35%'}>
                <InputLeftElement 
                    color= 'brand.400'
                    m={{lg: '0.3rem'}}
                    children={<BiSearchAlt />}
                />
                <Input 
                    variant='filled'
                    size='md'
                    borderRadius={'2xl'}
                    color='font.300'
                    fontSize='sm'
                    type='text' 
                    placeholder='Search' 
                    _placeholder={{
                        color: 'brand.400',
                        fontSize: 'sm'
                    }}
                />
            </InputGroup>
        </Flex>
    )
}

export default LogoNav